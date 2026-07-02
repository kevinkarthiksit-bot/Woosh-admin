"use client";

import {
  adminCapabilities,
  moduleMeta,
  type AdminModuleKey,
  type ModuleStatus,
} from "@/lib/capabilities";
import { StatusBadge } from "@/components/module-gate/ModuleGate";

export function ApiReadinessView() {
  const entries = Object.keys(moduleMeta) as AdminModuleKey[];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">API readiness</h1>
      <p className="mt-1 text-sm text-slate-600">
        Capability configuration for each admin module. Flip states in{" "}
        <code>lib/capabilities.ts</code> when backend APIs are ready.
      </p>
      <div className="mt-6 space-y-3">
        {entries.map((key) => {
          const meta = moduleMeta[key];
          const status = adminCapabilities[key] as ModuleStatus;
          return (
            <div key={key} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">{meta.label}</p>
                  <p className="text-sm text-slate-600">{meta.href}</p>
                </div>
                <StatusBadge status={status} />
              </div>
              <p className="mt-3 text-sm text-slate-700">{meta.placeholderMessage}</p>
              {meta.expectedEndpoints.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                  {meta.expectedEndpoints.map((endpoint) => (
                    <li key={endpoint}>{endpoint}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
