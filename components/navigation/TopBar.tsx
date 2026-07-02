"use client";

import { Bell, Menu } from "lucide-react";
import { getAppEnvironment } from "@/lib/config";
import { useAuth } from "@/components/providers/AuthProvider";

export function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  const { logout } = useAuth();
  const environment = getAppEnvironment();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:px-6">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            {environment}
          </span>
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700">
            demo
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button type="button" className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
            12
          </span>
        </button>
        <button
          type="button"
          onClick={logout}
          className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:px-3"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
