# Cleanup Audit

Fecha de auditoria: 2026-05-27

## Estado Actual Del Proyecto

El sitio es un funnel React + Vite + TypeScript servido como build estatico. El repositorio Git real vive en `source_boilerplate/`. El webroot de CyberPanel/LiteSpeed vive fuera del repo, en `../public_html/`.

El flujo de deploy actualmente verificable desde el codigo es:

1. `npm run build`
2. Vite genera `dist/`
3. `deploy.sh` sincroniza `dist/` hacia `../public_html/` con `rsync -avz --delete`
4. `deploy.sh` ajusta permisos del webroot, purga cache de LiteSpeed y reinicia `lsws`

`dist/` y `../public_html/` tienen el mismo contenido al momento de esta auditoria (`diff -qr dist ../public_html` sin diferencias). Por eso:

- `dist/` debe tratarse como artefacto generado local.
- `../public_html/` debe tratarse como artefacto generado y runtime actual del dominio en CyberPanel.
- `../public_html/` NO debe borrarse ni regenerarse sin validar primero el build, porque es el webroot en produccion.

El repo tiene cambios sin commit previos a esta auditoria. Entre ellos hay cambios de codigo, documentacion, una migracion de `kurukin-video-player` a `sensorial-video-player`, eliminacion de `docker-stack-magia.yaml` y archivos nuevos sin trackear. Esta auditoria no revierte ni borra esos cambios.

## Estructura Auditada

| Ruta | Clasificacion | Notas |
| --- | --- | --- |
| `src/` | Core del proyecto | App React, rutas, tema expert, tracking, config del funnel, visitor data y pagina de confirmacion. |
| `src/dna.config.ts` | Core del proyecto | Fuente principal de copy, colores, precios, assets y checkout Hotmart. Critico para clonar un nuevo funnel. |
| `src/core/config/funnel.config.ts` | Core/runtime | Config runtime para video, integraciones, pricing, formularios y `siteId`. Tiene restos semanticos de otro funnel (`MAGIA_*`, `Ceremonia Blanca`) que no parecen renderizarse en el funnel actual, pero son candidatos a limpiar con pruebas. |
| `src/core/services/analytics.ts` | Core/runtime | Tracking Meta/TikTok/CAPI, cookies y atribucion. Critico para produccion. |
| `src/components/themes/expert/` | Core del proyecto | Tema activo. `src/App.tsx` renderiza `ExpertTheme` en `/` y `/libro`. |
| `src/components/themes/expert/components/video-player/src/sensorial-video-player/` | Core del proyecto, pendiente de track | Player local usado por `ExpertHero`. Actualmente aparece como carpeta nueva sin trackear. No eliminar. |
| `src/components/themes/expert/components/video-player/dist/` | Artefacto generado / posible legacy | Build del paquete de video. Todavia contiene archivos `kurukin-video-player.*` antiguos. El app importa el source local, no estos bundles. Candidato a excluir de lint y revisar si debe seguir versionado. |
| `public/assets/` | Necesario para build | Assets fuente copiados por Vite a `dist/assets/`. Coinciden por hash con `dist/assets/` y `../public_html/assets/`. |
| `public/.htaccess` | Necesario para deploy CyberPanel, pendiente de track | Reglas SPA para fallback a `index.html`. Vite lo copia a `dist/.htaccess`; `../public_html/.htaccess` coincide por hash. Actualmente esta sin trackear. |
| `index.html` | Necesario para build | HTML base con metadata SEO/OG del dominio actual. Para clonar debe actualizar URLs absolutas del nuevo dominio. |
| `package.json` / `package-lock.json` | Necesarios para build | Scripts reales: `dev`, `build`, `lint`, `preview`, `typecheck`. |
| `vite.config.ts` | Necesario para build | Config Vite minima con React y exclusion de `lucide-react` en optimizeDeps. No define `base`, por lo que el build asume raiz `/`. |
| `tailwind.config.js`, `postcss.config.js`, `tsconfig*.json`, `eslint.config.js` | Necesarios para build/dev | Tailwind consume `DNA` para fuentes/tokens. ESLint no ignora el `dist` anidado del video player. |
| `.env.example` | Necesario para clonacion | Esta incompleto contra las rutas reales: falta documentar `VITE_SITE_ID`, `VITE_DOMAIN` y `VITE_HOTPRICES_API_URL`. |
| `.env` | Runtime/build local, secreto | Existe localmente y no debe commitearse. Tiene `VITE_SITE_ID` ademas de las variables de `.env.example`. |
| `deploy.sh` | Necesario para deploy CyberPanel | Script actual de deploy local a `../public_html/`. Usa `rsync --delete`, `chown`, purge cache LiteSpeed y `systemctl restart lsws`; debe ejecutarse solo en servidor correcto. |
| `docker-stack-boilerplate.yaml` | Legacy Docker Swarm | Stack Nginx/Traefik para otro dominio (`javierquiroz.com`) y ruta `/opt/webs/boilerplate/dist`. No corresponde al deploy CyberPanel actual. |
| `docker-stack-magia.yaml` | Legacy Docker Swarm / ya eliminado en worktree | Git lo muestra como eliminado antes de esta auditoria. No restaurar sin revisar historial. |
| `README.md` | Documentacion | Tiene instrucciones de Docker como flujo principal. Debe aclararse el flujo CyberPanel actual. |
| `ARCHITECTURE.md` | Documentacion | Menciona tema `panda`, Nginx/stack y playback testimonial fullscreen que no se confirman en el codigo actual. |
| `../public_html/` | Runtime actual CyberPanel | Webroot en produccion. Es copia exacta de `dist/` al momento de la auditoria. No forma parte del repo Git. |
| `../logs/` | Runtime servidor | Logs de acceso/error del dominio. No pertenece al repo ni debe clonarse como base de funnel. |

