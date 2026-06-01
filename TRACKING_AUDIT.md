# Tracking Audit MSM

Fecha: 2026-06-01

## Resumen ejecutivo

El proyecto tiene un servicio central de tracking en `src/core/services/analytics.ts` que puede enviar eventos a Meta Pixel, TikTok Pixel y un relay CAPI/Events API agnostico. La deduplicacion Meta browser/server esta bien planteada a nivel tecnico porque cada llamada a `trackEvent()` crea un `eventId` unico y lo reutiliza en Meta Pixel como `eventID` y en CAPI como `event_id`.

En el `.env` actual de `source_boilerplate`, Meta Pixel esta activo con `VITE_META_PIXEL_ID=1767372344644632`; TikTok Pixel y CAPI siguen apagados porque `VITE_TIKTOK_PIXEL_ID` y `VITE_CAPI_RELAY_URL` estan vacios. Por eso hoy el formulario puede capturar leads via `/capture.php` y enviar eventos Meta browser-side, pero no envia eventos CAPI/server-side.

La separacion importante: `/capture.php` no es CAPI; es solo relay de captura hacia FluentCRM. CAPI depende exclusivamente de `VITE_CAPI_RELAY_URL` y, al estar vacio, `analytics.trackEvent()` retorna `capiSent: false` sin hacer ningun `fetch` server-side. Tambien hay riesgo de perdida de eventos en el click de WhatsApp/redireccion porque no se trackea ese paso y porque el tracking de `Lead` ocurre despues del webhook de captura.

## CAPI relay actual y variables necesarias

Estado de variables en `.env` actual:

- `VITE_META_PIXEL_ID=1767372344644632`: activo; habilita Meta Pixel browser.
- `VITE_TIKTOK_PIXEL_ID=`: vacio; TikTok Pixel no se carga ni envia eventos.
- `VITE_CAPI_RELAY_URL=`: vacio; CAPI relay no se invoca.
- `VITE_SITE_ID=MANEJARSINMIEDO`: se usa como `siteId` en el payload CAPI si se activa el relay.
- `VITE_CAPTURE_WEBHOOK_URL=/capture.php`: solo FluentCRM/captura; no es CAPI.

Como se envian hoy los eventos Meta browser:

- `src/dna.config.ts` lee `VITE_META_PIXEL_ID` en `DNA.tracking.metaPixelId`.
- `src/core/config/funnel.config.ts` lo expone como `funnelConfig.integrations.metaPixelId`.
- `src/core/services/analytics.ts` normaliza ese valor en cada `trackEvent()`.
- Si hay pixel ID y browser, carga `https://connect.facebook.net/en_US/fbevents.js`, inicializa `fbq('init', pixelId)` y envia `fbq('track', eventName, data, { eventID: eventId })` para eventos estandar de Meta. Para eventos no estandar usa `trackCustom`.
- Cada evento genera un `eventId` unico; ese ID ya queda listo para deduplicacion browser/server si despues se activa CAPI.

Como se enviaria CAPI si `VITE_CAPI_RELAY_URL` estuviera configurado:

- `trackEvent()` resolveria `funnelConfig.integrations.capiWebhookUrl`.
- Despues de intentar Meta/TikTok browser, armaria `buildCapiPayload()`.
- Enviaria `fetch(capiWebhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(capiPayload), keepalive: true })`.
- El resultado retornaria `capiSent: response.ok` y `capiStatus: response.status`.

Payload que manda a CAPI:

```json
{
  "siteId": "MANEJARSINMIEDO",
  "provider": "agnostic",
  "event_name": "Lead",
  "event_id": "uuid",
  "event_time": 1710000000,
  "event_source_url": "https://aprendermotores.com/...",
  "action_source": "website",
  "anonymous_id": "uuid",
  "integrations": {
    "metaPixelId": "1767372344644632",
    "tiktokPixelId": null
  },
  "attribution": {
    "utm_source": null,
    "utm_medium": null,
    "utm_campaign": null,
    "utm_term": null,
    "utm_content": null,
    "utm_id": null,
    "fbclid": null,
    "ttclid": null,
    "landing_page": "/...",
    "referrer": null,
    "captured_at": "..."
  },
  "cookies": {
    "_fbp": "fb.1...",
    "_fbc": "fb.1...",
    "ttclid": null
  },
  "data": {
    "source": "AppLoad"
  },
  "user_data": {
    "external_id": "uuid",
    "client_user_agent": "...",
    "fbp": "fb.1...",
    "fbc": "fb.1...",
    "ttclid": "...",
    "em": "sha256",
    "ph": "sha256",
    "fn": "sha256",
    "ln": "sha256"
  }
}
```

