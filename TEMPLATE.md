# Guia de estilo — posts Orbis Hytale

## 🚫 REGRA Nº1 — CURTO E SECO, SEM BABAR OVO (correção do Luis, 19/07/2026)
O erro mais grave que eu venho cometendo é **encher linguiça e babar ovo do jogo**. Post de notícia é INFORMAÇÃO, não torcida.

**PROIBIDO (frases de torcedor que o Luis corta):** "é a comunidade indo na frente e o estúdio de olho", "coisa boa saindo antes mesmo do recurso oficial", "o melhor sinal que a gente podia pedir", "não é sonho solto, é meta declarada", "isso muda tudo", "a ambição sempre foi essa", "prova viva de que...", qualquer parágrafo de conclusão emocional, qualquer "👀" de arremate opinativo repetido.

**ESTRUTURA PADRÃO (exatamente como o Luis reescreveu o post do VR):**
```
🥽 FIZERAM UM MOD DE REALIDADE VIRTUAL PRO HYTALE

Um criador da comunidade lançou o hytaleVRInjector, que coloca o jogo rodando em VR, e mostrou tudo funcionando em vídeo.

🎥 u/Famous-Discussion-77

⭐ Use nosso código de criador BRASIL ou HYBR ao comprar no site do Hytale

#Hytale #HytaleBrasil #HytaleGame #HytaleNews
```
1. **Manchete em CAPS** com o fato concreto. Correção do Luis (21/07/2026): *"os títulos estão muito grandes, o título precisa chamar atenção da galera e ter as infos certas, o resto coloca no texto abaixo"*. E o esclarecimento dele depois: **"não é que não podem ser grandes, podem sim se for necessário, mas você tava criando TODOS extremamente grandes"**.
   - **Padrão = curta e direta** (~40 a 60 caracteres). Manchete longa é EXCEÇÃO, só quando o fato precisa mesmo (ex.: *"⚙️ CHEGOU UM MOD DE AUTOMAÇÃO PRO HYTALE E ELE JÁ FAZ FAZENDA RODAR SOZINHA"*, 75 chars, porque "mod de automação" + "roda sozinha" são as duas infos que fazem clicar).
   - O erro era o VÍCIO, todas gigantes. Varia, a maioria curta e uma ou outra longa quando vale.
   - ❌ "🌌 MOSTRARAM A ARENA FLUTUANDO NO VAZIO QUE VAI ENTRAR NUM MODO ROGUE-LIKE DO HYTALE" (enrolação)
   - ✅ "🌌 ARENA FLUTUANDO NO VAZIO NO HYTALE"
   - Teste, cada palavra da manchete está puxando o clique? Se a palavra só explica, ela é do corpo.
2. **UM parágrafo curto** (1 a 2 frases) só com o que aconteceu. Acabou. Não explicar o significado, não projetar futuro, não comemorar.
3. Crédito (🎥/📷 + @user ou u/user), se houver.
4. Código de criador.
5. **Hashtags POR ÚLTIMO**, sempre as QUATRO (ordem do Luis, 19/07/2026): `#Hytale #HytaleBrasil #HytaleGame #HytaleNews`. Vale pra Twitter, Facebook e Instagram, em TODOS os posts sem exceção.

**Exceção:** RESUMÃO (várias falas do Simon) usa lista de 🔹 com um fato por linha, mesma regra de secura, e também fecha com código e depois hashtags.

**📌 CADA LINHA DO RESUMÃO PRECISA DE CONTEXTO (correção do Luis, 21/07/2026).** Resposta solta não informa nada, porque o leitor não viu a pergunta. Erro real que ele pegou:
> ❌ "🔹 E ele disse que os capítulos do early access podem sumir depois de cumprirem o papel deles, e que se der pra esperar, ele esperaria o Capítulo 3"
> *"esperar o quê? no caso o contexto era esperar pra criar um mundo novo, mas você não colocou, então como quem tá lendo vai saber?"*
> ✅ "🔹 Perguntaram se vale a pena criar um mundo novo agora ou esperar. Ele respondeu que vale jogar os capítulos do early access, porque eles podem sumir depois de cumprirem o papel deles, mas que quem consegue esperar deveria começar o mundo mesmo no Capítulo 3"

