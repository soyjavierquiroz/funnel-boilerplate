# Site Boundary

`src/site/**` is the active site customization boundary for the parent and its clones.

## Files

- `dna.config.ts`: active site config with neutral example defaults.
- `current.ts`: official runtime export consumed by pages and components.

## Defaults

The parent uses `Example Funnel`, `Example Event`, `EXAMPLE_SITE`, `example.com`, generic product ids, and `/assets/funnel-placeholder.svg`.

## Clone Guidance

Replace site-specific copy, assets, tracking, checkout, capture, offer, event, and success behavior here. Keep shared components generic unless a change belongs in the parent for all clones.
