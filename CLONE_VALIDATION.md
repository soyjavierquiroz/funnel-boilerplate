# Clone validation baseline: aprendermotores.com

Fecha de validacion: 2026-05-27

## Estado actual del clon

- Repo auditado: `/home/aprendermotores.com/source_boilerplate`.
- Dominio nuevo objetivo: `aprendermotores.com`.
- Webroot runtime CyberPanel/LiteSpeed: `/home/aprendermotores.com/public_html`.
- Usuario del dominio observado en runtime: `apren5149`.
- Grupo runtime observado: `nogroup`.
- Rama actual: `main`.
- El clon instala, typechequea y compila correctamente con el estado actual.
- No se corrigio lint, no se ejecuto `npm audit fix`, no se borraron archivos y no se modifico logica.
- `dist/` existe como build generado local y esta ignorado por Git.
- `/home/aprendermotores.com/public_html` existe fuera del repo y contiene la copia runtime servida por CyberPanel.

## Comandos ejecutados y resultados esperados

### Verificacion de estado

```bash
pwd && git status --short && git branch --show-current
```

Resultado esperado/observado:

- Directorio: `/home/aprendermotores.com/source_boilerplate`.
- Rama: `main`.
- Sin cambios antes de crear este documento.

```bash
ls -la public dist /home/aprendermotores.com/public_html
find public dist /home/aprendermotores.com/public_html -maxdepth 2 -printf '%M %u %g %p\n' | sort
```

Resultado esperado/observado:

- `public/` contiene assets fuente.
- `dist/` contiene el build generado por Vite, con owner `root:root` en esta corrida.
- `/home/aprendermotores.com/public_html` contiene el runtime, con owner `apren5149:nogroup`.

### Typecheck

```bash
npm run typecheck
```

Resultado esperado/observado:

- Exit code `0`.
- Comando ejecutado: `tsc --noEmit -p tsconfig.app.json`.
- Sin errores TypeScript.

### Build

```bash
npm run build
```

Resultado esperado/observado:

- Exit code `0`.
- Vite build correcto.
- Artefactos generados:
  - `dist/index.html`: `1.88 kB`, gzip `0.68 kB`.
  - `dist/assets/index-Bzg_ZLp7.css`: `85.01 kB`, gzip `14.06 kB`.
  - `dist/assets/index-CtB44HRi.js`: `879.46 kB`, gzip `272.17 kB`.
- Advertencias actuales detalladas abajo.

### NPM audit, solo lectura

```bash
npm audit --json
```

Resultado esperado/observado:

- Exit code `1`, esperado porque hay vulnerabilidades reportadas.
- Total: `10` vulnerabilidades.
- Severidad: `6` moderadas, `4` altas, `0` criticas.
- No se ejecuto `npm audit fix`.

### Comparacion build vs runtime

```bash
diff -qr dist /home/aprendermotores.com/public_html
```

Resultado esperado/observado:

- Exit code `0`.
- Sin diferencias detectadas entre `dist/` y el webroot runtime actual.

## Advertencias actuales del build

1. `npm audit` reporta `10` vulnerabilidades:
   - `6` moderadas.
   - `4` altas.
   - Paquetes reportados incluyen `vite`, `esbuild`, `postcss`, `glob`, `minimatch`, `picomatch`, `flatted`, `brace-expansion`, `ws` y `yaml`.
   - Pendiente resolver en una tarea separada; no aplicar fixes automaticos sin revisar impacto.

2. Browserslist/caniuse-lite outdated:
   - Vite muestra: `Browserslist: caniuse-lite is outdated`.
   - Pendiente correr `npx update-browserslist-db@latest` en una tarea separada y revisar cambios en lockfile.

3. Chunk JS mayor a `500 kB`:
   - `dist/assets/index-CtB44HRi.js`: `879.46 kB` minificado.
   - Vite sugiere `dynamic import()`, `manualChunks` o ajustar `chunkSizeWarningLimit`.
   - No es bloqueo de build, pero si riesgo de performance inicial.

## Estado de `dist/` como artefacto generado

- `dist/` es un artefacto generado por `npm run build`.
- Esta ignorado por Git mediante `.gitignore`.
- No debe editarse a mano.
- Puede regenerarse desde la fuente con `npm run build`.
- En esta validacion, `dist/` coincide con `/home/aprendermotores.com/public_html` segun `diff -qr`.
- Aunque sea generado, conservarlo durante esta fase ayuda a comparar contra el runtime actual antes de deploys.

## Estado de `/home/aprendermotores.com/public_html`

- Es el webroot runtime del dominio en CyberPanel/LiteSpeed.
- Esta fuera del repo Git.
- Contiene `index.html` y `assets/`.
- Owner/grupo observado: `apren5149:nogroup`.
- Coincide actualmente con `dist/`.
- No borrar ni reemplazar sin backup, build verificado y comparacion previa.
- Cuidado: el `deploy.sh` actual hace `rsync --delete` hacia `../public_html/` y luego `chown -R nobody:nogroup ../public_html/`, lo cual no coincide con el owner runtime observado `apren5149:nogroup`.

## Estado de `public/.htaccess`

- `public/.htaccess` no existe al momento de esta validacion.
- Tampoco existe `.htaccess` en `dist/` ni en `/home/aprendermotores.com/public_html`.
- Por lo tanto no hay nada que trackear ahora para `.htaccess`.
- Si el nuevo funnel necesita fallback SPA en CyberPanel/LiteSpeed, la fuente correcta deberia ser `public/.htaccess` y ese archivo si deberia trackearse, para que Vite lo copie a `dist/` y el deploy lo lleve al webroot.
- Antes de crear ese archivo, confirmar las reglas exactas esperadas para LiteSpeed y si CyberPanel ya maneja algun fallback a nivel de vhost.

