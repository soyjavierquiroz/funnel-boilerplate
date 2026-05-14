#!/bin/bash
set -e

echo "🚀 Iniciando despliegue de Sensorial..."

echo "📦 1. Compilando el nuevo ADN..."
npm run build

echo "🔄 2. Sincronizando y destruyendo zombies..."
rsync -avz --delete dist/ ../public_html/

echo "🔐 3. Saneando permisos..."
chown -R nobody:nogroup ../public_html/

echo "🧹 4. Purgando caché nuclear de LiteSpeed..."
rm -rf /usr/local/lsws/cachedata/*
systemctl restart lsws

echo "✅ ¡Despliegue completado con éxito!"
