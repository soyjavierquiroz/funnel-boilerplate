# Launch Checklist

## Content

- [ ] Product, event, domain, site id, SEO, checkout, and success copy are clone-specific.
- [ ] Placeholder testimonials and proof have been replaced or intentionally removed.
- [ ] Pricing, guarantee, urgency, and FAQ match the real offer.

## Assets

- [ ] All production images are clone-owned.
- [ ] Social image resolves correctly.
- [ ] Placeholder assets remain only where intentionally acceptable.

## Operations

- [ ] Server `CAPTURE_*` env values point to the clone destination.
- [ ] Pixel and relay env values belong to the clone.
- [ ] Attribution behavior is verified: prefix routes, click IDs, `utm_medium=paid`, stored attribution, and organic/default fallback.
- [ ] `localStorage.funnel_attribution` uses the expected 30 day TTL and is understood as single-touch attribution.
- [ ] Deploy process is documented in the clone, not assumed from the parent.

## Final Checks

- [ ] Typecheck, lint, build, PHP lint, and `git diff --check` pass.
- [ ] Required routes render after build.
- [ ] A test lead reaches only the intended clone destination.
