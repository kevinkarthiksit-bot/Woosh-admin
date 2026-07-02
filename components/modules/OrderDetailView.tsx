"use client";

import { useEffect, useState } from "react";
import { ModuleGate } from "@/components/module-gate/ModuleGate";
import { adminApi } from "@/lib/api";
import type { AdminOrder } from "@/lib/api/types";
import { formatInr } from "@/lib/format";

export function OrderDetailView({ orderId }: { orderId: string }) {
  const [order, setOrder] = useState<AdminOrder | null>(null);

  useEffect(() => {
    adminApi.orders.getById(orderId).then(setOrder).catch(console.error);
  }, [orderId]);

  return (
    <ModuleGate moduleKey="orderDetail">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{order?.orderNumber ?? "Order detail"}</h1>
        {order && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Customer</p>
              <p className="mt-1 font-semibold">{order.customerName}</p>
              <p className="text-sm text-slate-600">{order.customerPhone}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Booking</p>
              <p className="mt-1 font-semibold">{order.serviceName}</p>
              <p className="text-sm text-slate-600">{order.scheduledFor}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-1 font-semibold">{order.status}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Total</p>
              <p className="mt-1 font-semibold">{formatInr(order.totalAmount)}</p>
            </div>
          </div>
        )}
        <div className="mt-6">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg bg-slate-300 px-4 py-2 text-sm font-medium text-slate-600"
          >
            Update status (disabled until live admin API)
          </button>
        </div>
      </div>
    </ModuleGate>
  );
}
