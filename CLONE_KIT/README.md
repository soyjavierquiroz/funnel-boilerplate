# Clone Kit

Este kit documenta como usar este repo como repo padre clonable para nuevos sitios/funnels.

El objetivo del clon es cambiar identidad, copy, assets, checkout, CRM, WhatsApp, tracking y dominio sin tocar la arquitectura ni los componentes base.

El repo padre no es Aprender Motores. Aprender Motores / Maneja Sin Miedo queda como baseline historico y site config activo de ejemplo; un clon debe reemplazar esa identidad desde `.env`, `src/site/**` y `public/assets/**`.

## Archivos del kit

- `env.template`: variables frontend recomendadas para un clon nuevo.
- `server-env.template`: variables server-side privadas para `public/capture.php`.
- `assets-map.md`: inventario de assets que se reemplazan por sitio.
- `clone-checklist.md`: pasos para crear un clon desde el repo padre.
- `launch-checklist.md`: validaciones antes de publicar.
- `operational-safety.md`: riesgos legacy/site-specific que deben revisarse antes de deploy.
- `upstream-workflow.md`: como mantener cambios del repo padre en clones.

## Archivos que se editan por sitio

- `.env`: dominio, metadata, checkout, video, endpoint publico de captura, WhatsApp y tracking.
- Server env `CAPTURE_*`: webhooks privados de CRM, origins permitidos, listas server-side, dry-run y logging.
- `src/site/**`: marca, producto, copy, precios, colores, assets, oferta, evento, exito y fallbacks.
- `public/assets/...`: imagenes, logos, posters y recursos visuales del sitio.
- `README.md`: notas especificas del clon, si aplica.
- `deploy.sh`: solo si el clon documenta y asume ese flujo de hosting site-specific.
- `docker-stack-boilerplate.yaml`: solo si el clon usa ese flujo legacy despues de revisar dominio, rutas, volumenes, env y servicios.

## Archivos que normalmente NO se editan en clones

- `src/components/**`: componentes visuales y Lego del boilerplate.
- `src/core/**`: routing, tracking core, visitor context, analytics y configuracion derivada.
- `src/pages/Success.tsx`: flujo de confirmacion/exito compartido.
- `src/dna.config.ts`: facade temporal de compatibilidad; no es el contrato recomendado del clon.
- `public/capture.php`: relay de captura compartido; en clones se configura con server env `CAPTURE_*`, no editando el archivo.
- `deploy.sh`: script de despliegue site-specific/legacy con guard contra ejecucion accidental.
- `package.json`, `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`: tooling base.
- `dist/`: artefacto generado; nunca se edita a mano.

Si un clon necesita tocar estos archivos, primero evalua si el cambio debe subir al repo padre.

## Flujo recomendado

1. Crear repo clon desde el repo padre.
2. Copiar `CLONE_KIT/env.template` a `.env` y completar valores frontend reales.
3. Configurar en el servidor las variables privadas de `CLONE_KIT/server-env.template`.
4. Editar `src/site/**` con marca, copy, assets, colores, precios, oferta, evento y exito.
5. Reemplazar o agregar assets en `public/assets/<site>/`.
6. Revisar `CLONE_KIT/operational-safety.md` antes de configurar captura, tracking o deploy.
7. Validar rutas organicas y ads:
   - `/`
   - `/a`
   - `/oferta`
   - `/a/oferta`
   - `/confirmacion`
   - `/a/confirmacion`
8. Ejecutar validaciones:

```bash
npm run typecheck
npm run lint
npm run build
```

## Como cambiar marca, copy y assets

Edita `src/site/dna.config.ts` o los archivos de site config bajo `src/site/**`:

- `productName`, `domain`, `siteId`.
- `seo`.
- `colors`, `surface`, `text`, `cta`.
- `assets` y `assets.event`.
- `copy` para landing/evento.
- `offer` para `/oferta` y `/a/oferta`.
- `success` para el comportamiento de confirmacion.

Agrega assets en `public/assets/<site-slug>/` y referencia las rutas desde `DNA`. No hardcodees rutas de assets en componentes.