## Archivos Criticos Que NO Se Deben Tocar Sin Validacion

- `src/dna.config.ts`: gobierna copy, marca, precios, checkout, assets y video.
- `src/App.tsx`: rutas reales `/`, `/libro`, `/confirmacion`.
- `src/components/themes/expert/ExpertTheme.tsx`: composicion del funnel activo y gate de revelado por video.
- `src/components/themes/expert/ExpertHero.tsx`: monta el video principal y dispara revelado de oferta.
- `src/components/themes/expert/components/video-player/src/sensorial-video-player/`: player usado por el hero.
- `src/core/services/analytics.ts`: Meta/TikTok/CAPI y silenciamiento de tracking en `/libro`.
- `src/core/config/funnel.config.ts`: configura video, integraciones, pricing y siteId.
- `public/assets/`: assets fuente necesarios para que el build produzca el sitio actual.
- `public/.htaccess`: fuente del fallback SPA para CyberPanel/LiteSpeed.
- `deploy.sh`: script operativo de deploy actual; peligroso por `rsync --delete` y reinicio de LiteSpeed.
- `../public_html/`: webroot runtime de produccion.

## Legacy Detectado

- `docker-stack-boilerplate.yaml`: legacy confirmado de Docker Swarm/Traefik. Contiene dominio antiguo y ruta antigua. Candidato a eliminar en una fase posterior, no ahora.
- `docker-stack-magia.yaml`: aparece eliminado en el worktree actual. Era legacy probable; confirmar con `git show HEAD:docker-stack-magia.yaml` antes de cerrar la limpieza.
- Referencias documentales a Nginx/stack en `ARCHITECTURE.md`: no corresponden al deploy CyberPanel actual.
- Instruccion de README que usa Docker como flujo principal de build/deploy: puede seguir siendo una opcion de build reproducible, pero no describe el deploy actual.
- Referencias al tema `panda` en docs, `DnaTheme`, CSS y tsconfig: no existe `src/components/themes/panda/` en el arbol actual. Candidato a limpieza solo despues de confirmar que no se usara como base futura.
- Bundles `src/components/themes/expert/components/video-player/dist/kurukin-video-player.*`: artefactos antiguos del player. El codigo actual importa `src/sensorial-video-player`, no estos bundles.
- Archivos demo del video player (`src/App.tsx`, `src/main.tsx`, `public/vite.svg`, `src/assets/react.svg`, `index.html` dentro del paquete): utiles para desarrollo del paquete, pero no runtime del funnel.
- Config de `funnel.config.ts` con textos/product ids de otro funnel (`Ceremonia Blanca`, `MAGIA_*`): candidato a limpieza semantica. Revisar primero porque partes del config se usan en formularios/precios aunque no esten montados en la vista activa.

