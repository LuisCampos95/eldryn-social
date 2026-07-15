# Guia de estilo — posts Eldryn/Orbis Hytale

Estilo baseado em @OrbisHytale (página do Luis). Referências de formato (NUNCA copiar texto delas): @CentralHytaleBR e @HytaleAlerts.

## ANTI-PLÁGIO — medo número 1 do Luis
Ser acusado de plágio destruiria a página. Regras absolutas:
- NUNCA copiar frase, estrutura de texto ou tradução direta de outra página de notícias (@HytaleAlerts, @CentralHytaleBR, HytaleNewsYT ou qualquer outra). Elas servem só pra ver O QUE cobrem e o formato geral.
- Todo texto é escrito DO ZERO a partir dos FATOS da fonte primária (blog oficial, tweet do Simon, post original).
- Citação literal só de fala oficial (Simon/estúdio), curta e entre aspas.

O que aprender com o @HytaleAlerts (formato, não texto):
- Patch notes com data na manchete ("Update X Parte Y, 15 de julho") e destaques em lista com 🔸.
- Declaração do Simon = 1 frase de contexto + citação curta traduzida entre aspas.
- Mod/comunidade = o que o mod FAZ em 1 frase + crédito ao autor.

## REGRA NÚMERO 1 — parecer humano
Ninguém pode perceber que os posts foram criados por IA. Isso é inegociável.
- **PROIBIDO travessão (—) e dois pontos (:) em qualquer texto de post.** São os dois maiores denunciadores de texto de IA. Reescreva a frase pra não precisar deles.
- Proibido frase pronta de IA: "Olha isso", "A comunidade não para", "não tem limite", "o limite é a criatividade", "é impressionante o que...", "mostra o poder de...". Se a frase serviria pra qualquer notícia, ela é ruim.
- Escrever como brasileiro escreve no Twitter. Pode "tão" em vez de "estão", "pra", "tá", gíria leve, frase começando com verbo. Frases diretas e curtas.
- Variar a construção entre posts. Dois posts seguidos não podem ter o mesmo esqueleto.

## Quantos posts por varredura
- SEM limite fixo. Traz TODOS os itens que passam nas réguas de qualidade (recência, veracidade, upvotes do reddit, relevância). Pode ser 0, pode ser 5.
- Qualidade acima de quantidade: melhor 1 post forte que 4 fracos. Item duvidoso (comunidade fraca, upvotes baixos) só entra com aviso no resumo pro Luis decidir. Nunca inventa notícia pra "encher".

## Título e gancho — o mais importante
O objetivo é dar CURIOSIDADE de ler. A manchete tem que carregar a informação concreta E o gancho.
- Ruim: "🔥 - A COMUNIDADE NÃO PARA!" (genérico, não diz nada)
- Bom: "🤯 TÃO RECRIANDO O HALO DENTRO DO HYTALE" (a informação É o gancho)
- Sempre que der, usar o detalhe mais concreto e surpreendente da notícia na manchete (número, nome, fato).
- Manchete em CAPS depois do emoji, sem travessão no meio.

Emojis de abertura por tipo: 🚨 notícia quente/saiu agora · 🤩 confirmação boa · ⚙️ feature/técnico · ⏰ data/horário · 🔥 hype · 🧵 thread · 👀 rumor/teaser · 🎮 gameplay · 🤯 surpreendente

## Barra de relevância
- Prioridade máxima: Simon (posts, reposts E RESPOSTAS dele — o Simon solta MUITA notícia respondendo tweet de jogador, essas respostas são ouro e não podem ser ignoradas), conta oficial @Hytale, blog do site.
- Funcionários do estúdio (fontes boas de bastidores, olhar posts E respostas deles também): @slikey, @zeroerrors, @devslashnulled, @itsbuddhacat (BuddhaCat é da equipe de comunidade, posta coisas de comunidade).
- Como caçar respostas na busca web (que indexa mal reply): buscar "Simon_Hypixel" replies, o texto do assunto + Simon, e o with_replies do perfil. Extensão do Chrome logada no X (instalada 2026-07-15): ler x.com/Simon_Hypixel/with_replies direto e cobrir 100%.

