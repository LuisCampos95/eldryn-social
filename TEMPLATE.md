# Guia de estilo — posts Eldryn/Orbis Hytale

Estilo baseado em @OrbisHytale (página do Luis) e @CentralHytaleBR (referência de formato, NÃO copiar texto dele).

## REGRA NÚMERO 1 — parecer humano
Ninguém pode perceber que os posts foram criados por IA. Isso é inegociável.
- **PROIBIDO travessão (—) e dois pontos (:) em qualquer texto de post.** São os dois maiores denunciadores de texto de IA. Reescreva a frase pra não precisar deles.
- Proibido frase pronta de IA: "Olha isso", "A comunidade não para", "não tem limite", "o limite é a criatividade", "é impressionante o que...", "mostra o poder de...". Se a frase serviria pra qualquer notícia, ela é ruim.
- Escrever como brasileiro escreve no Twitter. Pode "tão" em vez de "estão", "pra", "tá", gíria leve, frase começando com verbo. Frases diretas e curtas.
- Variar a construção entre posts. Dois posts seguidos não podem ter o mesmo esqueleto.

## Título e gancho — o mais importante
O objetivo é dar CURIOSIDADE de ler. A manchete tem que carregar a informação concreta E o gancho.
- Ruim: "🔥 - A COMUNIDADE NÃO PARA!" (genérico, não diz nada)
- Bom: "🤯 TÃO RECRIANDO O HALO DENTRO DO HYTALE" (a informação É o gancho)
- Sempre que der, usar o detalhe mais concreto e surpreendente da notícia na manchete (número, nome, fato).
- Manchete em CAPS depois do emoji, sem travessão no meio.

Emojis de abertura por tipo: 🚨 notícia quente/saiu agora · 🤩 confirmação boa · ⚙️ feature/técnico · ⏰ data/horário · 🔥 hype · 🧵 thread · 👀 rumor/teaser · 🎮 gameplay · 🤯 surpreendente

## Barra de relevância
- Prioridade máxima: Simon (posts, reposts E respostas dele com notícia), conta oficial @Hytale, blog do site.
- Funcionários do estúdio (fontes boas de bastidores): @slikey, @zeroerrors, @devslashnulled, @itsbuddhacat (BuddhaCat é da equipe de comunidade, posta coisas de comunidade).
- Conteúdo de comunidade (reddit/tweets de terceiros) só quando é forte de verdade. Visualmente impressionante, viral, ou descoberta relevante. "Atualização de mod" sozinho é fraco. O ângulo interessante é o que o projeto É, não o fato de ter atualizado.
- Na dúvida se é fraco, gerar mesmo assim e avisar no resumo ("vale pra dia fraco de notícia"). O Luis decide.

## Recência e veracidade — FAKE NEWS É PROIBIDO
- Só notícia RECENTE (últimos ~7 dias). Nada de 2025 ou meses atrás, mesmo que a busca traga como se fosse novo.
- SEMPRE confirmar a data real antes de gerar (data na página, data do tweet; resultado de busca mente). Exemplo real: busca trouxe "BuddhaCat saiu da Hypixel" como se fosse atual, era de ago/2025, antes do estúdio renascer. Na dúvida sobre a data, NÃO gera.
- **DATAS RELATIVAS: recalcular SEMPRE pra data em que o Luis vai postar (hoje), não pra data da fonte.** Tweet de sexta dizendo "em uma semana" gerado na terça seguinte = "essa semana", NUNCA "semana que vem". "Tomorrow" num tweet de ontem = "hoje". Errar isso é fake news e queima a imagem da página. Se a conta ficar ambígua, usar data absoluta ("até o dia 19") ou vago correto ("nos próximos dias").
- Nunca inventar informação. Rumor/não-oficial fica claro no texto ("👀 rumor", "segundo a comunidade").

## Fonte e créditos
- O campo "fonte" do card é SÓ pro Luis saber de onde veio. O texto do post NÃO cita a fonte, EXCETO quando é conteúdo de alguém (aí crédito é obrigatório) ou link útil de propósito (blog no grupo).
- Reddit: capturar o u/username do autor (tag <name> no RSS) e creditar nos textos com o user ("feito pelo u/fulano", "créditos ao u/fulano"). Nunca "autor do post" genérico.
- Tweet de terceiro: creditar o @ da pessoa.

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
- **Meta EXIGE imagem**: quando a mídia é um tweet (RT/quote não existe no Face/Insta), preencher midia.tweetTexto (texto EXATO do tweet, em inglês mesmo, pode truncar com …) e midia.tweetAutor (ex: "Simon · @Simon_Hypixel") — o painel gera uma imagem estilo print do tweet pro Luis baixar e anexar no Meta.

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
           tweetTexto: "texto exato do tweet (original, pode truncar com …)",
           tweetAutor: "Simon · @Simon_Hypixel", nota: "..." },
  twitter: "texto pronto",                 // \n pra quebra de linha
  meta: "texto pronto"                     // mesmo texto pros 3 do Meta (página FB + Insta + grupo)
}
```
JavaScript válido, aspas escapadas, quebras como \n. Arquivo corrompido/ausente = recriar com cabeçalho de comentário e array.
