#!/bin/bash
set -e

if [ "${ALLOW_SITE_SPECIFIC_DEPLOY:-}" != "1" ]; then
  echo "Error: deploy.sh is site-specific/legacy and is not safe to run by default." >&2
  echo "Review domain, destination, permissions and cache paths before using it in a clone." >&2
  echo "Set ALLOW_SITE_SPECIFIC_DEPLOY=1 only after confirming this deploy script belongs to this site." >&2
  exit 1
fi

DOMAIN="aprendermotores.com"
CACHE_DIR="/usr/local/lsws/cachedata/aprendermotores.com"

echo "Iniciando despliegue de ${DOMAIN}..."

echo "1. Compilando el nuevo ADN..."
npm run build

echo "2. Sincronizando dist/ hacia public_html/..."
rsync -avz --delete dist/ ../public_html/

echo "3. Saneando permisos..."
chown -R nobody:nogroup ../public_html/

echo "4. Purgando cache de LiteSpeed..."
if [ -d "$CACHE_DIR" ]; then
  if rm -rf "$CACHE_DIR"; then
    echo "Cache purgada: $CACHE_DIR"
  else
    echo "Advertencia: no se pudo purgar la cache en $CACHE_DIR; el deploy continua." >&2
  fi
else
  echo "No hay cache de LiteSpeed para purgar en $CACHE_DIR."
fi
systemctl restart lsws

echo "Despliegue completado."
