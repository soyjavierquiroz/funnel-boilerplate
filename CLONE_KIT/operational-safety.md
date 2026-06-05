# Operational Safety

Usa este documento antes de publicar un clon o ejecutar tooling operativo heredado.

## Regla base

El repo padre no debe desplegarse con configuracion operativa de Aprender Motores / Maneja Sin Miedo. MSM queda como baseline historico y site config activo de ejemplo mientras termina la extraccion, pero no es un default universal para clones.

Antes de publicar, confirma que ningun lead, evento, checkout o redireccion pueda terminar en Aprender Motores/MSM por accidente.

## Archivos y sistemas que se revisan por clon

- `.env`: dominio, metadata, checkout, video, CRM, WhatsApp, Pixel, TikTok y CAPI Relay.
- `src/site/**`: identidad, `siteId`, dominio, tracking, formularios, exito, copy, oferta y rutas de assets.
- `public/assets/**`: assets reales del clon. No uses `public/assets/msm/` como identidad final.
- `public/capture.php`: endpoint legacy/shared. Todavia no es una pieza segura por sitio; se tratara en Fase 3.
- `deploy.sh`: script site-specific/legacy. No lo ejecutes en un clon sin revisar dominio, destino, permisos y cache.
- `docker-stack-boilerplate.yaml`: referencia legacy de Docker Swarm. Usalo solo si el clon mantiene ese flujo y despues de revisar dominio, rutas, volumenes, env y servicios.
- CAPI Relay, CRM, Pixel, TikTok, WhatsApp y checkout: deben pertenecer al clon, no al baseline historico.

## `public/capture.php`

`public/capture.php` sigue siendo legacy/shared. Puede ser util como compatibilidad temporal, pero no asumas que apunta al CRM correcto ni que esta aislado por sitio.

Antes de lanzar:

- [ ] Revisar `VITE_CAPTURE_WEBHOOK_URL`.
- [ ] Revisar listas/slugs ads y organico.
- [ ] Enviar un lead de prueba.
- [ ] Confirmar en logs que el lead llega al CRM correcto del clon.
- [ ] Confirmar que no aparece en Aprender Motores/MSM.

## `deploy.sh`

`deploy.sh` puede contener dominio, rutas de hosting, owner/permisos y cache especificos de un sitio. Para evitar ejecucion accidental, el script requiere `ALLOW_SITE_SPECIFIC_DEPLOY=1`.

No uses esa variable como aprobacion automatica: primero revisa el script completo en el clon y documenta que ese flujo de hosting le pertenece.

## Docker stack legacy

`docker-stack-boilerplate.yaml` es una referencia legacy para Docker Swarm. No es el flujo recomendado para clones nuevos. Si se usa, valida:

- Dominio y labels de router.
- Rutas y volumenes.
- Variables de entorno.
- Servicios, redes y certificados.
- Estrategia de deploy y rollback.

## Assets MSM

`public/assets/msm/` pertenece al baseline historico Aprender Motores / Maneja Sin Miedo. Se conserva como referencia temporal, pero cada clon debe crear su propia carpeta:

```text
public/assets/<site-slug>/
```

Luego referencia esas rutas desde `src/site/**`, normalmente desde el DNA activo.