Fórmula da linha: **[o que foi perguntado] + [o que ele respondeu]**. Quando a resposta for curta ou for um "sim/não", o contexto é obrigatório, senão a linha não significa nada sozinha. Teste, ler a linha isolada, sem saber do fio. Dá pra entender? Se não, falta contexto.

**🧵 JUNTAR AS FALAS DO SIMON NUM POST SÓ (regra do Luis, 20/07/2026).** Quando o Simon solta várias respostas/tweets no mesmo dia, o certo é UM RESUMÃO com 🔹, e não vários cards separados. Palavras dele: *"é melhor juntar os tweets do simon em um só post do que criar um monte de post sem conteúdo de fato"*. Card fino (uma resposta curta virando post inteiro) compete com os outros e enfraquece a página.
**Quando ainda vale card próprio:** o tweet tem conteúdo que se sustenta sozinho, tipo anúncio de recurso COM VÍDEO e explicação longa (ex.: goblin breaches). Teste, se o post ficaria com uma frase e nada mais, ele é linha de resumão, não é card.

**Teste antes de salvar:** dá pra cortar alguma frase sem perder INFORMAÇÃO? Se dá, corta. Se a frase só serve pra dizer que é legal, corta.

**⏰ NUNCA escrever "hoje", "agora há pouco", "acabou de sair" no texto do post.** O rascunho fica no painel e o Luis pode postar horas ou dias depois, então a data vira mentira sozinha. Já aconteceu, o card do patch de segurança dizia "entrou hoje" e no dia seguinte estava errado. Usar o dia da semana ou a data ("no domingo", "na quinta (17/07)"). "Hoje" só é permitido no TÍTULO do card, que é uso interno do painel.
**Fuso:** carimbo de rodada e cálculo de data SEMPRE via Node (`new Date().toLocaleString('sv-SE', { timeZone: 'America/Sao_Paulo' })`). NÃO usar `TZ='America/Sao_Paulo' date` no bash do Windows, o TZ é ignorado e ele devolve UTC (3h a mais), o que já quase virou erro de data.

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
- SEM LIMITE. NUNCA cortar a quantidade. Se tiver 8 coisas boas, gera 8 posts. Se tiver 2, gera 2. Nunca parar em 3 por parar.

**🔥 O ERRO MAIS GRAVE (Luis, 21/07/2026): PENEIRAR DEMAIS e voltar com 1 post.** *"eu vou postar o quê? você precisa ter capacidade de achar coisas boas... reddit tá cheio de boas coisas, twitter também, e você não traz nada."*
- **CONTEÚDO NÃO EXPIRA.** Build, mod, arte, recriação de personagem, veículo, fazenda, servidor, tudo isso é ótimo pra postar MESMO com dias de idade. NÃO descartar por "é velho" nem por "não é novidade de hoje". A página precisa de conteúdo pra postar, ponto.
- **Não confundir "notícia" com "conteúdo".** Notícia oficial (Simon, blog) é uma fatia. O grosso do que o Luis posta é CRIAÇÃO DA COMUNIDADE, e disso o Reddit e o X estão cheios. Cada build, cada mod, cada arte = um card.
- **A régua é qualidade, não ineditismo.** Só pular meme de espera ("WHERE BLOG POST"), pergunta de meta, reclamação de suporte, hype de blog que já saiu, e comparação com jogo semelhante. Todo o RESTO que for criação de verdade VIRA CARD.
- Rodar `node scan_reddit.js --json` e cardar as criações que ainda não foram cobertas, não só as de hoje. O backlog é ouro.

