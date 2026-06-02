# Component Agnostic Audit

Auditoria solicitada para identificar acoplamientos MSM/Dario en:

- `src/components/themes/expert/event/`
- `src/pages/Success.tsx`
- `public/capture.php`
- `src/dna.config.ts`
- `src/core/config/funnel.config.ts`

No se modifico codigo de aplicacion. Este archivo es solo reporte.

## Resumen ejecutivo

Los componentes `expert/event` ya consumen gran parte del contenido desde `funnelConfig.content.event` y `DNA.copy.event`, pero todavia no son completamente agnosticos. Los acoplamientos mas importantes estan en:

- Payload del formulario: `source: 'msm-event'`, `event_name: 'Maneja Sin Miedo'` y el tipo `MsmEventLeadPayload`.
- Copy/alt text en componentes: Dario, Maneja Sin Miedo, mujer conduciendo, registro gratuito, beneficios compactos y aria-label de WhatsApp.
- Rutas/anclas hardcodeadas: `#event-promise`, `id="event-promise"`, `/a/confirmacion`, `/confirmacion`.
- `public/capture.php`: webhooks FluentCRM con dominio `crm.aprendermotores.com` hardcodeado.
- Estructura de assets de evento en DNA/config: combina campos semanticos y campos numerados (`agenda1/2/3`), lo que hace que algunos componentes sigan con supuestos de MSM.

## 1. Contenido hardcodeado

- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:11` define `compactBenefits = ['Evento gratuito online', 'Cupos limitados']` aunque `DNA.copy.event.finalCta.bullets` ya existe en `src/dna.config.ts:911`.
- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:22` renderiza `Registro gratuito` directamente en el componente.
- `src/components/themes/expert/event/ExpertEventTestimonials.tsx:30` agrega comillas alrededor del testimonio con `"${item.quote}"`. No es MSM, pero es copy/presentacion editorial fija.
- `src/pages/Success.tsx:85` muestra el numero visual `1` como paso fijo. No es MSM, pero si se quiere una success page agnostica/multi-paso, debe parametrizarse.

## 2. Assets hardcodeados

