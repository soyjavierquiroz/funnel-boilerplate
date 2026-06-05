# Clone Kit

Use this kit to turn the parent boilerplate into a site-specific funnel.

## What To Edit

- `.env`: public browser config such as domain, site id, checkout, pixels, and event dates.
- Server env: `CAPTURE_*` keys for `public/capture.php`.
- `src/site/**`: copy, offer, event, success behavior, prices, product ids, and asset paths.
- `public/assets/**`: clone-owned media.

The parent default is a neutral example using `Example Funnel`, `Example Event`, `EXAMPLE_SITE`, and `/assets/funnel-placeholder.svg`.

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
5. Run validation and route checks before launch.
