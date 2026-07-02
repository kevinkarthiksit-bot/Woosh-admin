import type { AdminModuleKey } from "@/lib/capabilities";
import { moduleMeta } from "@/lib/capabilities";

export const navGroups = ["Operations", "Catalog", "People", "Growth", "System"] as const;

export function getNavItems() {
  return (Object.keys(moduleMeta) as AdminModuleKey[])
    .filter((key) => key !== "orderDetail" && key !== "wallet")
    .map((key) => moduleMeta[key])
    .sort((a, b) => {
      const groupDiff = navGroups.indexOf(a.group) - navGroups.indexOf(b.group);
      if (groupDiff !== 0) return groupDiff;
      return a.label.localeCompare(b.label);
    });
}

export function getNavItemsByGroup(group: (typeof navGroups)[number]) {
  return getNavItems().filter((item) => item.group === group);
}
