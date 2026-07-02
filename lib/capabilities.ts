export type ModuleStatus = "live" | "stub" | "not_ready" | "blocked_security";

export type AdminModuleKey =
  | "dashboard"
  | "orders"
  | "orderDetail"
  | "reviews"
  | "services"
  | "slots"
  | "coupons"
  | "customers"
  | "wallet"
  | "referrals"
  | "memberships"
  | "packagePricing"
  | "media"
  | "employees"
  | "jobs"
  | "liveOperations"
  | "attendance"
  | "inventory"
  | "incentives"
  | "payrollsEarnings"
  | "packagesSubscriptions"
  | "reportsAnalytics"
  | "support"
  | "auditLog"
  | "settings"
  | "apiReadiness";

export const adminCapabilities: Record<AdminModuleKey, ModuleStatus> = {
  dashboard: "stub",
  orders: "blocked_security",
  orderDetail: "blocked_security",
  reviews: "blocked_security",
  services: "blocked_security",
  slots: "blocked_security",
  coupons: "blocked_security",
  customers: "stub",
  wallet: "blocked_security",
  referrals: "stub",
  memberships: "stub",
  packagePricing: "blocked_security",
  media: "blocked_security",
  employees: "blocked_security",
  jobs: "stub",
  liveOperations: "stub",
  attendance: "blocked_security",
  inventory: "blocked_security",
  incentives: "blocked_security",
  payrollsEarnings: "stub",
  packagesSubscriptions: "stub",
  reportsAnalytics: "stub",
  support: "stub",
  auditLog: "not_ready",
  settings: "stub",
  apiReadiness: "live",
};

export interface ModuleMeta {
  key: AdminModuleKey;
  label: string;
  href: string;
  group: "Operations" | "Catalog" | "People" | "Growth" | "System";
  expectedEndpoints: string[];
  placeholderMessage: string;
}