**⚖️ MAS CURAR POR QUALIDADE, NÃO DESPEJAR VOLUME (correção do Luis, 21/07/2026).** Ele reprovou um lote inteiro de Reddit, *"achei esses posts horríveis, não usei nenhum"*. O erro foi o oposto do anterior, eu enchi de coisa FRACA (primeira construção de novato, depósito de vegetais, build com 24 upvotes). Página grande NÃO posta isso.
- **A barra é "isso impressiona?".** Pergunta antes de cardar, um seguidor pararia o scroll nisso? O Luis postaria com orgulho? Se é morno, NÃO vai.
- **Fonte de qualidade = TOP DO MÊS**, não só o "new". `curl old.reddit.com/r/hytale/top/?t=month` traz as builds e mods que a comunidade elegeu (200+ upvotes). É lá que estão a acrópole de Orbis, o mod Combat Revolution, o Zoro, a calculadora 3D, o chalé com Entity Tool. Preferir SEMPRE o top do mês pra criação.
- **Cortar por engajamento nas builds da comunidade:** mira em 200+ upvotes pra criação de comunidade. Abaixo disso, só se for excepcional de olhar. (Isso é DIFERENTE da régua de descoberta do scan, que é frouxa de propósito; aqui é a régua de CURADORIA, que é dura.)
- Volume vem de ter MUITA coisa boa, não de baixar a barra. Melhor 8 posts que ele posta do que 20 que ele joga fora.
- Traz TODOS os itens que passam nas réguas (recência, veracidade, régua do reddit POR TIPO via `scan_reddit.js`, relevância). Fontes distintas contam separado: cada resposta/assunto do Simon, cada post de reddit forte, cada página nova do site, cada patch = um card.
- Único freio é qualidade real: não inventar notícia pra encher, e item fraco entra com aviso no resumo (o Luis decide). Fora isso, quanto mais conteúdo bom, mais posts.

## Profundidade do texto — NÃO ser raso
O Luis reclamou de post curto/simples demais ("muito simples e ruim"). Todo post (menos tweet de 1 linha muito óbvio) deve CONTAR A HISTÓRIA com contexto e desdobramento, não só anunciar o fato:
- Fato principal + o que isso significa + o que vem depois + detalhe extra que a fonte deu.
- Usar a estrutura de blocos: manchete forte, 1 parágrafo de contexto, e quando fizer sentido uma lista com emoji por linha dos pontos.
- Modelo aprovado pelo Luis (estilo alvo):
  "🚨 SIMON ABRIU O JOGO SOBRE OS PRÓXIMOS PASSOS
  
  O blog com os bastidores do Capítulo 1 já tem data, sai nessa SEXTA (17/07) às 12h no horário de Brasília
  
  Depois disso o Simon vai tirar o primeiro fim de semana de folga desde que recomprou o Hytale, e já na semana que vem começa o planejamento do Capítulo 2 enquanto a equipe segue no Capítulo 1
  
  E o time vai crescer, eles vão atrás de designers de combate e de mundo pra reforçar o estúdio 👀"

## Fuso horário
Simon/estúdio escrevem em "EST". Converter tomando ao pé da letra o que escreveram: 10h EST = 12h de Brasília (2h de diferença). Não assumir horário de verão americano.

## Código de criador — SEMPRE no fim de todo post
Última linha de TODO post (twitter e meta), depois das hashtags no Meta:
`⭐ Use nosso código de criador BRASIL ou HYBR ao comprar no site do Hytale`
Coloca sempre, em todos os posts, sem exceção.

## Título e gancho — o mais importante
O objetivo é dar CURIOSIDADE de ler. A manchete tem que carregar a informação concreta E o gancho.
- Ruim: "🔥 - A COMUNIDADE NÃO PARA!" (genérico, não diz nada)
- **Ruim: "🚨 SAIU O BLOG E A PRIMEIRA BOMBA É PESADA" (hype vazio — QUE bomba? QUAL conteúdo? o Luis rejeitou exatamente isso)**
- Bom: "🤯 TÃO RECRIANDO O HALO DENTRO DO HYTALE" (a informação É o gancho)
- Bom: "🚨 O MOTOR DO HYTALE ESTÁ SENDO RECONSTRUÍDO EM C++" (o ASSUNTO na manchete)
- **REGRA DURA: a manchete SEMPRE diz O ASSUNTO/FATO. Proibido manchete só de hype ("bomba", "surreal", "não vai acreditar") sem a informação. Teste: lendo SÓ a manchete, dá pra saber do que se trata? Se não, refazer.**
- Manchete SEMPRE em CAPS depois do emoji (nunca começar em minúscula), sem travessão no meio.

