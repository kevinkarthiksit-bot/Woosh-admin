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
  KpiRow,
  PageHeader,
  PageLayout,
  Pagination,
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { customerKpis, demoCustomers } from "@/lib/demo-data/customers";

export function CustomersView() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(demoCustomers[0]);

  const tabs = [
    { id: "all", label: "All Customers", count: 1256 },
    { id: "active", label: "Active", count: 1088 },
    { id: "inactive", label: "Inactive", count: 168 },
    { id: "blocked", label: "Blocked", count: 12 },
    { id: "renewal", label: "Renewal Due", count: 98 },
  ];

  return (
    <PageLayout moduleKey="customers">
      <PageHeader
        title="Customer Management"
        subtitle="Manage all your customers, subscriptions and service history."
        actions={<HeaderButton primary>+ Add New Customer</HeaderButton>}
      />
      <KpiRow>
        {customerKpis.map((kpi) => (
          <StatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            subtext={kpi.subtext}
            trend={kpi.trend}
            trendUp={kpi.trendUp}
          />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search customers by name, phone or email..." />
              </div>
              <DataTable
                columns={["Customer", "Contact", "Vehicle", "Subscription", "Next Service", "Status", ""]}
                rows={demoCustomers.map((c) => [
                  <button key={c.id} type="button" onClick={() => setSelected(c)} className="flex items-center gap-2 text-left">
                    <Avatar name={c.name} size="sm" />
                    <span className="font-medium">{c.name}</span>
                  </button>,
                  <span key={`${c.id}-contact`}>{c.phone}</span>,
                  `${c.vehicle} · ${c.plate}`,
                  c.subscription,
                  c.nextService,
                  <StatusPill key={`${c.id}-status`} status={c.status} />,
                  "⋯",
                ])}
              />
              <Pagination showing="1 to 8" total={1256} />
            </CardBody>
          </Card>
        </div>
        <DetailPanel title="Customer Details" badge={<StatusPill status={selected.status} />}>
          <div className="flex items-center gap-3">
            <Avatar name={selected.name} size="lg" />
            <div>
              <p className="font-semibold text-slate-900">{selected.name}</p>
              <p className="text-sm text-slate-600">{selected.phone}</p>
              <p className="text-sm text-slate-600">{selected.email}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-slate-500">Address:</span> {selected.address}</p>
            <p><span className="text-slate-500">Vehicle:</span> {selected.vehicle} ({selected.plate})</p>
            <p><span className="text-slate-500">Subscription:</span> {selected.subscription}</p>
            <p><span className="text-slate-500">Plan:</span> {selected.subscriptionDetail}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <HeaderButton primary>Edit Customer</HeaderButton>
            <HeaderButton>Upgrade Plan</HeaderButton>
          </div>
        </DetailPanel>
      </div>
    </PageLayout>
  );
}