- `src/components/themes/expert/event/ExpertEventAgenda.tsx:11` reconstruye `agendaImages` desde `agenda1`, `agenda2`, `agenda3` en lugar de usar `content.assets.agendaImages`.
- `src/components/themes/expert/event/ExpertEventPromise.tsx:14` usa `content.assets.agenda3` como imagen de promise. Eso acopla la seccion promise a la tercera imagen de agenda.
- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:53` usa `content.assets.finalCta`, correcto, pero el `alt` sigue hardcodeado en la linea 54.
- `src/dna.config.ts:444` a `460` define `msmEventAssets` con rutas `/assets/msm/...`. Esto esta bien como configuracion del sitio MSM, pero conviene que el nombre interno sea neutral si el boilerplate se reutiliza.
- `src/dna.config.ts:557` a `572` duplica assets: `agenda1/agenda2/agenda3` y `agendaImages`, `authority` y `authorityImage`, `finalCta` y `finalCtaImage`. Esta duplicacion aumenta el riesgo de que componentes usen el campo menos agnostico.

## 3. Rutas hardcodeadas

- `src/components/themes/expert/event/ExpertEventHero.tsx:99` usa `href="#event-promise"`.
- `src/components/themes/expert/event/ExpertEventPromise.tsx:12` fija `id="event-promise"`.
- `src/core/config/funnel.config.ts:398` fija `confirmationPath: '/a/confirmacion'` para ads.
- `src/core/config/funnel.config.ts:404` fija `confirmationPath: '/confirmacion'` para organic.
- `src/dna.config.ts:483` y `579` tambien fijan `/confirmacion`; esto puede ser correcto en DNA, pero ahora `funnel.config.ts` no deriva todas las rutas desde DNA.
- `src/pages/Success.tsx:57` contiene nombres especificos de env vars para WhatsApp por canal. No es ruta navegable, pero si es routing/config leakage desde la pagina.

## 4. Labels o copy hardcodeado

- `src/components/themes/expert/event/ExpertEventAuthority.tsx:38`: `Darío Avila, guía del evento Maneja Sin Miedo`.
- `src/components/themes/expert/event/ExpertEventPain.tsx:49`: `Mujer sentada dentro del auto enfrentando inseguridad al manejar`.
- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:54`: `Mujer conduciendo con más confianza después de reservar su cupo`.
- `src/components/themes/expert/event/ExpertEventTheme.tsx:33`: footer logo alt `Maneja Sin Miedo`.
- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:22`: `Registro gratuito`.
- `src/components/themes/expert/event/ExpertEventFinalCta.tsx:11`: `Evento gratuito online`, `Cupos limitados`.
- `src/pages/Success.tsx:112`: `Progreso de redirección a WhatsApp`.
- `src/pages/Success.tsx:28`: analytics payload `source: 'SuccessPage'`. Puede quedar en core/analytics si se considera evento tecnico, pero no deberia estar en copy visual.

## 5. Nombres MSM/Dario hardcodeados

- `src/components/themes/expert/event/ExpertEventAuthority.tsx:38`: Dario y Maneja Sin Miedo en alt.
- `src/components/themes/expert/event/ExpertEventRegistrationForm.tsx:15`: tipo `MsmEventLeadPayload`.
- `src/components/themes/expert/event/ExpertEventRegistrationForm.tsx:23` y `118`: `source: 'msm-event'`.
- `src/components/themes/expert/event/ExpertEventRegistrationForm.tsx:29` y `124`: `event_name: 'Maneja Sin Miedo'`.
- `src/components/themes/expert/event/ExpertEventTheme.tsx:33`: footer alt `Maneja Sin Miedo`.
- `public/capture.php:9` y `10`: dominio `crm.aprendermotores.com`.
- En `src/dna.config.ts`, los valores MSM/Dario estan mayormente bien ubicados en DNA: `productName` en linea 438, `landingSlug` fallback en linea 466, `eventName` en linea 750, quick benefit `En vivo con Darío` en linea 757, authority intro en linea 893.

## 6. Logica especifica del sitio

- `ExpertEventRegistrationForm` siempre captura `firstName` y `email` aunque `DNA.forms.captureFields` existe (`src/dna.config.ts:582`). El formulario no usa `capture.fields` para decidir campos.
- `ExpertEventRegistrationForm` siempre envia `event_name: 'Maneja Sin Miedo'` y `source: 'msm-event'`, en vez de derivarlos de `content.hero.eventName`, `DNA.siteId`, `DNA.landingSlug` o una config de tracking/capture.
- `ExpertEventRegistrationForm` redirige con `channelConfig.confirmationPath` (`src/components/themes/expert/event/ExpertEventRegistrationForm.tsx:174`), pero `capture.successRedirectType` y `capture.successRedirectUrl` ya existen en `funnel.config.ts:386`.
- `Success.tsx` siempre asume flujo de WhatsApp: resuelve `whatsappGroupUrl`, hace countdown y deshabilita redirect si no hay URL. Esto sirve para MSM, pero no para un evento que confirme por email, calendario, checkout o thank-you simple.
- `Success.tsx` tiene `REDIRECT_DELAY_SECONDS = 10` en linea 8. El delay deberia ser configurable si la pagina de exito es parte del DNA del funnel.
- `public/capture.php` solo soporta canales `ads` y `organic` (`public/capture.php:185`) y selecciona dos webhooks FluentCRM especificos. Como proxy de captura de este sitio esta bien; como core agnostico no.
- `ExpertEventHero` divide el nombre del evento por palabras y acentua la ultima (`src/components/themes/expert/event/ExpertEventHero.tsx:18` a `21`). Es una decision visual muy ligada a nombres tipo "Maneja Sin Miedo"; para otros nombres puede producir resultados raros.
- Varios iconos estan asignados por indice: quick benefits (`ExpertEventHero.tsx:22`), badges de autoridad (`ExpertEventAuthority.tsx:10`), agenda/promise/pain. No es MSM explicito, pero el componente asume cantidad/semantica de items.

## 7. Que ya esta bien parametrizado

- La mayoria del copy principal del evento viene de `DNA.copy.event` y se resuelve en `funnelConfig.content.event` (`src/core/config/funnel.config.ts:363` a `378`).
- Hero: eyebrow, eventName, dateLabel, headline, subheadline, quickBenefits, imageAlt, labels de CTA y submitting label ya estan en DNA (`src/dna.config.ts:748` a `764`).
- Secciones promise, transformation, agenda, whyFearPersists, pain, testimonials, authority y finalCta ya tienen textos principales en DNA (`src/dna.config.ts:784` a `918`).
- Countdown: fecha, label, expiredLabel y unidades estan parametrizadas (`src/dna.config.ts:746` a `774`).
- El anchor de registro principal `registrationAnchorId` esta en DNA y se usa en varios CTAs (`src/dna.config.ts:746`).
- Success page: eyebrow, title, description, WhatsApp label, countdown lead y mensaje de URL faltante estan en DNA (`src/dna.config.ts:713` a `722`).
- Tracking IDs, pixel URLs, webhook de captura frontend, visitor API y WhatsApp URLs principales se leen desde ENV en `src/dna.config.ts:496` a `505` y `575` a `581`.
- `funnel.config.ts` ya funciona como capa core de resolucion entre DNA y componentes.

## 8. Que conviene mover a DNA

- Alt texts de imagenes por seccion:
  - `event.assets.logoAlt` o `event.hero.logoAlt`.
  - `event.authority.imageAlt`.
  - `event.pain.imageAlt`.
  - `event.finalCta.imageAlt`.
  - `event.promise.imageAlt`.
- Anchors de secciones secundarias:
  - `event.anchors.promise` para reemplazar `#event-promise`.
  - Mantener `registrationAnchorId` como esta o convertirlo en `event.anchors.registration`.