## OS 3 TIPOS DE CONTEÚDO (separar sempre)
1. **Site (blog oficial)** → posts completos, informativos, cobertura de notícia (manchete, conteúdo denso, mídia, código de criador).
2. **Reddit** → criações e discussões fortes da comunidade (régua por tipo via `scan_reddit.js`, crédito ao autor).
3. **Twitter (devs e comunidade)** → notícia vinda do Simon, dos funcionários e das criações que a galera posta. TUDO é notícia; não existe mais post de opinião/engajamento.

## ❌ PERGUNTAS / ENGAJAMENTO — ENCERRADO DE VEZ (21/07/2026)
Tentei duas vezes (takes de autoridade e depois perguntas pro @misterenders) e o Luis reprovou as duas. NÃO gerar mais nada desse tipo, nem aba, nem card. Foco 100% em NOTÍCIA.

## 🗣️ VOZ DE FÃ nos posts de NOTÍCIA (site/Twitter/membros) — NÃO é jornal
A página é de FÃS do Hytale, não é portal de notícia nem release de imprensa. O corpo do post tem que soar como fã empolgado contando a novidade, não como repórter. Vale pro Twitter E pro Meta.

- **PALAVRAS/FÓRMULAS BANIDAS (cheiro de IA/jornal, NUNCA usar):** "revelou", "revelado(a)", "foi revelado", "segundo ele/ela", "de acordo com", "anunciou oficialmente", "em nota", "a produtora informou". Trocar por fala de fã: "saiu no blog que...", "o Slikey contou que...", "eles mostraram...", "apareceu no blog...", "pelo que deu pra ver...".
- **SEM fecho de publicidade/IA.** Frases-bordão tipo "não é sonho solto, é meta declarada", "o futuro chegou", "prepare-se", "isso muda tudo" — cortar. Terminar com reação real de fã ou pergunta ("já quero ver quem vai encarar 👀", "qual desses você usaria?").
- **Headline (1ª linha em CAPS) pode continuar**, mas com info concreta, não hype vazio. O que muda é o CORPO, que vira humano.
- Teste: leia o corpo. Se parece matéria de site de games, refazer até parecer um fã animado explicando pro amigo.

## 🎮 Contexto do servidor Eldryn (usar com cuidado, NÃO fazer média)
O Luis tem um servidor de Hytale de MINIGAMES chamado **Eldryn**. Isso é pano de fundo, não gancho de propaganda.
- **NÃO citar "Eldryn" nem o servidor diretamente** nos posts, principalmente em assunto que tenha a ver com servidor/minigame (fica cara de autopromoção). O código de criador BRASIL/HYBR no fim já é a única chamada comercial.
- Pode escrever como quem MANJA de servidor/minigame (opinião de dono de servidor experiente), mas sem nome e sem "venha jogar no meu server".

## Tópicos (🔹 ⚔️ 🚪 etc.) — SEMPRE inicial MAIÚSCULA
Todo item de lista/tópico começa com letra maiúscula depois do emoji. Ex certo: "🔹 Vão existir runas de suporte". Ex ERRADO: "🔹 vão existir runas de suporte". Vale pra Twitter e Meta, todos os bullets. EXCEÇÃO: a linha de crédito "🎥 u/fulano" / "📷 u/fulano" mantém o u/ MINÚSCULO (é username do reddit, não vira U/).

## Conteúdo denso — postar por postar NÃO
- Todo post precisa de CONTEÚDO REAL. Puxar o máximo de detalhe concreto DO PRÓPRIO texto-fonte (nada inventado): números, nomes, como funciona, o porquê, o que muda pro jogador.
- Post vago ("ficou lindo, olha") é proibido, mesmo com mídia boa. Se a fonte tem 3 parágrafos sobre o assunto, o post reflete essa riqueza.
- NÃO existe "mídia solta sem conteúdo" (o Luis rejeitou). Toda mídia que valer post ganha post com assunto e contexto de verdade; mídia que não sustenta um post com conteúdo não é postada.

## Ordem de postagem — sempre informar
Quando gerar uma leva de posts (ex: blog grande), cada card recebe a ORDEM de postagem no título ("[1º]", "[2º]"...) e no resumo a sugestão de espaçamento (ex: "1º post, na hora", "3º post, ~1h depois", "sábado de manhã"). O Luis precisa bater o olho e saber a sequência.

