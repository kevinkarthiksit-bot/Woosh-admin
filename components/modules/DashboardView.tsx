"use client";

import { useEffect, useState } from "react";
import { ModuleGate } from "@/components/module-gate/ModuleGate";
import { adminApi } from "@/lib/api";
import type { DashboardMetrics } from "@/lib/api/types";
import { formatInr } from "@/lib/format";

export function DashboardView() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);

  useEffect(() => {
    adminApi.dashboard.getMetrics().then(setMetrics).catch(console.error);
  }, []);

  return (
    <ModuleGate moduleKey="dashboard">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">Operational overview for Woosh admin.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            ["Orders today", metrics?.ordersToday ?? "—"],
            ["Pending orders", metrics?.pendingOrders ?? "—"],
            ["Revenue estimate", metrics ? formatInr(metrics.revenueEstimate) : "—"],
            ["Active employees", metrics?.activeEmployees ?? "—"],
            ["Low stock items", metrics?.lowStockCount ?? "—"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </ModuleGate>
  );
}
