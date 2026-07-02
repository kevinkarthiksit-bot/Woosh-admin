"use client";

import type { AdminModuleKey } from "@/lib/capabilities";
import { getModuleStatus } from "@/lib/capabilities";
import { ModuleGate } from "@/components/module-gate/ModuleGate";

export function PageLayout({
  moduleKey,
  children,
}: {
  moduleKey: AdminModuleKey;
  children: React.ReactNode;
}) {
  const status = getModuleStatus(moduleKey);
  if (status === "not_ready") {
    return <ModuleGate moduleKey={moduleKey}>{null}</ModuleGate>;
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">
          {status === "stub" ? "Demo data" : status === "blocked_security" ? "Demo · security blocked" : "Live"}
        </span>
      </div>
      {children}
    </div>
  );
}
