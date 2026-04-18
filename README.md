# White-Label Funnel Boilerplate

Guia tecnica de despliegue de alto nivel para clonar este repositorio, personalizar una marca y publicar un funnel funcional en minutos.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS con tokens semanticos
- Reproductor VSL configurable (`CoreVideoPlayer`)
- Captura avanzada de leads con contexto geografico (`AdvancedCaptureForm` + `VisitorContext`)
- Pricing multi-producto Hotmart con fallback a USD
- Tracking browser-side para Meta Pixel, TikTok Pixel y CAPI webhook agnostico
- Publicacion prevista en Docker Swarm + Nginx + Traefik

## Flujo Rapido de Lanzamiento

1. Edita `src/config/funnel.config.ts`.
2. Define el tema en `funnel.config.theme` y, si hace falta, ajusta tokens en `src/index.css`.
3. Configura `VITE_HOTPRICES_API_URL` en `.env`.
4. Compila `dist` con Docker en el servidor.
5. Publica el stack Nginx con `docker-stack-boilerplate.yaml`.

---

## 1. Arquitectura White-Label Semantica

El boilerplate esta preparado para cambiar marca y look sin tocar componentes. El contrato visual se divide en dos capas:

- `tailwind.config.js`: expone colores semanticos consumibles desde clases Tailwind.
- `src/index.css`: define el valor real de los tokens por tema usando CSS variables.

### Tokens semanticos disponibles

En `tailwind.config.js` los componentes no usan colores hardcodeados; usan aliases semanticos:

- `bg-page`
- `bg-surface`
- `bg-primary`
- `border-border-subtle`
- `text-text-main`
- `text-text-muted`

La relacion real esta definida asi:

```js
colors: {
  page: 'rgb(var(--color-page) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  primary: 'rgb(var(--color-primary) / <alpha-value>)',
  'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
  'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
  'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
}
```

### Temas disponibles hoy

`src/index.css` define dos temas:

- `premium-dark`
- `light-clean`

Cada tema vive en `:root[data-theme='...']` y redefine los tokens:

```css
:root[data-theme='premium-dark'] {
  --color-page: 10 10 10;
  --color-surface: 23 23 23;
  --color-primary: 212 175 55;
  --color-border-subtle: 255 255 255;
  --color-text-main: 245 245 245;
  --color-text-muted: 163 163 163;
}
```

### Como cambiar Claro/Oscuro

El tema activo se toma de `funnelConfig.theme` en `src/config/funnel.config.ts` y se aplica al montar la app en `src/App.tsx`:

```ts
document.documentElement.setAttribute('data-theme', funnelConfig.theme);
```

Para pasar de oscuro a claro:

```ts
theme: 'light-clean'
```

Para volver a oscuro:

```ts
theme: 'premium-dark'
```

### Como cambiar colores primarios

No cambies las clases Tailwind de los componentes salvo que quieras alterar el sistema. Cambia el valor del token:

```css
--color-primary: 212 175 55;
```

Eso actualiza automaticamente:

- botones con `bg-primary`
- textos con `text-primary`
- hovers del player (`--plyr-video-control-background-hover`)
- glow y overlays que derivan de `--color-primary`
- borders y estados focus que usan `focus:ring-primary`

### Regla operativa

Para rebrandear un funnel:

1. Ajusta `funnelConfig.theme`.
2. Si el look no alcanza, redefine los tokens del tema en `src/index.css`.
3. Mantene el uso de tokens semanticos en componentes; evita meter hexadecimales sueltos.

---

## 2. El Cerebro del Funnel (`funnel.config.ts`)

Archivo central: `src/config/funnel.config.ts`

Todo el funnel queda controlado desde un unico objeto `funnelConfig`.

### Campos principales

- `brandName`: nombre comercial que usan UI, tracking y copys dinamicos.
- `domain`: dominio esperado del funnel.
- `theme`: tema visual activo.
- `media.heroVideo`: configuracion del VSL.
- `forms.capture`: webhook y redirect de captura.
- `pricing`: catalogo multi-producto de Hotmart.
- `integrations`: Pixel IDs y webhook CAPI.

### Cambiar nombre de la marca

```ts
brandName: 'Tu Marca'
```

Impacta en:

- headings y textos del funnel
- evento `PageView`
- evento `Lead`
- tarjetas de precio si no sobreescribes `productName`

### Cambiar el VSL

La configuracion base vive en:

```ts
media: {
  heroVideo: {
    enabled: true,
    provider: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    vslMode: true,
    resumePlayback: true,
    vslProgressBarColor: 'rgb(var(--color-primary))',
  },
}
```

