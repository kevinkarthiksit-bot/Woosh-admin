"use client";

import { useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  DataTable,
  DetailPanel,
  FilterBar,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  PageHeader,
  PageLayout,
  Pagination,
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { demoOrders, orderKpis, orderTimeline } from "@/lib/demo-data/orders";
import { formatInr } from "@/lib/format";

export function OrdersView() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(demoOrders[0]);

  const tabs = [
    { id: "all", label: "All Orders", count: 1246 },
    { id: "pending", label: "Pending", count: 128 },
    { id: "progress", label: "In Progress", count: 86 },
    { id: "completed", label: "Completed", count: 1032 },
    { id: "cancelled", label: "Cancelled", count: 32 },
  ];

  return (
    <PageLayout moduleKey="orders">
      <PageHeader
        title="Order Management"
        subtitle="Manage all customer orders and service requests."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderButton>Filters</HeaderButton>
            <HeaderButton primary>+ Add New Order</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {orderKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search by Order ID, Customer, Phone, Vehicle..." />
              </div>
              <DataTable
                columns={["Order ID", "Customer", "Service", "Vehicle", "Assigned To", "Date & Time", "Status", "Amount"]}
                rows={demoOrders.map((o) => [
                  <button key={o.id} type="button" onClick={() => setSelected(o)} className="font-medium text-blue-600">
                    {o.orderNumber}
                  </button>,
                  <span key={`${o.id}-cust`} className="flex items-center gap-2">
                    <Avatar name={o.customerName} size="sm" />
                    {o.customerName}
                  </span>,
                  o.serviceName,
                  `${o.vehicle} · ${o.plate}`,
                  o.assignedTo,
                  o.dateTime,
                  <StatusPill key={`${o.id}-st`} status={o.status} />,
                  formatInr(o.amount),
                ])}
              />
              <Pagination showing="1 to 8" total={1246} />
            </CardBody>
          </Card>
        </div>
        <DetailPanel title="Order Details" badge={<StatusPill status={selected.status} />}>
          <p className="text-sm font-semibold text-slate-900">{selected.orderNumber}</p>
          <p className="text-xs text-slate-500">{selected.dateTime}</p>
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-slate-500">Customer:</span> {selected.customerName}</p>
            <p><span className="text-slate-500">Phone:</span> {selected.customerPhone}</p>
            <p><span className="text-slate-500">Service:</span> {selected.serviceName} ({selected.serviceDetail})</p>
            <p><span className="text-slate-500">Vehicle:</span> {selected.vehicle}</p>
            <p><span className="text-slate-500">Amount:</span> {formatInr(selected.amount)}</p>
          </div>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase text-slate-500">Order Timeline</p>
            <ul className="space-y-2">
              {orderTimeline.map((step) => (
                <li key={step.step} className="flex items-start gap-2 text-xs">
                  <span className={`mt-0.5 h-2 w-2 rounded-full ${step.done ? "bg-emerald-500" : step.current ? "bg-blue-500" : "bg-slate-300"}`} />
                  <span className={step.current ? "font-medium text-blue-700" : "text-slate-600"}>{step.step}</span>
                  {step.time && <span className="text-slate-400">{step.time}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <HeaderButton>Reassign</HeaderButton>
            <HeaderButton>Contact</HeaderButton>
            <HeaderButton>Cancel Order</HeaderButton>
          </div>
        </DetailPanel>
      </div>
    </PageLayout>
  );
}
