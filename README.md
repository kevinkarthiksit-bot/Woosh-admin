# Woosh Admin

Operations admin dashboard for Woosh — separate from the marketing website.

## Setup

```bash
corepack pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000/login](http://localhost:3000/login). Demo login accepts any password when stub auth is active.

## Commands

```bash
pnpm dev
pnpm lint
pnpm test:unit
pnpm test:e2e
pnpm verify
pnpm build
```

## Docs

- [`docs/ADMIN_PLAN.md`](docs/ADMIN_PLAN.md)
- [`docs/API_READINESS.md`](docs/API_READINESS.md)
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- [`docs/SECURITY.md`](docs/SECURITY.md)

## Capability model

Module states live in `lib/capabilities.ts`. Switch a module from `stub` or `blocked_security` to `live` only after backend admin auth protects the endpoint.