Los assets heredados bajo `public/assets/msm/` pertenecen al baseline historico. Pueden servir como referencia temporal, pero no como identidad final de otro clon.

## Como cambiar CRM, WhatsApp y tracking

Configura `.env` para valores visibles por el navegador:

- Captura frontend: `VITE_CAPTURE_WEBHOOK_URL`, `VITE_CAPTURE_LIST_SLUG`, `VITE_ORGANIC_CAPTURE_LIST_SLUG`.
- WhatsApp: `VITE_WHATSAPP_GROUP_URL`, `VITE_ORGANIC_WHATSAPP_GROUP_URL`, `VITE_WHATSAPP_REDIRECT_BASE_URL`.
- Tracking: `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID`, `VITE_CAPI_RELAY_URL`.

Configura server env para secretos de CRM:

- `CAPTURE_ALLOWED_ORIGINS`
- `CAPTURE_ADS_WEBHOOK_URL`
- `CAPTURE_ORGANIC_WEBHOOK_URL`
- `CAPTURE_WEBHOOK_URL` como fallback si aplica
- `CAPTURE_DEFAULT_LIST_SLUG`
- `CAPTURE_ORGANIC_LIST_SLUG`
- `CAPTURE_DRY_RUN`

Configura `src/site/**` solo si necesitas cambiar defaults o comportamiento por sitio. No edites analytics core en clones.

`public/capture.php` no contiene webhooks reales. Prueba primero con `CAPTURE_DRY_RUN=true`, luego apaga dry-run y envia un lead de prueba para confirmar que llega al CRM correcto del clon. Si existieron hashes/webhooks reales en historial Git o deployments previos, rotalos.

## Como clonar a otro dominio

1. Cambia `VITE_DOMAIN`.
2. Cambia `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION` y `VITE_SOCIAL_IMAGE`.
3. Cambia `DNA.domain`, `DNA.productName`, `DNA.siteId` y `DNA.seo` desde `src/site/**`.
4. Actualiza checkout, video, CRM, WhatsApp y tracking del nuevo dominio.
5. Genera build y despliega `dist/` en el hosting del nuevo dominio.
6. Prueba rutas directas con refresh para confirmar fallback SPA.

## Como desplegar

Flujo recomendado:

```bash
npm run build
```

Luego subir o sincronizar `dist/` al hosting del sitio. `dist/` es generado; no lo edites a mano ni lo uses como fuente.

Si el clon usa `deploy.sh`, revisa primero que sus rutas/destino sean correctos para el dominio. El script requiere `ALLOW_SITE_SPECIFIC_DEPLOY=1` porque es site-specific/legacy; no lo ejecutes sin confirmar destino, dominio, permisos y cache.

Si el clon usa `docker-stack-boilerplate.yaml`, tratalo como referencia legacy de Docker Swarm. Revisa dominio, rutas, volumenes, env, servicios, redes y certificados antes de usarlo.

## Como validar

Validacion tecnica:

```bash
npm run typecheck
npm run lint
npm run build
```

Validacion funcional:

- `/` y `/a` renderizan la landing correcta.
- `/oferta` renderiza organic sin ads tracking.
- `/a/oferta` renderiza ads con tracking permitido.
- `/confirmacion` y `/a/confirmacion` resuelven segun canal.
- CTA sin checkout real queda deshabilitado.
- CTA con checkout real abre la URL configurada.

## Reglas de tracking

- `/oferta` debe quedar como organic y no disparar Pixel/CAPI.
- `/a/oferta` debe quedar como ads y puede disparar tracking segun configuracion.
- CAPI Relay, CRM, Pixel, TikTok, WhatsApp y checkout deben pertenecer al clon.
- Antes de publicar, confirma que ningun lead se envie a Aprender Motores/MSM por accidente.
- No cambies `src/core/services/analytics.ts` ni `src/core/routing/channel.ts` en un clon salvo que el cambio sea para todos los sitios.

## Documentos relacionados

- `../README.md`
- `../ARCHITECTURE.md`
- `../CLONE_VALIDATION.md`
- `../TRACKING_AUDIT.md`
- `../CAPI_RELAY_SITE_AUDIT.md`
- `operational-safety.md`