- `finalCta.eyebrow` para reemplazar `Registro gratuito`.
- Usar `finalCta.bullets` para reemplazar `compactBenefits`.
- `event.tracking.source` o `forms.capture.source` para reemplazar `msm-event`.
- `event.tracking.eventName` o `event.analytics.contentName` para reemplazar `event_name: 'Maneja Sin Miedo'`.
- Config de success page:
  - `successPage.redirectDelaySeconds`.
  - `successPage.progressAriaLabel`.
  - `successPage.stepLabel` o `successPage.stepNumber` si el indicador `1` se mantiene.
  - `successPage.redirectKind` si no siempre sera WhatsApp.
- Config por canal:
  - `trafficChannels.ads.confirmationPath`.
  - `trafficChannels.organic.confirmationPath`.
  - `trafficChannels.ads.captureListSlug`.
  - `trafficChannels.organic.captureListSlug`.
  - `trafficChannels.*.trackingEnabled`.
- Assets por seccion con nombres semanticos, evitando `agenda1/2/3` como API publica. Ejemplo: `event.agenda.items[].image`, `event.promise.image`, `event.finalCta.image`.

## 9. Que conviene dejar en ENV

- URLs secretas o operativas:
  - `VITE_CAPTURE_WEBHOOK_URL`.
  - `VITE_CAPI_RELAY_URL`.
  - `VITE_WHATSAPP_GROUP_URL`.
  - `VITE_ORGANIC_WHATSAPP_GROUP_URL`.
  - `VITE_CHECKOUT_URL`.
- IDs externos:
  - `VITE_META_PIXEL_ID`.
  - `VITE_TIKTOK_PIXEL_ID`.
  - `VITE_SITE_ID` si cambia por deployment.
  - Product IDs de checkout si no deben versionarse.
- URLs de scripts/API que pueden cambiar por ambiente:
  - `VITE_VISITOR_API_URL`.
  - `VITE_META_PIXEL_SCRIPT_URL`.
  - `VITE_TIKTOK_PIXEL_SCRIPT_BASE_URL`.
- En `public/capture.php`, los webhooks FluentCRM deberian venir de env del servidor, no de DNA del frontend, porque incluyen hashes sensibles y no deberian quedar versionados ni expuestos.

## 10. Que debe seguir en core

- Tipos genericos del funnel: `FunnelType`, `FunnelTheme`, `TrafficChannelConfig`, `CaptureFormConfig`, `EventFunnelContentConfig`.
- Resolucion de DNA a `funnelConfig`: mantener `src/core/config/funnel.config.ts` como adaptador entre DNA y componentes.
- Calculo de countdown (`getRemainingTime`) puede seguir en componente/helper core porque es comportamiento generico.
- Routing de canal (`getTrafficChannel`) debe seguir en core.
- Servicios de analytics y visitor payload deben seguir en core.
- Validacion generica de email puede seguir en core o helper compartido si se reutiliza.
- El proxy `capture.php` puede seguir como pieza server-side, pero su configuracion sensible y upstreams deben venir de ENV del servidor. La logica de normalizacion de visitor/custom fields es core/server utilitaria; la seleccion de FluentCRM por canal es configuracion.

## Priorizacion sugerida

1. Mover `source`, `event_name` y nombre del tipo `MsmEventLeadPayload` a nombres/config agnosticos.
2. Parametrizar alts, `Registro gratuito`, `finalCta.bullets`, progress aria-label y footer alt.
3. Reemplazar `#event-promise`/`id="event-promise"` por anchors configurados.
4. Hacer que `funnel.config.ts` derive `confirmationPath` por canal desde DNA.
5. Mover webhooks de `public/capture.php` a ENV del servidor.
6. Normalizar assets de evento a campos semanticos por seccion y retirar uso publico de `agenda1/2/3`.
