# Parent Extraction Plan

Auditoria para preparar este repo como repo padre clonable sin romper el sitio actual de MSM. No se modifico runtime, comportamiento, diseno ni `public/capture.php`.

## Estado actual

El repo ya esta cerca de un boilerplate clonable: existe `CLONE_KIT/`, la configuracion editable se concentra en `src/dna.config.ts`, la resolucion runtime vive en `src/core/config/funnel.config.ts`, y los componentes principales consumen `DNA` o `funnelConfig`.

El sitio actual todavia es el primer hijo implicito. MSM no esta aislado en una carpeta propia: su marca, copy, assets, rutas, evento, oferta, success, listas de captura y defaults de dominio viven mezclados en `src/dna.config.ts`, `.env.example`, `vite.config.ts`, `deploy.sh`, `docker-stack-boilerplate.yaml`, `public/assets/msm/` y `public/capture.php`.

La arquitectura activa es:

- React/Vite en `src/main.tsx`, `src/App.tsx` e `index.html`.
- Theme/funnel actual: `theme: 'expert'`, `funnelType: 'event'`.
- Rutas compartidas: `/`, `/a`, `/oferta`, `/a/oferta`, `/confirmacion`, `/a/confirmacion`.
- Canal ads por prefijo `/a`, organico para el resto.
- Tracking ads condicionado por `trafficChannels[trafficChannel].trackingEnabled`.
- Captura frontend contra `VITE_CAPTURE_WEBHOOK_URL`, normalmente `/capture.php`.
- `public/capture.php` como relay server-side hacia FluentCRM.

## Core engine

Estos archivos funcionan como motor compartido o tooling base y deberian quedar en el repo padre:

- `src/main.tsx`: bootstrap de React, router y `VisitorProvider`.
- `src/App.tsx`: routing SPA, seleccion de tema/funnel, document title y PageView condicionado por canal.
- `src/core/config/funnel.config.ts`: adaptador entre DNA y estructuras runtime.
- `src/core/routing/channel.ts`: resolucion de canal organic/ads.
- `src/core/services/analytics.ts`: Meta Pixel, TikTok Pixel, CAPI relay, atribucion, cookies y event IDs.
- `src/core/visitor/*`: enriquecimiento de visitante y payload normalizado.
- `src/core/hooks/useCheckoutPrices.ts`: catalogo de precios por checkout.
- `src/core/utils/currency.ts`: utilidades de moneda.
- `src/components/common/**`: inputs, formularios genericos, pricing y wrappers.
- `src/components/themes/expert/**`: familia visual `expert`, incluyendo landing VSL, evento, oferta y player.
- `src/pages/Success.tsx`: pagina compartida de exito, aunque aun necesita mas parametrizacion antes de ser completamente agnostica.
- `src/index.css` y `tailwind.config.js`: tokens, theme classes y estilos globales.
- `index.html`, `vite.config.ts`, `package.json`, `package-lock.json`, `tsconfig*`, `eslint.config.js`, `postcss.config.js`: tooling/base app.
- `public/.htaccess`: fallback SPA para hosting actual.
- `CLONE_KIT/**`: documentacion operativa para clones.

Notas de acoplamiento dentro del engine:

- `src/core/config/funnel.config.ts` aun lee `VITE_ORGANIC_CAPTURE_LIST_SLUG` y `VITE_ORGANIC_WHATSAPP_GROUP_URL` directamente, en vez de recibir todo desde DNA/site config.
- `src/pages/Success.tsx` soporta tipos de accion, pero su UI sigue muy orientada a WhatsApp: color `#25D366`, label/mensajes `whatsapp*`, countdown y step visual fijo.
- `src/components/themes/expert/event/ExpertEventHero.tsx` usa `href="#event-promise"` hardcodeado y parte el nombre del evento por palabras para acentuar la ultima.
- Varios componentes usan iconos por indice. No es MSM explicito, pero es una API visual implicita que debe documentarse o parametrizarse si se espera mucha variacion.

## Site config

El sitio MSM actual esta principalmente en `src/dna.config.ts`.

Valores MSM/site-specific detectados:

- Identidad: `productName = 'Aprender Motores'`, `eventName = 'Maneja Sin Miedo'`, `landingSlug = 'maneja-sin-miedo'`.
- Dominio y site ID: fallback `aprendermotores.com`, `APRENDER_MOTORES`.
- Product IDs: `APRENDER_MOTORES_MAIN`, `APRENDER_MOTORES_BUMP`, `APRENDER_MOTORES_CONTINUITY`, `APRENDER_MOTORES_VIP`.
- Assets de evento: rutas `/assets/msm/...`.
- Copy completo de evento MSM: miedo al volante, mujeres, conduccion, Dario Avila, evento gratuito online, fechas 9/10/11 de junio.
- Copy de oferta MSM/tripwire: Maneja Sin Miedo, precio, value stack, bonos, garantia, proof y FAQ.
- Success: accion `whatsapp`, copy de grupo de WhatsApp y redirect de 10 segundos.
- Capture/tracking: source `msm-event`, payload event name `Maneja Sin Miedo`, form id `expert_event_registration_form`, evento `Lead`.

Archivos que tambien contienen site config:

- `.env.example`: dominio `aprendermotores.com`, title Aprender Motores, listas `msm-junio-2026` y `msm-organico-2026`.
- `vite.config.ts`: defaults HTML con `aprendermotores.com` y `Aprender Motores`.
- `deploy.sh`: `DOMAIN="aprendermotores.com"` y cache path de LiteSpeed.
- `docker-stack-boilerplate.yaml`: fallback `FUNNEL_DOMAIN:-aprendermotores.com`.
- `README.md` y auditorias existentes: mencionan el estado actual del sitio/base.

Destino eventual recomendado:

- `src/site/` o `src/sites/current/` para el DNA actual.
- `src/sites/msm/` para MSM como primer hijo versionado, cuando ya exista la interfaz de site config.
- Mantener `src/dna.config.ts` como facade temporal que reexporte `src/sites/current/dna.config` durante la migracion, para no cambiar imports de runtime de golpe.

## Assets

Assets core actuales:

- `public/assets/funnel-placeholder.svg`: placeholder reutilizable.

Assets MSM/site-specific:

- `public/assets/msm/logo-msm.webp`
- `public/assets/msm/hero-main.webp`
- `public/assets/msm/agenda-1.webp`
- `public/assets/msm/agenda-2.webp`
- `public/assets/msm/agenda-3.webp`
- `public/assets/msm/fear-block.webp`
- `public/assets/msm/final-cta.webp`
- `public/assets/msm/cta-final.webp`
- `public/assets/msm/authority-dario.webp`
- `public/assets/msm/dario-authority*.webp`

Problemas actuales:

- `DNA.assets.event` duplica campos semanticos y numerados: `agenda1/2/3` junto a `agendaImages`, `authority` junto a `authorityImage`, `finalCta` junto a `finalCtaImage`.
- Los componentes ya consumen varios campos semanticos (`agenda.items[].image`, `finalCta.imageAlt`, `authority.imageAlt`), pero el API publica aun conserva nombres de MSM o de posicion.
- `public/assets/msm/` no deberia vivir en el padre final salvo como ejemplo o fixture. En el primer hijo MSM deberia quedar como `public/assets/msm/`.

Recomendacion:

- Padre: conservar `public/assets/funnel-placeholder.svg` y, si hace falta, una carpeta `public/assets/example/` no vinculada a MSM.
- Hijo MSM: conservar `public/assets/msm/` y actualizar `DNA.assets` desde el site config del hijo.
- Antes de mover, reducir duplicacion de asset keys y preferir campos por seccion: `event.hero.image`, `event.promise.image`, `event.agenda.items[].image`, `event.authority.images`, `event.finalCta.image`.

## Env/server config

Variables frontend/build que deben seguir como configuracion de clon:

- Identidad: `VITE_DOMAIN`, `VITE_SITE_ID`, `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION`, `VITE_SOCIAL_IMAGE`.
- Checkout: `VITE_CHECKOUT_URL`, `VITE_OFFER_CHECKOUT_URL`, `VITE_CHECKOUT_PROVIDER_NAME`, `VITE_CHECKOUT_PRICES_API_URL`.
- Video: `VITE_VSL_VIDEO_ID`, `VITE_OFFER_VIDEO_URL`.
- Captura: `VITE_CAPTURE_WEBHOOK_URL`, `VITE_CAPTURE_LIST_SLUG`, `VITE_ORGANIC_CAPTURE_LIST_SLUG`.
- Success/WhatsApp: `VITE_WHATSAPP_GROUP_URL`, `VITE_ORGANIC_WHATSAPP_GROUP_URL`, `VITE_WHATSAPP_REDIRECT_BASE_URL`.
- Tracking: `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID`, `VITE_CAPI_RELAY_URL`, `VITE_META_PIXEL_SCRIPT_URL`, `VITE_TIKTOK_PIXEL_SCRIPT_BASE_URL`.
- Visitor: `VITE_VISITOR_API_URL`.

Config server/site-specific detectada:

- `public/capture.php` tiene webhooks privados de FluentCRM hardcodeados contra `crm.aprendermotores.com`.
- `public/capture.php` solo acepta canales `ads` y `organic`.
- `deploy.sh` esta acoplado a `aprendermotores.com`, `../public_html/`, LiteSpeed y `systemctl restart lsws`.
- `docker-stack-boilerplate.yaml` conserva defaults legacy para `aprendermotores.com`.

Regla para el padre:

- No exponer webhooks de FluentCRM en variables `VITE_*`.
- El frontend solo deberia conocer `/capture.php` o el endpoint publico equivalente.
- Webhooks privados, hashes y upstream CRM deben venir de variables de servidor o de un archivo server-only no versionado por sitio.

## Archivos MSM/site-specific

Claramente site-specific:

- `src/dna.config.ts` en su bloque de valores actuales.
- `public/assets/msm/**`.
- `.env` y `.env.example` cuando contienen valores MSM.
- `public/capture.php` por sus webhooks FluentCRM actuales.
- `deploy.sh` por dominio/cache/hosting.
- `docker-stack-boilerplate.yaml` por fallback de dominio legacy.

Parcialmente site-specific:

- `vite.config.ts`: el plugin HTML es core, pero los defaults son MSM.
- `README.md`, `ARCHITECTURE.md`, `CLONE_VALIDATION.md`, auditorias: documentacion base con referencias al sitio actual.
- `src/pages/Success.tsx`: componente compartido con UX todavia orientada a WhatsApp.
- `src/core/config/funnel.config.ts`: core adapter con lectura directa de env organico/WhatsApp y rutas fijas.

## Eventual move to src/site or src/sites/current

Mover eventualmente:

- Constantes site-specific de `src/dna.config.ts`: identidad, copy, offer, event, success, assets, prices, product IDs y defaults de rutas.
- Valores de canal: list slugs, confirmation paths, tracking enabled, success action por canal.
- Defaults por entorno no secretos: site title, description, social image, landing slug, event starts at.
- Mapas de assets del sitio actual.

No mover como primer paso:

- Tipos `DnaConfig`, helpers de color/precio y resolvers si todavia son usados por Tailwind/runtime.
- `funnel.config.ts` hasta que exista una interfaz estable para importar site config sin ciclos.
- Componentes `expert/event` y `expert/offer` hasta cerrar los hardcodes restantes.
- `public/capture.php` hasta que su configuracion sensible salga a server env.

Estructura objetivo sugerida:

```text
src/
  core/
  components/
  pages/
  site/
    current.ts
  sites/
    msm/
      dna.config.ts
      assets.md
      env.example
```

`src/dna.config.ts` puede quedar temporalmente como facade:

```ts
export { DNA, dnaNumericPrices, resolveDnaDocumentTheme, resolveDnaFunnelTheme, resolveDnaThemeStyle } from './site/current';
export type { DnaConfig, DnaTheme, DnaFunnelType, DnaSuccessActionType } from './site/current';
```

## Que NO mover todavia

Por seguridad del sitio MSM actual, no mover todavia:

- `public/capture.php`: contiene secretos/upstreams y tiene impacto directo en leads reales.
- Rutas en `src/App.tsx`: `/`, `/a`, `/oferta`, `/a/oferta`, `/confirmacion`, `/a/confirmacion`.
- Comportamiento de tracking en `src/App.tsx` y `src/core/services/analytics.ts`.
- Diseno, layout, tokens CSS y componentes visuales.
- `src/components/themes/expert/components/video-player/**`: player local; moverlo ahora agregaria riesgo sin aportar a la separacion MSM/padre.
- `deploy.sh`: esta acoplado al hosting actual; no debe convertirse en script padre hasta definir estrategia multi-sitio.
- `.env` real.
- `dist/` y `public_html/`: artefactos de build/hosting, no fuente.

## Acoplamientos restantes

AprenderMotores/MSM:

- `src/dna.config.ts`: producto, evento, copy, assets, product IDs, landing slug y copy de oferta.
- `.env.example`: dominio, title, social image y listas MSM.
- `vite.config.ts`: defaults HTML MSM.
- `deploy.sh`: dominio y cache MSM.
- `docker-stack-boilerplate.yaml`: fallback de dominio MSM.

Assets:

- `src/dna.config.ts` apunta a `/assets/msm/...`.
- `public/assets/msm/**` es contenido del hijo MSM.

FluentCRM:

- `public/capture.php` apunta a `https://crm.aprendermotores.com/?fluentcrm=...` con hashes privados.
- Logs y errores estan nombrados como FluentCRM.

WhatsApp:

- `DNA.success.action.type = 'whatsapp'`.
- `DNA.copy.successPage.*` usa WhatsApp en labels/mensajes.
- `Success.tsx` usa color visual de WhatsApp para el CTA.
- Env vars `VITE_WHATSAPP_GROUP_URL`, `VITE_ORGANIC_WHATSAPP_GROUP_URL`, `VITE_WHATSAPP_REDIRECT_BASE_URL`.

Meta/TikTok/CAPI:

- `analytics.ts` es core, pero la activacion depende de `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID`, `VITE_CAPI_RELAY_URL`.
- Auditorias existentes documentan que CAPI relay necesita allowlist/siteId por dominio.
- `TRACKING_AUDIT.md` y `CAPI_RELAY_SITE_AUDIT.md` mencionan `aprendermotores.com`, MSM y Pixel esperado.

## Plan por fases para convertir MSM en primer hijo

### Fase 0 - Congelar comportamiento actual

- Mantener runtime intacto.
- Crear este reporte y validar `typecheck`, `lint`, `build`.
- Confirmar que el repo padre candidato esta en `prepare/funnel-boilerplate-parent`.
- Registrar que MSM es el sitio actual y sera el primer hijo.

### Fase 1 - Definir contrato de site config

- Separar tipos/helpers agnosticos de `src/dna.config.ts`.
- Crear una interfaz estable para `SiteConfig` o mantener `DnaConfig` como contrato.
- Decidir si el padre exporta un `src/site/current.ts` apuntando a un sitio activo.
- Documentar que los clones editan solo site config, env y assets.

### Fase 1 implementada: src/site boundary

Se creo `src/site/` como frontera documental inicial entre core engine y configuracion por sitio. Esta fase no mueve MSM ni cambia imports runtime.

- `src/site/README.md` documenta que los clones futuros deberan concentrar aqui la configuracion activa del sitio, junto con env y assets.
- `src/site/current.ts` re-exporta `DNA` desde `../dna.config`, por lo que MSM sigue usando la configuracion actual sin cambios de comportamiento.
- No se modificaron componentes, core, rutas, tracking, diseno ni `public/capture.php`.

### Fase 2 - Extraer MSM sin cambiar imports publicos

- Crear `src/sites/msm/dna.config.ts` con los valores actuales.
- Dejar `src/dna.config.ts` como facade que reexporta MSM/current.
- Mantener las mismas rutas, valores, copy, colores, assets y tracking.
- Correr validaciones y comparar build.

### Fase 3 - Neutralizar defaults del padre

