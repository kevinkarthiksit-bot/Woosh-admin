"use client";

import { useEffect, useState } from "react";
import { SimpleTable } from "@/components/data-table/SimpleTable";
import { ModuleGate } from "@/components/module-gate/ModuleGate";
import { adminApi } from "@/lib/api";
import type { AdminService } from "@/lib/api/types";
import { formatInr } from "@/lib/format";

function createListView(
  moduleKey: "services" | "employees" | "inventory" | "coupons" | "slots",
  title: string,
  fetchRows: () => Promise<unknown[]>,
  mapRow: (item: unknown) => string[],
  columns: string[],
) {
  return function ListModuleView() {
    const [rows, setRows] = useState<string[][]>([]);

    useEffect(() => {
      fetchRows()
        .then((items) => setRows(items.map(mapRow)))
        .catch(console.error);
    }, []);

    return (
      <ModuleGate moduleKey={moduleKey}>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <div className="mt-6">
            <SimpleTable columns={columns} rows={rows} />
          </div>
          <button
            type="button"
            disabled
            className="mt-4 cursor-not-allowed rounded-lg bg-slate-300 px-4 py-2 text-sm font-medium text-slate-600"
          >
            Create / edit disabled until live admin API
          </button>
        </div>
      </ModuleGate>
    );
  };
}

export const ServicesView = createListView(
  "services",
  "Services",
  () => adminApi.services.list(),
  (item) => {
    const service = item as AdminService;
    return [
      service.name,
      service.category,
      formatInr(service.basePrice),
      `${service.duration} min`,
      service.isActive ? "Active" : "Inactive",
    ];
  },
  ["Name", "Category", "Price", "Duration", "Status"],
);

export const EmployeesView = createListView(
  "employees",
  "Employees",
  () => adminApi.employees.list(),
  (item) => {
    const employee = item as { employeeId: string; name: string; phone: string; isActive: boolean };
    return [employee.employeeId, employee.name, employee.phone, employee.isActive ? "Active" : "Inactive"];
  },
  ["ID", "Name", "Phone", "Status"],
);

export const InventoryView = createListView(
  "inventory",
  "Inventory",
  () => adminApi.inventory.list(),
  (item) => {
    const inventory = item as {
      name: string;
      category: string;
      currentStock: number;
      unit: string;
      lowStockThreshold: number;
    };
    return [
      inventory.name,
      inventory.category,
      `${inventory.currentStock} ${inventory.unit}`,
      `${inventory.lowStockThreshold} ${inventory.unit}`,
    ];
  },
  ["Item", "Category", "Stock", "Low threshold"],
);

export const CouponsView = createListView(
  "coupons",
  "Coupons",
  () => adminApi.coupons.list(),
  (item) => {
    const coupon = item as {
      code: string;
      discountType: string;
      discountValue: number;
      expiryDate: string;
      isActive: boolean;
    };
    return [
      coupon.code,
      coupon.discountType,
      String(coupon.discountValue),
      coupon.expiryDate,
      coupon.isActive ? "Active" : "Inactive",
    ];
  },
  ["Code", "Type", "Value", "Expiry", "Status"],
);

export const SlotsView = createListView(
  "slots",
  "Slots",
  () => adminApi.slots.listTimes(),
  (item) => {
    const slot = item as { time: string; startTime: string; endTime: string; order: number };
    return [slot.time, slot.startTime, slot.endTime, String(slot.order)];
  },
  ["Label", "Start", "End", "Order"],
);
