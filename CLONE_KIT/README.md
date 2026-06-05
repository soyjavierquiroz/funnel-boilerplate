# Clone Kit

Use this kit to turn the parent boilerplate into a site-specific funnel.

## What To Edit

- `.env`: public browser config such as domain, site id, checkout, pixels, and event dates.
- Server env: `CAPTURE_*` keys for `public/capture.php`.
- `src/site/**`: copy, offer, event, success behavior, prices, product ids, and asset paths.
- `public/assets/**`: clone-owned media.

The parent default is a neutral example using `Example Funnel`, `Example Event`, `EXAMPLE_SITE`, and `/assets/funnel-placeholder.svg`.
The default ads route prefix is `VITE_ADS_ROUTE_PREFIX=/x9m`. It is public, not secret, and separates ads routes from organic routes. Each clone may change it, but it must start with `/`, must not be `/`, and must not end with `/`.

Traffic attribution uses this priority: ads route prefix, `fbclid`, `ttclid`, `gclid`, `utm_medium=paid`, stored attribution, then organic/default. The prefix is still a strong ads signal, but click IDs can mark ads without the prefix. Paid attribution is stored in `localStorage` as `funnel_attribution` for 30 days to keep the paid channel through later navigation. This is not multi-touch attribution.

For new capture forms and checkout CTAs, use `resolveCurrentAttribution` and pass `ResolvedAttribution` through analytics/capture. Capture payloads should include `buildAttributionEventFields(attribution)`. Do not reuse legacy VSL capture or pricing helpers as clone-safe templates until they are adapted to this contract.

## What Not To Assume

- No deploy script is included as the recommended flow.
- No Docker stack is included as an active baseline.
- No child-site assets are kept as fixtures.
- Import site config through the active `src/site/**` boundary.

## Basic Clone Steps

1. Copy env templates and set real values.
2. Replace `src/site/dna.config.ts` content with the clone identity.
3. Add clone-owned assets under `public/assets/**`.
4. Configure `CAPTURE_*` on the server if capture is enabled.
5. Run validation and route checks before launch using the configured ads route prefix.
