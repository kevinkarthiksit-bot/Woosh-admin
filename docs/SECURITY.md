# Security

## Known backend gaps

Per Woosh API documentation, several admin routes currently have **no authentication middleware**:

- Orders admin list/reviews
- Services CRUD
- Slots admin
- Inventory
- Package pricing PUT
- Employee incentives config
- And others

This is acceptable for backend development only. It is **not** acceptable for a public admin deployment.

## Launch gates

Do **not** launch public production admin until:

1. Backend adds admin auth middleware on all admin routes
2. RBAC roles are defined (ops, finance, superadmin, etc.)
3. Audit logging exists for write actions OR risk is explicitly accepted in writing
4. `ADMIN_ALLOW_UNPROTECTED_API` remains `false` in preview/production

## Preview protection

For internal preview:

- Enable Vercel Deployment Protection on Preview (and Production until launch)
- Keep `NEXT_PUBLIC_ADMIN_CAPABILITY_MODE=stub-first`
- Limit team access to Vercel project

## Secrets

- Never put MongoDB credentials or admin API keys in `NEXT_PUBLIC_*` variables
- Server-side secrets only (future Next.js route handlers or backend middleware)
- Rotate Render/Vercel tokens if exposed in chat or logs

## Frontend safeguards in this repo

- `lib/capabilities.ts` marks sensitive modules as `blocked_security`
- `ADMIN_ALLOW_UNPROTECTED_API=false` prevents live admin calls by default
- Security-blocked modules show demo data instead of calling unauthenticated endpoints
- Write buttons disabled in stub/blocked modes