## Artefactos Generados

- `dist/`: build local generado por Vite. Ignorado por `.gitignore`.
- `../public_html/`: copia deployada del build. Runtime actual, generado por `deploy.sh`, fuera del repo.
- `src/components/themes/expert/components/video-player/dist/`: build generado del paquete local de video. A diferencia del `dist/` raiz, esta versionado actualmente y ademas contiene nombres legacy `kurukin-*`.
- `node_modules/`: dependencia instalada local, no debe clonarse ni commitearse.
- `../logs/`: logs del servidor, no forman parte del proyecto fuente.

## Posibles Duplicados

- `public/assets/`, `dist/assets/` y `../public_html/assets/` contienen los mismos assets. La fuente debe ser `public/assets/`; las otras dos ubicaciones son copias generadas/runtime.
- `public/.htaccess`, `dist/.htaccess` y `../public_html/.htaccess` coinciden por hash. La fuente deberia ser `public/.htaccess`, pero esta sin trackear.
- El paquete local de video tiene source en `src/sensorial-video-player/` y build en `dist/`; el app usa el source, no el build.
- `expertContent.ts` contiene contenido generico/placeholder de otro producto y solo se usa parcialmente para `expertBrandAssets` en `ExpertBonusStack`. Revisar antes de borrar.

## Riesgos De Eliminacion

- Borrar `public/assets/` rompe imagenes del build.
- Borrar `public/.htaccess` puede romper rutas SPA como `/libro` y `/confirmacion` en LiteSpeed/CyberPanel despues del proximo deploy.
- Borrar `../public_html/` tumba el sitio en produccion.
- Borrar `dist/` raiz no deberia afectar el runtime si `../public_html/` ya existe, pero elimina la copia local exacta del deploy actual. Mejor conservar hasta terminar la migracion.
- Borrar `src/components/themes/expert/components/video-player/src/sensorial-video-player/` rompe el hero porque `ExpertHero` importa desde ahi.
- Borrar `src/components/themes/expert/components/video-player/dist/` podria ser seguro para runtime del funnel, pero afecta el paquete si alguien lo consume como libreria local. Confirmar antes.
- Borrar restos `panda` en tipos/CSS/tsconfig puede ser seguro si el tema no existe, pero requiere typecheck/build y una revision de referencias.
- Ejecutar `deploy.sh` en el servidor incorrecto es riesgoso: sincroniza con `--delete`, cambia ownership de `../public_html/`, borra cache LiteSpeed y reinicia `lsws`.

## Verificacion De Scripts Y Config

`package.json`:

- `npm run dev`: arranca Vite.
- `npm run build`: ejecuta `vite build` y genera `dist/`.
- `npm run lint`: ejecuta `eslint .`.
- `npm run preview`: sirve el build local.
- `npm run typecheck`: ejecuta `tsc --noEmit -p tsconfig.app.json`.

`vite.config.ts`:

- Usa `@vitejs/plugin-react`.
- No define `base`, por lo tanto los assets se publican con rutas absolutas desde `/assets/...`.
- Excluye `lucide-react` de `optimizeDeps`.