Emojis de abertura por tipo: 🚨 notícia quente/saiu agora · 🤩 confirmação boa · ⚙️ feature/técnico · ⏰ data/horário · 🔥 hype · 🧵 thread · 👀 rumor/teaser · 🎮 gameplay · 🤯 surpreendente

## Blog grande / update de peso (playbook reutilizável)
O Capítulo 1 (17/07/2026) já foi coberto e o plano especial foi encerrado. Mas quando cair OUTRO blog grande no futuro (novo capítulo, dev update gigante), reaproveitar a estratégia que deu certo (registrada em `PLANO_CAPITULO1.md`, mantido como referência): ler o blog INTEIRO pelo HTML bruto; extrair mídias (vídeos YouTube = baixar com yt-dlp pra Downloads\EldrynMidias\; imagens = cdn.hytale.com; ZIP oficial se houver); gerar VÁRIOS posts individuais numerados ([1º], [2º]...), 1 mídia por post no Twitter, carrossel no Meta; história/lore primeiro, depois vídeos, sistemas e roadmap; espaçar ao longo de dias; NUNCA thread; cobrir 100% (todo vídeo e imagem com destino).

## Barra de relevância
- **CAPÍTULOS E LORE = PRIORIDADE MÁXIMA.** Qualquer informação sobre os Capítulos do Hytale (Capítulo 1, 2...), a história/lore, o arco Cursebreaker, o que vem em cada capítulo — isso gera MUITO engajamento e conta a história do jogo. Nunca deixar passar. Notícia de capítulo sempre vira post.
- Fontes oficiais top: Simon (posts, reposts E RESPOSTAS dele — solta MUITA notícia respondendo jogador, é ouro), conta @Hytale, blog do site.
- **Funcionários do estúdio — SEMPRE checar TODOS a cada varredura** (posts E respostas), é obrigatório: @slikey (diretor técnico, solta visão de bastidor), @DevSlashNulled (Eli), @ItsBuddhaCat (comunidade). Obs (17/07): @_ZeroErrors saiu do ar / trocou de handle — se reaparecer, incluir. Simon é a fonte nº1. Não pular nenhum sob a desculpa de "só o slikey rendeu"; conferir cada um todo dia.
- **Twitter da comunidade (NOVO): qualquer post BOM sobre Hytale de QUALQUER pessoa serve** — não só funcionários. Fan art impressionante, build, descoberta, teoria de lore, clipe viral, mod, reação relevante. Se é bom e sobre Hytale, pode virar post (com crédito ao @autor no fim). Caçar via WebSearch "Hytale" no X, hashtag #Hytale, e o que aparece nas respostas/quotes dos posts oficiais.

## Conteúdo visual pra RETUITAR (mod, build, plugin, coisa engraçada)
Além de notícia, o Luis quer identificar e postar conteúdo VISUAL bacana da comunidade no Twitter, tipo material de retuíte. Categorias:
- Mod novo (principalmente em VÍDEO mostrando funcionando), plugin, build/construção impressionante, momento engraçado/clipe, timelapse, criação criativa.
- **OBRIGATÓRIO ter mídia: só posts com VÍDEO ou FOTO.** Post só de texto não entra nessa categoria.
- Régua: tem que ser visualmente legal, impressionante ou realmente engraçado. Não é qualquer screenshot aleatório.
- Como vira card: midia tipo "tweet" (vira botão de RT/quote no painel — o X leva a mídia junto no RT). No campo `twitter`, um comentário curto de quote-tweet no estilo da página ("olha que build absurda de Hytale 👇") OU deixar claro no resumo que é pra dar RT puro. Sempre creditar o @autor. No Meta (que não tem RT), baixar o vídeo/foto do tweet e postar com uma legenda curta + crédito ao @autor.
- Buscar (SEMPRE, não só os perfis conhecidos): a busca do X pega conteúdo de qualquer criador. Aba "Mais recentes". Queries que funcionam bem:
  - `Hytale (mod OR build OR plugin OR made) filter:media min_faves:50` (mod/build/plugin com mídia e engajamento)
  - `Hytale filter:media min_faves:50 -from:CentralHytaleBR -from:HytaleAlerts` (geral, excluindo concorrentes)
  - #Hytale, #HytaleModding, #HytaleBuild
  Ignorar os próprios posts do @OrbisHytale que aparecem. Marcar no resumo se é vídeo (🎥) ou foto (📷) e o @autor.
