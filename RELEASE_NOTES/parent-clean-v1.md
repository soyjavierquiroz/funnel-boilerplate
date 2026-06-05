# parent-clean-v1

## Que Es

`parent-clean-v1` es el primer baseline limpio del repo padre para crear sitios o funnels hijos sin heredar identidad, assets, tracking, capture, deploy ni configuracion de un sitio anterior.

## Que Incluye

### Site Boundary

La configuracion activa del sitio vive bajo `src/site/**`, con `src/site/current.ts` como frontera de importacion para runtime compartido.

### Config Neutra

El padre usa identidad, copy, dominio, site id, assets, checkout y tracking placeholders seguros para rendering y clonacion.

### Clone Kit

`CLONE_KIT/` documenta que debe cambiar un hijo, que no debe asumir, y que checks correr antes de publicar.

### Capture Relay

`public/capture.php` es clone-safe y se configura con variables server-side `CAPTURE_*`, incluyendo destinos por canal, allowed origins, dry run y timeouts.

### Ads Route Prefix

`VITE_ADS_ROUTE_PREFIX` separa rutas ads de rutas organicas. El fallback del padre es `/x9m`, y los clones pueden cambiarlo.

### Attribution Resolver

`src/core/attribution` resuelve canal, fuente, plataforma paga, click IDs, UTMs, paths y elegibilidad de ads tracking con prioridad canonica.

### Analytics

Analytics consume `ResolvedAttribution`, no parsea click IDs/UTMs por su cuenta, y usa `shouldTrackAds` salvo override explicito con `trackingEnabled`.

### Tests

Vitest cubre contratos minimos de routing ads, attribution resolver y storage de attribution.

### Limpieza MSM

El padre no conserva MSM como baseline activo ni assets MSM.

### Legacy Removido

Se removieron piezas site-specific y legacy que no pertenecen al padre limpio.

## Que Ya NO Incluye

- MSM como baseline activo.
- Assets MSM.
- `deploy.sh` site-specific.
- Docker stack legacy.
- Webhooks hardcodeados.
- `src/dna.config.ts` como contrato.

## Como Crear Un Hijo Desde Este Tag

```bash
git clone git@github.com:soyjavierquiroz/funnel-boilerplate.git nuevo-sitio
cd nuevo-sitio
git checkout parent-clean-v1
```

Luego el clon debe editar:

- `.env`
- `src/site/**`
- `public/assets/<site-slug>/`
- server env `CAPTURE_*`

## Checklist Minimo Para Un Nuevo Hijo

- Cambiar identidad en `src/site/**`.
- Cambiar `.env`.
- Configurar `VITE_ADS_ROUTE_PREFIX`.
- Configurar `CAPTURE_*` server-side.
- Agregar assets propios.
- Validar rutas organicas y ads.
- Probar capture con `CAPTURE_DRY_RUN=true`.
- Validar tracking.
- Ejecutar `npm test`, `npm run typecheck`, `npm run lint` y `npm run build`.

## Validaciones Del Tag

Al momento de publicar `parent-clean-v1`, pasaban:

- `npm test`
- `php -l public/capture.php`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

## Riesgos Conocidos / Pendientes

- Consent mode no implementado todavia.
- Componentes legacy VSL documentados pero no modernizados para capture moderno.
- Build mantiene warnings de Browserslist/chunk grande.
- `npm audit` reporta vulnerabilidades no corregidas en esta fase.
- Attribution actual es last-touch simple con stored attribution TTL, no multi-touch.

## Proximas Fases Posibles

- Crear primer hijo real desde `parent-clean-v1`.
- Agregar tests de analytics helpers si conviene.
- Modernizar componentes legacy solo si se reutilizan.
- Consent mode.
- Multi-funnel dentro de un sitio.
