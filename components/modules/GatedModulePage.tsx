"use client";

import { ModuleGate } from "@/components/module-gate/ModuleGate";
import type { AdminModuleKey } from "@/lib/capabilities";

export function GatedModulePage({
  moduleKey,
  title,
}: {
  moduleKey: AdminModuleKey;
  title: string;
}) {
  return (
    <ModuleGate moduleKey={moduleKey}>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 text-sm text-slate-600">
          Module shell is ready. Connect live adapters when backend APIs and admin auth are
          available.
        </p>
      </div>
    </ModuleGate>
  );
}