- **NÃO COPIAR (concorrentes que também postam notícia):** @CentralHytaleBR, Comunidade Hytale Brasil, @HytaleAlerts. Pode usar como TERMÔMETRO (ver o que tá repercutindo) mas NUNCA copiar texto, estrutura, tradução ou ângulo deles. Sempre ir na fonte primária e escrever do zero. Se a única fonte de algo for um desses, buscar o tweet/post original que eles citaram e usar esse.
- Como caçar respostas na busca web (que indexa mal reply): "Simon_Hypixel" replies, o assunto + Simon, with_replies do perfil. Extensão do Chrome (instalada 2026-07-15): ler x.com/Simon_Hypixel/with_replies direto.

## Respostas do Simon/funcionários — como transformar em post
Ler pela extensão do Chrome (mcp__claude-in-chrome): navegar em x.com/Simon_Hypixel/with_replies (e o with_replies dos funcionários), rolar a página e clicar "Show more" pra expandir tweets cortados. O Chrome do Luis fica logado como @eldrynhub. Fallback: WebSearch, que indexa mal reply.
Pra pegar o AVATAR do autor (pra imagem do Meta): na página do tweet, rodar no console/js `[...document.querySelector('article').querySelectorAll('img')].map(i=>i.src).filter(s=>s.includes('profile_images'))` — pega a foto DENTRO do article (é a do autor, não a da conta logada). Trocar `_bigger`/`_normal` por `_400x400` na URL e baixar via curl.
O Simon publica um post e responde MUITOS comentários dele, sobre assuntos variados. Ao ler as respostas, o objetivo é EXTRAIR A INFORMAÇÃO, não narrar a conversa.

### FORMATO DO CATADÃO (resumão de informações) — REGRA CRÍTICA
- **NÃO FALAR DAS PESSOAS.** Proibido "um cara perguntou", "outro quis saber", "teve quem cobrou", "perguntaram pra ele". O leitor não quer saber quem perguntou, quer a NOVIDADE. Ler a pergunta só pra ENTENDER o contexto da resposta, mas no texto aparece SÓ o fato/a informação.
- Formato: manchete tipo "👀🔥 RESUMÃO DE INFORMAÇÕES SOBRE [ASSUNTO]!" + lista de tópicos, cada um começando com 🔹, cada tópico uma informação/fato limpo e direto extraído das respostas.
- Cada 🔹 é uma afirmação de fato ("🔹 O time garante que tem muito conteúdo sendo produzido"), NUNCA uma narração de pergunta/resposta.
- Ler TODAS as respostas relevantes do assunto e transformar cada novidade num tópico. Quanto mais info real, melhor.
- Exemplo de tópico CERTO: "🔹 Simon afirma que não há investidor externo no jogo e que ele mesmo tem fundos pra bancar o Hytale se precisar". Exemplo ERRADO: "Um cara perguntou se tinha investidor e o Simon respondeu que não".
- Escrever com wording PRÓPRIO. A estrutura de tópicos é comum, mas o texto é do zero — NUNCA copiar a redação de @CentralHytaleBR/@HytaleAlerts/Comunidade Hytale Brasil.
- Twitter (Premium): pode ser o resumão inteiro num post só. Meta: mesmo resumão (respeitando 2200 chars, priorizar os tópicos mais fortes se estourar).

### RT em resumão — NÃO
Post de RESUMÃO junta VÁRIAS respostas. NUNCA dar RT/quote de um tweet só (o RT não bate com o texto que cobre vários pontos, fica errado). No card do resumão, marcar `midia.semRT: true` — o painel esconde os botões de quote/RT e trata como post normal com print/imagem anexada. A mídia ideal do resumão é um PRINT da declaração mais forte (ou uma imagem editada do Luis).