export const moduleMeta: Record<AdminModuleKey, ModuleMeta> = {
  dashboard: {
    key: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    group: "Operations",
    expectedEndpoints: ["GET /admin/metrics/overview"],
    placeholderMessage:
      "Dashboard analytics API required. Showing demo metrics until KPI endpoints are available.",
  },
  orders: {
    key: "orders",
    label: "Orders",
    href: "/orders",
    group: "Operations",
    expectedEndpoints: ["GET /orders/admin/all", "PATCH /orders/:id"],
    placeholderMessage: "Orders admin API requires authenticated admin access.",
  },
  orderDetail: {
    key: "orderDetail",
    label: "Order detail",
    href: "/orders",
    group: "Operations",
    expectedEndpoints: ["GET /orders/:id", "PATCH /orders/:id"],
    placeholderMessage: "Order detail requires authenticated admin access.",
  },
  reviews: {
    key: "reviews",
    label: "Reviews",
    href: "/orders/reviews",
    group: "Operations",
    expectedEndpoints: ["GET /orders/admin/reviews"],
    placeholderMessage: "Review moderation API required when admin auth is ready.",
  },
  services: {
    key: "services",
    label: "Services",
    href: "/services",
    group: "Catalog",
    expectedEndpoints: ["GET /services", "POST /services", "PUT /services/:id"],
    placeholderMessage: "Services CRUD requires authenticated admin access.",
  },
  slots: {
    key: "slots",
    label: "Slots",
    href: "/slots",
    group: "Catalog",
    expectedEndpoints: ["GET /slots/times/all", "POST /slots/daily"],
    placeholderMessage: "Slot management requires authenticated admin access.",
  },
  coupons: {
    key: "coupons",
    label: "Offers & Coupons",
    href: "/coupons",
    group: "Growth",
    expectedEndpoints: ["GET /coupons", "POST /coupons"],
    placeholderMessage: "Coupon admin requires authenticated admin access.",
  },
  customers: {
    key: "customers",
    label: "Customers",
    href: "/customers",
    group: "People",
    expectedEndpoints: ["GET /admin/customers"],
    placeholderMessage:
      "Customer directory API required. Add list/search/detail endpoints to enable this screen.",
  },
  wallet: {
    key: "wallet",
    label: "Wallet",
    href: "/customers/wallet",
    group: "People",
    expectedEndpoints: ["GET /users/:phone/wallet", "POST /users/:phone/wallet/credit"],
    placeholderMessage: "Wallet credit requires authenticated admin access.",
  },
  referrals: {
    key: "referrals",
    label: "Referrals",
    href: "/referrals",
    group: "Growth",
    expectedEndpoints: ["GET /admin/referrals"],
    placeholderMessage:
      "Referral admin APIs required. Current backend only exposes per-customer referral info.",
  },
  memberships: {
    key: "memberships",
    label: "Memberships",
    href: "/memberships",
    group: "Catalog",
    expectedEndpoints: ["GET /memberships/plans"],
    placeholderMessage: "Membership admin operations use demo data until APIs are connected.",
  },
  packagePricing: {
    key: "packagePricing",
    label: "Package pricing",
    href: "/package-pricing",
    group: "Catalog",
    expectedEndpoints: ["GET /package-pricing", "PUT /package-pricing"],
    placeholderMessage: "Package pricing editor requires authenticated admin access.",
  },
  media: {
    key: "media",
    label: "Media",
    href: "/media",
    group: "Growth",
    expectedEndpoints: ["GET /media", "POST /media", "DELETE /media/:id"],
    placeholderMessage: "Media library requires authenticated admin access.",
  },
  employees: {
    key: "employees",
    label: "Employees",
    href: "/employees",
    group: "People",
    expectedEndpoints: ["GET /employees", "POST /employees"],
    placeholderMessage: "Employee management requires authenticated admin access.",
  },
  jobs: {
    key: "jobs",
    label: "Jobs",
    href: "/jobs",
    group: "Operations",
    expectedEndpoints: ["GET /jobs/incoming", "POST /jobs/:id/accept"],
    placeholderMessage:
      "Admin dispatch APIs required for assigning, reassigning, and monitoring jobs.",
  },
  liveOperations: {
    key: "liveOperations",
    label: "Live Operations",
    href: "/live-operations",
    group: "Operations",
    expectedEndpoints: ["GET /admin/live-operations"],
    placeholderMessage: "Live operations tracking uses demo data until APIs are connected.",
  },
  attendance: {
    key: "attendance",
    label: "Attendance",
    href: "/attendance",
    group: "People",
    expectedEndpoints: ["GET /attendance/admin/all"],
    placeholderMessage: "Attendance admin requires authenticated admin access.",
  },
  inventory: {
    key: "inventory",
    label: "Inventory",
    href: "/inventory",
    group: "Operations",
    expectedEndpoints: ["GET /inventory", "PATCH /inventory/:id/stock"],
    placeholderMessage: "Inventory management requires authenticated admin access.",
  },
  incentives: {
    key: "incentives",
    label: "Incentives",
    href: "/incentives",
    group: "People",
    expectedEndpoints: ["GET /employee-incentives/config"],
    placeholderMessage: "Incentive config requires authenticated admin access.",
  },
  payrollsEarnings: {
    key: "payrollsEarnings",
    label: "Payrolls & Earnings",
    href: "/payrolls-earnings",
    group: "People",
    expectedEndpoints: ["GET /admin/payroll"],
    placeholderMessage: "Payroll APIs use demo data until backend is connected.",
  },
  packagesSubscriptions: {
    key: "packagesSubscriptions",
    label: "Packages & Subscriptions",
    href: "/packages-subscriptions",
    group: "Catalog",
    expectedEndpoints: ["GET /memberships/plans"],
    placeholderMessage: "Package and subscription admin uses demo data.",
  },
  reportsAnalytics: {
    key: "reportsAnalytics",
    label: "Reports & Analytics",
    href: "/reports-analytics",
    group: "System",
    expectedEndpoints: ["GET /admin/reports"],
    placeholderMessage: "Reports and analytics use demo data until APIs are connected.",
  },
  support: {
    key: "support",
    label: "Complaints & Support",
    href: "/support",
    group: "System",
    expectedEndpoints: ["GET /admin/support/tickets"],
    placeholderMessage: "Support ticket APIs required. This module is not connected yet.",
  },
  auditLog: {
    key: "auditLog",
    label: "Audit log",
    href: "/audit-log",
    group: "System",
    expectedEndpoints: ["GET /admin/audit-log"],
    placeholderMessage: "Audit log API required before production admin launch.",
  },
  settings: {
    key: "settings",
    label: "Settings",
    href: "/settings",
    group: "System",
    expectedEndpoints: ["POST /admin/auth/login", "GET /admin/auth/me"],
    placeholderMessage: "Admin settings and RBAC APIs required.",
  },
  apiReadiness: {
    key: "apiReadiness",
    label: "API readiness",
    href: "/api-readiness",
    group: "System",
    expectedEndpoints: [],
    placeholderMessage: "Local capability configuration view.",
  },
};

export function getModuleStatus(key: AdminModuleKey): ModuleStatus {
  return adminCapabilities[key];
}

export function canUseLiveApi(key: AdminModuleKey): boolean {
  const status = getModuleStatus(key);
  if (status !== "live") return false;
  return process.env.ADMIN_ALLOW_UNPROTECTED_API === "true";
}

export function shouldShowStubData(key: AdminModuleKey): boolean {
  const status = getModuleStatus(key);
  return status === "stub" || status === "blocked_security";
}
