"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  DataTable,
  DetailPanel,
  DonutChart,
  FilterBar,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  LineChartMock,
  PageHeader,
  PageLayout,
  Pagination,
  QuickActionsGrid,
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { demoPackages, packageKpis } from "@/lib/demo-data/packages";
import { formatInr } from "@/lib/format";

export function PackagesSubscriptionsView() {
  const [activeTab, setActiveTab] = useState("packages");
  const [selected, setSelected] = useState(demoPackages[1]);

  const tabs = [
    { id: "packages", label: "Packages", count: 6 },
    { id: "subscriptions", label: "Subscriptions", count: 1248 },
    { id: "addons", label: "Add-ons" },
    { id: "offers", label: "Offers & Discounts" },
    { id: "payments", label: "Payment History" },
  ];

  return (
    <PageLayout moduleKey="packagesSubscriptions">
      <PageHeader
        title="Packages & Subscriptions"
        subtitle="Manage service packages, pricing plans and customer subscriptions."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderSelect>
              <option>All Locations</option>
            </HeaderSelect>
            <HeaderButton>Export Report</HeaderButton>
            <HeaderButton primary>+ Create New Package</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {packageKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search package name or ID..." />
              </div>
              <DataTable
                columns={["Package", "Category", "Monthly", "Yearly", "Services", "Active Subs", "Status"]}
                rows={demoPackages.map((p) => [
                  <button key={p.id} type="button" onClick={() => setSelected(p)} className="font-medium text-blue-600">
                    {p.name}
                  </button>,
                  p.category,
                  formatInr(p.priceMonthly),
                  formatInr(p.priceYearly),
                  String(p.servicesIncluded),
                  String(p.activeSubs),
                  <StatusPill key={p.id} status={p.status} />,
                ])}
              />
              <Pagination showing="1 to 6" total={6} pages={1} />
            </CardBody>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader title="Subscriptions Overview" />
              <CardBody>
                <DonutChart
                  segments={[
                    { label: "Active", value: 84, color: "#10b981" },
                    { label: "Expiring", value: 9, color: "#f59e0b" },
                    { label: "Cancelled", value: 3.6, color: "#ef4444" },
                    { label: "Paused", value: 3.4, color: "#94a3b8" },
                  ]}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Revenue Overview" />
              <CardBody>
                <LineChartMock />
              </CardBody>
            </Card>
          </div>
        </div>
        <DetailPanel title="Package Details" badge={<StatusPill status={selected.status} />}>
          <p className="text-lg font-semibold">{selected.name}</p>
          <p className="text-xs text-slate-500">{selected.id}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-slate-500">Monthly</p>
              <p className="font-bold">{formatInr(selected.priceMonthly)}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-slate-500">Yearly</p>
              <p className="font-bold">{formatInr(selected.priceYearly)}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">{selected.servicesIncluded} services included</p>
          <p className="mt-2 text-sm"><span className="text-slate-500">Active Subscriptions:</span> {selected.activeSubs}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <HeaderButton>Edit Package</HeaderButton>
            <HeaderButton primary>View Subscriptions</HeaderButton>
          </div>
        </DetailPanel>
      </div>
      <Card>
        <CardHeader title="Quick Actions" />
        <CardBody>
          <QuickActionsGrid
            actions={[
              { label: "Create Package", icon: "+" },
              { label: "Add Subscription", icon: "S" },
              { label: "Create Offer", icon: "%" },
              { label: "Pause Subscription", icon: "⏸" },
              { label: "Renew", icon: "↻" },
              { label: "View Reports", icon: "📊" },
            ]}
          />
        </CardBody>
      </Card>
    </PageLayout>
  );
}
