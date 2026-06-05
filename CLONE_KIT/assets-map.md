# Assets Map

The parent ships one neutral asset:

- `public/assets/funnel-placeholder.svg`

A clone should add its own assets under `public/assets/**` and reference them from `src/site/**`, normally `src/site/dna.config.ts`.

## Common Fields

- `DNA.assets.productImage`
- `DNA.assets.salesLetterImage`
- `DNA.assets.bonusImage`
- `DNA.assets.bundleWideImage`
- `DNA.assets.socialImage`
- `DNA.assets.event.*`
- `DNA.offer.heroImage`
- `DNA.offer.video.posterImage`
- `DNA.seo.socialImage`

## Launch Check

Before publishing, confirm every visible image is either a clone-owned asset or the intentional neutral placeholder for an unfinished demo.