- Cambiar defaults de `vite.config.ts` y `.env.example` a valores example/placeholder en el padre.
- Mover valores MSM reales a `src/sites/msm/` y/o documentacion del hijo.
- Mantener `CLONE_KIT/env.template` como plantilla canonica.
- Decidir si `public/assets/msm/**` sale del padre o queda temporalmente como fixture del primer hijo.

### Fase 4 - Parametrizar hardcodes restantes

- Mover anchors secundarios como `event-promise` a config.
- Parametrizar success visual/action labels para no asumir WhatsApp.
- Mover confirmation paths y organic capture env reads a config por canal.
- Normalizar assets semanticos y retirar `agenda1/2/3` como API publica.
- Hacer que formularios respeten `capture.fields` si se esperan formularios distintos.

### Fase 5 - Server capture por sitio

- Sacar webhooks FluentCRM de `public/capture.php` hacia env de servidor.
- Mantener el frontend apuntando a `/capture.php`.
- Documentar variables server-only por sitio.
- Validar captura real con payload de prueba antes de publicar cualquier hijo.

### Fase 6 - Crear padre e hijo MSM

- Padre: engine, componentes, core, plantilla, docs y placeholders.
- Hijo MSM: site config MSM, assets MSM, env MSM, deploy MSM y capture config server MSM.
- Conectar hijo MSM al padre como upstream.
- Validar que el hijo MSM build sea equivalente al estado previo.

## Riesgos

- Perder leads si `capture.php` se mueve o cambia sin migrar correctamente webhooks FluentCRM.
- Romper tracking ads si cambia la deteccion `/a` o `trackingEnabled`.
- Activar tracking organico por accidente si se tocan rutas/canales.
- Cambiar metadata/SEO de MSM si se neutralizan defaults antes de crear el hijo.
- Romper Tailwind si se mueve `DNA` sin cuidar el import de `tailwind.config.js`.
- Romper build por ciclos entre `DNA`, `funnel.config.ts` y componentes.
- Perder imagenes o generar rutas 404 si `public/assets/msm/` se mueve antes de actualizar DNA.
- Confundir secretos server con env `VITE_*`, exponiendo webhooks o tokens al frontend.
- Convertir `deploy.sh` en supuesto de padre cuando hoy es especifico de aprendermotores.com.
- Hacer refactors visuales durante la extraccion y cambiar conversion/percepcion del sitio actual.

## Checklist antes de crear el repo padre

- [ ] `npm run typecheck` pasa.
- [ ] `npm run lint` pasa.
- [ ] `npm run build` pasa.
- [ ] `git status` solo muestra cambios documentales esperados.
- [ ] `src/dna.config.ts` tiene destino decidido: facade o site config actual.
- [ ] Valores MSM estan inventariados: dominio, siteId, copy, oferta, assets, listas, WhatsApp, tracking y checkout.
- [ ] `public/capture.php` queda congelado o tiene plan server-env antes de extraerse.
- [ ] `.env.example` y `CLONE_KIT/env.template` no exponen secretos.
- [ ] Se decide si `public/assets/msm/**` se queda temporalmente en padre o se mueve al hijo MSM.
- [ ] `deploy.sh` se marca como site-specific o se excluye del padre.
- [ ] `docker-stack-boilerplate.yaml` queda marcado como legacy o parametrizado.
- [ ] Rutas `/`, `/a`, `/oferta`, `/a/oferta`, `/confirmacion`, `/a/confirmacion` se prueban en MSM antes y despues de la extraccion.
- [ ] Se confirma que organic no dispara ads tracking y ads si lo hace cuando hay IDs configurados.
- [ ] Se prueba captura con payload de prueba y se confirma lista/canal en CRM.
- [ ] Se documenta el workflow upstream para que MSM reciba mejoras del padre.

## Conclusion

El repo puede convertirse en padre clonable con bajo riesgo si la primera extraccion es documental y de frontera, no de comportamiento. El siguiente paso seguro es crear una capa `src/site/current` o `src/sites/msm` manteniendo `src/dna.config.ts` como facade, y recien despues neutralizar defaults del padre. `capture.php`, deploy y assets MSM deben tratarse como piezas del hijo hasta que exista una configuracion server-side segura.
