# BASE DE CONHECIMENTO HYTALE (documento VIVO)

> **Pra que serve:** memória de longo prazo do projeto Orbis Hytale. TODO comentário de engajamento e todo post nasce consultando esta base. Sem base = comentário raso.
> **Protocolo de atualização (OBRIGATÓRIO):** toda varredura que descobrir fato novo (blog, tweet de dev, patch, sugestão nova em alta, drama de comunidade) ADICIONA o fato na seção certa com `(fonte, data)`. Nunca apagar fato antigo, só marcar `[SUPERADO: ...]` se mudou. Última atualização geral: **2026-07-18 (varredura noite: Jeb/Simon + Aumo/Runeteria)**.

---

## 1. História do jogo (a linha do tempo que todo fã sente)

- 2015~2018: Hypixel Studios nasce do time do servidor Hypixel; anúncio do Hytale em dez/2018 (trailer com dezenas de milhões de views).
- 2020: Riot Games compra a Hypixel Studios.
- 2019-2024: desenvolvimento longo, troca de engine (legacy C#/Java → C++ cross-platform), comunidade esperando anos.
- **23/06/2025: Riot CANCELA o Hytale e anuncia fechamento do estúdio.** O dia mais triste da comunidade.
- **17/11/2025: "Hytale is Saved"** — Simon Collins-Laflamme e Philippe Touchette (cofundadores) RECOMPRAM o jogo da Riot ("fizemos uma oferta sem ver o estado completo do projeto"), financiam do próprio bolso por 10 ANOS, sem investidor e sem publisher. Kevin Carstens = líder técnico, Patrick Derbic = gestão. 30+ devs recontratados no início (~50 no lançamento, 100+ em jul/2026).
- Decisão técnica do renascimento: voltar pra **engine legacy (C#/Java)** em vez da C++ pra colocar o jogo nas mãos dos jogadores logo.
- **13/12/2025:** pré-venda abre. **13/01/2026: EARLY ACCESS lança** (Windows; Linux/Mac depois; consoles bem depois). Aviso deles: "true early access", bugs e atualização frequente por anos.
- No lançamento: Exploration Mode + Creative Mode + modding. Adventure Mode e minigames oficiais vêm depois (time dedicado de minigames no futuro).
- Jogo vendido no site hytale.com (nosso código de criador BRASIL / HYBR).
- Simon: "o Hytale não tem investidor externo" (resposta no X, jul/2026). Contratações jul/2026: som + engine (slikey), designers de combate e de mundo (Simon).

## 2. Estado atual (jul/2026)

- Branch **pre-release** com patch semanal ("Update 6 Parte N"). Parte 8 (17/07/2026): colisão dura em entidades → traps, obstáculos, desafios de parkour; contribuidores da comunidade agradecidos (MelodicAlbuild, Eearslya) — eles ACEITAM contribuição externa no código.
- Server source liberado (~fev/2026, prometido 1-2 meses pós-launch, não ofuscado) → plugins Java da comunidade explodiram.
- **17/07/2026: blog "First Look: Chapter 1 and more"** — o maior blog da história do jogo (ver seção 4).
- Time: 100+ pessoas e contratando. Simon tirou o 1º fim de semana de folga pós-blog; planejamento do Capítulo 2 começou na semana de 20/07.
- **18/07/2026 — posicionamento (Simon, x.com/Simon_Hypixel/status/2078502080109834575):** o Jeb (Jens Bergensten, chefe criativo do Minecraft/Mojang) testou o Hytale há ~6 meses (época do EA) e disse que queria o jogo "mais diferente do Minecraft". Simon concordou publicamente ("ele estava certo, e eu disse isso na época; as features que nos tornam únicos ainda não estavam no jogo") e apontou que o blog do Cap 1 mostra o rumo: dungeons feitas à mão com boss de várias fases, habilidades de combate, runeforging, world events, companions no loop de craft. Frase-chave: "queremos ser um RPG mais profundo, uma identidade de aventura mais forte... a gente só por acaso é um jogo de bloco, e estamos só começando". NUNCA usar isso pra COMPARAR os jogos (regra); o ângulo é a identidade própria do Hytale.
- **18/07/2026 — modding rápido (Aumo/Runeteria, x.com/AumoNamoly/status/2078590684018401653):** Aumo (@AumoNamoly) mostrou vídeo do combate de magos do projeto Runeteria, com habilidades de runa em tempo real; Simon respondeu elogiando ("meu cara vai fazer todas as habilidades das runas antes de a gente chegar lá, trabalho insano"). Prova da velocidade do modding server-side e do estúdio de olho na comunidade.
- **18/07/2026 — Simon conta que o JEB (Jens Bergensten, chefe criativo do Minecraft/Mojang) testou o Hytale ~6 meses atrás** (época do lançamento do EA) e disse "I'd like it to be more different to Minecraft". Simon concordou ("He was right, and I said it then too"); as features únicas ainda não estavam no jogo. Direção declarada: "deeper RPG, stronger adventure identity... We just happen to be a block game, and we are just getting started". DETALHES NOVOS confirmados nesse tweet: dungeons feitas à mão com boss de MÚLTIPLAS FASES, world events, companions participando do loop de craft. (x.com/Simon_Hypixel/status/2078502080109834575)

- **19/07/2026 — respostas do Simon (x.com/Simon_Hypixel/with_replies), MUITA coisa nova:**
  - **Capítulo 1 com ETA de 2 a 3 meses** ("Aguarde pelo capítulo 1, ETA de 2 a 3 meses"). Fato mais importante da data.
  - **Modo difícil OPCIONAL em muitos chefes**, pra pegar "aquela vibe souls" (2 mil curtidas, 48 mil views). Referência citada por ele: **Malenia de Elden Ring** ("extremamente difícil e claramente opcional é divertido").
  - **Luta épica contra chefe AÉREO planejada** ("estamos planejando ter uma épica luta contra o chefe aéreo, sim").
  - **Masmorras**: no início lineares e artesanais de A a Z; depois querem **aleatoriedade no layout**. Frase dele: sair de "quero jogar A masmorra dos goblins" pra "quero jogar UMA masmorra dos goblins". Artesanal garante qualidade mas reduz rejogabilidade.
  - **Inspirações declaradas de RPG**: World of Warcraft (joga desde 2004), FF14, EverQuest, RuneScape, Lineage, Guild Wars, WildStar (ataques bem claros), SWTOR. Também citou Counter Strike (fazia mapas) e Diablo 2. ATENÇÃO: são as inspirações DELE, reportar como fala dele; nunca virar comparação nossa.
  - **VAGA ABERTA**: quem quiser trabalhar com chefes/masmorras deve se candidatar a **NPC Developer**, título que vai virar **Tech Designer** (249 curtidas).
  - **VR não é prioridade** ("gostaria que avançássemos mais com a tecnologia de renderização antes de pensar nisso").
  - Física entrando aos poucos; ele pediu pra imaginar o jogo em 2+ anos.
- **19/07/2026 — PokéFind (@PokeFindMC, rede de Pokémon, bio "Coming soon to Hytale"):** montarias de Pokémon no Hytale, com vídeo voando de Charizard (x.com/PokeFindMC/status/2057554083460862181); e batalhas de Pokémon melhoradas com troca de ângulo de câmera e movimentação livre durante o combate (x.com/PokeFindMC/status/2052411202718830807). O Luis pediu post citando que o **servidor Eldryn terá um server de Pokémon quando o mod sair** (exceção autorizada à regra de não citar o servidor).

- **19/07/2026 — correção de SEGURANÇA no cliente** (nova entrada nas notas da pré-release, mesma URL do Update 6). Item literal e único do dia: "Fixed a security issue within the Hytale client, more details to follow. (No evidence of active exploitation was found)". Efeito prático, servidores saíram do ar e precisaram atualizar por causa da atualização do cliente. Detalhe interessante, dois dias antes (17/07) eles lançaram a **Bastion Cape**, capa exclusiva pra quem ativa autenticação de dois fatores na conta. NUNCA especular qual era a falha, o estúdio não divulgou.

- **20/07/2026 — GOBLIN BREACHES no Capítulo 1** (Simon, x.com/Simon_Hypixel/status/2079222604603195800, vídeo 0:50, 2 mil curtidas). Fenda goblin abre no mundo do jogador (rodando World Gen V1), um portal leva a um mundo goblin rodando **World Gen V2**, e existe uma dungeon goblin em **mundo instanciado próprio**. Motivo declarado, o jogo ainda está no V1, então portal é o jeito de entregar conteúdo novo **sem obrigar a regenerar o mundo nem caçar chunk novo** (mesma ideia do Ancient Gateway). Breach inverte a lógica, o conteúdo vai até o jogador. Durante o Early Access vão usar MUITO portal; depois do V2 virar o mundo real, vão pegar leve. Frase literal: "Hytale should feel like an open world, not a portal game".
- **20/07/2026 — Alex (@MelodicAlbuild) contratado como Engine Developer** (x.com/MelodicAlbuild/status/2079242787828965831, 250 curtidas; bio dele já diz "Engine Developer @Hytale"; Simon respondeu "Welcome to the team! LET'S GO!"). Fecha o ciclo de dois fatos que já tínhamos: ele é um dos contribuidores creditados nas patch notes (MelodicAlbuild e Eearslya) e é **uma das duas contratações anunciadas pelo slikey em 17/07** (Sound Design e Engine). História forte, voluntário da comunidade virou funcionário.

## 3. Lore e mundo (blog oficial de lore, jan/2026 + blogs clássicos 2018-2019)

- Mundo = **Orbis**. **Gaia** = avatar/espírito de Orbis. **Varyn** = antagonista ligado ao Void/corrupção.
- **Tessa e Kyros**: personagens clássicos que VÃO VOLTAR (confirmado no blog de lore).
- **Cursebreaker**: conceito misterioso ligado à transição do WorldGen V1 → V2 (o "mundo velho" dá lugar ao novo). Ninguém sabe exatamente o que é — ótimo pra teoria.
- **Echoes of Orbis** = nome do Exploration Mode. Frase oficial: o lore "só cristaliza em canon quando você entra no Echoes of Orbis".
- **Alterverses**: universos alternativos, planejados pra voltar (conteúdo de longo prazo). Blog de worldgen também fala em "mundos alternativos, novas dimensões".
- Filosofia oficial de lore: "lore não deve ser um conjunto rígido de regras, e sim inspiração que alimenta criatividade"; narrativa "arqueológica" (você descobre explorando ruínas/objetos); mudanças nunca arbitrárias.
- **Zonas** (nomes atuais oficiais): **Emerald Wilds** (floresta; Kweebecs e Trorks), **Howling Sands** (deserto; Scaraks), **Whisperfrost Frontier** (gelada; vilas Feran nos blogs antigos da "Zone 3"), Devastated Lands (vulcânica/corrompida; Outlanders — nome antigo da Zone 4, conferir se mantém). Bioma citado: Deeproot (subterrâneo).
- Facções clássicas dos blogs 2018-2019: **Kweebec** (povo-árvore, ciclo de seiva), **Trork** (brutamontes de acampamento de guerra), **Feran** (felinos da zona gelada), **Scarak** (insetos de colmeia), **Outlander** (cultistas de Varyn, revelados jul/2019), esqueletos/mortos-vivos do Void. **Scaraks tiveram redesign visual** (jan/2026) e os designs antigos foram integrados ao lore.
- **Goblins**: a facção do Capítulo 1 (elites com personalidade própria, gadgets, cosméticos goblin de recompensa).

## 4. Capítulo 1 (blog 17/07/2026) — o assunto quente

- Facção goblin com elites nomeadas/personalidade; Templo Esquecido (dungeon).
- **Barcos** (a sugestão nº1 da comunidade virando jogo).
- Carregar objetos no braço (baú, BARRIL EXPLOSIVO) — física de carry.
- **Companions** ajudando em casa/tarefas (chegam de fato no Capítulo 2).
- Modo **Hardcore** (permadeath).
- **Minigames com código aberto** pra comunidade.
- **Mod browser** dentro do jogo.
- **Spatial music**: bloco emite música do ponto onde está, abafa atrás de parede (oclusão de áudio).
- Física de jogador em **plataformas móveis** (base de parkour; já na pre-release de testes).
- **Vitrais/transparência real** no motor (agendado pro Cap 1, tech pode vir antes).
- **Cubic chunks**: altura e profundidade INFINITAS ("3D space exploration or worlds with endless caves").
- **WorldGen V2** + nuvens volumétricas; "dobramos o time de level design trabalhando no worldgen".
- Skins/cosméticos novos (gótico, punk, praia, vintage, moletom HY); Avatar Creator ganha mãos detalhadas + cílios.
- Música nova da OST: Whisperfrost Frontiers.
- Simon nas respostas: **runa de SUPORTE confirmada** (1 no Cap 1, "não 100% certo ainda"), **modifier runes** mudam como a habilidade se comporta, cuidado com interação movimento/lifeskill virar pick padrão.
- slikey (diretor técnico): meta do modding = **servidores MMORPG estilo EVE Online com exploração espacial**; "o blog mostra progresso real nessa direção".

## 5. Sistemas e tech (pra comentar com propriedade)

- **WorldGen**: V1 (2016-2020, protótipo, continua funcionando nos mundos existentes) → V2 (2021+, node editor visual SEM código, live-reload, heuristics visuais tipo "árvore cinza = caverna com recurso embaixo", multithread automático). Orbis "content-complete" relança com V2. Futuro: rios procedurais, cachoeiras, arquitetura procedural (dungeons/ruínas). **Plano: contratar 15+ World Designers DA COMUNIDADE pós-EA.** Biomas de Orbis serão compartilhados com a comunidade.
- **Modding (3 pilares oficiais)**: "server-side first" (mod instala no servidor, NADA no cliente), "one community, one client" (zero fragmentação, entra em qualquer server sem baixar nada), "modding for longevity". SEM Lua/script de texto — futuro é **visual scripting estilo Blueprints** (sandboxed). Hoje: plugins Java (.jar), data assets JSON, arte via Blockbench (ferramenta oficial), prefabs. Distribuição/empacotamento de mods = admitido como ponto fraco e "prioridade máxima". Docs em GitBook, incompletas.
- **NPCs**: sistema de **roles + instruction lists** (JSON, sem programar) + Combat Action Evaluator (pesos/condições, combate "fuzzy"). 150+ tipos configuráveis. Exemplos oficiais: ovelha vira predador trocando Template_Animal_Neutral → Template_Predator (e pode carregar arma!), Skeleton Praetorian (bloqueia/invoca com HP baixo), urso com sensores de audição/visão, Cave Raptors. Limitações admitidas: pathfinding lento, aquático não sai da água, NPC não quebra bloco.
- **Rede de servidores 1ª parte** (futuro): minigames clássicos estilo rede Hypixel, código/assets parcial ou totalmente liberados, "objetivo NÃO é dominar o cenário de servidores".
- Servidor: lista oficial de servidores existe (blog abr/2026). Criadores third-party fortes no cenário BR/global.

## 6. Voz da comunidade (o que o povo pede/fala — combustível de engajamento)

**Sugestões oficiais (hytale.com/suggestions, votos em 18/07/2026):**
1. **Barcos — 8116 votos — PLANNED** (e o Cap 1 mostrou! prova de que eles LEEM a página)
2. Sistema de pesca — 5600 — Open (aposta óbvia de próximo passo com barcos)
3. Slab stacking (2 slabs diferentes no mesmo bloco) — 4454
4. **Automação** (colheita, engrenagem, logic) — 4431
5. Clima afetando gameplay (chuva enche caldeirão, vento empurra projétil/glider) — 3628
6. Skill tree / leveling simples — 3118
7. Color wheel no avatar — 2075; Tooltips de arma — 1890; Rituais de magia — 1587; Ver o próprio corpo olhando pra baixo — 1297; Cosméticos demoníacos — 1099; Canhoto — 973; Grass slabs — 887; RePlay (cinematics) — 625; Entity Tool no survival — 561
- Completed: contador de horas no launcher, /locate biome, gift codes, categoria de modding.

**Reddit r/hytale (top do mês, jul/2026):** hype do blog do Cap 1; mod Combat Revolution (u/TheCyberSlade); acrópole de Orbis (build); casa de sapê feita com Entity Tool; mod de Ben 10; **mod/injector de VR**; drama "Histatu roubou meu mod Endless Leveling" (u/Airijko, servidor #1); "quem disse que Hytale não ia ter progressão de nível?"; discussão Mojang layoffs (NÃO usar pra comparar, ver regra).

## 7. Regras de USO desta base no engajamento

- **Voz de AUTORIDADE.** O Luis é a página de Hytale mais antiga do BR, em tese sabe de tudo. Engajamento = TAKE inteligente de quem domina o assunto (observação afiada, leitura de lore, previsão fundamentada, defesa com base no histórico), NUNCA pergunta simples de iniciante ("prefere A ou B?", "o que fariam?"). Pergunta fácil faz a página parecer que não conhece o jogo.
- Comentário SEMPRE parte de fato daqui (ou da varredura do dia) + leitura/posição própria. Fato errado = fake news = queima a página.
- **Sugestões (seção 6) = só referência**, não o tema do engajamento. Servem pra sentir o que a comunidade pensa e virar pauta de NOTÍCIA quando mudam de status, não pra girar comentário em torno de "a sugestão mais votada".
- **NUNCA comparar Hytale com jogos parecidos** (Minecraft, clones voxel, sandbox rivais) — a comunidade odeia e pega mal. Nem "melhor que", nem "tipo o". Referência de jogo de OUTRO gênero pode, com moderação, como inspiração ("estilo EVE Online" ok porque o PRÓPRIO slikey falou).
- Não vazar termo interno desta base como se fosse oficial em português — traduzir natural (ex.: "cubic chunks" pode falar "altura infinita").
- Sugestão da comunidade é SUGESTÃO, nunca apresentar como recurso confirmado. "Planned" = planejado pelo estúdio (pode falar que tá planejado).
- Fatos com `[SUPERADO]` não usar. Fatos incertos marcados com "conferir" = verificar antes de postar.