## Referencias heredadas que deben parametrizarse antes de lanzar

- `index.html`:
  - Metadata SEO/OG/Twitter aun apunta a `sensorial.pameflorescrea.com`.
  - Descripcion e imagen social hablan de libros sensoriales.

- `src/dna.config.ts`:
  - Producto/copy principal: `Mi Primer Libro Sensorial`.
  - Promesa: crear y vender libros sensoriales.
  - Assets/persona heredados: `familia-pame.jpg`, `pameflores.webp`, testimonios y modulos de libros sensoriales.
  - Checkout Hotmart global: `https://pay.hotmart.com/D75923457J?off=cir53koj&checkoutMode=10`.
  - Precios, CTA, garantia, FAQ, testimonios y bonus corresponden al funnel anterior.

- `src/core/config/funnel.config.ts`:
  - `siteId` fallback sigue siendo `SENSORIAL`.
  - Productos/IDs internos: `MAGIA_VIRTUAL`, `MAGIA_PRESENCIAL`, `MAGIA_PREPARACION`, `MAGIA_VIP`.
  - Webhook placeholder: `https://hook.us1.make.com/test-webhook-url`.
  - Copy de ceremonia/magia mezclado con DNA de libros sensoriales.

- `public/assets/`:
  - Assets actuales corresponden al funnel de libros sensoriales/Pame.
  - Deben reemplazarse o mapearse al nuevo funnel antes de lanzamiento.

- `deploy.sh`:
  - Mensajes mencionan Sensorial.
  - Usa `rsync --delete`.
  - Cambia ownership a `nobody:nogroup`, distinto del runtime observado.
  - Reinicia LiteSpeed.

- Documentacion heredada:
  - `README.md`, `ARCHITECTURE.md` y `CLEANUP_AUDIT.md` describen el flujo anterior y deben actualizarse cuando el nuevo funnel este definido.

## Riesgos de tocar Docker Swarm legacy

- `docker-stack-boilerplate.yaml` apunta a `/opt/webs/boilerplate/dist` y dominios `javierquiroz.com`/`www.javierquiroz.com`.
- `docker-stack-magia.yaml` apunta a `/opt/webs/magiadelaabundancia.com/dist` y dominios `magiadelaabundancia.com`/`www.magiadelaabundancia.com`.
- Ambos usan red externa `traefik_public` y labels Traefik.
- El runtime actual confirmado para este dominio es CyberPanel/LiteSpeed, no Docker Swarm.
- No ejecutar `docker stack deploy`, `docker stack rm` ni tocar servicios Traefik desde esta migracion sin mapear primero que stacks siguen sirviendo trafico real.
- No borrar estos YAML en esta fase; marcarlos como candidatos a limpieza futura con confirmacion operacional.

## Checklist seguro para limpieza futura

- Confirmar que el nuevo funnel ya tiene copy, assets, checkout, pixels, webhooks y dominio final parametrizados.
- Ejecutar `git status --short --untracked-files=all` y separar cambios propios de cambios preexistentes.
- Verificar `npm run typecheck` y `npm run build`.
- Comparar `dist/` contra `/home/aprendermotores.com/public_html` antes de cualquier deploy.
- Respaldar `/home/aprendermotores.com/public_html`.
- Confirmar si se necesita `public/.htaccess` para fallback SPA.
- Revisar y actualizar `deploy.sh` antes de usarlo, especialmente owner/grupo y `rsync --delete`.
- No borrar `public/assets/` hasta que los reemplazos del nuevo funnel esten versionados y el build los use.
- No borrar `dist/` hasta tener una politica clara de regeneracion/deploy.
- No tocar stacks Docker legacy sin validar ownership operacional.
- Hacer cambios de limpieza en commits separados y pequenos.

## Checklist seguro para deploy CyberPanel

- Confirmar estar en `/home/aprendermotores.com/source_boilerplate`.
- Confirmar dominio objetivo: `aprendermotores.com`.
- Confirmar webroot objetivo: `/home/aprendermotores.com/public_html`.
- Confirmar owner/grupo esperado con CyberPanel antes de chown: actualmente `apren5149:nogroup`.
- Revisar `deploy.sh` antes de ejecutarlo; actualmente usa `nobody:nogroup`.
- Ejecutar `npm run typecheck`.
- Ejecutar `npm run build`.
- Revisar advertencias de build y decidir si son aceptables para deploy.
- Hacer backup de `/home/aprendermotores.com/public_html`.
- Ejecutar una comparacion previa con `diff -qr dist /home/aprendermotores.com/public_html`.
- Si se despliega con `rsync --delete`, hacer primero un dry-run:

```bash
rsync -avzn --delete dist/ /home/aprendermotores.com/public_html/
```

- Si el dry-run es correcto, sincronizar y luego validar ownership/permisos.
- Purgar cache LiteSpeed solo si se confirma que es necesario y seguro para el servidor.
- Verificar en navegador:
  - Home carga.
  - Assets cargan sin 404.
  - Rutas SPA funcionan o se define el fallback `.htaccess`.
  - Formularios, pixels/webhooks y checkout apuntan al nuevo funnel.
- No hacer push ni deploy automatico desde esta validacion.
