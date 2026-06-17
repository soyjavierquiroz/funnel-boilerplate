# Deploy Runbook

This parent repository does not prescribe one production host. Child sites should document their own deploy commands and infrastructure in the child repo.

Before deploying a child:

1. Build from the child repository, not from another child site's checkout.
2. Confirm `.env.local` and server-only env are configured for the child.
3. Run `npm test`, `php -l public/capture.php`, `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check`.
4. Verify ads tracking under `VITE_ADS_ROUTE_PREFIX` and confirm organic URLs with click IDs or paid UTMs do not load Meta, TikTok, or CAPI.
5. Sync build output only to the intended public web root.

If the host also serves external funnel folders, handoff flows, uploads, or manually managed assets, exclude or preserve those paths during deploy. A child deploy must not delete folders that are outside the Vite build output but still served by the same domain.
