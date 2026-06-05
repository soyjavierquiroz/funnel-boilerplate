# CAPI Relay Site Audit

Status: neutral parent baseline.

The parent does not configure a production relay site. `VITE_CAPI_RELAY_URL` is empty by default, and `VITE_SITE_ID` falls back to `EXAMPLE_SITE` for local/demo rendering.

## Clone Setup

- Add the clone site id to the external relay.
- Add the clone domain to the relay origin allowlist.
- Store provider access tokens server-side.
- Test browser and server events with clone-owned data.

## Parent Safety

No production relay, token, origin, or child-site id is required for the parent to build.
