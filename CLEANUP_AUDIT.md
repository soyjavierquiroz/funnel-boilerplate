# Cleanup Audit

## Scope

Objetivo: mantener este repo como padre reutilizable para funnels sin identidad, checkout, tracking, copy, assets ni despliegue de un sitio hijo.

## Estado actual

- `src/site/dna.config.ts` contiene un ejemplo neutral con `Example Funnel`, `Example Event`, `EXAMPLE_SITE` y `example.com`.
- `funnel.config.ts` deriva checkout, video, forms, pricing e integrations desde `DNA`.
- Componentes activos consumen copy/tokens desde el site boundary y usan clases semanticas.
- Assets default apuntan a `public/assets/funnel-placeholder.svg`.
- `.env.example` y templates del clone kit mantienen variables genericas.
- `public/capture.php` se configura mediante server env `CAPTURE_*`.
- No hay script de despliegue site-specific ni stack Docker legacy como baseline activo.

## Estado de artefactos

- `dist/`: artefacto generado, ignorado por git.
- `public_html/`: salida de hosting, no pertenece al repo fuente.
- `public/.htaccess`: debe permanecer trackeado para hosting con fallback SPA.

## Pendientes seguros

- Reemplazar placeholders por copy, video, checkout, tracking, precios y assets reales en cada clon.
- Confirmar el proveedor de precios dinamicos si se usara `PricingCard`.
- Validar el VSL real en navegador cuando exista un `VITE_VSL_VIDEO_ID`.
