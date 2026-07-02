"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItemsByGroup, navGroups } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-slate-950 text-slate-100">
      <div className="border-b border-slate-800 px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Woosh</p>
        <h1 className="mt-1 text-lg font-bold">Admin Panel</h1>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group} className="mb-6">
            <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {group}
            </p>
            <ul className="mt-2 space-y-1">
              {getNavItemsByGroup(group).map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-cyan-500/15 text-cyan-200"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