`.env.example` contra codigo real:

- Documenta `VITE_VSL_VIDEO_ID`, `VITE_META_PIXEL_ID`, `VITE_TIKTOK_PIXEL_ID`, `VITE_CAPI_RELAY_URL`, `VITE_CAPI_DATASET_NAME`.
- El codigo tambien lee `VITE_SITE_ID`, `VITE_DOMAIN` y `VITE_HOTPRICES_API_URL`.
- `.env` local contiene `VITE_SITE_ID`; no se imprimieron valores por seguridad.

Rutas reales:

- `/`: `ExpertTheme`.
- `/libro`: `ExpertTheme` con tracking silenciado por `analytics.ts`.
- `/confirmacion`: `Success`.
- `*`: redirige a `/`.
- Assets referenciados como `/assets/...`, por eso el deploy espera que el sitio viva en la raiz del dominio.

## Validaciones Ejecutadas

- `diff -qr dist ../public_html`: sin diferencias.
- Hash de `dist/index.html` y `../public_html/index.html`: iguales.
- Hash de `public/.htaccess`, `dist/.htaccess` y `../public_html/.htaccess`: iguales.
- Hashes de assets en `public/assets/`, `dist/assets/` y `../public_html/assets/`: sin diferencias detectadas.
- `npm run typecheck`: pasa.
- `npm run lint`: falla actualmente.

Fallas de lint observadas:

- ESLint analiza `src/components/themes/expert/components/video-player/dist/kurukin-video-player.es.js`, que parece artefacto generado/legacy. Ese archivo dispara una regla no disponible.
- `src/components/themes/expert/components/video-player/src/sensorial-video-player/SensorialPlayer.tsx` tiene una variable `error` no usada.
- Hay warnings de dependencias faltantes en hooks del video provider.

No se ejecuto `npm run build` durante esta auditoria para evitar reescribir `dist/` mientras el funnel esta en produccion y el worktree tiene cambios de codigo sin commit.

## Plan De Limpieza Por Fases

### Fase 0: Congelar y Respaldar

- Revisar el diff actual completo antes de cualquier limpieza.
- Confirmar que los cambios preexistentes de codigo son intencionales.
- Respaldar `../public_html/` antes de ejecutar deploys.
- Crear tag o commit base cuando el estado productivo este validado.

### Fase 1: Documentacion y Seguridad De Deploy

- Mantener `CLEANUP_AUDIT.md` como mapa de limpieza.
- Aclarar en README que CyberPanel usa `deploy.sh` y que Docker es solo opcion de build reproducible.
- Aclarar en ARCHITECTURE que el tema activo confirmado es `expert` y que `panda` no existe en el arbol actual.
- Agregar `public/.htaccess` al repo si se confirma que debe ser fuente oficial del fallback SPA.
- Completar `.env.example` con `VITE_SITE_ID`, `VITE_DOMAIN` y `VITE_HOTPRICES_API_URL` cuando sea seguro.

### Fase 2: Artefactos y Lint

- Decidir si `src/components/themes/expert/components/video-player/dist/` debe seguir versionado.
- Si se conserva, regenerarlo con el nombre `sensorial-video-player.*` y limpiar bundles `kurukin-*`.
- Si no se conserva, eliminarlo del repo y asegurar que ningun import dependa de esos bundles.
- Ajustar `eslint.config.js` para ignorar `**/dist/**` si se confirma que los dist anidados son artefactos.
- Corregir el `error` no usado y warnings de hooks si el equipo decide tocar codigo del player.

### Fase 3: Legacy Docker Swarm

- Confirmar que no hay deploy activo usando Swarm/Traefik.
- Marcar `docker-stack-boilerplate.yaml` y `docker-stack-magia.yaml` como candidatos finales de eliminacion.
- Remover referencias a Nginx/stack de la documentacion cuando CyberPanel quede como unico flujo.

