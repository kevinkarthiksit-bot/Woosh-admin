# AGENTS.md — Woosh Admin

## Project

Operations admin dashboard for Woosh. Separate from `woosh-website`.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS v4
- pnpm
- Vitest (unit), Playwright (E2E)

## Key paths

- `lib/capabilities.ts` — module status (`live`, `stub`, `not_ready`, `blocked_security`)
- `lib/api/` — contracts, stub/live adapters
- `components/module-gate/ModuleGate.tsx` — API required / demo banners
- `docs/ADMIN_PLAN.md`, `docs/API_READINESS.md`

## Commands

```bash
pnpm dev
pnpm verify
pnpm test:e2e
```

## Rules

- Do not call unauthenticated admin endpoints when `ADMIN_ALLOW_UNPROTECTED_API=false`
- Flip module capability to `live` only after backend admin auth is verified
- Never put secrets in `NEXT_PUBLIC_*` variables