### Quando agrupar vs post único
1. AGRUPAR por assunto num resumão quando ele responde várias coisas do MESMO tema.
2. UMA resposta sozinha muito forte (novidade grande) pode virar post próprio no formato normal.
3. Resposta banal ("valeu!", "em breve") não vira nada.
- Confiabilidade = oficial (é o Simon/estúdio falando).
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

## 📰 SITE, checar o CONTEÚDO da página de patch, não só URLs novas (erro grave, 23/07/2026)
O Luis pegou que eu perdi a **Parte 9 do Update 6 (Modo Hardcore)** e o detalhe da **falha de segurança**. Motivo do erro, eu só olhava se aparecia URL NOVA em /news, mas **patch notes atualizam na MESMA URL** (`pre-release-patch-notes-update-6`), acumulando entradas por data no topo. Uma Parte nova nunca vai aparecer como URL nova.

**SEMPRE fazer (toda varredura):**
```
curl -s -A "Mozilla/5.0" "https://hytale.com/news/2026/5/pre-release-patch-notes-update-6" | \
  grep -oiE 'Update 6 Part [0-9]+|July [0-9]+, 2026|Hardcore|security'
```
Ler a ENTRADA MAIS NOVA (topo, com a data mais recente) e comparar com `ultimoPatchVisto` no state.json. Se a data/Parte for mais nova, é POST (lista completa, post único longo). Conferir também se surgiu uma URL de patch de update SEGUINTE (update-7 etc).
**E ler o CORPO inteiro**, não só a manchete, uma linha curta pode ser enorme (a de 19/07 era só "Fixed a security issue" e virou a maior história do mês, um RCE de 20 mil dólares de bounty).

## 🐦 VASCULHAR O TWITTER DE VERDADE (pedido do Luis, 21/07/2026)
Só olhar o perfil dos funcionários é POUCO. O X tem muita coisa boa de Hytale e a gente estava perdendo. Usar a BUSCA, na aba **Mais recentes**:

**A busca que mais rende (respostas do Simon):**
`from:Simon_Hypixel filter:replies` (sem `since`, aba Mais recentes, do mais novo pro mais velho)
Isso lista TODAS as respostas dele numa página só, em vez de rolar o perfil infinitamente. Quando ele abre fio de perguntas, saem dezenas de fatos novos de uma vez. **Foi assim que saíram runas, World Gen V2, renderizador, capítulos do EA e o primeiro chefe.** Rodar SEMPRE.

**⚠️ ERRO QUE O LUIS PEGOU (21/07/2026): abandonar o fio cedo.** Eu vi "14h atrás" na primeira resposta e assumi que era tudo velho, entreguei 1 post só. Ele reclamou, com razão. O fio do Simon é CONTÍNUO, ele responde por dias. **SEMPRE rolar o fio inteiro e ABRIR cada resposta com substância pra pegar o contexto (a pergunta que ele respondeu).** Separar o joio, "sure", "yeah", "love the series", "you tell me!" são filler e não viram nada; mas no meio deles vem fato novo real (foi assim que achei o primeiro chefe de 3 fases). Nunca parar na primeira tela.

**⚠️ BUSCA DA COMUNIDADE, VERSÃO CORRIGIDA (21/07/2026).** O Luis teve que postar na mão o Hydekit (@rawafelo) e os testes de física com a Rapier (@LionPaYT) porque a varredura não viu. Diagnóstico dos DOIS erros que eu cometia:

1. **`min_faves` era o pior de todos. NUNCA MAIS USAR.** Criador técnico pequeno posta coisa excelente com 1 ou 2 curtidas. O Moar Furniture chegando em 6 mil downloads tinha 1 curtida. Filtrar por curtida joga fora exatamente o ouro. **A régua é a MINHA cabeça, não o número.**
2. **Buscar só `#HytaleModding` é estreito demais.** O Hydekit não usa hashtag nenhuma, só menciona `@Hytale`. Muita gente marca a conta em vez de usar hashtag.

**A BUSCA CERTA (rodar toda varredura, aba Mais recentes):**
```
(#Hytale OR @Hytale) filter:media -filter:replies -from:Simon_Hypixel -from:Hytale -from:OrbisHytale -from:Comu_HytaleBR -from:CentralHytaleBR -from:HytaleAlerts
```
Sem piso de curtidas, pegando hashtag E menção, e cortando os oficiais (que já vêm por outro caminho) e os concorrentes. Complementar com `#HytaleModding filter:media -filter:replies` e `#HytaleMods filter:media`.

