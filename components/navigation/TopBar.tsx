"use client";

import { getAppEnvironment } from "@/lib/config";
import { useAuth } from "@/components/providers/AuthProvider";

export function TopBar() {
  const { session, logout } = useAuth();
  const environment = getAppEnvironment();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
          {environment}
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
          stub-first
        </span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-slate-600">{session?.name ?? "Guest"}</p>
        <button
          type="button"
          onClick={logout}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
