# Clone Validation

## Checklist por clon

1. Actualizar `src/dna.config.ts`.
2. Crear `.env` desde `.env.example`.
3. Configurar `VITE_DOMAIN`, `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION` y `VITE_SOCIAL_IMAGE`.
4. Configurar `VITE_CHECKOUT_URL` y `VITE_CHECKOUT_PROVIDER_NAME`.
5. Configurar `VITE_VSL_VIDEO_ID`.
6. Configurar tracking solo cuando existan IDs reales.
7. Reemplazar `public/assets/funnel-placeholder.svg` o apuntar `DNA.assets` a nuevos assets.
8. Revisar que todo CTA use `#checkout` o una URL desde configuracion.
9. Ejecutar validaciones.

## Comandos

```bash
npm run typecheck
npm run build
npm run lint
```

## Busquedas recomendadas

```bash
rg -n "checkout real|producto anterior|dominio anterior|siteId anterior" src index.html README.md ARCHITECTURE.md CLEANUP_AUDIT.md CLONE_VALIDATION.md
rg -n "https?://" src index.html .env.example README.md ARCHITECTURE.md CLEANUP_AUDIT.md CLONE_VALIDATION.md
rg -n "text-(red|rose|emerald|blue|yellow|orange|slate)-|bg-(red|rose|emerald|blue|yellow|orange|slate)-" src
```

## Resultado actual

- Identidad default: `Aprender Motores`.
- Dominio default: `aprendermotores.com`.
- Tracking default: `APRENDER_MOTORES`.
- Checkout y video: placeholders editables.
- Assets: placeholder neutro.
