"use client";

import type { AdminModuleKey, ModuleStatus } from "@/lib/capabilities";
import { getModuleStatus, moduleMeta } from "@/lib/capabilities";
import { cn } from "@/lib/utils";

function statusLabel(status: ModuleStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "stub":
      return "Demo";
    case "not_ready":
      return "API required";
    case "blocked_security":
      return "Security blocked";
  }
}

function statusClass(status: ModuleStatus): string {
  switch (status) {
    case "live":
      return "bg-emerald-100 text-emerald-800";
    case "stub":
      return "bg-amber-100 text-amber-900";
    case "not_ready":
      return "bg-slate-200 text-slate-700";
    case "blocked_security":
      return "bg-rose-100 text-rose-800";
  }
}

export function StatusBadge({ status }: { status: ModuleStatus }) {
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", statusClass(status))}>
      {statusLabel(status)}
    </span>
  );
}

export function ApiNotReadyBanner({ moduleKey }: { moduleKey: AdminModuleKey }) {
  const meta = moduleMeta[moduleKey];
  return (
    <div className="rounded-xl border border-slate-300 bg-slate-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">API required</p>
      <h2 className="mt-2 text-xl font-semibold text-slate-900">{meta.label} is not connected yet</h2>
      <p className="mt-2 text-sm text-slate-600">{meta.placeholderMessage}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {meta.expectedEndpoints.map((endpoint) => (
          <li key={endpoint}>
            Expected endpoint: <code>{endpoint}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DemoDataBanner() {
  return (
    <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      Demo mode: this screen is using placeholder data until the API is connected.
    </div>
  );
}

export function SecurityBlockedBanner({ moduleKey }: { moduleKey: AdminModuleKey }) {
  const meta = moduleMeta[moduleKey];
  return (
    <div className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-900">
      Security blocked: {meta.label} endpoints exist but are not protected by admin auth yet. Live
      calls are disabled in preview. Showing demo data instead.
    </div>
  );
}

export function ModuleGate({
  moduleKey,
  children,
}: {
  moduleKey: AdminModuleKey;
  children: React.ReactNode;
}) {
  const status = getModuleStatus(moduleKey);

  if (status === "not_ready") {
    return <ApiNotReadyBanner moduleKey={moduleKey} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <StatusBadge status={status} />
      </div>
      {status === "stub" && <DemoDataBanner />}
      {status === "blocked_security" && <SecurityBlockedBanner moduleKey={moduleKey} />}
      {children}
    </div>
  );
}
