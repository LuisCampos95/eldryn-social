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
1. **Manchete em CAPS** com o fato concreto.
2. **UM parágrafo curto** (1 a 2 frases) só com o que aconteceu. Acabou. Não explicar o significado, não projetar futuro, não comemorar.
3. Crédito (🎥/📷 + @user ou u/user), se houver.
4. Código de criador.
5. **Hashtags POR ÚLTIMO**, sempre as QUATRO (ordem do Luis, 19/07/2026): `#Hytale #HytaleBrasil #HytaleGame #HytaleNews`. Vale pra Twitter, Facebook e Instagram. (ENGAJAMENTO é exceção, fecha só com `#Hytale` pra parecer comentário de gente de verdade.)

**Exceção:** RESUMÃO (várias falas do Simon) usa lista de 🔹 com um fato por linha, mesma regra de secura, e também fecha com código e depois hashtags.

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
1. **Site (blog oficial)** → posts completos, informativos, cobertura de notícia (o padrão já documentado abaixo: manchete, conteúdo denso, mídia, código de criador).
2. **Reddit** → resumo das melhores DISCUSSÕES/criações da comunidade (régua de upvotes, crédito ao autor).
3. **Twitter (ENGAJAMENTO)** → comentários ORIGINAIS de fã, gerados pelo generator de engajamento abaixo. NÃO é resumo de notícia.

## 💬 GENERATOR DE ENGAJAMENTO (voz de AUTORIDADE, não fã iniciante)
É a aba que pode fazer a página crescer de verdade e virar referência. Capricho máximo.

**QUEM ESTÁ FALANDO (o mais importante):** o Luis é a **página de Hytale mais antiga do Brasil**. Em tese ele SABE DE TUDO sobre o jogo (história desde o trailer de 2018, cancelamento e renascimento, lore, tech, decisões de engine, falas dos devs). O comentário tem que soar como alguém que domina o assunto e solta um TAKE INTELIGENTE, não como novato curioso. É essa autoridade que faz o Simon e os hardcore responderem.

**FALAR COMO BRASILEIRO DE VERDADE (correção do Luis, 19/07/2026).** Tem que ser ESPECIALISTA em Hytale MAS falando como o povo fala. O erro que ele flagrou foi eu escrever texto de revista//colunista.

Frase que ele reprovou, com o motivo:
> "O modding no servidor do Hytale já **mostra a que veio**. (...) **A cena** não espera o jogo ficar pronto pra criar coisa séria."
> *"mostra a que veio, ngm fala isso nao"* / *"a cena nao espera... cena? ninguem fala assim"*

**EXPRESSÕES BANIDAS (ninguém fala isso no Twitter BR):** "mostra a que veio", "a cena" (no sentido de comunidade/mercado), "minha leitura é que", "sequer", "grau de abertura que não se vê no mercado", "uma leva de", "prova viva", "vale ressaltar", "é subestimado" em tom de crítico, qualquer construção de análise formal.

**COMO FALAR (natural):** "o que eu mais gosto é que...", "muita gente não sabe, mas...", "reparei que...", "pra mim...", "achei muito bom...", "quem já penou com X sabe o tamanho disso", "vai ter servidor muito doido", "a galera já tá fazendo", "prefiro mil vezes X do que Y", "tá", "pra", "vc", "tão", "tipo o fulano". Frase curta e direta. Se você não falaria isso em voz alta pro amigo, reescreve.

**PROIBIDO deixar pergunta simples/de iniciante em aberto.** Nada de "vocês prefeririam X ou Y?", "o que fariam primeiro?", "como usariam?". Isso faz a página parecer que NÃO conhece o jogo, e é vexame pra quem é referência. O engajamento vem da PROFUNDIDADE do take, não de uma perguntinha fácil.

**PASSO 0 OBRIGATÓRIO: ler `BASE_HYTALE.md`.** Todo comentário nasce de FATO da base (história, lore, sistema, fala de dev, decisão técnica) que só quem acompanha há anos saca. Sem fato profundo por trás = raso = não fazer. No fim de TODA varredura, atualizar a base (protocolo no topo dela).

**O que é um bom take (o alvo):**
- OBSERVAÇÃO afiada que a maioria não percebeu ("o detalhe que passou batido é o companion entrar no loop de craft, não só no combate").
- LEITURA/INTERPRETAÇÃO informada de lore ou design ("minha leitura do Cursebreaker é que ele é o mundo velho virando o novo").
- PREVISÃO fundamentada ("a próxima onda de servidor maluco vem de gente que nunca programou, por causa do NPC em JSON").
- DEFESA/POSIÇÃO de quem entende o histórico ("reclamaram da volta pra engine antiga, mas foi o que botou o jogo na nossa mão em janeiro").
- CONEXÃO com o passado que só um OG faz ("dungeon à mão com boss multi-fase era o coração do trailer de 2018").
O leitor engaja concordando, discordando com argumento, ou completando. Se rolar pergunta, que seja PROVOCAÇÃO inteligente que nem os experts têm resposta óbvia, nunca um menuzinho A/B.

**Sugestões da comunidade = só BASE de referência, NÃO o tema.** A página hytale.com/suggestions serve pra saber o que a comunidade pensa e eventualmente virar pauta de NOTÍCIA (mudança de status). O engajamento NÃO é sobre "a sugestão mais votada" nem fica girando em torno de pedido de recurso.

**Referências e comparações (regra do Luis):** referência de OUTROS jogos com moderação ok, mas **NUNCA comparar o Hytale com jogos semelhantes** (Minecraft, sandbox voxel, rivais), nem "melhor que", nem "tipo o X". Pega muito mal. Jogo de outro gênero como inspiração ok ("estilo EVE Online", o próprio diretor técnico citou).

**Regras do texto:**
- CURTO (≤280) e natural, português de brasileiro que manja. SEM EMOJI. SEM código de criador. SEM cara de release.
- Take INTELIGENTE e que todo mundo entenda (nada hermético demais), mas com substância de quem conhece o jogo a fundo.
- **PALAVRAS BANIDAS (denunciam IA):** hilário, incrível, sensacional, absurdo(a), "de outro nível", "outro patamar", imersão/imersivo, "abre um leque", "o céu é o limite", repertório, cardápio, "no fim das contas", "vale ressaltar", "sem dúvida", "digno de nota", "de tirar o fôlego", "revelou/revelado". Também não citar o servidor Eldryn.
- NÃO inventar recurso: o take parte só do que foi divulgado oficialmente ou do histórico real do jogo.
- Fecha com #Hytale (só essa). Sem travessão (—) e sem dois pontos (:). SÓ TWITTER (meta = "").

**Exemplos (o alvo, voz de autoridade):**
- "Muita gente reclamou quando o Hytale voltou pra engine antiga de C# e Java em vez da nova em C++. Mas foi essa escolha que botou o jogo na nossa mão em janeiro. Perfeição técnica não serve de nada guardada na gaveta por mais três anos. #Hytale"
- "Minha leitura do Cursebreaker é que ele não é vilão nem herói, é o próprio mundo velho virando o novo. O blog de lore falou que o canon só cristaliza quando a gente entra no Echoes of Orbis. A história ainda tá sendo escrita. #Hytale"
- "O sistema de NPC do Hytale é subestimado. Você troca um template em JSON e uma ovelha vira predador que ainda carrega arma, sem escrever código. A próxima leva de servidor maluco vem de gente que nunca programou na vida. #Hytale"

No card, título começa com "[ENGAJAMENTO]"; resumo explica o ângulo/fato que sustenta o take.

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
