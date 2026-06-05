# Funnel Boilerplate

Boilerplate padre para clonar funnels sin arrastrar identidad, checkout, tracking, copy o estilos de un sitio hijo. Este repo no es Aprender Motores: Aprender Motores / Maneja Sin Miedo queda solo como baseline historico y site config activo de ejemplo mientras termina la extraccion.

## Configuracion principal

- `src/site/**`: configuracion editable por sitio: identidad, dominio, producto, checkout, video, pricing, copy, tracking, assets, theme family y funnel variant.
- `src/site/current.ts`: boundary oficial entre Core Engine y Site Config. Runtime/core/componentes deben consumir el site activo desde aqui.
- `src/dna.config.ts`: facade temporal de compatibilidad que reexporta desde `src/site/dna.config.ts`; no es el contrato recomendado para clones.
- `.env.example`: variables publicas necesarias para build/runtime. Copialas a `.env` en cada clon.
- `CLONE_KIT/server-env.template`: variables server-side `CAPTURE_*` para el relay PHP. No deben exponerse al navegador.
- `src/index.css`: tokens CSS base y ajustes globales.
- `tailwind.config.js`: tokens semanticos consumidos por componentes.

Defaults genericos del padre:

- `.env.example`, `CLONE_KIT/env.template` y `CLONE_KIT/server-env.template` usan `example.com`, `EXAMPLE_SITE` y placeholders sin secretos.
- `vite.config.ts` usa metadata generica solo como fallback cuando no existen variables `VITE_*`.
- El site config activo todavia conserva MSM como baseline historico, pero no es el default recomendado para clones.

## Theme family + funnel variant

La convencion nueva separa la familia visual de la variante de funnel:

```ts
theme: 'expert',
funnelType: 'event',
```

La landing de evento vive en `src/components/themes/expert/event/` y mantiene el lenguaje visual de `ExpertTheme` sin modificar el VSL actual. Esta ruta deja espacio para variantes futuras como `theme: 'expert', funnelType: 'tripwire'`, `theme: 'panda', funnelType: 'event'` o `theme: 'panda', funnelType: 'tripwire'`.

El contenido editable del evento, countdown, CTAs, campos de captura y assets temporales se configura desde `src/site/**` y se adapta en `src/core/config/funnel.config.ts` a traves de `src/site/current.ts`.

## Scripts

```bash
npm run typecheck
npm run build
npm run lint
```

No ejecutes `npm audit fix` como parte de la clonacion.

## Clonar un nuevo funnel

1. Actualiza `src/site/**` con producto, copy, precios, assets, checkout, video, theme y funnelType.
2. Copia `.env.example` o `CLONE_KIT/env.template` a `.env` y completa dominio, metadata, tracking y URLs runtime.
3. Configura en el servidor las variables `CAPTURE_*` de `CLONE_KIT/server-env.template`; los webhooks privados no van en `.env` de Vite ni en React.
4. Reemplaza `public/assets/funnel-placeholder.svg` por los assets reales o agrega nuevas rutas en `DNA.assets`, incluyendo `DNA.assets.event` para variantes de evento.
5. Ajusta colores en `DNA.colors`, `DNA.surface`, `DNA.text` y `DNA.cta`.
6. Valida con `npm run typecheck`, `npm run build` y `npm run lint`.

## Clone Kit

`CLONE_KIT/` contiene la documentacion operativa para convertir este repo en repo padre clonable:

- `CLONE_KIT/README.md`: guia general del kit.
- `CLONE_KIT/env.template`: variables de entorno para un clon nuevo.
- `CLONE_KIT/server-env.template`: variables server-side privadas para `public/capture.php`.
- `CLONE_KIT/assets-map.md`: mapa de assets reemplazables por sitio.
- `CLONE_KIT/clone-checklist.md`: pasos para crear y configurar un clon.
- `CLONE_KIT/launch-checklist.md`: validacion antes de publicar.
- `CLONE_KIT/operational-safety.md`: riesgos operativos legacy/site-specific antes de launch.
- `CLONE_KIT/upstream-workflow.md`: flujo para traer cambios del repo padre a clones.

La regla base: en clones se edita `.env`, server env `CAPTURE_*`, `src/site/**` y `public/assets/...`; componentes, tracking core, `capture.php`, `Success.tsx`, `deploy.sh` y `docker-stack-boilerplate.yaml` se mantienen como base compartida salvo cambios agnosticos que deban subir al repo padre. MSM sigue siendo el site config actual de ejemplo/baseline, vive detras del boundary `src/site/current.ts` y no debe copiarse como identidad final de otro clon.

## Capture relay

`public/capture.php` lee webhooks y allowlist desde variables server-side `CAPTURE_*`. Mantiene compatibilidad con `VITE_CAPTURE_WEBHOOK_URL=/capture.php`, pero los secretos del CRM deben configurarse en el servidor con `CAPTURE_ADS_WEBHOOK_URL`, `CAPTURE_ORGANIC_WEBHOOK_URL` o `CAPTURE_WEBHOOK_URL`.

Usa `CAPTURE_DRY_RUN=true` para validar payload, canal, lista y CORS sin llamar al CRM. Si existieron webhooks/hashes reales en historial Git o deployments previos, rotalos antes de lanzar clones.

## Deploy

`dist/` es un artefacto generado y no debe editarse a mano. En CyberPanel/LiteSpeed, `public/.htaccess` queda trackeado para fallback SPA.

`deploy.sh` es site-specific/legacy y requiere `ALLOW_SITE_SPECIFIC_DEPLOY=1` para evitar ejecucion accidental. Revisa dominio, destino, permisos y cache antes de usarlo en un clon.

`docker-stack-boilerplate.yaml` se conserva solo como referencia legacy de Docker Swarm; el flujo recomendado es build de Vite y sincronizacion de `dist/` al hosting. Revisa dominio, rutas, volumenes, env y servicios antes de usar ese stack.