## Respostas do Simon/funcionários — como transformar em post
Ler pela extensão do Chrome (mcp__claude-in-chrome): navegar em x.com/Simon_Hypixel/with_replies (e o with_replies dos funcionários), rolar a página e clicar "Show more" pra expandir tweets cortados. O Chrome do Luis fica logado como @eldrynhub. Fallback: WebSearch, que indexa mal reply.
Pra pegar o AVATAR do autor (pra imagem do Meta): na página do tweet, rodar no console/js `[...document.querySelector('article').querySelectorAll('img')].map(i=>i.src).filter(s=>s.includes('profile_images'))` — pega a foto DENTRO do article (é a do autor, não a da conta logada). Trocar `_bigger`/`_normal` por `_400x400` na URL e baixar via curl.
O Simon publica um post e responde MUITOS comentários dele, sobre assuntos variados (às vezes nem ligados ao post original). Ao ler as respostas:
1. SEMPRE ler a pergunta/tweet-pai que provocou a resposta — a resposta sozinha não faz sentido sem o contexto da pergunta. O post tem que dar esse contexto ("Perguntaram pro Simon se X, e ele respondeu que Y").
2. AGRUPAR por assunto. Quando ele responde várias coisas do MESMO tema, juntar tudo num post-catadão único ("Simon respondeu vários fãs e soltou muita coisa sobre o combate 👇" + lista das respostas). Só agrupar o que é do mesmo assunto — não misturar temas diferentes num post só.
3. Quando UMA resposta sozinha já é forte (novidade grande, confirmação importante), vira um post próprio, não precisa juntar com nada.
4. Julgar quando faz sentido cada caso. Resposta banal ("valeu!", "em breve") não vira post.
- Confiabilidade dessas = oficial (é o Simon/estúdio falando).
- No card, marcar no título/resumo quando for "CATADÃO" (post que junta várias respostas) pro Luis saber que veio de várias respostas agrupadas.
- Conteúdo de comunidade (reddit/tweets de terceiros) só quando é forte de verdade. Visualmente impressionante, viral, ou descoberta relevante. "Atualização de mod" sozinho é fraco. O ângulo interessante é o que o projeto É, não o fato de ter atualizado.
- Na dúvida se é fraco, gerar mesmo assim e avisar no resumo ("vale pra dia fraco de notícia"). O Luis decide.

## Recência e veracidade — FAKE NEWS É PROIBIDO
- Só notícia RECENTE (últimos ~7 dias). Nada de 2025 ou meses atrás, mesmo que a busca traga como se fosse novo.
- SEMPRE confirmar a data real antes de gerar (data na página, data do tweet; resultado de busca mente). Exemplo real: busca trouxe "BuddhaCat saiu da Hypixel" como se fosse atual, era de ago/2025, antes do estúdio renascer. Na dúvida sobre a data, NÃO gera.
- **DATAS RELATIVAS: recalcular SEMPRE pra data em que o Luis vai postar (hoje), não pra data da fonte.** Tweet de sexta dizendo "em uma semana" gerado na terça seguinte = "essa semana", NUNCA "semana que vem". "Tomorrow" num tweet de ontem = "hoje". Errar isso é fake news e queima a imagem da página. Se a conta ficar ambígua, usar data absoluta ("até o dia 19") ou vago correto ("nos próximos dias").
- Nunca inventar informação. Rumor/não-oficial fica claro no texto ("👀 rumor", "segundo a comunidade").

## Fonte e créditos
- O campo "fonte" do card é SÓ pro Luis saber de onde veio. O texto do post NÃO cita a fonte.
- Conteúdo de terceiro (reddit/tweet de alguém): crédito OBRIGATÓRIO, mas com regras rígidas de formato:
  - O CORPO do texto NUNCA menciona o username nem a palavra reddit. O corpo conta a história ("Um jogador testou...", "Um criador terminou...").
  - O crédito aparece UMA VEZ SÓ, na ÚLTIMA linha do texto, no formato: `🎥 u/fulano` (🎥 se a mídia é vídeo, 📷 se é foto). SEM a palavra "Créditos", só o emoji e o user. No Meta, essa linha vem ANTES das hashtags.
  - Nunca repetir o nome do autor duas vezes no mesmo texto.
  - Tweet de terceiro: mesma regra, com o @ da pessoa.

## Reddit — régua de upvotes (conteúdo precisa de aceitação comprovada)
- Fonte: top da SEMANA do r/hytale (não do dia). Conteúdo alguns dias mais velho é BOM, prova que a galera gostou.
- **Mínimo 100 upvotes** pra virar rascunho. Entre 50 e 99 só se o dia estiver sem notícia, avisando no resumo. Abaixo de 50, ignora.
- Como pegar o score: baixar a página do post em old.reddit.com e pegar o primeiro `class="score unvoted" title="N"` do HTML (é o score do post; os seguintes são de comentários). Esperar ~10s entre downloads de página (rate limit).
- **Ninguém deve saber que a fonte foi o reddit.** O corpo conta a história como fato ("Um jogador...", "Um criador..."); só a linha de crédito no fim, com emoji + user.
- Sempre anotar o score no resumo do card ("145 upvotes ✓").

## Idioma
- Traduzir TUDO que tem tradução natural em PT-BR. Chapter vira **Capítulo**, update vira **atualização**, release vira **lançamento**.
- Manter no original SOMENTE nomes próprios e termos consagrados na comunidade: Hytale, Early Access, Orbis, Hypixel, nomes de zonas/itens/mobs, nomes de mods.

