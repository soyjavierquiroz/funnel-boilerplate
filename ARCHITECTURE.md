# Architecture

This repository is a parent funnel boilerplate. Runtime code reads the active site through the site boundary in `src/site/current.ts`, which re-exports from `src/site/dna.config.ts`.

## Boundaries

- `src/site/dna.config.ts`: active clone-owned config, copy, prices, product ids, assets, tracking defaults, capture settings, offer copy, event copy, and success behavior.
- `src/site/current.ts`: official import boundary for pages and components.
- `src/core/attribution`: pure traffic attribution resolver plus browser storage adapter.
- `src/core/services/analytics.ts`: analytics, browser pixel, and CAPI helper that enriches event data from `ResolvedAttribution`.
- `src/core/routing/adsRoute.ts`: normalizes the public `VITE_ADS_ROUTE_PREFIX` and composes ads route paths.
- `src/site/funnel/funnelContext.ts`: generic handoff context from query params and localStorage, separate from attribution.
- `src/site/tracking/clarity.ts`: Microsoft Clarity loader gated by `VITE_CLARITY_PROJECT_ID`.
- `public/assets/funnel-placeholder.svg`: neutral default asset used by the parent.
- `public/capture.php`: generic capture relay configured with `CAPTURE_*` server env only.

The old root config facade was removed. New code should import site config through `src/site/current.ts` or `src/site/dna.config.ts` when editing the active site boundary.

## Operational Shape

The parent intentionally does not ship a deploy script or Docker stack for a real site. A clone should document its own deploy path outside the shared boilerplate unless the flow is genuinely generic.

## Clone Rule

A child site owns identity, assets, env, checkout, capture destinations, tracking ids, and launch documentation. Shared engine code should remain product-agnostic.

Ads and organic pages share the same visual routes, but ads routes are separated with `VITE_ADS_ROUTE_PREFIX`. The parent fallback is `/x9m`; clones may choose another public prefix that starts with `/`, is not `/`, and has no trailing slash.

Traffic channel is not route-only. `src/core/attribution` resolves channel with this priority:

1. Ads route prefix.
2. `fbclid`.
3. `ttclid`.
4. `gclid`.
5. `utm_medium=paid`.
6. Stored attribution.
7. Organic default.

The ads route prefix remains the strongest attribution signal and the only ads tracking gate. Click IDs mark attribution as ads even on organic paths, and `utm_medium=paid` marks attribution as ads with no specific paid platform. Paid attribution is persisted in browser `localStorage` as `funnel_attribution` with a 30 day TTL. The stored value is used only when no stronger signal exists and is not overwritten by organic/default traffic. This is intentionally single-touch attribution; multi-touch modeling is not part of the core engine yet.

Analytics and capture payloads treat `ResolvedAttribution` as the canonical source for `traffic_channel`, `attribution_source`, `paid_platform`, `click_ids`, `utms`, `landing_path`, and `current_path`. Analytics should accept caller-provided attribution when available and resolve the current browser attribution only as a fallback. Meta Pixel, TikTok Pixel, and CAPI ads tracking fire only when the current path is under `VITE_ADS_ROUTE_PREFIX`; explicit `trackingEnabled`, click IDs, paid UTMs, and stored attribution cannot override that route gate.

New tracking and capture surfaces should use `resolveCurrentAttribution` plus `buildAttributionEventFields`. Route-only helpers such as `getTrafficChannel` remain for compatibility and are not sufficient for new tracking/capture decisions because plain pathname calls do not include click IDs, UTMs, or stored attribution. Legacy VSL components that submit capture or checkout events must be adapted before they are treated as clone-safe.

`src/site/funnel/funnelContext.ts` is a separate handoff helper for VSL or pre-sell funnels. It stores values such as `from_funnel`, `funnel_slug`, `sid`, `pattern`, `vsl_completed`, and handoff paths in `localStorage` under `VITE_FUNNEL_CONTEXT_STORAGE_KEY` or `funnel_context_v1`. Funnel context is additive metadata; it does not replace attribution and must not be used to enable pixels or CAPI.

## How To Create A New Child Site From The Boilerplate

Start new sites from the parent repository or a stable parent tag, not from another child. The clone should own `src/site/dna.config.ts`, `.env.local`, product assets, origin remote, launch notes, and deployment details. Keep parent-originated code generic enough to merge back into other children.

Use asset namespaces under `public/assets` so one child cannot accidentally inherit another child's media. Keep secrets in `.env.local` or server-only env, never in versioned browser env. Ads tracking remains route-gated by `VITE_ADS_ROUTE_PREFIX`.

If the child deploy target also serves external funnels or handoff folders, add an explicit deploy exclusion or preservation step for those folders before syncing build output.
