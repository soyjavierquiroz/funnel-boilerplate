# OFFER_COMPONENT_AUDIT

## Alcance

Auditoria previa al rediseño de `/oferta` y `/a/oferta` como pagina de oferta tipo sales letter/VSL inspirada en la estructura psicologica de Expert Secrets, sin copiar marca, layout exacto ni contenido.

Archivos revisados:

- `src/components/themes/expert/`
- `src/components/themes/expert/components/`
- `src/components/themes/expert/offer/`
- `src/core/config/funnel.config.ts`
- `src/dna.config.ts`

## Estado actual de rutas y canal

- `/oferta` y `/a/oferta` ya renderizan `ExpertOfferPage`.
- `ExpertOfferPage` usa `getTrafficChannel(location.pathname)`.
- `/oferta` resuelve `organic`, con `trackingEnabled: false`.
- `/a/oferta` resuelve `ads`, con `trackingEnabled: true`.
- `App.tsx` conserva `PageView` condicionado por `channelConfig.trackingEnabled`, por lo que el PageView de ads funciona y el organico no dispara Pixel/CAPI.
- `ExpertOfferCta` es el CTA mas seguro para oferta porque recibe `trackingEnabled` y solo dispara `InitiateCheckout` cuando el canal lo permite.

## Inventario por necesidad

### Hero / VSL

Utiles:

- `ExpertHero.tsx`: hero VSL legacy. Tiene headline, subheadline, video en `KurukinPlayer`, modo VSL, autoplay muted, reveal por tiempo y poster/placeholder.
- `components/video-player/src/kurukin-video-player/KurukinPlayer.tsx`: player reusable para YouTube, Bunny/HLS y HTML5, con `vslMode`, `resumePlayback`, `smartPoster`, `callToAction`, `onTimeUpdate`, lazy YouTube y controles.
- `ExpertOfferHero.tsx`: hero actual de oferta, sin formulario, con promesa, bullets, imagen de fondo y price card.
- `ExpertEventHero.tsx`: util como referencia visual para hero editorial full-bleed, pero esta acoplado al evento y a registro.

Listo para reutilizar:

- `KurukinPlayer` esta listo como base de `ExpertOfferVsl`.
- `ExpertOfferHero` esta listo como hero sin formulario, aunque no incluye VSL.

Requiere adaptacion:

- `ExpertHero` mezcla hero y VSL y depende de `DNA.copy`; sirve como fuente para extraer un `ExpertOfferVsl`, no como seccion final tal cual.

### Offer box

Utiles:

- `ExpertOfferHero.tsx`: contiene una price card lateral en desktop y debajo en mobile por el grid actual.
- `ExpertSpecialOffer.tsx`: oferta visual legacy con precio, beneficios, imagen y CTA.
- `ExpertOrderForm.tsx`: placeholder de checkout, no checkout real.

Listo para reutilizar:

- La price card dentro de `ExpertOfferHero` es reusable con `funnelConfig.offer`.
- `ExpertOfferCta` maneja checkout faltante y tracking por canal.

Requiere adaptacion:

- `ExpertSpecialOffer` usa `DNA.copy`, `DNA.prices`, `DNA.checkoutUrl` via `ExpertCtaButton` y no respeta canal organico.
- `ExpertOrderForm` solo sirve como placeholder visual, no como offer card final.

### Credibility logos

Utiles:

- `ExpertEventAuthority.tsx`: badges de autoridad y carrusel de imagenes.
- `ExpertEventTheme.tsx`: tiene un social proof strip inline despues del hero.
- `expertContent.ts`: expone `expertBrandAssets.logosUrl`, pero hoy es un asset placeholder, no un componente.
- `DNA.copy.certaintyItems`: iconos de seguridad usados en `ExpertOfferStack`.

Listo para reutilizar:

- No hay componente generico de logos listo.

Falta:

- `ExpertOfferCredibilityStrip` con logos/badges/social proof desde config.
- Una seccion semantica en `offer` para `credibility` o `socialProof`.

### Testimonials

Utiles:

- `ExpertTestimonials.tsx`: grid de testimonios con imagenes, copy desde `DNA.copy.testimonials`.
- `ExpertEventTestimonials.tsx`: grid mas sobrio, basado en cards, acepta nombre, quote y detalle.
- `expertContent.ts`: mapea testimonios legacy.

Listo para reutilizar:

- `ExpertEventTestimonials` es una buena referencia visual, pero esta acoplado a `funnelConfig.content.event`.

Requiere adaptacion:

- `ExpertTestimonials` usa `ExpertCtaButton`, que trackea siempre y usa checkout legacy.
- Ambos componentes necesitan recibir config/props o leer una seccion `offer.testimonials`.

### Bonuses

Utiles:

- `ExpertOfferBonuses.tsx`: bonos de oferta actual desde `funnelConfig.offer.bonuses`.
- `ExpertBonusStack.tsx`: value stack robusto con bonos, valores, imagenes, countdown y CTA.
- `ExpertConfidenceBooster.tsx`: bloque con bonus destacado y cierre de precio.
- `ExpertOfferBreakdown.tsx`: lista modulos/entregables y fast action bonus.

Listo para reutilizar:

- `ExpertOfferBonuses` esta listo para la oferta nueva.

Requiere adaptacion:

- `ExpertBonusStack`, `ExpertConfidenceBooster` y `ExpertOfferBreakdown` usan `DNA.copy`/`DNA.prices` y CTA legacy.
- El countdown de `ExpertBonusStack` y `ExpertOfferBreakdown` esta hardcodeado a 3600 segundos; usarlo en oferta requeriria config.

### Value stack

Utiles:

- `ExpertOfferStack.tsx` legacy: value stack con modulos, valores, total, precio, seguridad y CTA.
- `ExpertOfferBreakdown.tsx`: breakdown visual de modulos con imagen, descripcion y valor.
- `ExpertBonusStack.tsx`: stack mas completo con valor total, precio de hoy, precio regular y bonuses.
- `offer/ExpertOfferStack.tsx`: lista simple de includes desde `funnelConfig.offer.includes`.

Listo para reutilizar:

- `offer/ExpertOfferStack` esta listo para includes simples.

Requiere adaptacion:

- Para estilo Expert Secrets conviene un value stack mas persuasivo que combine `includes`, precio regular, precio actual y bonos. El legacy tiene la psicologia, pero no esta desacoplado ni es canal-safe.

### FAQ

Utiles:

- `ExpertFAQ.tsx`: acordeon controlado, soporta HTML en respuestas desde DNA.
- `offer/ExpertOfferFaq.tsx`: acordeon nativo `details`, simple y config-driven desde `funnelConfig.offer.faq`.

Listo para reutilizar:

- `ExpertOfferFaq` esta listo para `/oferta`.

Requiere adaptacion:

- `ExpertFAQ` incluye CTA legacy y lee `DNA.copy.faq`; no debe usarse tal cual en oferta organica.

### CTA

Utiles:

- `offer/ExpertOfferCta.tsx`: CTA de oferta, valida checkout, estado deshabilitado, abre checkout, y trackea `InitiateCheckout` solo si `trackingEnabled` es true.
- `ExpertEventCta.tsx`: CTA visual simple sin tracking, util para anchors internos.
- `ExpertCtaButton.tsx`: CTA legacy visualmente fuerte.

Listo para reutilizar:

- `ExpertOfferCta` es el CTA recomendado para enlaces de checkout en `/oferta` y `/a/oferta`.
- `ExpertEventCta` puede reutilizarse para anchors internos sin tracking.

No usar tal cual:

- `ExpertCtaButton` dispara `analytics.trackEvent('InitiateCheckout')` siempre y resuelve `#checkout` contra `DNA.checkoutUrl`; rompe la regla de `/oferta` organico sin Pixel/CAPI.

### Guarantee

Utiles:

- `offer/ExpertOfferGuarantee.tsx`: garantia/acceso desde `funnelConfig.offer.guarantee`.
- `DNA.copy.specialOfferGuarantee`: texto legacy usado en varias secciones.
- `DNA.copy.certaintyItems`: seguridad/garantia/checkouts protegidos en el stack legacy.

Listo para reutilizar:

- `ExpertOfferGuarantee` esta listo.

Falta:

- Una garantia mas rica si la oferta necesita politica formal, ventana de reembolso, condiciones o iconografia configurable.

### Story section

Utiles:

- `ExpertSalesLetter.tsx`: historia de transformacion con parte 1, highlight y parte 2.
- `ExpertPainPoints.tsx`: seccion de dolores y transicion hacia la oferta.
- `ExpertConfidenceBooster.tsx`: belief shift/seguridad antes de la decision.
- `ExpertEventWhyFearPersists.tsx`: belief shift sobrio y bien alineado con estetica MSM/event.
- `ExpertEventTransformation.tsx`: antes/despues para reencuadre.

Listo para reutilizar:

- No hay story/belief shift generico para `offer`.

Requiere adaptacion:

- `ExpertSalesLetter`, `ExpertPainPoints`, `ExpertConfidenceBooster` y `ExpertEventWhyFearPersists` son buenas bases, pero leen configs legacy/event y usan CTAs no siempre canal-safe.

### Video section

Utiles:

- `KurukinPlayer`: player principal reutilizable.
- `ExpertHero`: ejemplo actual de frame VSL, sound prompt, aspect ratio y reveal.
- `funnelConfig.media.heroVideo`: config existente para provider/video/reveal/poster/progress.

Listo para reutilizar:

- `KurukinPlayer` y `funnelConfig.media.heroVideo` estan listos.

Falta:

- `ExpertOfferVsl` como seccion independiente, sin reveal gate obligatorio, con copy y CTA opcional desde `offer`.
- Config de `offer.video` si se quiere separar la VSL de oferta de la VSL/hero legacy.

## Componentes listos para reutilizar ahora

- `components/video-player/src/kurukin-video-player/KurukinPlayer.tsx` para VSL.
- `offer/ExpertOfferPage.tsx` como orchestrator inicial con canal.
- `offer/ExpertOfferHero.tsx` como hero sin formulario y offer card inicial.
- `offer/ExpertOfferCta.tsx` para checkout canal-safe.
- `offer/ExpertOfferStack.tsx` para includes simples.
- `offer/ExpertOfferBonuses.tsx` para bonos simples.
- `offer/ExpertOfferGuarantee.tsx` para garantia simple.
- `offer/ExpertOfferFaq.tsx` para FAQ simple.
- `event/ExpertEventSection.tsx`, `event/ExpertEventCard.tsx`, `event/ExpertEventImageFrame.tsx` como primitives visuales si se decide compartir el estilo event/expert.

## Componentes utiles pero no listos tal cual

- `ExpertHero.tsx`: extraer VSL, no usar como hero completo.
- `ExpertSpecialOffer.tsx`: adaptar a `funnelConfig.offer` y CTA canal-safe.
- `ExpertOfferStack.tsx` legacy: adaptar a config semantica y CTA canal-safe.
- `ExpertBonusStack.tsx`: adaptar a oferta generica, quitar countdown hardcodeado o moverlo a config.
- `ExpertOfferBreakdown.tsx`: adaptar a `offer.includes`/`offer.stack`.
- `ExpertSalesLetter.tsx`: adaptar a `offer.story` o `offer.beliefShift`.
- `ExpertTestimonials.tsx`: adaptar a `offer.testimonials`.
- `ExpertFAQ.tsx`: solo si se quiere acordeon controlado; quitar CTA legacy o inyectarlo.
- `ExpertEventAuthority.tsx`: adaptar a `offer.authority`.
- `ExpertEventTestimonials.tsx`: adaptar a `offer.testimonials`.
- `ExpertEventWhyFearPersists.tsx`: adaptar a `offer.beliefShift`.

## Componentes faltantes

- `ExpertOfferVsl`: frame de video independiente usando `KurukinPlayer`.
- `ExpertOfferCredibilityStrip`: logos, badges, resultados o social proof compacto.
- `ExpertOfferBeliefShift`: story/reframe psicologico, separado de pain points.
- `ExpertOfferTestimonials`: testimonios de oferta desde config semantica.
- `ExpertOfferValueStack`: value stack completo con valor total, precio regular, precio actual, includes y CTA.
- `ExpertOfferFinalCta`: cierre final reusable en vez de seccion inline en `ExpertOfferPage`.
- `ExpertOfferAuthority`: autoridad/credibilidad del experto desde config de oferta.
- Opcional: `ExpertOfferStickyCta` para mobile/desktop, siempre usando `ExpertOfferCta`.

