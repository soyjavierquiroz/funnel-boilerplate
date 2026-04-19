# Architecture Snapshot

## Current State

### Video Engine

- The project uses a locally cloned `KurukinPlayer` inside each active theme at:
  - `src/components/themes/expert/components/video-player`
  - `src/components/themes/panda/components/video-player`
- Both themes consume the local player directly from `src/kurukin-video-player` instead of an external package.
- `vslMode` is part of the active baseline and powers the VSL behavior layer:
  - VSL overlay for the first intentional unmute interaction
  - auto-restart from zero when the user unmutes and begins the pitch
  - persistent psychological progress bar during the VSL flow
- `idleHideControls` is enabled on the active hero players, so playback chrome auto-hides while the video is playing.
- Fullscreen is intentionally disabled on the main VSL heroes and selectively enabled only where the UX requires it, such as Expert testimonial playback.

### Panda Theme

- The Panda theme is sealed in `Super VSL` dark mode.
- Current composition:
  - dark cinematic shell
  - VSL-first hero powered by local `KurukinPlayer`
  - trust logos
  - capture form
  - insights
  - testimonials
  - pricing
- The hero runs with `vslMode={true}`, autoplay, muted start, auto-hidden controls, and fullscreen disabled to preserve the guided VSL experience.

### Expert Theme

- The Expert theme is sealed as the `Hardcore Direct Response` conversion structure.
- Current structural baseline:
  - Hero VSL with embedded 2-step order form aside
  - Testimonials section with fullscreen-capable modal playback
  - Alternating Bonus Stack section
  - Offer Stack with Certainty Bar
  - 2-step Order Form with Order Bump flow
- The hero player runs in VSL mode with autoplay, muted start, auto-hidden controls, and fullscreen disabled to maintain pitch control.
- Testimonial playback keeps the same local player engine, but uses standard playback mode with fullscreen enabled for long-form social proof.

## Milestone

Milestone: Estructura base sellada. Siguiente fase: Abstracción de configuración y Tokens de Diseño
