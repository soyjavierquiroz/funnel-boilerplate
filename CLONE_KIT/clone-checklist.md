# Clone Checklist

## Identity

- [ ] Set real product and event names in `src/site/dna.config.ts`.
- [ ] Set `VITE_DOMAIN`, `VITE_SITE_ID`, and `VITE_ADS_ROUTE_PREFIX`.
- [ ] Replace placeholder headlines, offer copy, success copy, proof, FAQ, and testimonials.

## Assets

- [ ] Add clone-owned assets under `public/assets/**`.
- [ ] Replace placeholder asset references in `DNA.assets`, `DNA.assets.event`, `DNA.offer`, and `DNA.seo`.
- [ ] Confirm no asset path points to a deleted or external child-site fixture.

## Capture And Tracking

- [ ] Configure server `CAPTURE_*` values when capture is enabled.
- [ ] Configure public tracking env only for the clone.
- [ ] Test a lead with a safe destination before launch.

## Validation

- [ ] `php -l public/capture.php`
- [ ] `npm run typecheck`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `git diff --check`
- [ ] Verify `/`, `/oferta`, and `/confirmacion`.
- [ ] Verify ads-prefixed routes with the configured `VITE_ADS_ROUTE_PREFIX`; for `/x9m`, check `/x9m`, `/x9m/oferta`, and `/x9m/confirmacion`.
