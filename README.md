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
See `DEPLOY_RUNBOOK.md` for the generic preflight and preservation checklist.

## Releases

- [`parent-clean-v1`](RELEASE_NOTES/parent-clean-v1.md): primer baseline limpio del padre para crear funnels hijos.

## Clone Surface

For a new clone, edit:

- `.env` and server env values.
- `src/site/**`, especially `src/site/dna.config.ts`.
- `public/assets/**` with assets owned by the clone.

`VITE_ADS_ROUTE_PREFIX` is a public browser value used to separate ads routes from organic routes. Each clone may change it. It must start with `/`, must not be `/`, and must not end with `/`.

Traffic attribution is resolved by `src/core/attribution`. The canonical priority is:

1. Ads route prefix.
2. `fbclid`.
3. `ttclid`.
4. `gclid`.
5. `utm_medium=paid`.
6. Stored attribution.
7. Organic default.

`VITE_ADS_ROUTE_PREFIX` is the only signal that enables Meta Pixel, TikTok Pixel, or CAPI relay dispatch. Click IDs can still mark attribution as ads on organic-looking routes such as `/oferta?fbclid=abc`, and paid attribution is stored in `localStorage` under `funnel_attribution` for 30 days so reporting does not lose the paid source. Those signals do not enable ads tracking outside the configured ads route prefix. This is a single-touch resolver, not a multi-touch attribution system.

Analytics, browser pixels, CAPI relay payloads, and the event capture payload should consume this resolver as the canonical attribution source. `src/core/services/analytics.ts` must not parse click IDs or UTMs independently. Meta Pixel, TikTok Pixel, and CAPI are enabled only when the current path is under `VITE_ADS_ROUTE_PREFIX`; click IDs, paid UTMs, stored attribution, and explicit `trackingEnabled` values cannot enable them on organic paths. Paid attribution may still come from the ads route, a click ID, a paid-like UTM, or fresh stored attribution for reporting.

For new forms and checkout CTAs, resolve attribution once in the route/component and pass the `ResolvedAttribution` object into analytics. Capture payloads should include the shared `buildAttributionEventFields(attribution)` output. Legacy VSL helpers such as `AdvancedCaptureForm`, `PricingCard`, and `ExpertCtaButton` are not clone-safe capture/tracking templates until they are adapted to that contract.

Keep shared components, analytics helpers, routing, and capture relay generic unless the change should flow back to every clone.

## How To Create A New Child Site From The Boilerplate

Do not clone from another child site. Start from this parent repository or from a stable parent tag, then create a new child repository with its own origin and keep this repo as upstream when useful.

1. Clone the parent or checkout the chosen stable tag.
2. Create the child site repository and configure Git remotes so `origin` points to the child and any parent reference is named `upstream`.
3. Customize `src/site/dna.config.ts` for the child identity, copy, product, prices, checkout, success behavior, and tracking defaults.
4. Create `.env.local` from `.env.example` or `.env`, fill clone-owned values, and keep secrets out of Git.
5. Keep assets under a child-owned namespace inside `public/assets`, for example `public/assets/example-site`.
6. Configure `VITE_ADS_ROUTE_PREFIX` before launch and verify that ads tracking fires only under that prefix.
7. Configure server-only capture relay values with `CAPTURE_*`; never hardcode webhook secrets or production tokens in browser env.
8. Document the child deploy flow in the child repo. If the server also hosts external funnel folders, exclude or preserve those folders during deploy so a child release does not delete them.

## Validation

Before publishing a clone, run:

`php -l public/capture.php`
`npm run typecheck`
`npm run lint`
`npm run build`
`git diff --check`

Then verify the current routes using the configured ads prefix. With `VITE_ADS_ROUTE_PREFIX=/x9m`, check `/`, `/x9m`, `/oferta`, `/x9m/oferta`, `/confirmacion`, and `/x9m/confirmacion`.
Also verify `/oferta?fbclid=abc`, `/oferta?ttclid=abc`, `/oferta?gclid=abc`, and `/oferta?utm_medium=paid` resolve as paid attribution but do not load Meta, TikTok, or CAPI outside the ads prefix. Clear `localStorage.funnel_attribution` and confirm `/oferta` returns to organic/default.
