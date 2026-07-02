"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SimpleTable } from "@/components/data-table/SimpleTable";
import { ModuleGate } from "@/components/module-gate/ModuleGate";
import { adminApi } from "@/lib/api";
import type { AdminOrder } from "@/lib/api/types";
import { formatInr } from "@/lib/format";

export function OrdersView() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);

  useEffect(() => {
    adminApi.orders.listAll().then(setOrders).catch(console.error);
  }, []);

  return (
    <ModuleGate moduleKey="orders">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Orders</h1>
        <p className="mt-1 text-sm text-slate-600">Track and manage Woosh bookings.</p>
        <div className="mt-6">
          <SimpleTable
            columns={["Order", "Customer", "Service", "Schedule", "Status", "Total", ""]}
            rows={orders.map((order) => [
              order.orderNumber,
              order.customerName,
              order.serviceName,
              order.scheduledFor,
              order.status,
              formatInr(order.totalAmount),
              <Link key={order.id} href={`/orders/${order.id}`} className="text-cyan-700 hover:underline">
                View
              </Link>,
            ])}
          />
        </div>
      </div>
    </ModuleGate>
  );
}