Notas sobre campos pedidos:

- `event_name`: si, campo top-level.
- `event_id`: si, campo top-level; es el mismo que Meta browser recibe como `eventID`.
- `siteId`: si, campo top-level desde `VITE_SITE_ID`.
- `user_data`: si, incluye `external_id`, `client_user_agent`, `fbp`, `fbc`, `ttclid` y datos personales hasheados si el evento los trae.
- `custom_data`: no existe con ese nombre; el codigo manda el objeto del evento bajo `data`.
- `page_url`: para CAPI siempre existe como `event_source_url`; en eventos `Lead` del formulario MSM tambien se manda dentro de `data.page_url`.
- `fbp/fbc`: si existen en cookies se mandan; si falta `_fbp`, el helper crea uno; `_fbc` se crea solo si hay `fbclid`.

Eventos que se disparan hoy con solo `VITE_META_PIXEL_ID`:

- `PageView`: si, en `src/App.tsx` por cada cambio de ruta, incluido `/` y `/confirmacion`.
- `Lead`: si aplica cuando el formulario MSM recibe OK de `/capture.php`; usa `capture.tracking.eventName`, actualmente `Lead`.
- `CompleteRegistration`: si, en `/confirmacion`, una vez por sesion mediante `sessionStorage`.
- CTA clicks del funnel event MSM: no hay tracking dedicado para clicks de anclas ni para el boton/link de WhatsApp. En componentes VSL/tripwire reutilizables si existen clicks `InitiateCheckout`, pero no son el flujo principal del evento MSM actual.

Que no funciona con `VITE_CAPI_RELAY_URL` vacio:

- No hay eventos Meta server-side.
- No hay deduplicacion browser/server real en Meta porque falta el lado server.
- No se hace `POST` a ningun relay CAPI.
- `TrackEventResult.capiSent` queda `false` y `capiStatus` queda `null`.
- `/capture.php` sigue funcionando solo como relay de FluentCRM, pero no reenvia eventos a Meta CAPI.

Backend local de CAPI relay:

- No se encontro endpoint local de CAPI relay en este repo. Las coincidencias locales son el cliente en `src/core/services/analytics.ts`, documentacion y `capture.php`.
- Para activar CAPI se necesita configurar un endpoint externo en `VITE_CAPI_RELAY_URL`. Ese endpoint debe aceptar el JSON agnostico anterior, validar `siteId`, mapear `event_name`, `event_id`, `event_source_url`, `user_data` y `data` hacia Meta Conversions API, y autenticar contra Meta con el access token/pixel del servidor.

## Arquitectura actual

- `src/main.tsx`: monta React con `BrowserRouter` y `VisitorProvider`.
- `src/core/visitor/VisitorContext.tsx`: al cargar la app consulta datos de visitante con `fetchVisitorData()` y los deja disponibles via contexto.
- `src/core/visitor/fetchVisitorData.ts`: usa `DNA.tracking.visitorApiUrl`, por defecto `https://ipapi.co/json/`, y cachea en `sessionStorage` bajo `visitor_data`.
- `src/core/visitor/visitorPayload.ts`: normaliza `ip`, `city`, `region`, `country_name`, `country_code`, `timezone`, `currency` y `country_calling_code` a formato plano y anidado.
- `src/dna.config.ts`: lee variables `VITE_*` y define `DNA.tracking`.
- `src/core/config/funnel.config.ts`: expone `funnelConfig.integrations` desde `DNA.tracking`.
- `src/core/services/analytics.ts`: inicializa pixels, genera atribucion/cookies/event IDs y envia browser pixel + CAPI.
- `src/App.tsx`: dispara `PageView` en cada cambio de ruta.
- `src/components/themes/expert/event/ExpertEventRegistrationForm.tsx`: envia el lead a `capture.webhookUrl`, luego dispara `Lead`, luego redirige a `/confirmacion`.
- `src/pages/Success.tsx`: dispara `CompleteRegistration` una vez por sesion y redirige a WhatsApp despues de 10 segundos.
- `public/capture.php`: no interactua con Meta/TikTok/CAPI. Solo normaliza el payload del formulario y lo reenvia a FluentCRM.

