# Funnel Boilerplate Parent

Clean parent repo for cloning funnels without inheriting a child site's identity, assets, checkout, tracking, capture endpoints, or deploy assumptions.

## Current Baseline

- Active site config: `src/site/dna.config.ts`.
- Default product: `Example Funnel`.
- Default event: `Example Event`.
- Default site id: `EXAMPLE_SITE`.
- Default asset: `public/assets/funnel-placeholder.svg`.
- Capture relay: `public/capture.php`, configured only with server env keys prefixed by `CAPTURE_`.

The parent does not include a site-specific deploy script or a legacy Docker stack. Child sites own their deployment path.

## Clone Surface

For a new clone, edit:

- `.env` and server env values.
- `src/site/**`, especially `src/site/dna.config.ts`.
- `public/assets/**` with assets owned by the clone.

Keep shared components, analytics helpers, routing, and capture relay generic unless the change should flow back to every clone.

## Validation

Before publishing a clone, run:

`php -l public/capture.php`
`npm run typecheck`
`npm run lint`
`npm run build`
`git diff --check`

Then verify the current routes: `/`, `/a`, `/oferta`, `/a/oferta`, `/confirmacion`, and `/a/confirmacion`.