### Fase 4: Simplificacion De Tema y Config

- Confirmar si `panda` es tema futuro o residuo.
- Si es residuo, limpiar `DnaTheme`, CSS `theme-panda`, excludes de tsconfig y docs.
- Revisar `funnel.config.ts` para reemplazar restos `MAGIA_*` por nombres neutrales o por el nuevo funnel.
- Revisar componentes comunes no montados (`AdvancedCaptureForm`, `PricingCard`, `SmartPhoneInput`) antes de eliminarlos.

### Fase 5: Base Limpia Para Nuevo Dominio

- Crear branch o repo nuevo desde un commit estable.
- Copiar solo fuente necesaria, configs de build, assets fuente y deploy CyberPanel.
- No copiar `dist/`, `node_modules/`, `../public_html/` ni `../logs/`.
- Generar nuevo `.env` desde `.env.example`.
- Actualizar dominio, metadata, pixel IDs, CAPI relay, `siteId`, video, checkout y assets.
- Ejecutar validaciones antes de primer deploy.

## Recomendaciones Para Clonar A Nuevo Dominio

- Usar `source_boilerplate/` como base, no la carpeta padre completa.
- No copiar `../public_html/`; generar un build nuevo para el nuevo dominio.
- No copiar `.env`; crear uno nuevo desde `.env.example`.
- Cambiar en `index.html` las URLs absolutas `https://sensorial.pameflorescrea.com/...`.
- Cambiar en `src/dna.config.ts`: `productName`, copy, precios, assets, `vslVideoId` y `checkoutUrl`.
- Cambiar `VITE_SITE_ID` para no mezclar eventos CAPI entre funnels.
- Confirmar si `/libro` debe seguir siendo ruta organica sin tracking en el nuevo funnel.
- Confirmar que `public/.htaccess` quede trackeado para que `/confirmacion` y otras rutas funcionen al refrescar.
- Mantener el `base` de Vite sin cambios solo si el nuevo funnel vive en la raiz del dominio.

## Pasos Seguros Para Validar Build Y Deploy

Validacion local sin tocar produccion:

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`
5. `npm run preview -- --host 127.0.0.1`
6. Abrir `/`, `/libro` y `/confirmacion`.
7. Verificar consola del navegador, carga del video, imagenes, CTA Hotmart y comportamiento de tracking esperado.

Validacion previa a CyberPanel:

1. Hacer backup de `../public_html/`.
2. Comparar el build nuevo con el deploy actual usando `diff -qr dist ../public_html`.
3. Confirmar que `dist/.htaccess` existe.
4. Confirmar que `dist/index.html` apunta al dominio correcto.
5. Ejecutar `deploy.sh` solo en el servidor y dominio correctos.
6. Probar rutas directas: `/`, `/libro`, `/confirmacion`.
7. Revisar `../logs/sensorial.pameflorescrea.com.error_log`.

## Candidatos A Eliminacion Futura

No ejecutar estas eliminaciones todavia:

- `docker-stack-boilerplate.yaml`: candidato legacy Swarm.
- `docker-stack-magia.yaml`: candidato legacy Swarm, actualmente eliminado en worktree.
- `dist/`: candidato a no versionar/no clonar; conservar hasta estabilizar.
- `src/components/themes/expert/components/video-player/dist/kurukin-video-player.*`: candidato artefacto legacy.
- `src/components/themes/expert/components/video-player/public/vite.svg` y `src/components/themes/expert/components/video-player/src/assets/react.svg`: candidato demo.
- Referencias `panda` en docs, CSS, tipos y tsconfig: candidato si se confirma que no habra tema panda.
- Restos `MAGIA_*` y copy `Ceremonia Blanca` en `funnel.config.ts`: candidato a limpieza semantica con pruebas.
- `expertContent.ts`: candidato parcial; revisar primero porque `ExpertBonusStack` importa `expertBrandAssets`.