Referencias principales:

- `src/core/services/analytics.ts:628` crea y coordina cada evento.
- `src/core/services/analytics.ts:630` genera `eventId`.
- `src/core/services/analytics.ts:645` envia Meta Pixel con `{ eventID: eventId }`.
- `src/core/services/analytics.ts:601` envia CAPI con `event_id`.
- `src/core/services/analytics.ts:667` y `src/core/services/analytics.ts:669` envian TikTok browser sin `event_id` explicito.
- `src/dna.config.ts:496` a `src/dna.config.ts:506` definen tracking env.
- `src/core/config/funnel.config.ts:410` a `src/core/config/funnel.config.ts:415` conectan tracking con el funnel.

## Pixels e integraciones detectadas

| Integracion | Existe codigo | Activa en `.env` actual | Notas |
| --- | --- | --- | --- |
| Meta Pixel | Si | No | Requiere `VITE_META_PIXEL_ID`. Carga `https://connect.facebook.net/en_US/fbevents.js`. |
| TikTok Pixel | Si | No | Requiere `VITE_TIKTOK_PIXEL_ID`. Carga `https://analytics.tiktok.com/i18n/pixel/events.js`. |
| CAPI relay | Si | No | Requiere `VITE_CAPI_RELAY_URL`. Payload agnostico via `fetch`. |
| Visitor API | Si | Si por fallback | Usa `VITE_VISITOR_API_URL` o `https://ipapi.co/json/`. |
| FluentCRM capture | Si | Si | `/capture.php` recibe leads y los reenvia a CRM. No envia eventos Pixel/CAPI. |
| Otros pixels | No | No | No se detectaron Google Analytics, Google Ads, GTM u otros tags. |

## Eventos actuales

| Evento | Donde se dispara | Momento | Browser Meta | Browser TikTok | CAPI | Estado MSM actual |
| --- | --- | --- | --- | --- | --- | --- |
| `PageView` | `src/App.tsx:30` | Cada ruta: `/`, `/confirmacion`, fallback redirigido | Si hay Pixel ID | Si hay Pixel ID | Si hay relay | Inactivo por env |
| `Lead` | `ExpertEventRegistrationForm.tsx:148` | Despues de respuesta OK de `/capture.php` | Si hay Pixel ID | Si hay Pixel ID | Si hay relay | Inactivo por env |
| `CompleteRegistration` | `Success.tsx:25` | Al montar `/confirmacion`, una vez por `sessionStorage` | Si hay Pixel ID | Si hay Pixel ID | Si hay relay | Inactivo por env |
| `InitiateCheckout` | `ExpertCtaButton.tsx:23`, `PricingCard.tsx:42` | Click a checkout en flujo VSL/tripwire | Si hay Pixel ID | Si hay Pixel ID | Si hay relay | No usado en la ruta event MSM actual |
| `ViewContent` | No encontrado | No se dispara | No | No | No | Faltante si se requiere |
| Custom events | No encontrados | No se disparan | No | No | No | No aplica |

Notas de ubicacion:

- Los CTAs del evento (`ExpertEventCta`) son enlaces ancla y no trackean clicks. Ver `ExpertEventCta.tsx:17`.
- La pagina de confirmacion dispara `PageView` por `App.tsx` y tambien `CompleteRegistration` por `Success.tsx`.
- La redireccion automatica a WhatsApp ocurre en `Success.tsx:51`, pero no hay evento especifico de WhatsApp click/redirect.

