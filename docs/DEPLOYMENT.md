# Woosh Admin Deployment

Admin deploys as a **standard Next.js app** on Vercel (not static export like the marketing website).

## One-time setup

1. Push this repo to GitHub: `kevinkarthiksit-bot/woosh-admin`
2. Vercel → **Add New Project** → import `woosh-admin` (separate from `woosh-website`)
3. Framework: **Next.js**
4. Build command: `pnpm build`
5. Install command: `pnpm install`
6. Enable **Deployment Protection** on Preview (and Production until launch)
7. Add custom domain: `admin-preview.getwoosh.com` (Production)

## Environment variables

| Variable | Preview | Production | Notes |
|----------|---------|------------|--------|
| `NEXT_PUBLIC_API_BASE_URL` | `https://car-wash-vbry.onrender.com/api` | same | Backend API root |
| `NEXT_PUBLIC_ADMIN_CAPABILITY_MODE` | `stub-first` | `stub-first` until auth ready | Safe default |
| `ADMIN_REQUIRE_AUTH` | `true` | `true` | |
| `ADMIN_ALLOW_UNPROTECTED_API` | `false` | `false` | Never `true` in public prod |
| `NEXT_PUBLIC_APP_ENV` | `preview` | `production` | Environment badge |

Copy local defaults from `.env.example`.

## Workflow

1. Branch from `main` (`feature/...`)
2. Open PR → Vercel preview URL
3. Run `pnpm verify` locally or in CI
4. Merge to `main` → production deploy

## Smoke checklist (preview)

- [ ] `/login` loads
- [ ] Demo login (any password) reaches `/dashboard`
- [ ] Sidebar shows screenshot modules (Customers, Orders, Live Operations, etc.)
- [ ] `/customers` shows Customer Management demo UI
- [ ] `/orders` shows Order Management demo UI with detail panel
- [ ] `/support` shows Complaints & Support demo UI
- [ ] `/live-operations`, `/packages-subscriptions`, `/payrolls-earnings`, `/reports-analytics` load
- [ ] `/api-readiness` lists all modules
- [ ] No browser console CORS errors on stub-first mode
- [ ] Deployment protection enabled
- [ ] `admin-preview.getwoosh.com` resolves with valid SSL (if domain attached)

## Production launch gates

See [`SECURITY.md`](./SECURITY.md). Do not attach `admin.getwoosh.com` until backend admin auth is verified.

## Rollback

Vercel → Deployments → previous deployment → **Promote to Production**

## Related

- [`ADMIN_PLAN.md`](./ADMIN_PLAN.md)
- [`API_READINESS.md`](./API_READINESS.md)
