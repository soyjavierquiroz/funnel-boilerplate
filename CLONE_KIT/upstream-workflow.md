# Upstream Workflow

This parent should stay generic. Child repositories can pull shared improvements from the parent while keeping site identity in clone-owned files.

## Parent-Owned

- Shared components and themes.
- Routing and build configuration.
- Generic analytics helpers.
- Generic capture relay behavior.
- Clone kit documentation.

## Clone-Owned

- `.env` and server env.
- `src/site/**`.
- `public/assets/**`.
- Deployment scripts, hosting config, and operational runbooks.

## Merge Guidance

When pulling parent changes into a clone, review conflicts in `src/site/**` carefully. Do not overwrite clone identity with parent placeholders unless that is intentional.
