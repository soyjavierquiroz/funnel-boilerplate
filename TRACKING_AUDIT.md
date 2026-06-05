# Tracking Audit

Status: neutral parent baseline.

## Current Behavior

- Browser pixels are disabled unless `VITE_META_PIXEL_ID` or `VITE_TIKTOK_PIXEL_ID` are set.
- Server-side event relay is disabled unless `VITE_CAPI_RELAY_URL` is set.
- Default `VITE_SITE_ID` fallback is `EXAMPLE_SITE`.
- Event capture source fallback is `example-event`.
- Capture relay settings are controlled by server `CAPTURE_*` variables.

## Clone Requirements

A clone must set its own site id, pixel ids, relay URL, allowed origins, capture destination, and test payloads. The parent contains no active production tracking identity.

## Validation

Run `npm run build` after env changes and perform a test event only against the clone-owned destination.
