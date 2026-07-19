#!/usr/bin/env node
/**
 * scan_reddit.js — varredura do r/hytale para o painel Orbis Hytale.
 *
 * POR QUE ESTE ARQUIVO EXISTE:
 *  - A API .json do Reddit responde 403 daqui, e o RSS nao traz upvotes.
 *  - Buscar o score post a post gerava HTTP 429 (rate limit).
 *  - A PAGINA DE LISTAGEM do old.reddit traz score + autor + dominio + data de
 *    TODOS os posts numa unica requisicao. Uma request, zero 429.
 *
 * REGUA (medida em 100 posts reais do r/hytale em 19/07/2026):
 *    mediana de upvotes -> IMAGEM 178 | VIDEO 58 | TEXTO 9
 *  Midia e texto vivem em escalas diferentes, entao NAO podem ter o mesmo limite.
 *  A regra antiga (50 pra tudo) descartava 22 posts bons com midia de cada 100.
 *
 * USO:
 *    node scan_reddit.js            # lista o que passa na regua (ignora ja cobertos)
 *    node scan_reddit.js --todos    # mostra tambem os reprovados, com o motivo
 *    node scan_reddit.js --json     # saida JSON pra outro script consumir
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const DIR = __dirname;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const FONTES = [
  'https://old.reddit.com/r/hytale/new/?limit=100',
  'https://old.reddit.com/r/hytale/top/?t=week&limit=100',
];

// ---- REGUA ----
const REGUA = {
  // Midia (video/imagem/galeria/clipe): barra BAIXA de proposito. O filtro de
  // verdade e a qualidade julgada na hora, nao o numero.
  midiaFresca: { horas: 12, min: 5 },   // ainda subindo, da o beneficio da duvida
  midiaNormal: { min: 10 },             // padrao
  midiaVelha: { horas: 48, min: 20 },   // ja teve tempo; se nao subiu, e fraco
  // Texto: barra ALTA. Mediana de texto e 9, ou seja, quase tudo e ruido.
  texto: { min: 60, comentariosMin: 10 },
};

function baixar(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' } }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode + ' em ' + url)); }
      let d = ''; res.setEncoding('utf8');
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

function tipoDe(dominio) {
  if (/^self\./.test(dominio)) return 'TEXTO';
  if (dominio === 'v.redd.it') return 'VIDEO';
  if (dominio === 'i.redd.it') return 'IMAGEM';
  if (/reddit\.com$/.test(dominio)) return 'GALERIA';
  if (/youtu|streamable|medal|imgur|gfycat|redgifs/.test(dominio)) return 'VIDEO-EXT';
  return 'LINK';
}

function parsear(html) {
  const posts = [];
  const blocos = html.split('data-fullname="t3_').slice(1);
  for (const b of blocos) {
    if (/data-promoted="true"/.test(b)) continue; // anuncio
    const pega = (re) => { const m = b.match(re); return m ? m[1] : ''; };
    const id = b.slice(0, b.indexOf('"'));
    const autor = pega(/data-author="([^"]*)"/);
    if (!autor) continue;
    const dominio = pega(/data-domain="([^"]*)"/);
    const perm = pega(/data-permalink="([^"]*)"/);
    const iso = pega(/datetime="([^"]+)"/);
    let titulo = pega(/<a[^>]*class="title[^"]*"[^>]*>([^<]*)</) || pega(/<p class="title">[\s\S]*?>([^<]{5,140})</);
    titulo = titulo.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    posts.push({
      id,
      titulo,
      autor,
      dominio,
      tipo: tipoDe(dominio),
      score: parseInt(pega(/data-score="(\d+)"/) || '0', 10),
      comentarios: parseInt(pega(/data-comments-count="(\d+)"/) || '0', 10),
      url: 'https://www.reddit.com' + perm,
      horas: iso ? (Date.now() - new Date(iso).getTime()) / 36e5 : 999,
    });
  }
  return posts;
}

function avaliar(p) {
  if (p.tipo === 'TEXTO') {
    if (p.score < REGUA.texto.min) return { ok: false, motivo: `texto com ${p.score} upvotes (minimo ${REGUA.texto.min})` };
    if (p.comentarios < REGUA.texto.comentariosMin) return { ok: false, motivo: `texto sem discussao real (${p.comentarios} comentarios)` };
    return { ok: true, faixa: 'TEXTO FORTE' };
  }
  if (p.tipo === 'LINK') return { ok: false, motivo: 'link externo sem midia' };
  // midia
  let min, faixa;
  if (p.horas <= REGUA.midiaFresca.horas) { min = REGUA.midiaFresca.min; faixa = 'MIDIA FRESCA'; }
  else if (p.horas >= REGUA.midiaVelha.horas) { min = REGUA.midiaVelha.min; faixa = 'MIDIA ANTIGA'; }
  else { min = REGUA.midiaNormal.min; faixa = 'MIDIA'; }
  if (p.score < min) return { ok: false, motivo: `${faixa.toLowerCase()} com ${p.score} upvotes (minimo ${min})` };
  return { ok: true, faixa };
}

// prioridade pra decidir o que vira card primeiro
function prioridade(p) {
  let s = p.score;
  if (p.tipo === 'VIDEO' || p.tipo === 'VIDEO-EXT') s *= 2.0;      // mod/criacao funcionando = ouro
  else if (p.tipo === 'IMAGEM' || p.tipo === 'GALERIA') s *= 1.4;
  if (/\bmod\b|plugin|server|servidor/i.test(p.titulo)) s *= 1.3;  // criacao da comunidade
  if (p.horas <= 24) s *= 1.2;                                      // novidade
  return Math.round(s);
}

(async () => {
  const mostrarTodos = process.argv.includes('--todos');
  const comoJson = process.argv.includes('--json');

  let cobertos = new Set();
  try {
    const st = JSON.parse(fs.readFileSync(path.join(DIR, 'state.json'), 'utf8'));
    cobertos = new Set((st.coveredUrls || []).map(u => u.replace(/^https?:\/\/(www\.|old\.)?reddit\.com/, '').replace(/\/$/, '')));
  } catch (e) { /* sem state, segue */ }

  const vistos = new Map();
  for (const url of FONTES) {
    try {
      const html = await baixar(url);
      for (const p of parsear(html)) if (!vistos.has(p.id)) vistos.set(p.id, p);
    } catch (e) { console.error('AVISO, falhou', url, e.message); }
  }

  const posts = [...vistos.values()];
  const jaCoberto = p => cobertos.has(p.url.replace(/^https?:\/\/(www\.|old\.)?reddit\.com/, '').replace(/\/$/, ''));

  const aprovados = [], reprovados = [];
  for (const p of posts) {
    const v = avaliar(p);
    if (jaCoberto(p)) { reprovados.push({ ...p, motivo: 'ja coberto no painel' }); continue; }
    if (v.ok) aprovados.push({ ...p, faixa: v.faixa });
    else reprovados.push({ ...p, motivo: v.motivo });
  }
  aprovados.sort((a, b) => prioridade(b) - prioridade(a));

  if (comoJson) { console.log(JSON.stringify({ aprovados, reprovados }, null, 2)); return; }

  console.log(`\n=== r/hytale: ${posts.length} posts lidos | ${aprovados.length} passaram na regua ===\n`);
  for (const p of aprovados) {
    console.log(`[${String(prioridade(p)).padStart(4)}] ${String(p.score).padStart(4)}up ${String(p.comentarios).padStart(3)}c ${p.tipo.padEnd(9)} ${p.horas.toFixed(0).padStart(3)}h  ${p.titulo.slice(0, 62)}`);
    console.log(`         u/${p.autor}  ${p.url}`);
  }
  if (mostrarTodos) {
    console.log(`\n--- reprovados (${reprovados.length}) ---`);
    for (const p of reprovados) console.log(`  ${String(p.score).padStart(4)}up ${p.tipo.padEnd(9)} ${p.titulo.slice(0, 50)} => ${p.motivo}`);
  }
  console.log('');
})();
