#!/usr/bin/env bash
# Vigia Hytale: roda no GitHub Actions (gratis, 24h, sem precisar do PC).
# Detecta pagina nova no hytale.com/news e entrada nova nas patch notes semanais.
# Ao detectar, avisa no Discord. Os rascunhos completos sao gerados pelo Claude
# quando o PC do Luis estiver ligado; o vigia so garante que ele fica sabendo na hora.
set -uo pipefail

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
STATE=".github/watch-state.json"
PAINEL="https://luiscampos95.github.io/eldryn-social/"

[ -f "$STATE" ] || echo '{}' > "$STATE"

# 1) Lista de posts do /news
news_html=$(curl -sL --max-time 40 -A "$UA" "https://hytale.com/news" || true)
mapfile -t urls < <(printf '%s' "$news_html" | grep -oE 'href="/news/[0-9]{4}/[0-9]+/[^"]+"' | sed 's/^href="//; s/"$//' | sort -u)

if [ "${#urls[@]}" -eq 0 ]; then
  echo "Nao consegui ler o /news (bloqueio ou fora do ar). Mantendo estado, sem alerta."
  exit 0
fi

# 2) Pagina de patch notes mais recente (atualiza no mesmo lugar toda semana)
patch_path=$(printf '%s\n' "${urls[@]}" | grep 'patch-notes' | sort | tail -1)
patch_part=""
if [ -n "$patch_path" ]; then
  patch_html=$(curl -sL --max-time 40 -A "$UA" "https://hytale.com${patch_path}" || true)
  patch_part=$(printf '%s' "$patch_html" | grep -oE '[Pp]art [0-9]+' | grep -oE '[0-9]+' | sort -n | tail -1)
fi

old_part=$(jq -r '.patchPart // ""' "$STATE")
primeira_vez=$(jq -r 'if has("newsUrls") then "nao" else "sim" end' "$STATE")

novidades=""
if [ "$primeira_vez" = "nao" ]; then
  for u in "${urls[@]}"; do
    if ! jq -e --arg u "$u" '.newsUrls | index($u)' "$STATE" > /dev/null; then
      novidades+="• Página nova no site https://hytale.com${u}"$'\n'
    fi
  done
  if [ -n "$patch_part" ] && [ -n "$old_part" ] && [ "$patch_part" != "$old_part" ]; then
    novidades+="• Patch notes ganharam a Parte ${patch_part} https://hytale.com${patch_path}"$'\n'
  fi
fi

if [ -n "$novidades" ] && [ -n "${WEBHOOK:-}" ]; then
  conteudo="👀 Vigia do site (funciona com PC desligado) achou novidade\n${novidades}\nQuando o PC ligar, os rascunhos aparecem no painel 👉 ${PAINEL}"
  jq -n --arg c "$(printf '%b' "$conteudo")" '{username:"Vigia Hytale",content:$c}' > /tmp/wh.json
  code=$(curl -s -w "%{http_code}" -o /dev/null -X POST -H "Content-Type: application/json" -d @/tmp/wh.json "$WEBHOOK")
  echo "Discord HTTP $code"
fi

# 3) Salvar estado novo (so chega aqui se o /news respondeu)
jq -n \
  --argjson urls "$(printf '%s\n' "${urls[@]}" | jq -R . | jq -s .)" \
  --arg part "${patch_part:-$old_part}" \
  '{newsUrls: $urls, patchPart: $part}' > "$STATE"

echo "Estado salvo. ${#urls[@]} posts no /news, patch parte ${patch_part:-desconhecida}."
