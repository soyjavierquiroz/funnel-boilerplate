# Architecture

This repository is a parent funnel boilerplate. Runtime code reads the active site through the site boundary in `src/site/current.ts`, which re-exports from `src/site/dna.config.ts`.

## Boundaries

- `src/site/dna.config.ts`: active clone-owned config, copy, prices, product ids, assets, tracking defaults, capture settings, offer copy, event copy, and success behavior.
- `src/site/current.ts`: official import boundary for pages and components.
- `public/assets/funnel-placeholder.svg`: neutral default asset used by the parent.
- `public/capture.php`: generic capture relay configured with `CAPTURE_*` server env only.

The old root config facade was removed. New code should import site config through `src/site/current.ts` or `src/site/dna.config.ts` when editing the active site boundary.

## Operational Shape

The parent intentionally does not ship a deploy script or Docker stack for a real site. A clone should document its own deploy path outside the shared boilerplate unless the flow is genuinely generic.

## Clone Rule

A child site owns identity, assets, env, checkout, capture destinations, tracking ids, and launch documentation. Shared engine code should remain product-agnostic.
