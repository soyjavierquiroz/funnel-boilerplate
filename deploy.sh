#!/usr/bin/env bash
set -euo pipefail

APP="/opt/webs/boilerplate"

cd "$APP"

if git remote get-url origin >/dev/null 2>&1; then
  echo "==> Pull..."
  git pull --rebase || true
fi

echo "==> Install deps..."
npm ci || npm install

echo "==> Build..."
npm run build

echo "✅ Build listo para Docker Swarm: $APP/dist ($(date))"
