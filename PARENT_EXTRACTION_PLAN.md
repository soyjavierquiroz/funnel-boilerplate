# Parent Extraction Plan

Status: complete for the parent baseline cleanup.

## Current State

The parent now opens with a neutral example funnel. The active site config uses `Example Funnel`, `Example Event`, `EXAMPLE_SITE`, `example.com`, generic product ids, and `/assets/funnel-placeholder.svg`.

## Completed

- Site config values were neutralized in `src/site/dna.config.ts`.
- The old root config facade was removed.
- Child-site asset fixtures were removed from the parent.
- Site-specific deploy and legacy Docker files were removed.
- Documentation now instructs clones to own env, site config, assets, capture settings, checkout, tracking, and deploy flow.

## Parent Contract

- Runtime site boundary: `src/site/current.ts` and `src/site/dna.config.ts`.
- Server capture boundary: `public/capture.php` with `CAPTURE_*` env.
- Neutral asset baseline: `public/assets/funnel-placeholder.svg`.
- Minimal routes remain: `/`, `/a`, `/oferta`, `/a/oferta`, `/confirmacion`, and `/a/confirmacion`.

## Remaining Work For Future Phases

- Make optional route prefixes configurable if needed.
- Consider extracting repeated example copy into smaller site config modules if the schema grows.
- Add automated route smoke tests if the project adds a browser test runner.