Campos clave:

- `enabled`: muestra u oculta el player principal.
- `provider`: hoy soporta `youtube`, `bunnynet` y `html5`.
- `videoId`: cambia el ID o URL esperada segun el provider.
- `vslMode`: activa modo sin distracciones.
- `resumePlayback`: restaura progreso desde `localStorage`.
- `vslProgressBarColor`: color del progreso del VSL.

### Cambiar webhooks y redirect de captura

```ts
forms: {
  capture: {
    enabled: true,
    webhookUrl: 'https://hook.us1.make.com/tu-webhook',
    successRedirectType: 'url',
    successRedirectUrl: 'https://tu-dominio.com/gracias',
  },
}
```

Notas:

- `webhookUrl`: endpoint que recibe el lead en JSON.
- `successRedirectType: 'url'`: usa la URL literal.
- `successRedirectType: 'whatsapp'`: si `successRedirectUrl` no es URL, el componente lo normaliza a `https://wa.me/<numero>`.

### Integraciones de tracking

```ts
integrations: {
  metaPixelId: 'TU_PIXEL_ID',
  tiktokPixelId: 'TU_TIKTOK_ID',
  capiWebhookUrl: 'https://n8n.tu-server.com/webhook/capi-in',
}
```

---

## Catalogo Multi-Producto de Hotmart (`pricing.products`)

Este es el punto mas importante del boilerplate.

El sistema no trabaja con IDs regados por la UI. Trabaja con una clave logica y luego resuelve el producto real desde `funnel.config.ts`.

### Estructura actual

Primero se declaran claves logicas reutilizables:

```ts
export const pricingProductKeys = {
  ofertaPrincipal: 'oferta_principal',
  orderBump: 'order_bump',
  upsellContinuidad: 'upsell_continuidad',
  upsellVip: 'upsell_vip',
} as const;
```

Luego `pricing.products` mapea cada clave a su configuracion comercial:

```ts
pricing: {
  currencyMode: 'geo-priced',
  defaultProductKey: pricingProductKeys.ofertaPrincipal,
  products: {
    [pricingProductKeys.ofertaPrincipal]: {
      basePriceUSD: 497,
      hotmartProductId: 'T31166654J',
      checkoutUrl: 'https://pay.hotmart.com/T31166654J',
    },
    [pricingProductKeys.orderBump]: {
      basePriceUSD: 97,
      hotmartProductId: 'M47153038V',
      checkoutUrl: 'https://pay.hotmart.com/M47153038V',
    },
  },
}
```

### Que significa cada campo

- `basePriceUSD`: precio fallback mostrado si HotPrices no entrega valor localizado.
- `hotmartProductId`: ID que usa el motor HotPrices para buscar el catalogo regionalizado.
- `checkoutUrl`: URL final del checkout Hotmart para ese producto.
- `defaultProductKey`: producto fallback si algun componente pide una clave inexistente.

### Como anadir un nuevo producto

1. Declara una nueva clave logica en `pricingProductKeys`.

```ts
export const pricingProductKeys = {
  ofertaPrincipal: 'oferta_principal',
  orderBump: 'order_bump',
  upsellContinuidad: 'upsell_continuidad',
  upsellVip: 'upsell_vip',
  downsellLite: 'downsell_lite',
} as const;
```

2. Crea su entrada en `pricing.products`.

```ts
[pricingProductKeys.downsellLite]: {
  basePriceUSD: 49,
  hotmartProductId: 'A12345678B',
  checkoutUrl: 'https://pay.hotmart.com/A12345678B',
}
```

3. Consume el producto desde cualquier componente con la clave logica, nunca con el ID duro:

```tsx
<PricingCard productId={pricingProductKeys.downsellLite} productName="Downsell Lite" />
```

### Como funciona la resolucion

`resolvePricingProduct(productKey)` hace esto:

- si la clave existe, devuelve el producto pedido
- si no existe, cae al `defaultProductKey`
- si no hay catalogo configurado, lanza error

Eso permite que la UI siempre pida productos por clave logica, no por `hotmartProductId`.

---

## 3. Componentes Core

### `AdvancedCaptureForm`

Archivo: `src/components/AdvancedCaptureForm.tsx`

### Como funciona

El formulario esta montado dentro de `VisitorProvider`, definido en `src/main.tsx`. Eso habilita `useVisitor()` dentro del form.

`VisitorContext`:

- consulta `https://ipapi.co/json/`
- normaliza `ip`, ciudad, pais, timezone, currency y calling code
- cachea el resultado en `sessionStorage` con la clave `visitor_data`

