"use client";

import { useState } from "react";
import {
  BarChartMock,
  Card,
  CardBody,
  CardHeader,
  DataTable,
  DonutChart,
  FilterBar,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  LineChartMock,
  PageHeader,
  PageLayout,
  Pagination,
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { demoInventory, inventoryKpis } from "@/lib/demo-data/inventory";
import { formatInr } from "@/lib/format";

export function InventoryView() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Items", count: 42 },
    { id: "low", label: "Low Stock", count: 6 },
    { id: "out", label: "Out of Stock", count: 2 },
    { id: "expiring", label: "Expiring Soon", count: 4 },
  ];

  return (
    <PageLayout moduleKey="inventory">
      <PageHeader
        title="Inventory Management"
        subtitle="Track, manage and control all inventory & consumable items."
        actions={
          <>
            <HeaderSelect>
              <option>All Locations</option>
            </HeaderSelect>
            <HeaderSelect>
              <option>May 18, 2024</option>
            </HeaderSelect>
            <HeaderButton>Export Report</HeaderButton>
            <HeaderButton primary>+ Add New Item</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {inventoryKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search items by name or SKU..." />
              </div>
              <DataTable
                columns={["Item Name", "Category", "SKU", "Stock", "Unit", "Min Level", "Unit Cost", "Status"]}
                rows={demoInventory.map((i) => [
                  i.name,
                  i.category,
                  i.sku,
                  String(i.currentStock),
                  i.unit,
                  String(i.minStock),
                  formatInr(i.unitCost),
                  <StatusPill key={i.id} status={i.status} />,
                ])}
              />
              <Pagination showing="1 to 8" total={42} />
            </CardBody>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader title="Inventory Value by Category" />
              <CardBody>
                <DonutChart
                  segments={[
                    { label: "Cleaning", value: 39.6, color: "#2563eb" },
                    { label: "Polish", value: 28.8, color: "#7c3aed" },
                    { label: "Accessories", value: 20, color: "#0891b2" },
                    { label: "Others", value: 11.6, color: "#94a3b8" },
                  ]}
                  center="₹2.48L"
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Stock Trend (30 Days)" />
              <CardBody>
                <LineChartMock />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Top Consuming Items" />
              <CardBody>
                <BarChartMock
                  items={[
                    { label: "Car Shampoo", value: 100 },
                    { label: "Foam", value: 75 },
                    { label: "Polish", value: 50 },
                  ]}
                />
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader title="Low Stock / Out of Stock" />
            <CardBody>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Dashboard Polish</span>
                  <span className="text-amber-600">18/25</span>
                </li>
                <li className="flex justify-between">
                  <span>Wheel Brush</span>
                  <span className="text-rose-600">0/10</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Recent Activity" />
            <CardBody>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Stock Added — Car Shampoo +20</li>
                <li>Low Stock Alert — Dashboard Polish</li>
                <li>Request Approved — Wheel Brush x10</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
