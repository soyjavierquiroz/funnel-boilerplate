# Funnel Boilerplate Parent

Clean parent repo for cloning funnels without inheriting a child site's identity, assets, checkout, tracking, capture endpoints, or deploy assumptions.

## Current Baseline

- Active site config: `src/site/dna.config.ts`.
- Default product: `Example Funnel`.
- Default event: `Example Event`.
- Default site id: `EXAMPLE_SITE`.
- Default asset: `public/assets/funnel-placeholder.svg`.
- Default ads route prefix: `VITE_ADS_ROUTE_PREFIX=/x9m`.
- Capture relay: `public/capture.php`, configured only with server env keys prefixed by `CAPTURE_`.

The parent does not include a site-specific deploy script or a legacy Docker stack. Child sites own their deployment path.

## Clone Surface

For a new clone, edit:

- `.env` and server env values.
- `src/site/**`, especially `src/site/dna.config.ts`.
- `public/assets/**` with assets owned by the clone.

`VITE_ADS_ROUTE_PREFIX` is a public browser value used to separate ads routes from organic routes. Each clone may change it. It must start with `/`, must not be `/`, and must not end with `/`.

Keep shared components, analytics helpers, routing, and capture relay generic unless the change should flow back to every clone.

## Validation

Before publishing a clone, run:

`php -l public/capture.php`
`npm run typecheck`
`npm run lint`
`npm run build`
`git diff --check`

Then verify the current routes using the configured ads prefix. With `VITE_ADS_ROUTE_PREFIX=/x9m`, check `/`, `/x9m`, `/oferta`, `/x9m/oferta`, `/confirmacion`, and `/x9m/confirmacion`.
