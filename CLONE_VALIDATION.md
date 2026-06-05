# Clone Validation

## Parent Defaults

- Identity default: `Example Funnel`.
- Event default: `Example Event`.
- Domain default: `example.com`.
- Tracking default: `EXAMPLE_SITE`.
- Asset default: `/assets/funnel-placeholder.svg`.

## Required Checks

- `php -l public/capture.php`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`

## Route Smoke List

- `/`
- `/a`
- `/oferta`
- `/a/oferta`
- `/confirmacion`
- `/a/confirmacion`
