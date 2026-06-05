# Operational Safety

The parent repo must be safe to clone and open without sending traffic, leads, events, or checkout actions to a real child site.

## Safe Defaults

- `public/capture.php` reads server settings from `CAPTURE_*` only.
- Browser tracking values are empty unless configured through env.
- Checkout URLs default to `example.com` placeholders.
- Assets default to `/assets/funnel-placeholder.svg`.
- No site-specific deploy script or Docker stack is included.

## Before Publishing A Clone

- [ ] Confirm capture destination via server env.
- [ ] Confirm CORS origins and allowed channels.
- [ ] Confirm checkout URL and product ids.
- [ ] Confirm tracking ids and relay site id.
- [ ] Confirm deploy commands are clone-owned and reviewed.
