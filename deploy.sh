#!/bin/bash
set -e

DOMAIN="${VITE_DOMAIN:-aprendermotores.com}"

echo "Iniciando despliegue de ${DOMAIN}..."

echo "1. Compilando el nuevo ADN..."
npm run build

echo "2. Sincronizando dist/ hacia public_html/..."
rsync -avz --delete dist/ ../public_html/

echo "3. Saneando permisos..."
chown -R nobody:nogroup ../public_html/

echo "4. Purgando cache de LiteSpeed..."
rm -rf /usr/local/lsws/cachedata/*
systemctl restart lsws

echo "Despliegue completado."