## Hashtags — POUCAS
- **Twitter**: 0 ou 1 (#Hytale, e só se couber natural). Nunca lista.
- **Meta (FB+Insta+grupo)**: 2 no máximo, no fim: #Hytale #HytaleBrasil.

## Mídia — OBRIGATÓRIO em todo rascunho
O Luis NUNCA posta só texto. Todo item precisa de mídia concreta:
- **tweet**: URL exata + tweetId (números no fim da URL). O painel gera botão de quote e RT. Melhor opção quando a fonte é tweet.
- **imagem**: URL direta (og:image do blog, preview do reddit, media do tweet).
- **video**: URL do vídeo/tweet com vídeo.
- **print**: instrução concreta de qual print tirar (último recurso).

## Os 2 destinos (campos do data.js)
- **twitter**: o Luis tem X PREMIUM, limite de 25.000 caracteres. Post normal continua CURTO (até ~280, é questão de estilo e alcance, não de limite). Notícia longa (patch notes) vira UM post único longo com tudo, sem thread — pode chegar PERTO dos 25 mil se tiver informação de verdade pra isso; o X mostra "Mostrar mais" e tá ótimo, é assim que a página dele faz.
- **meta**: UM texto só que o Luis cola no Meta Business Suite e publica de uma vez na página do Facebook, no Instagram E no grupo do Facebook (os 3 recebem o MESMO texto — nunca criar versões separadas). Um pouco mais completo que o do X, tom de página, 2 hashtags no fim. **Limite duro de 2.200 caracteres** (teto do Instagram; o Facebook aguenta mais, mas o texto é um só) — nunca passar disso.
- **Meta EXIGE imagem, e RT/quote não existe no Face/Insta.** A imagem é um PRINT REAL do tweet (NÃO inventar/desenhar card falso — o Luis rejeitou isso). Se o tweet estiver em inglês, no X é só tocar em "Traduzir post"/"Mostrar tradução" que o próprio X traduz mantendo foto, selo e handle reais; aí tira o print. A foto vem natural.
  - Caminho automático (quando dá): ao ler o tweet pela extensão do Chrome, tirar o print da tradução, salvar em `img/<id>.png` no repo e preencher midia.print = "img/<id>.png". O painel mostra o print com botão de baixar.
  - Caminho manual (padrão robusto): sem print salvo, o painel mostra "📸 abrir tweet pra tirar print" + a dica de traduzir antes. O Luis printa no celular em 2 toques (a foto vem certa).
  - NÃO usar mais tweetTextoPt/tweetAvatar/tweetData (eram do card falso, descontinuado). Manter só tweetTexto (referência), tweetAutor, e midia.print quando houver.

## CASO ESPECIAL — post de atualização de versão (patch notes, update novo)
Único caso de texto LONGO. Atualização de versão é muita informação e a página do Luis publica TUDO.
- Listar o MÁXIMO de mudanças possível, uma por linha, com emoji temático no começo de cada linha (⛏️ mineração, 🦕 mobs, 🔧 correções, 🎮 controles, 🌍 mundo...).
- Abertura com manchete forte + linha tipo "O que mudou 👇" (sem dois pontos), aí a lista.
- **twitter**: post ÚNICO com a lista COMPLETA de mudanças, o máximo de informação possível — com muita info pode chegar perto do limite de 25.000 do Premium. Nada de thread, nada de resumir por preguiça.
- **meta**: o máximo de informação que couber em 2.200 caracteres (teto do Instagram). Se a lista completa não couber, priorizar as mudanças maiores e fechar com "notas completas no site" + link.
- Continua valendo tudo do resto do guia (sem travessão, sem dois pontos, só informação da fonte).

## Formato de saída — posts/data.js (painel.html lê daqui)
Adicionar itens no INÍCIO do array `window.ELDRYN_POSTS` em `posts/data.js`, mantendo os existentes. Campos:
```js
{
  id: "AAAA-MM-DD-slug-curto",            // único
  rodada: "AAAA-MM-DD HH:mm",             // hora de Brasília da varredura
  emoji: "🚨",
  titulo: "Título curto e informativo",    // pro card do painel (aqui pode dois pontos/travessão, não é texto de post)
  fonte: "https://...",
  fonteData: "DD/MM/AAAA",
  confiabilidade: "oficial",               // "oficial" | "comunidade"
  resumo: "1-2 frases pro Luis julgar se vale postar.",
  midia: { tipo: "tweet", url: "https://x.com/...", tweetId: "123...",
           tweetTexto: "texto exato original (referência)",
           tweetAutor: "Simon · @Simon_Hypixel",
           print: "img/<id>.png",   // opcional: print real do tweet traduzido, se já capturado
           nota: "..." },
  twitter: "texto pronto",                 // \n pra quebra de linha
  meta: "texto pronto"                     // mesmo texto pros 3 do Meta (página FB + Insta + grupo)
}
```
JavaScript válido, aspas escapadas, quebras como \n. Arquivo corrompido/ausente = recriar com cabeçalho de comentário e array.
