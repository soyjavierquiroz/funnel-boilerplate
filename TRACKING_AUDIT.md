# Tracking Audit

Status: neutral parent baseline.

## Current Behavior

- Browser pixels are disabled unless `VITE_META_PIXEL_ID` or `VITE_TIKTOK_PIXEL_ID` are set.
- Server-side event relay is disabled unless `VITE_CAPI_RELAY_URL` is set.
- Default `VITE_SITE_ID` fallback is `EXAMPLE_SITE`.
- Event capture source fallback is `example-event`.
- Capture relay settings are controlled by server `CAPTURE_*` variables.
- `src/core/attribution` is the canonical source for traffic channel, attribution source, paid platform, click IDs, UTMs, landing path, current path, and ads tracking eligibility.
- `src/core/services/analytics.ts` enriches browser pixel and CAPI event data from `ResolvedAttribution`; it should not parse click IDs or UTMs directly.
- Meta Pixel, TikTok Pixel, and CAPI relay are hard-gated by the current `VITE_ADS_ROUTE_PREFIX` path. Click IDs, paid UTMs, stored attribution, and explicit `trackingEnabled` values cannot enable ads tracking on an organic route.
- Paid attribution can come from an ads route, `fbclid`, `ttclid`, `gclid`, paid-like `utm_medium`, or fresh stored attribution.
- Microsoft Clarity loads only when `VITE_CLARITY_PROJECT_ID` is configured.
- Funnel handoff context is stored separately from attribution under `VITE_FUNNEL_CONTEXT_STORAGE_KEY` or `funnel_context_v1`.
- New forms should use `resolveCurrentAttribution` and include `buildAttributionEventFields(attribution)` in capture payloads. Legacy VSL capture/checkout helpers are documentation-only starting points until adapted to the resolver contract.

## Clone Requirements

A clone must set its own site id, pixel ids, relay URL, allowed origins, capture destination, and test payloads. The parent contains no active production tracking identity.

## How To Create A New Child Site From The Boilerplate

Clone from the parent repository or a stable parent tag, never from another child. Create or update `src/site/dna.config.ts`, put clone-owned browser env in `.env.local`, keep production secrets in server env, configure child `origin` and optional parent `upstream`, and keep assets in a child namespace under `public/assets`.

Verify ads tracking under the chosen `VITE_ADS_ROUTE_PREFIX`. Organic URLs with `fbclid`, `ttclid`, `gclid`, paid UTMs, stored attribution, or `trackingEnabled: true` should preserve attribution fields without loading Meta, TikTok, or CAPI.

When deploying a child to a server that contains external funnel folders, exclude or preserve those folders before syncing build output.

## Validation

Run `npm run build` after env changes and perform a test event only against the clone-owned destination. Verify that capture and analytics payloads share the same `traffic_channel`, `attribution_source`, `paid_platform`, `click_ids`, `utms`, `landing_path`, and `current_path` values.
