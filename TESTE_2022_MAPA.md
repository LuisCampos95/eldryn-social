# TESTE (16/07) — Mapa de mídias do artigo "Summer 2022 Development Update"

Ensaio geral pro blog do Capítulo 1. Artigo: https://hytale.com/news/2022/7/summer-2022-development-update
Inventário: **34 imagens (cdn.hytale.com, atributo data-src) + 5 vídeos Cloudflare Stream + 1 vídeo YouTube + 1 ZIP oficial de clipes no fim.**

## Vídeos encontrados (na ordem do artigo) e MÉTODO de obtenção
| # | Assunto | ID/URL | Melhor forma de obter |
|---|---------|--------|----------------------|
| 1 | Teaser da nova UI (parte 1) | CF Stream `a5341d8b39321cc26801a016befccd7f` | ZIP oficial (qualidade original); ver em https://iframe.videodelivery.net/a5341d8b39321cc26801a016befccd7f |
| 2 | Teaser da nova UI (parte 2) | CF Stream `6c3f3ce41e625eea185ddaf0d80e844c` | ZIP oficial; iframe.videodelivery.net/6c3f3ce4... |
| 3 | VFX de partículas (Polina) | CF Stream `75fa6b8cf2c1352752cc91d81591c57d` | ZIP oficial |
| 4 | VFX em dungeon (atmosfera) | CF Stream `df1a89cf2b0df4ed2f5cb19cfe0ca546` | ZIP oficial |
| 5 | Ferramentas avançadas de construção (Propzie, scripted brushes) | CF Stream `3d744928535d531527666800e80c6ef8` | ZIP oficial |
| 6 | Música da OST "Heroes of Orbis" | YouTube `xuUNkqHqgH0` | Baixar do YouTube (yt-dlp) |
| ZIP | Todos os clipes do post | https://cdn.hytale.com/5f40c478eeec4e5ba45096e2cef812db_hytale-development-update-summer-2022-clips.zip | Download direto (confirmado vivo) |

## Se esse artigo fosse o blog de amanhã, os posts sairiam assim (mídia na ordem do artigo)
- **ONDA 1** — 🚨 BREAKING (motor novo em C++ e lançamento fora de 2023) → mídia: capa do blog (primeira imagem cdn) · 📖 Visão do jogo (as "portas") → `doors___vision.png`
- **ONDA 2:**
  1. Motor em C++ e o que muda → `cliffside_village_custom_build.jpg` (URL direta)
  2. As 3 portas do Hytale → Twitter: `doors___vision.png` (1 mídia) · Meta: CARROSSEL com as 5 imagens doors___ na ordem
  3. Nova UI → vídeo CF #1 (ZIP) · vídeo CF #2 vira segundo post ou mídia solta
  4. Avatares → `avatar_concept.jpg` · Meta pode carrossel com `hub_architecture_exploration.jpg`
  5. Biomas gelados de Orbis → Twitter: `greater___frozen_waves.jpg` · Meta: CARROSSEL com as 8 imagens de bioma gelado na ordem (conceito → in-game, legendas preservadas)
  6. Salt flats/deserto → Twitter: `roddan___salt_flats.jpg` · Meta: CARROSSEL 3 imagens
  7. VFX novos → vídeo CF #3 (ZIP) · vídeo CF #4 = mídia solta sáb/dom
  8. Ferramentas de construção/scripted brushes → vídeo CF #5 (ZIP)
  9. Música nova da OST → YouTube (baixar de lá)
  10. Roadmap/prazos → `evening_lake.jpg`

## Aprendizados aplicados na tarefa de amanhã
- Vídeos do site = Cloudflare Stream (`<stream class="cf-stream" src="ID32hex">`) + alguns YouTube. Grep só de YouTube perderia 5 de 6 vídeos.
- Imagens em `data-src` (lazy-load), URL direta cdn = qualidade cheia.
- `og:image` do site é o LOGO genérico — capa real = imagem com `blog_cover` no corpo.
- Legendas em `<em>` logo após a mídia (mapeiam mídia→assunto e preservam galerias).
- ZIP oficial de clipes no fim do post = melhor qualidade pros vídeos CF.
- Texto do artigo vem INTEIRO no HTML (entidades escapadas) — 1 curl basta, ler o arquivo em blocos.
- **Detecção de post novo: https://hytale.com/rss.xml** (primeiro item = mais novo, com categoria que separa patch notes de blog).
