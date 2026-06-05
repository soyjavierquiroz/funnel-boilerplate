# Upstream Workflow

Este repo debe poder actuar como repo padre. Los clones deben poder recibir mejoras sin perder sus cambios locales de marca/copy/config.

## Modelo recomendado

- `origin`: repo del clon.
- `upstream`: repo padre boilerplate.

En cada clon:

```bash
git remote add upstream <URL_DEL_REPO_PADRE>
git fetch upstream
```

## Ramas sugeridas

- `main`: produccion del clon.
- `develop` o `site-config`: cambios activos del clon.
- `upstream-sync/<fecha>`: rama temporal para integrar cambios del repo padre.

## Como traer cambios del repo padre

1. Asegurate de tener el clon limpio:

```bash
git status
```

2. Trae cambios del repo padre:

```bash
git fetch upstream
```

3. Crea una rama de sincronizacion:

```bash
git switch -c upstream-sync/2026-06-04
```

4. Integra el repo padre:

```bash
git merge upstream/main
```

Si el equipo prefiere rebase:

```bash
git rebase upstream/main
```

Usa un solo metodo por clon para evitar historial confuso.

## Conflictos esperados

Los conflictos mas comunes ocurren en:

- `src/site/**`
- `.env.example`
- `README.md`
- `public/assets/...`
- `src/components/...` si el clon rompio la regla y edito componentes.

`src/dna.config.ts` existe como facade temporal de compatibilidad y normalmente no deberia recibir cambios especificos del clon.

Regla practica:

- Si el conflicto es copy, marca, assets o URLs: conservar version del clon.
- Si el conflicto es componente, tracking, routing o bugfix compartido: revisar si debe venir del repo padre.
- Si el clon necesita un cambio en componente, considerar subirlo al repo padre como mejora agnostica.

## Archivos que deben mantenerse agnosticos

- `src/components/**`
- `src/core/**`
- `src/pages/Success.tsx`
- `src/dna.config.ts`
- `public/capture.php`
- `deploy.sh`
- `docker-stack-boilerplate.yaml`
- tooling base

`public/capture.php` debe mantenerse agnostico y configurado solo por server env `CAPTURE_*`. `deploy.sh` y `docker-stack-boilerplate.yaml` son site-specific/legacy; los clones no deben asumir que esos archivos apuntan a su destino correcto despues de un sync desde upstream.

## Flujo para cambios compartidos

Cuando un clon descubre un bug o mejora reusable:

1. Crear rama en repo padre.
2. Implementar el cambio agnostico.
3. Validar:

```bash
npm run typecheck
npm run lint
npm run build
```

4. Mergear al repo padre.
5. Sincronizar clones mediante `upstream`.

## Flujo para cambios especificos del sitio

Cambios especificos se quedan en el clon:

- Copy.
- Marca.
- Assets.
- Dominio.
- Tracking IDs.
- Checkout URLs.
- CRM/webhook/listas.
- WhatsApp.
- Precios.
- Deploy site-specific si el clon mantiene `deploy.sh` o Docker Swarm.

## Antes de sincronizar upstream

- [ ] El clon tiene commit local limpio.
- [ ] Se entiende que archivos cambio el repo padre.
- [ ] Hay backup o rama temporal.
- [ ] Se revisan `public/capture.php`, `deploy.sh` y `docker-stack-boilerplate.yaml` si upstream los modifico.
- [ ] Se ejecutan validaciones despues del merge/rebase.

## Despues de sincronizar upstream

```bash
npm run typecheck
npm run lint
npm run build
```

Luego revisar visualmente:

- `/`
- `/a`
- `/oferta`
- `/a/oferta`
- `/confirmacion`
- `/a/confirmacion`
