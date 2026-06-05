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
- An explicit analytics `trackingEnabled` value wins over `ResolvedAttribution.shouldTrackAds`. Without that explicit flag, organic/default attribution does not fire Meta, TikTok, or CAPI ads tracking.
- Paid attribution can come from an ads route, `fbclid`, `ttclid`, `gclid`, paid-like `utm_medium`, or fresh stored attribution.

## Clone Requirements

A clone must set its own site id, pixel ids, relay URL, allowed origins, capture destination, and test payloads. The parent contains no active production tracking identity.

## Validation

Run `npm run build` after env changes and perform a test event only against the clone-owned destination. Verify that capture and analytics payloads share the same `traffic_channel`, `attribution_source`, `paid_platform`, `click_ids`, `utms`, `landing_path`, and `current_path` values.