Con esos datos, `AdvancedCaptureForm`:

- personaliza el headline segun ciudad y moneda
- envia al webhook un payload enriquecido
- deja hidden inputs con IP, ciudad, pais, timezone y currency
- dispara `analytics.trackEvent('Lead', ...)` despues de un webhook exitoso
- redirige a la URL o WhatsApp configurado

### Payload enviado al webhook

```json
{
  "lead": {
    "nombre": "Juan",
    "apellido": "Perez",
    "email": "juan@email.com",
    "whatsapp": "+59170000000"
  },
  "meta": {
    "ip": "1.2.3.4",
    "ciudad": "La Paz",
    "pais": "Bolivia",
    "zona_horaria": "America/La_Paz",
    "moneda": "BOB"
  }
}
```

### Validaciones relevantes

- nombre y apellido obligatorios
- email con regex basica
- WhatsApp validado con `SmartPhoneInput`
- boton deshabilitado hasta que todo sea valido

### Consideracion operativa

Si el webhook responde distinto de `2xx`, el lead no se marca como exitoso, no dispara redirect y se muestra error al usuario.

### `CoreVideoPlayer`

Archivo: `src/components/video-player/CoreVideoPlayer.tsx`

### Objetivo

Renderizar un VSL o video de venta sin distracciones y con comportamiento de conversion.

### Providers soportados

- `youtube`
- `bunnynet`
- `html5`

### Flags importantes

- `vslMode: true`: oculta controles y elementos distractores.
- `resumePlayback: true`: persiste segundo actual en `localStorage`.
- `hideYoutubeUi: true`: aplica hack visual para minimizar UI de YouTube.
- `lazyLoadYoutube: true`: no monta el iframe hasta intencion del usuario, salvo que haya autoplay por VSL o muted preview.
- `callToAction`: pausa video y abre CTA en el segundo configurado.
- `mutedPreview`: permite teaser muteado antes del play real.

### VSL sin distracciones

El modo VSL se apoya en dos capas:

- logica React en `CoreVideoPlayer`
- CSS en `src/index.css` sobre `[data-vsl-mode='true']`

Cuando `vslMode` esta activo:

- se auto-reproduce en mute
- se ocultan controles de Plyr
- se oculta el boton play overlaid
- se ocultan barra de progreso y tiempo visible
- no se restaura progreso previo si el video esta en modo VSL

Configuracion minima recomendada:

```ts
heroVideo: {
  enabled: true,
  provider: 'youtube',
  videoId: 'TU_VIDEO_ID',
  vslMode: true,
  resumePlayback: true,
  hideYoutubeUi: true,
  vslProgressBarColor: 'rgb(var(--color-primary))',
}
```

### HotPrices Engine

Piezas involucradas:

- `src/hooks/useHotmartPrices.ts`
- `src/components/PricingCard.tsx`
- `src/config/funnel.config.ts`
- `VITE_HOTPRICES_API_URL`

### Como funciona

1. La tarjeta recibe un `productId` logico.
2. `useHotmartPrices(productId)` resuelve el producto real con `resolvePricingProduct`.
3. El hook consulta el catalogo remoto desde `VITE_HOTPRICES_API_URL`.
4. Busca el bloque del `hotmartProductId`.
5. `PricingCard` cruza ese catalogo con el `country_code` detectado en `VisitorContext`.

### Fallback a USD

El sistema siempre conserva `basePriceUSD` como precio seguro.

La UI cae al precio USD cuando ocurre cualquiera de estos casos:

- falta `VITE_HOTPRICES_API_URL`
- la API responde error HTTP
- el fetch falla por red, CORS u origen
- el dominio frontend no puede consumir el catalogo
- el `hotmartProductId` no existe en el catalogo
- la clave logica pedida no existe y se resuelve a `defaultProductKey`

En la practica, un "dominio no autorizado" termina viendose igual que un error de consumo del catalogo: `useHotmartPrices` queda en `status: 'error'` o sin precio localizado, y `PricingCard` muestra `basePriceUSD`.

### Comportamiento visual del fallback

- `US` o ausencia de precio localizado: muestra `basePriceUSD`
- pais con precio localizado: muestra total local
- caso especial `AR`: muestra subtotal USD + impuestos locales + total final

### Variable de entorno obligatoria

Archivo `.env`:

```env
VITE_HOTPRICES_API_URL=https://hotprices.tu-dominio.com/api/v1/catalog
```

---

## 4. Tracking y Analytics

Archivo principal: `src/services/analytics.ts`

