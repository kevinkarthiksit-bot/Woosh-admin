import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Box,
  ClipboardList,
  CreditCard,
  Headphones,
  LayoutDashboard,
  MapPin,
  Package,
  Settings,
  Tag,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";

export interface NavItem {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
  internal?: boolean;
}

/** Screenshot-style flat sidebar navigation */
export const screenshotNav: NavItem[] = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { key: "customers", label: "Customers", href: "/customers", icon: Users },
  { key: "orders", label: "Orders", href: "/orders", icon: ClipboardList },
  { key: "employees", label: "Employees", href: "/employees", icon: UserCog },
  { key: "liveOperations", label: "Live Operations", href: "/live-operations", icon: MapPin },
  { key: "inventory", label: "Inventory", href: "/inventory", icon: Box },
  { key: "payrollsEarnings", label: "Payrolls & Earnings", href: "/payrolls-earnings", icon: Wallet },
  { key: "attendance", label: "Attendance", href: "/attendance", icon: Users },
  { key: "support", label: "Complaints & Support", href: "/support", icon: Headphones },
  { key: "packagesSubscriptions", label: "Packages & Subscriptions", href: "/packages-subscriptions", icon: Package },
  { key: "reportsAnalytics", label: "Reports & Analytics", href: "/reports-analytics", icon: BarChart3 },
  { key: "coupons", label: "Offers & Coupons", href: "/coupons", icon: Tag },
  { key: "settings", label: "Settings", href: "/settings", icon: Settings },
  { key: "apiReadiness", label: "API Readiness", href: "/api-readiness", icon: CreditCard, internal: true },
];

export function getScreenshotNav(includeInternal = false) {
  return screenshotNav.filter((item) => includeInternal || !item.internal);
}