## CAPI actual

Endpoint:

- `funnelConfig.integrations.capiWebhookUrl`, derivado de `VITE_CAPI_RELAY_URL`.
- Si esta vacio, `trackEvent()` retorna `capiSent: false` sin intentar enviar.

Payload enviado:

```json
{
  "siteId": "APRENDER_MOTORES",
  "provider": "agnostic",
  "event_name": "Lead",
  "event_id": "uuid",
  "event_time": 1710000000,
  "event_source_url": "https://...",
  "action_source": "website",
  "anonymous_id": "uuid",
  "integrations": {
    "metaPixelId": "...",
    "tiktokPixelId": "..."
  },
  "attribution": {
    "utm_source": null,
    "utm_medium": null,
    "utm_campaign": null,
    "utm_term": null,
    "utm_content": null,
    "utm_id": null,
    "fbclid": null,
    "ttclid": null,
    "landing_page": "/...",
    "referrer": "...",
    "captured_at": "..."
  },
  "cookies": {
    "_fbp": "...",
    "_fbc": "...",
    "ttclid": "..."
  },
  "data": {},
  "user_data": {
    "external_id": "anonymous_id",
    "client_user_agent": "...",
    "fbp": "...",
    "fbc": "...",
    "ttclid": "...",
    "em": "sha256",
    "ph": "sha256",
    "fn": "sha256",
    "ln": "sha256"
  }
}
```

Campos presentes:

- `siteId`: si, desde `DNA.tracking.siteId`.
- `event_name`: si.
- `event_id`: si.
- `user_data`: si, con `external_id`, user agent, `fbp`, `fbc`, `ttclid`, email/phone/nombre/apellido hasheados si existen.
- `custom_data`: no existe como campo separado; el payload usa `data`.
- visitor data: solo via `data` para eventos que lo incluyan. En `Lead` MSM se manda `meta` con `ip`, ciudad, pais, zona horaria y moneda.
- `fbp`/`fbc`: si, se leen o crean cookies.
- `ttclid`: si, desde URL/cookie.

Campos no presentes o incompletos:

- IP no se envia en `user_data`; solo puede ir en `data.meta` para `Lead`.
- City/country no se envia en `user_data`; solo puede ir en `data.meta`.
- Email raw no se envia a CAPI como raw; se hashea antes de armar `user_data`. El email raw si queda dentro de `data.lead.email` para `Lead`.
- Phone no aplica en el formulario MSM actual porque `whatsapp` esta deshabilitado.
- No se incluyen `event_id`/`eventID` en el payload browser TikTok.

## Deduplicacion browser/server

Meta:

- Correcta a nivel evento: `trackEvent()` genera un `eventId` unico por llamada.
- El mismo ID se usa en Meta browser como `eventID` y en CAPI como `event_id`.
- El ID es persistente durante esa llamada concreta.
- No se persiste entre reintentos o recargas, lo cual esta bien para eventos distintos.

TikTok:

- Incompleta: el mismo `eventId` se envia a CAPI, pero el evento browser de TikTok no recibe explicitamente ese ID.
- Resultado esperado si se activa TikTok Pixel + Events API: riesgo de duplicacion porque la plataforma no tendria un identificador comun browser/server para deduplicar.

Eventos sin pair:

- Si `VITE_CAPI_RELAY_URL` esta vacio y los pixels estan configurados, habra browser-only.
- Si los Pixel IDs estan vacios y `VITE_CAPI_RELAY_URL` esta configurado, habra server-only.
- Si un script Pixel falla al cargar, CAPI puede enviarse igualmente y producir server-only.
- En el entorno actual no hay browser pair ni server pair porque Meta/TikTok/CAPI estan vacios.

## Identificadores y atribucion capturados

