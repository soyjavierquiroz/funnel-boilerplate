# Clone Kit

Este kit documenta como usar este repo como repo padre clonable para nuevos sitios/funnels.

El objetivo del clon es cambiar identidad, copy, assets, checkout, CRM, WhatsApp, tracking y dominio sin tocar la arquitectura ni los componentes base.

## Archivos del kit

- `env.template`: variables de entorno recomendadas para un clon nuevo.
- `assets-map.md`: inventario de assets que se reemplazan por sitio.
- `clone-checklist.md`: pasos para crear un clon desde el repo padre.
- `launch-checklist.md`: validaciones antes de publicar.
- `upstream-workflow.md`: como mantener cambios del repo padre en clones.

## Archivos que se editan por sitio

- `.env`: dominio, metadata, checkout, video, CRM, WhatsApp y tracking.
- `src/dna.config.ts`: marca, producto, copy, precios, colores, assets, oferta, evento, exito y fallbacks.
- `public/assets/...`: imagenes, logos, posters y recursos visuales del sitio.
- `README.md`: notas especificas del clon, si aplica.
- `docker-stack-boilerplate.yaml`: solo si el clon usa ese flujo legacy.

## Archivos que normalmente NO se editan en clones

- `src/components/**`: componentes visuales y Lego del boilerplate.
- `src/core/**`: routing, tracking core, visitor context, analytics y configuracion derivada.
- `src/pages/Success.tsx`: flujo de confirmacion/exito compartido.
- `public/capture.php`: endpoint de captura compartido.
- `deploy.sh`: script de despliegue base.
- `package.json`, `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`: tooling base.
- `dist/`: artefacto generado; nunca se edita a mano.

Si un clon necesita tocar estos archivos, primero evalua si el cambio debe subir al repo padre.

## Flujo recomendado

1. Crear repo clon desde el repo padre.
2. Copiar `CLONE_KIT/env.template` a `.env` y completar valores reales.
3. Editar `src/dna.config.ts` con marca, copy, assets, colores, precios, oferta, evento y exito.
4. Reemplazar o agregar assets en `public/assets/<site>/`.
5. Validar rutas organicas y ads:
   - `/`
   - `/a`
   - `/oferta`
   - `/a/oferta`
   - `/confirmacion`
   - `/a/confirmacion`
6. Ejecutar validaciones:

```bash
npm run typecheck
npm run lint
npm run build
```

## Como cambiar marca, copy y assets

Edita `src/dna.config.ts`:

- `productName`, `domain`, `siteId`.
- `seo`.
- `colors`, `surface`, `text`, `cta`.
- `assets` y `assets.event`.
- `copy` para landing/evento.
- `offer` para `/oferta` y `/a/oferta`.
- `success` para el comportamiento de confirmacion.

Agrega assets en `public/assets/<site-slug>/` y referencia las rutas desde `DNA`. No hardcodees rutas de assets en componentes.

## Como cambiar CRM, WhatsApp y tracking

Configura `.env`:

- CRM/captura: `VITE_CAPTURE_WEBHOOK_URL`, `VITE_CAPTURE_LIST_SLUG`, `VITE_ORGANIC_CAPTURE_LIST_SLUG`.
- WhatsApp: `VITE_WHATSAPP_GROUP_URL`, `VITE_ORGANIC_WHATSAPP_GROUP_URL`, `VITE_WHATSAPP_REDIRECT_BASE_URL`.
- Tracking: `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID`, `VITE_CAPI_RELAY_URL`.

Configura `src/dna.config.ts` solo si necesitas cambiar defaults o comportamiento por sitio. No edites analytics core en clones.

## Como clonar a otro dominio

1. Cambia `VITE_DOMAIN`.
2. Cambia `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION` y `VITE_SOCIAL_IMAGE`.
3. Cambia `DNA.domain`, `DNA.productName`, `DNA.siteId` y `DNA.seo`.
4. Actualiza checkout, video, CRM, WhatsApp y tracking del nuevo dominio.
5. Genera build y despliega `dist/` en el hosting del nuevo dominio.
6. Prueba rutas directas con refresh para confirmar fallback SPA.

## Como desplegar

Flujo recomendado:

```bash
npm run build
```

Luego subir o sincronizar `dist/` al hosting del sitio. `dist/` es generado; no lo edites a mano ni lo uses como fuente.

Si el clon usa `deploy.sh`, revisa primero que sus rutas/destino sean correctos para el dominio. No cambies `deploy.sh` en clones salvo que ese clon tenga un flujo de hosting propio documentado.

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
- No cambies `src/core/services/analytics.ts` ni `src/core/routing/channel.ts` en un clon salvo que el cambio sea para todos los sitios.

## Documentos relacionados

- `../README.md`
- `../ARCHITECTURE.md`
- `../CLONE_VALIDATION.md`
- `../TRACKING_AUDIT.md`
- `../CAPI_RELAY_SITE_AUDIT.md`
