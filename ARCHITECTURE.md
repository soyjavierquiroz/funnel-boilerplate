# Architecture Snapshot

## Current State

### Video Engine

- The current active theme uses a locally cloned `SensorialPlayer` at:
  - `src/components/themes/expert/components/video-player`
- The active hero consumes the local player directly from `src/sensorial-video-player` instead of an external package.
- `vslMode` is part of the active baseline and powers the VSL behavior layer:
  - VSL overlay for the first intentional unmute interaction
  - auto-restart from zero when the user unmutes and begins the pitch
  - persistent psychological progress bar during the VSL flow
- `idleHideControls` is enabled on the active hero players, so playback chrome auto-hides while the video is playing.
- Fullscreen is intentionally disabled on the main VSL hero.

### Legacy Theme References

- The code still has `panda` references in theme types, CSS and tsconfig excludes.
- `src/components/themes/panda/` is not present in the current tree.
- Treat `panda` references as cleanup candidates until a future theme requirement is confirmed.

### Expert Theme

- The Expert theme is sealed as the `Hardcore Direct Response` conversion structure.
- Current structural baseline:
  - Hero VSL
  - Testimonials section driven by DNA image/testimonial content
  - Alternating Bonus Stack section
  - Offer Stack with Certainty Bar
  - Checkout CTAs routed through the DNA Hotmart URL
- The hero player runs in VSL mode with autoplay, muted start, auto-hidden controls, and fullscreen disabled to maintain pitch control.
- The active routes are `/`, `/libro` and `/confirmacion`.
- `/libro` renders the same Expert theme and analytics currently suppresses tracking on that route.

## Milestone

Milestone: Estructura base sellada. Siguiente fase: Abstracción de configuración y Tokens de Diseño

## Fase 2: Abstracción Semántica

- El Tema Expert ya no depende de colores hardcodeados para su identidad principal.
- Los colores semánticos del tema viven en `src/index.css` como variables CSS exactas:
  - `--color-brand-primary`
  - `--color-brand-accent`
  - `--color-cta-base`
  - `--color-cta-hover`
  - `--color-surface-bump`
- `tailwind.config.js` expone esos tokens mediante `brand.*`, `cta.*` y `surface.bump`.
- Los componentes en `src/components/themes/expert/` ya consumen tokens semánticos en lugar de clases hardcodeadas para rojo principal, acento marino, CTA y fondo del order bump.
- La infraestructura actual verificada publica el build estatico en CyberPanel/LiteSpeed mediante `deploy.sh`, sincronizando `dist/` hacia `../public_html/`.
- Flujo de cambio de piel del funnel:
  - modificar las variables del tema en `src/index.css`
  - ejecutar `npm run build`
  - publicar el `dist/` resultante hacia `../public_html/` con el flujo CyberPanel validado
