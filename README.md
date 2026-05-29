# Funnel Boilerplate

Boilerplate limpio para clonar funnels sin arrastrar identidad, checkout, tracking, copy o estilos del proyecto anterior.

## Configuracion principal

- `src/dna.config.ts`: identidad, dominio, producto, checkout, video, pricing, copy, tracking, assets, theme family y funnel variant.
- `.env.example`: variables necesarias para build/runtime. Copialas a `.env` en cada clon.
- `src/index.css`: tokens CSS base y ajustes globales.
- `tailwind.config.js`: tokens semanticos consumidos por componentes.

Valores seguros actuales:

- `productName`: `Aprender Motores`
- `domain`: `aprendermotores.com`
- `siteId`: `APRENDER_MOTORES`
- `checkoutUrl`: placeholder editable
- `vslVideoId`: placeholder editable
- `theme`: `expert`
- `funnelType`: `event`

## Theme family + funnel variant

La convencion nueva separa la familia visual de la variante de funnel:

```ts
theme: 'expert',
funnelType: 'event',
```

La landing de evento vive en `src/components/themes/expert/event/` y mantiene el lenguaje visual de `ExpertTheme` sin modificar el VSL actual. Esta ruta deja espacio para variantes futuras como `theme: 'expert', funnelType: 'tripwire'`, `theme: 'panda', funnelType: 'event'` o `theme: 'panda', funnelType: 'tripwire'`.

El contenido editable del evento, countdown, CTAs, campos de captura y assets temporales se configura desde `src/dna.config.ts` y se adapta en `src/core/config/funnel.config.ts`.

## Scripts

```bash
npm run typecheck
npm run build
npm run lint
```

No ejecutes `npm audit fix` como parte de la clonacion.

## Clonar un nuevo funnel

1. Actualiza `src/dna.config.ts` con producto, copy, precios, assets, checkout, video, theme y funnelType.
2. Copia `.env.example` a `.env` y completa dominio, metadata, tracking y URLs runtime.
3. Reemplaza `public/assets/funnel-placeholder.svg` por los assets reales o agrega nuevas rutas en `DNA.assets`, incluyendo `DNA.assets.event` para variantes de evento.
4. Ajusta colores en `DNA.colors`, `DNA.surface`, `DNA.text` y `DNA.cta`.
5. Valida con `npm run typecheck`, `npm run build` y `npm run lint`.

## Deploy

`dist/` es un artefacto generado y no debe editarse a mano. En CyberPanel/LiteSpeed, `public/.htaccess` queda trackeado para fallback SPA.

`docker-stack-boilerplate.yaml` se conserva solo como referencia legacy de Docker Swarm; el flujo recomendado es build de Vite y sincronizacion de `dist/` al hosting.