| Identificador | Estado | Fuente |
| --- | --- | --- |
| Email | Si en `Lead` | Formulario MSM, raw en `data.lead.email`, hash en `user_data.em`. |
| Phone | Soportado pero no usado en MSM | `extractUserData()` acepta `phone`, `whatsapp` o `lead.whatsapp`. |
| IP | Parcial | Visitor API en formulario lead; no en `user_data` CAPI. |
| User agent | Si | `window.navigator.userAgent` en `user_data.client_user_agent`. |
| City/country | Parcial | Visitor API en `data.meta` del Lead y payload de `/capture.php`. |
| `_fbp` | Si | Lee cookie o crea cookie propia si falta. |
| `_fbc` | Si si hay `fbclid` | Crea desde `fbclid`. |
| `fbclid` | Si | URL attribution guardada en local/session storage. |
| `ttclid` | Si | URL/cookie, enviado a CAPI. |
| Page URL | Si | CAPI `event_source_url`; Lead ademas incluye `page_url`. |
| Referrer | Si | Attribution `referrer`. |
| UTM | Si | Attribution `utm_*`. |

## Riesgos detectados

1. Pixels/CAPI apagados por configuracion actual.
   - `.env` no define `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID` ni `VITE_CAPI_RELAY_URL`.
   - Impacto: no hay eventos en Meta/TikTok desde el build actual.

2. TikTok dedup incompleta.
   - `event_id` va a CAPI, pero no al browser TikTok.
   - Impacto: al activar Events API + TikTok Pixel puede haber doble conteo.

3. `Lead` se dispara despues del webhook de captura.
   - Si `/capture.php` o FluentCRM falla, no se envia `Lead` a pixels/CAPI.
   - Impacto: perdida de eventos de conversion aunque el usuario haya intentado registrarse.

4. Redireccion a WhatsApp sin evento dedicado.
   - No hay evento para click manual ni para redireccion automatica.
   - Impacto: no se mide el paso final hacia WhatsApp.

5. CTAs de scroll del evento no estan trackeados.
   - `ExpertEventCta` solo renderiza `<a>`.
   - Impacto: no se mide intencion previa al formulario.

6. No hay `ViewContent`.
   - Solo `PageView` mide la vista de landing.
   - Impacto: menor granularidad para audiencias o optimizacion.

7. Errores silenciosos en analytics.
   - El servicio captura errores de Pixel/CAPI y devuelve flags, pero los callers casi nunca registran el resultado.
   - Impacto: fallas de carga/env/relay pueden pasar desapercibidas.

8. PII raw dentro de `data`.
   - `user_data` hashea email, pero `data.lead.email` conserva email raw para CAPI relay.
   - Impacto: depende de que el relay haga hashing/redaccion antes de reenviar a Meta/TikTok. Conviene definir contrato claro.

9. Cookies `_fbp` creadas manualmente.
   - Si Meta Pixel no esta activo aun, el sistema crea `_fbp`.
   - Impacto: puede ayudar al matching, pero conviene validar formato/consentimiento y evitar sorprender al usuario si se agrega CMP.

10. Consentimiento no modelado.
   - No hay capa de consentimiento antes de cargar pixels, escribir cookies o consultar visitor API.
   - Impacto: riesgo legal/privacidad segun pais y politicas internas.

11. React StrictMode duplica efectos en desarrollo.
   - `main.tsx` usa `StrictMode`.
   - Impacto: en dev puede verse doble `PageView`; en production build no deberia pasar.

12. `/capture.php` registra payloads con email y datos de ubicacion.
   - El snapshot de debug incluye `email`, visitor fields y custom fields.
   - Impacto: PII en logs del servidor.

## Variables env requeridas

Minimas para captura actual:

- `VITE_CAPTURE_WEBHOOK_URL=/capture.php`
- `VITE_CAPTURE_LIST_SLUG=msm-junio-2026`
- `VITE_WHATSAPP_GROUP_URL=...`

Requeridas para tracking Meta/TikTok/CAPI:

- `VITE_META_PIXEL_ID`
- `VITE_TIKTOK_PIXEL_ID`
- `VITE_CAPI_RELAY_URL`
- `VITE_SITE_ID=APRENDER_MOTORES`

Opcionales / runtime:

- `VITE_VISITOR_API_URL`
- `VITE_META_PIXEL_SCRIPT_URL`
- `VITE_TIKTOK_PIXEL_SCRIPT_BASE_URL`
- `VITE_DOMAIN`
- `VITE_SITE_TITLE`
- `VITE_SITE_DESCRIPTION`
- `VITE_SOCIAL_IMAGE`

Estado actual observado:

- `.env` define WhatsApp, `/capture.php` y lista.
- `.env.example` deja `VITE_CAPI_RELAY_URL`, `VITE_META_PIXEL_ID` y `VITE_TIKTOK_PIXEL_ID` vacios.

## Recomendaciones por prioridad

### P0 - Activacion y validacion basica

1. Definir `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID` y `VITE_CAPI_RELAY_URL` en el entorno real.
2. Confirmar que el relay CAPI acepta exactamente el payload actual (`provider: agnostic`, `data`, `user_data`, `integrations`).
3. Validar en Meta Events Manager que `PageView`, `Lead` y `CompleteRegistration` lleguen con el mismo `event_id` browser/server.
4. Validar en TikTok Events Manager si el evento browser recibe `event_id`; si no, corregir antes de activar Events API en paralelo.

### P1 - Dedup y eventos criticos

1. Pasar `event_id` al Pixel TikTok en el formato soportado por el SDK/Events API usado por el relay.
2. Agregar tracking de redireccion/click a WhatsApp, idealmente con `event_id` compartido si tambien se envia server-side.
3. Decidir si el `Lead` debe dispararse antes o despues de `/capture.php`. Una opcion segura es trackear intento y exito con eventos separados.
4. Evitar PII raw dentro de `data` para CAPI, o documentar que el relay la redacciona/hashea antes de reenviar a proveedores.

### P2 - Observabilidad y calidad

1. Loguear en modo debug los resultados de `trackEvent()` sin exponer PII.
2. Agregar validacion de config al iniciar: advertir si hay relay sin pixel IDs, pixel IDs sin relay, o IDs vacios en produccion.
3. Agregar `ViewContent` si se necesita una senal intermedia para audiencias/optimizacion.
4. Reducir logs de PII en `capture.php` o enmascarar email.

### P3 - Privacidad y consentimiento

1. Introducir una capa de consentimiento antes de cargar pixels, escribir cookies de tracking y consultar visitor API.
2. Separar consentimientos de analytics, ads y funcionales.
3. Documentar politica de retencion de `visitor_data` y logs.

## Plan de implementacion seguro por fases

Fase 1: Verificacion sin cambios funcionales

- Configurar variables en staging.
- Probar `/`, submit de formulario, `/confirmacion` y redireccion WhatsApp.
- Comparar eventos browser/server en Meta y TikTok.
- Confirmar payload real recibido por relay CAPI.

Fase 2: Dedup TikTok

- Ajustar envio browser TikTok para incluir el mismo `event_id` que CAPI.
- Probar `PageView`, `Lead` y `CompleteRegistration`.
- Confirmar que TikTok deduplica en Events Manager.

Fase 3: Eventos faltantes del funnel MSM

- Agregar evento para click en CTA ancla si se quiere medir intencion.
- Agregar evento para WhatsApp manual y automatico.
- Evaluar `ViewContent` en landing o seccion clave.

Fase 4: Robustez y privacidad

- Decidir estrategia de `Lead`: intento vs exito.
- Quitar o hashear PII raw del payload CAPI si el relay no lo necesita.
- Enmascarar email en logs de `capture.php`.
- Agregar consentimiento antes de cookies/pixels/visitor API.

Fase 5: Monitoreo

- Dashboard basico por `event_name`, `event_id`, `provider`, status de relay.
- Alertas si baja `Lead`, si falla CAPI, o si hay eventos server-only/browser-only por encima de un umbral.

## Conclusion

La base de tracking esta bien centralizada y Meta dedup esta correctamente disenada. La implementacion no esta activa en el entorno actual por falta de env vars de pixels/CAPI. Antes de invertir en eventos adicionales, conviene activar y validar el circuito minimo, corregir dedup TikTok y definir un contrato claro del relay para PII, IP, user agent y `custom_data`.
