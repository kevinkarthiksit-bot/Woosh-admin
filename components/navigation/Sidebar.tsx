"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeadphonesIcon, X } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { getScreenshotNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar({
  mobileOpen = false,
  onNavigate,
  onClose,
}: {
  mobileOpen?: boolean;
  onNavigate?: () => void;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const { session } = useAuth();
  const navItems = getScreenshotNav();

  return (
    <aside
      className={cn(
        "flex h-screen w-64 shrink-0 flex-col bg-[#0B132B] text-slate-100",
        "fixed inset-y-0 left-0 z-50 transition-transform duration-200 ease-in-out",
        "lg:static lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-6">
        <p className="text-xl font-bold tracking-wide text-white">WOOSH</p>
        <button
          type="button"
          aria-label="Close navigation"
          className="rounded-lg p-1 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main navigation">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-slate-800 p-4">
        <div className="rounded-xl bg-slate-800/60 p-4">
          <p className="text-xs font-semibold text-white">Need Help?</p>
          <p className="mt-1 text-[11px] text-slate-400">Our support team is ready to help you.</p>
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-3 py-2 text-xs font-medium text-white hover:bg-slate-700"
          >
            <HeadphonesIcon className="h-3.5 w-3.5" />
            Contact Support
          </button>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            {session?.name?.[0] ?? "A"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{session?.name ?? "Admin"}</p>
            <p className="text-xs text-slate-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
