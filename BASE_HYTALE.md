# BASE DE CONHECIMENTO HYTALE (documento VIVO)

> **Pra que serve:** memória de longo prazo do projeto Orbis Hytale. TODO comentário de engajamento e todo post nasce consultando esta base. Sem base = comentário raso.
> **Protocolo de atualização (OBRIGATÓRIO):** toda varredura que descobrir fato novo (blog, tweet de dev, patch, sugestão nova em alta, drama de comunidade) ADICIONA o fato na seção certa com `(fonte, data)`. Nunca apagar fato antigo, só marcar `[SUPERADO: ...]` se mudou. Última atualização geral: **2026-07-18**.

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

- Comentário SEMPRE parte de fato daqui (ou da varredura do dia) + opinião/gancho pessoal. Fato errado = fake news = queima a página.
- **NUNCA comparar Hytale com jogos parecidos** (Minecraft, clones voxel, sandbox rivais) — a comunidade odeia e pega mal. Nem "melhor que", nem "tipo o". Referência de jogo de OUTRO gênero pode, com moderação, como inspiração ("estilo EVE Online" ok porque o PRÓPRIO slikey falou).
- Não vazar termo interno desta base como se fosse oficial em português — traduzir natural (ex.: "cubic chunks" pode falar "altura infinita").
- Sugestão da comunidade é SUGESTÃO, nunca apresentar como recurso confirmado. "Planned" = planejado pelo estúdio (pode falar que tá planejado).
- Fatos com `[SUPERADO]` não usar. Fatos incertos marcados com "conferir" = verificar antes de postar.
