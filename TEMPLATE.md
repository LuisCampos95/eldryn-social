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

## Idioma
- Traduzir TUDO que tem tradução natural em PT-BR. Chapter vira **Capítulo**, update vira **atualização**, release vira **lançamento**.
- Manter no original SOMENTE nomes próprios e termos consagrados na comunidade: Hytale, Early Access, Orbis, Hypixel, nomes de zonas/itens/mobs, nomes de mods.
- Nunca inventar informação. Rumor/não-oficial fica claro no texto ("👀 rumor", "segundo a comunidade"). Comunidade sempre com crédito ao autor.

## Hashtags — POUCAS
- **Twitter**: 0 ou 1 (#Hytale, e só se couber natural). Nunca lista.
- **Meta (FB+Insta)**: 2 no máximo, no fim: #Hytale #HytaleBrasil.
- **Grupo**: nenhuma.

## Mídia — OBRIGATÓRIO em todo rascunho
O Luis NUNCA posta só texto. Todo item precisa de mídia concreta:
- **tweet**: URL exata + tweetId (números no fim da URL). O painel gera botão de quote e RT. Melhor opção quando a fonte é tweet.
- **imagem**: URL direta (og:image do blog, preview do reddit, media do tweet).
- **video**: URL do vídeo/tweet com vídeo.
- **print**: instrução concreta de qual print tirar (último recurso).

## Os 3 destinos (campos do data.js)
- **twitter**: máx ~250 caracteres se for quote (URL citada gasta ~24), senão ~270. Notícia longa vira thread (🧵) com posts numerados.
- **meta**: texto único que o Luis cola no Meta Business Suite e publica no Facebook E no Instagram de uma vez. Um pouco mais completo que o do X, tom de página, 2 hashtags no fim.
- **grupo**: texto pro grupo do Facebook. Tom de membro falando com a galera, casual, como se fosse um amigo compartilhando ("Galera, ...", "Olha que doideira..."). Pode incluir o link da fonte no fim. Sem hashtag.

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
  midia: { tipo: "tweet", url: "https://x.com/...", tweetId: "123...", nota: "..." },
  twitter: "texto pronto",                 // \n pra quebra de linha
  meta: "texto pronto",
  grupo: "texto pronto"
}
```
JavaScript válido, aspas escapadas, quebras como \n. Arquivo corrompido/ausente = recriar com cabeçalho de comentário e array.
