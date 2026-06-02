# CAPI Relay Site Audit

Fecha: 2026-06-01

## Alcance

Auditoria puntual del relay externo usado por el frontend:

- Endpoint: `https://relay.kuruk.in/v1/events`
- Nuevo sitio: `MANEJARSINMIEDO`
- Meta Pixel ID esperado: `1767372344644632`

No se tocaron archivos de frontend ni logica de tracking del sitio.

## Hallazgos

El relay no esta desplegado en este servidor. Este VPS tiene IP `167.172.28.243`, mientras `relay.kuruk.in` resuelve a `142.93.72.32` mediante `vps.kuruk.in`. No hay codigo local del relay, `wrangler.toml`, proyecto Worker, servicio PM2 ni vhost local editable para ese endpoint. El intento de acceso SSH a `root@142.93.72.32` falla por `Permission denied (publickey)`.

El endpoint si esta vivo y valida CORS antes de procesar el sitio:

- `Origin: https://aprendermotores.com` devuelve `403 {"error":"origin_not_allowed"}`.
- `Origin: https://sensorial.pameflorescrea.com` devuelve preflight `204` con `Access-Control-Allow-Origin`.

Desde un origen permitido, `MANEJARSINMIEDO` todavia no esta configurado:

```json
{"error":"unknown_or_unconfigured_site"}
```

Con el mismo origen permitido, `SENSORIAL` si esta configurado y acepta payload valido:

```json
{"accepted":true,"jobId":"...","siteId":"SENSORIAL"}
```

Conclusion: para que MSM funcione no basta el `.env` del frontend. El relay debe agregar al menos:

- `https://aprendermotores.com` en la allowlist de origins.
- `MANEJARSINMIEDO` en la resolucion de sitios.
- Pixel/token server-side para Meta CAPI del sitio.

## Contrato del frontend

El frontend ya envia el contrato que el relay espera para CAPI. Campos top-level relevantes:

- `siteId`
- `provider`
- `event_name`
- `event_id`
- `event_time`
- `event_source_url`
- `action_source`
- `anonymous_id`
- `integrations`
- `attribution`
- `cookies`
- `data`
- `user_data`

Payload minimo esperado por el relay:

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
  "data": {},
  "user_data": {
    "external_id": "uuid",
    "client_user_agent": "...",
    "fbp": "fb.1...",
    "fbc": "fb.1...",
    "em": "sha256",
    "ph": "sha256",
    "fn": "sha256",
    "ln": "sha256"
  }
}
```

`custom_data` no se manda con ese nombre desde el frontend; el equivalente agnostico es `data`. El relay debe mapear `data` a `custom_data` al llamar a Meta.

## Mapeo siteId a Meta

No se pudo confirmar el nombre exacto de secrets/env del relay porque el codigo y el entorno de `142.93.72.32` no estan disponibles desde esta maquina.

Lo que si queda confirmado por comportamiento:

- Hay una allowlist de origins independiente de `siteId`.
- Hay una lista o mapa de sitios configurados.
- Un `siteId` desconocido o sin secret requerido devuelve `unknown_or_unconfigured_site`.
- `SENSORIAL` esta configurado.
- `MANEJARSINMIEDO` no esta configurado.

El soporte requerido para MSM debe resolver:

```txt
siteId: MANEJARSINMIEDO
meta pixel_id: 1767372344644632
meta access token: secret server-side asociado a MANEJARSINMIEDO
allowed origin: https://aprendermotores.com
```

## Cambio minimo requerido en el relay

En el codigo del relay, agregar `MANEJARSINMIEDO` siguiendo exactamente el patron existente de `KURUKIN`, `SENSORIAL` y `KURUKINLEADFLOW`.

El resultado esperado del resolver debe ser equivalente a:

```ts
{
  siteId: 'MANEJARSINMIEDO',
  meta: {
    pixelId: '1767372344644632',
    accessToken: env.<SECRET_EXISTENTE_PARA_MANEJARSINMIEDO>
  }
}
```

Tambien agregar el origin:

```txt
https://aprendermotores.com
```

No cambiar la configuracion existente de:

- `KURUKIN`
- `SENSORIAL`
- `KURUKINLEADFLOW`

## Validacion esperada

Despues de desplegar el relay con el secret correcto, estas pruebas deben cambiar:

Preflight:

```bash
curl -i -X OPTIONS https://relay.kuruk.in/v1/events \
  -H 'Origin: https://aprendermotores.com' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Access-Control-Request-Headers: content-type'
```

Resultado esperado: `204` con `Access-Control-Allow-Origin: https://aprendermotores.com`.

Evento:

```bash
curl -i -X POST https://relay.kuruk.in/v1/events \
  -H 'Origin: https://aprendermotores.com' \
  -H 'Content-Type: application/json' \
  --data '{
    "siteId":"MANEJARSINMIEDO",
    "provider":"agnostic",
    "event_name":"PageView",
    "event_id":"audit-msm-20260601",
    "event_time":1780290000,
    "event_source_url":"https://aprendermotores.com/audit",
    "action_source":"website",
    "anonymous_id":"audit-msm-20260601",
    "integrations":{"metaPixelId":"1767372344644632","tiktokPixelId":null},
    "attribution":{},
    "cookies":{},
    "user_data":{"external_id":"audit-msm-20260601"},
    "data":{}
  }'
```

Resultado esperado: `202` con `{"accepted":true,...,"siteId":"MANEJARSINMIEDO"}`.

En Meta, el relay debe llamar a Conversions API usando:

```txt
pixel_id = 1767372344644632
access_token = secret server-side de MANEJARSINMIEDO
data[0].event_name = payload.event_name
data[0].event_id = payload.event_id
data[0].event_source_url = payload.event_source_url
data[0].action_source = payload.action_source
data[0].user_data = payload.user_data normalizado
data[0].custom_data = payload.data
```

## Como agregar un nuevo sitio hoy

1. Elegir un `siteId` estable, en mayusculas y sin espacios.
2. Crear o identificar el Meta Pixel ID del sitio.
3. Generar el access token de Meta CAPI para ese Pixel.
4. Agregar el dominio del frontend a la allowlist CORS del relay.
5. Agregar el `siteId` al mapa del relay con pixel ID y nombre de secret/token siguiendo el patron existente.
6. Configurar el secret/token en el entorno real del relay.
7. Desplegar o reiniciar el relay.
8. Validar preflight, `202 accepted` y llegada a Meta Events Manager con el mismo `event_id` browser/server.

## Mejora futura

Para no depender de secrets manuales por sitio, mover la configuracion a un registry versionado o tabla administrable:

- `siteId`
- allowed origins
- providers habilitados
- Meta pixel ID
- referencia a secret/token en un vault
- estado activo/inactivo

El relay deberia leer ese registry en runtime o con cache corta, validar esquema al iniciar, y exponer un endpoint interno de diagnostico que confirme si un `siteId` esta configurado sin revelar tokens.
