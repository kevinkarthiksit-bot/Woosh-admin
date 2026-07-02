# API Readiness Matrix

Each admin screen has a capability state in `lib/capabilities.ts`:

- `live` — uses real API endpoints
- `stub` — demo data with visible demo banner
- `not_ready` — blocked with “API required” message
- `blocked_security` — endpoint exists but live calls disabled until admin auth/RBAC

## Dashboard

- Status: `stub`
- Existing API support: partial raw data from `/orders/admin/all`, `/inventory`, `/attendance/admin/all`, `/employees`
- Gap: no aggregated KPI endpoint
- Placeholder: Dashboard analytics API required. Showing demo metrics until KPI endpoints are available.

## Login

- Status: stub auth locally; employee login available via `POST /employees/login` for internal preview only
- Gap: no dedicated admin auth, roles, or permissions
- Placeholder: Admin authentication API required. Employee login can be used only for internal preview.

## Orders list

- Status: `blocked_security`
- Endpoints: `GET /orders/admin/all`, query `status`
- Gap: documented as no auth currently
- Placeholder: Orders admin API requires authenticated admin access.

## Order detail

- Status: `blocked_security`
- Endpoints: `GET /orders/:id`, `PATCH /orders/:id`
- Placeholder: Order detail requires authenticated admin access.

## Reviews

- Status: `blocked_security`
- Endpoints: `GET /orders/admin/reviews`
- Gap: moderation actions not documented
- Placeholder: Review moderation API required when admin auth is ready.

## Services

- Status: `blocked_security`
- Endpoints: `GET/POST/PUT/DELETE /services`, `POST /services/upload-image`, `PUT /services/wash-order`
- Placeholder: Services CRUD requires authenticated admin access.

## Slots

- Status: `blocked_security`
- Endpoints: `/slots/times/*`, `/slots/daily/*`
- Placeholder: Slot management requires authenticated admin access.

## Coupons

- Status: `blocked_security`
- Endpoints: `GET /coupons`, `POST /coupons`
- Gap: update/delete not documented
- Placeholder: Coupon admin requires authenticated admin access.

## Customers

- Status: `not_ready`
- Gap: no customer list/search/detail admin APIs
- Placeholder: Customer directory API required. Add list/search/detail endpoints to enable this screen.

## Wallet

- Status: `blocked_security`
- Endpoints: `GET /users/:phone/wallet`, `POST /users/:phone/wallet/credit`
- Placeholder: Wallet credit requires authenticated admin access.

## Referrals

- Status: `not_ready`
- Partial: `GET /users/:phone/referral-info`
- Placeholder: Referral admin APIs required.

## Memberships

- Status: `stub`
- Endpoints: `GET /memberships/plans`
- Gap: no admin membership operations API
- Placeholder: Membership admin operations use demo data until APIs are connected.

## Package pricing

- Status: `blocked_security`
- Endpoints: `GET /package-pricing`, `PUT /package-pricing`
- Placeholder: Package pricing editor requires authenticated admin access.

## Media

- Status: `blocked_security`
- Endpoints: `GET /media`, `POST /media`, `DELETE /media/:id`
- Placeholder: Media library requires authenticated admin access.

## Employees

- Status: `blocked_security`
- Endpoints: employee CRUD + login
- Placeholder: Employee management requires authenticated admin access.

## Jobs

- Status: `stub`
- Endpoints: employee job queues only
- Gap: no admin dispatch board API
- Placeholder: Admin dispatch APIs required for assigning and monitoring jobs.

## Attendance

- Status: `blocked_security`
- Endpoints: `GET /attendance/admin/all`, `GET /attendance/admin/employee/:employeeId`
- Placeholder: Attendance admin requires authenticated admin access.

## Inventory

- Status: `blocked_security`
- Endpoints: full inventory CRUD + usage
- Placeholder: Inventory management requires authenticated admin access.

## Incentives

- Status: `blocked_security`
- Endpoints: incentive + upsell config GET/PUT
- Placeholder: Incentive config requires authenticated admin access.

## Support

- Status: `not_ready`
- Gap: no support ticket APIs documented
- Placeholder: Support ticket APIs required. This module is not connected yet.

## Audit log

- Status: `not_ready`
- Gap: no audit trail API
- Placeholder: Audit log API required before production admin launch.

## Settings

- Status: `not_ready`
- Gap: no admin users, roles, permissions APIs
- Placeholder: Admin settings and RBAC APIs required.

## API readiness (internal)

- Status: `live` (reads local capability config only)
