# Factory Boilerplate

Boilerplate para clonar funnels VSL donde el tema visual, el pricing, el copy y el video principal se gobiernan desde `src/dna.config.ts`.

## Protocolo de Clonación Chilita

1. Clona el boilerplate.

```bash
git clone git@github.com:soyjavierquiroz/boilerplate.git
cd boilerplate
```

2. Edita `src/dna.config.ts`.

Actualiza al menos estos bloques antes de tu primer build:

- `theme`
- `colors`
- `copy`
- `prices`
- `vslVideoId`

Todo el baseline productivo toma esos valores para renderizar el tema activo, aplicar colores de marca y alimentar el pricing principal del funnel.

3. Genera el build con Docker y sube `dist/` al server.

```bash
docker run --rm \
  -v "$PWD":/app \
  -w /app \
  node:20-alpine \
  sh -lc 'npm ci && npm run build'
```

El artefacto listo para publicar queda en `dist/`.

## Notas Operativas

- `src/App.tsx` renderiza directamente el tema definido en `DNA.theme`.
- `src/components/themes/panda/` y `src/components/themes/expert/` comparten la misma base de DNA.
- `src/core/config/funnel.config.ts` consume `DNA.copy`, `DNA.prices` y `DNA.vslVideoId` para mantener el funnel alineado con el clon.

## Estado Actual

### CAPI / Tracking

- Connected to `kurukin-relay` via `VITE_CAPI_RELAY_URL`.
- Payload structure updated with `siteId: "SENSORIAL"` at the root level.
- Live events: `PageView` on load and `InitiateCheckout` on CTA click with `value` and `currency`.

### Checkout Routing

- Hotmart URL centralized in `DNA.checkoutUrl`.
- `ExpertCtaButton` intercepts `href="#checkout"` and auto-injects the live checkout URL.

### UI / CRO

- Added 60-minute reactive countdown timers with `animate-pulse` in Offer Breakdown and Bonus Stack.
- Removed hardcoded `"Modulo X"` strings to reduce cognitive friction.
- Activated `ExpertTestimonials` via DNA-driven content.

### SEO

- Global product name updated to `"Mi Primer Libro Sensorial"`.
- `index.html` rewritten with complete OG/Twitter tags pointing to `curso.webp`.