El sistema inicializa browser tracking y, ademas, envia el mismo evento a un webhook CAPI agnostico si `integrations.capiWebhookUrl` esta configurado.

### Configuracion

Edita `src/config/funnel.config.ts`:

```ts
integrations: {
  metaPixelId: '123456789012345',
  tiktokPixelId: 'CXXXXXXXXXXXXXXXXX',
  capiWebhookUrl: 'https://n8n.tu-server.com/webhook/capi-in',
}
```

### Eventos automaticos hoy

- `PageView`: se dispara una sola vez al montar `App`.
- `Lead`: se dispara despues de que el webhook de captura responde OK.
- `InitiateCheckout`: se dispara al hacer click en `Comprar Ahora` dentro de `PricingCard`.

### Datos que acompanan los eventos

Segun el caso, el sistema puede adjuntar:

- `brand_name`
- `product_id`
- `product_name`
- `checkout_url`
- `hotmart_product_id`
- `country_code`
- `currency`
- `value`
- datos del lead
- attribution params (`utm_*`, `fbclid`, `ttclid`)
- cookies `_fbp`, `_fbc`, `ttclid`
- `anonymous_id`

### Meta y TikTok browser-side

`analytics.ts`:

- carga `fbevents.js` si hay `metaPixelId`
- carga `events.js` de TikTok si hay `tiktokPixelId`
- usa nombres estandar cuando el evento pertenece al catalogo de Meta
- para `PageView`, usa `ttq.page()`

### CAPI webhook

Si `capiWebhookUrl` existe, el servicio arma un payload enriquecido con:

- `event_name`
- `event_id`
- `event_time`
- `event_source_url`
- `anonymous_id`
- attribution persistida
- cookies de tracking
- `user_data` con hashes SHA-256 cuando el navegador soporta `crypto.subtle`

Esto permite que un workflow externo en n8n, Make o backend propio replique el evento hacia Meta CAPI, TikTok Events API u otras integraciones.

---

## 5. Guia de Compilacion

### Build local rapido

Si tienes Node instalado en la maquina:

```bash
npm ci
npm run build
```

### Comando exacto Docker para HughesDocker2026

Este comando compila `dist` dentro de un contenedor Node y deja el resultado en la carpeta del proyecto del servidor:

```bash
docker run --rm \
  -v /opt/webs/boilerplate:/app \
  -w /app \
  node:20-alpine \
  sh -lc 'npm ci && npm run build'
```

Resultado esperado:

- genera o actualiza `/opt/webs/boilerplate/dist`
- deja listo el contenido estatico para el stack Nginx

Este comando fue validado en el servidor actual y el build produjo `dist/index.html`, `dist/assets/index-*.css` y `dist/assets/index-*.js`.

### Publicacion en Docker Swarm

El archivo `docker-stack-boilerplate.yaml` publica `dist` con `nginx:1.27-alpine` y monta:

```txt
/opt/webs/boilerplate/dist -> /usr/share/nginx/html:ro
```

Para desplegar:

```bash
docker stack deploy -c /opt/webs/boilerplate/docker-stack-boilerplate.yaml boilerplate
```

El router Traefik actual esta preparado para:

- `javierquiroz.com`
- `www.javierquiroz.com`

Si cambias de marca, actualiza tambien esos hosts en `docker-stack-boilerplate.yaml`.

---

## Checklist de Lanzamiento en 5 Minutos

1. Cambia `brandName`, `domain`, `theme`, `videoId`, `webhookUrl` y `integrations` en `src/config/funnel.config.ts`.
2. Ajusta tokens en `src/index.css` si quieres otro look.
3. Carga tus productos Hotmart en `pricing.products`.
4. Verifica `VITE_HOTPRICES_API_URL` en `.env`.
5. Compila con el comando Docker de este README.
6. Despliega el stack.

---

## Archivos Clave

- `src/config/funnel.config.ts`: cerebro del funnel
- `src/index.css`: tokens semanticos y overrides de player
- `tailwind.config.js`: aliases Tailwind hacia CSS variables
- `src/context/VisitorContext.tsx`: IP, geodatos y moneda
- `src/components/AdvancedCaptureForm.tsx`: captura y envio al webhook
- `src/components/video-player/CoreVideoPlayer.tsx`: VSL y comportamiento del player
- `src/hooks/useHotmartPrices.ts`: consulta de catalogo HotPrices
- `src/components/PricingCard.tsx`: render y fallback de precios
- `src/services/analytics.ts`: Meta, TikTok y CAPI
- `docker-stack-boilerplate.yaml`: publicacion Swarm + Traefik
