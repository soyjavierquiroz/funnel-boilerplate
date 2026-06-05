# Component Agnostic Audit

Status: active runtime is neutral.

## Current Result

The site-specific values now live behind `src/site/dna.config.ts` with neutral defaults. Components should consume content through the site boundary and avoid embedding product names, domains, asset paths, tracking sources, or success destinations.

## Remaining Generic Risks

- Some event components still assume fixed item counts or visual positions.
- The success page is still optimized for a redirect-style next step.
- Some labels remain editorial defaults and should be driven by config if future clones need more variation.

## Recommendation

Keep component changes agnostic. If a clone needs new behavior, add config fields only when the behavior should be reusable by future clones.
