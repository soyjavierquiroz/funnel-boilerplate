# VSL Funnel Boilerplate

Boilerplate limpio para clonar funnels VSL sin arrastrar identidad, checkout, tracking, copy o estilos del proyecto anterior.

## Configuracion principal

- `src/dna.config.ts`: identidad, dominio, producto, checkout, video, pricing, copy, tracking, assets y theme.
- `.env.example`: variables necesarias para build/runtime. Copialas a `.env` en cada clon.
- `src/index.css`: tokens CSS base y ajustes globales.
- `tailwind.config.js`: tokens semanticos consumidos por componentes.

Valores seguros actuales:

- `productName`: `Aprender Motores`
- `domain`: `aprendermotores.com`
- `siteId`: `APRENDER_MOTORES`
- `checkoutUrl`: placeholder editable
- `vslVideoId`: placeholder editable

## Scripts

```bash
npm run typecheck
npm run build
npm run lint
```

No ejecutes `npm audit fix` como parte de la clonacion.

## Clonar un nuevo funnel

1. Actualiza `src/dna.config.ts` con producto, copy, precios, assets, checkout y video.
2. Copia `.env.example` a `.env` y completa dominio, metadata, tracking y URLs runtime.
3. Reemplaza `public/assets/funnel-placeholder.svg` por los assets reales o agrega nuevas rutas en `DNA.assets`.
4. Ajusta colores en `DNA.colors`, `DNA.surface`, `DNA.text` y `DNA.cta`.
5. Valida con `npm run typecheck`, `npm run build` y `npm run lint`.

## Deploy

`dist/` es un artefacto generado y no debe editarse a mano. En CyberPanel/LiteSpeed, `public/.htaccess` queda trackeado para fallback SPA.

`docker-stack-boilerplate.yaml` se conserva solo como referencia legacy de Docker Swarm; el flujo recomendado es build de Vite y sincronizacion de `dist/` al hosting.