**Rolar várias telas, não só a primeira.** O feed é cronológico, então o bom pode estar na terceira tela. Ignorar VTuber/streamer que só cita o jogo de passagem.
- Por dev: `from:slikey`, `from:DevSlashNulled`, `from:ItsBuddhaCat`, `from:MelodicAlbuild` (contratado 20/07), `from:ZeroErrors`
- Assunto específico: `from:Simon_Hypixel <palavra>` (ex.: worldgen, runes, dungeon)

**Limites conhecidos:** a busca do X NÃO indexa bem resposta muito recente por palavra-chave (procurar "noesis" pode não achar mesmo existindo). Pra assunto quente, usar `filter:replies` + ler a lista, não confiar na palavra-chave.
**Regra:** ignorar posts do próprio @OrbisHytale, dos concorrentes, e conteúdo sem mídia que não traga fato novo. Todo criador citado leva crédito (🎥/📷 + @user).

## Reddit — régua POR TIPO (revisada 19/07/2026, o r/hytale é mina de ouro)

**SEMPRE rodar `node scan_reddit.js` na pasta do projeto.** Ele faz tudo: baixa a listagem (new + top da semana), lê score/autor/tipo/idade de TODOS os posts em UMA requisição, aplica a régua, tira o que já está em coveredUrls e devolve em ordem de prioridade. `--todos` mostra os reprovados com motivo, `--json` dá saída pra script.
(Nada de API .json do reddit, responde 403 daqui. Nada de abrir post por post, dava 429. A listagem resolve os dois.)

**Por que a régua velha de 50 pra tudo estava errada** (medido em 100 posts reais): mediana de upvotes por tipo é **IMAGEM 178, VÍDEO 58, TEXTO 9**. Mídia e texto vivem em escalas diferentes. A régua única descartava **22 posts bons com mídia a cada 100**, tipo "primeiro mod de horror do Hytale", "Heart of Life", "Nether Portal", bosses de servidor.

**Régua nova:**
- **Com mídia** (vídeo, imagem, galeria, clipe): **≥5** se tiver menos de 12h (ainda subindo), **≥10** no geral, **≥20** se já passou de 48h (teve tempo e não subiu = fraco).
- **Só texto**: **≥60 upvotes E ≥10 comentários**. Texto sem discussão real é ruído.
- Vídeo de mod/criação funcionando é o de maior prioridade, o script já pesa isso.

**O número é filtro FROUXO de propósito. O filtro de verdade é a sua cabeça.** Passar na régua não obriga a virar card. PULAR mesmo com upvote alto: meme de espera ("WHERE BLOG POST???"), post de reação sem conteúdo, print de coisa que já cobrimos, drama, pedido de ajuda, e qualquer coisa que compare o Hytale com jogo parecido. ENTRAR: mod/plugin funcionando, build ou arte boa, criação criativa, descoberta técnica, discussão com informação nova.

- **Ninguém deve saber que a fonte foi o reddit.** O corpo conta como fato ("Um jogador...", "Um criador..."); só a linha de crédito no fim, com emoji + user.
- Sempre anotar o score no resumo do card ("145 upvotes ✓").

## Idioma
- Traduzir TUDO que tem tradução natural em PT-BR. Chapter vira **Capítulo**, update vira **atualização**, release vira **lançamento**.
- Manter no original SOMENTE nomes próprios e termos consagrados na comunidade: Hytale, Early Access, Orbis, Hypixel, nomes de zonas/itens/mobs, nomes de mods.

## Hashtags — em TODO post (Twitter também, pedido do Luis 17/07)
- **Twitter**: fecha com `#Hytale #HytaleBrasil`, e a linha ⭐ do código vem DEPOIS delas.
- **Meta (FB+Insta+grupo)**: igual, `#Hytale #HytaleBrasil` no fim (máx 2) e a linha ⭐ depois.
- Nunca lista grande de hashtags; são essas 2 e pronto.

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