## Gaps de configuracion

La seccion actual `offer` cubre:

- hero
- producto/precio
- checkout
- bullets
- includes
- bonuses
- guarantee
- faq

Para una pagina tipo Expert Secrets faltan campos semanticos para:

- `offer.video`: provider, videoId, poster, soundPrompt, headline opcional, reveal/CTA opcional.
- `offer.credibility`: logos, badges, proof text, metrics.
- `offer.story` o `offer.beliefShift`: eyebrow, title, paragraphs, highlighted belief, image.
- `offer.authority`: experto, bio, badges, quote, images.
- `offer.testimonials`: headline, subtitle, items con quote/detail/image/video opcional.
- `offer.valueStack`: totalValue, stack items, labels, urgency opcional.
- `offer.finalCta`: headline, subtitle, bullets.

## Propuesta de estructura para `/oferta`

Mantener:

- `/oferta`
- `/a/oferta`
- `getTrafficChannel`
- `/oferta = organic` sin Pixel/CAPI
- `/a/oferta = ads` con Pixel/CAPI
- `ExpertOfferCta` como unico CTA de checkout mientras no se adapte `ExpertCtaButton`.

Estructura sugerida:

1. `ExpertOfferHero`
   - Hero sin formulario.
   - Hook / Big Promise.
   - Bullets de outcome.
   - Offer card lateral en desktop y debajo en mobile.

2. `ExpertOfferVsl`
   - Video principal usando `KurukinPlayer`.
   - Frame inspirado en `ExpertHero`.
   - Sin reveal gate obligatorio para esta pagina.

3. `ExpertOfferCredibilityStrip`
   - Social proof, logos, badges o metricas.
   - Puede reutilizar `ExpertEventCard`/tokens event.

4. `ExpertOfferBeliefShift`
   - Story / reencuadre.
   - Base conceptual: `ExpertSalesLetter` + `ExpertEventWhyFearPersists`.

5. `ExpertOfferAuthority`
   - Credibilidad del experto.
   - Base visual: `ExpertEventAuthority`, pero con config `offer.authority`.

6. `ExpertOfferTestimonials`
   - Grid de testimonios.
   - Base visual: `ExpertEventTestimonials`.

7. `ExpertOfferValueStack`
   - Oferta principal, entregables, valores, precio regular, precio actual.
   - Base psicologica: `ExpertBonusStack`/legacy `ExpertOfferStack`.
   - CTA con `ExpertOfferCta`.

8. `ExpertOfferBonuses`
   - Bonos especificos.
   - Ya existe, puede evolucionar para mostrar valores y orden.

9. `ExpertOfferGuarantee`
   - Garantia o seguridad de compra.
   - Ya existe.

10. `ExpertOfferFaq`
   - Preguntas frecuentes.
   - Ya existe.

11. `ExpertOfferFinalCta`
   - Cierre final con Big Promise resumida, precio y CTA.
   - Reemplazaria la seccion inline actual en `ExpertOfferPage`.

## Recomendacion de implementacion posterior

- Mantener `ExpertOfferPage` como orquestador de canal y pasar `trackingEnabled`/`trafficChannel` a todos los CTAs.
- Migrar copy de oferta a `funnelConfig.offer`; evitar componentes que lean `DNA.copy` directamente en `/oferta`.
- Reusar `KurukinPlayer` directamente para no duplicar logica de video.
- Reusar primitives de `event` para consistencia MSM/expert: `ExpertEventSection`, `ExpertEventCard`, `ExpertEventImageFrame`, `expertEventText`.
- No reutilizar `ExpertCtaButton` en `/oferta` hasta que soporte tracking condicional por canal y `offer.checkoutUrl`.
- Evitar countdowns hardcodeados; si se usa urgencia, moverla a config.
