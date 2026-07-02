"use client";

import { useState } from "react";
import {
  Avatar,
  BarChartMock,
  Card,
  CardBody,
  CardHeader,
  DataTable,
  DonutChart,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  LineChartMock,
  PageHeader,
  PageLayout,
  StatCard,
  Tabs,
} from "@/components/admin-ui";
import { businessSummary, insights, reportsKpis, topSocieties, topWooshers } from "@/lib/demo-data/reports";

export function ReportsAnalyticsView() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "operations", label: "Operations" },
    { id: "financial", label: "Financial" },
    { id: "employees", label: "Employees" },
    { id: "customers", label: "Customers" },
    { id: "services", label: "Services" },
    { id: "inventory", label: "Inventory" },
    { id: "custom", label: "Custom Reports" },
  ];

  return (
    <PageLayout moduleKey="reportsAnalytics">
      <PageHeader
        title="Reports & Analytics"
        subtitle="Track performance, analyze trends and make data-driven decisions."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderSelect>
              <option>All Locations</option>
            </HeaderSelect>
            <HeaderButton>Export Report</HeaderButton>
            <HeaderButton primary>Schedule Report</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {reportsKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <Card>
        <CardBody className="p-0">
          <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
        </CardBody>
      </Card>
      <div className="grid gap-4 lg:grid-cols-12">
        <Card className="lg:col-span-5">
          <CardHeader title="Revenue Overview" />
          <CardBody>
            <LineChartMock height={180} />
          </CardBody>
        </Card>
        <Card className="lg:col-span-4">
          <CardHeader title="Revenue by Service" />
          <CardBody>
            <DonutChart
              segments={[
                { label: "Car Wash", value: 40.7, color: "#2563eb" },
                { label: "Foam Wash", value: 26.8, color: "#7c3aed" },
                { label: "Interior", value: 16.5, color: "#0891b2" },
                { label: "Bike Wash", value: 9.2, color: "#f59e0b" },
                { label: "Others", value: 6.8, color: "#94a3b8" },
              ]}
              center="₹22.75L"
            />
          </CardBody>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader title="Business Summary" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {businessSummary.map((row) => (
                <li key={row.label} className="flex justify-between">
                  <span className="text-slate-600">{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Top Performing Societies" />
          <CardBody className="p-0">
            <DataTable
              columns={["Society", "Orders", "Revenue", "Growth"]}
              rows={topSocieties.map((s) => [s.name, String(s.orders), s.revenue, s.growth])}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Top Performing Wooshers" />
          <CardBody className="p-0">
            <DataTable
              columns={["Woosher", "Jobs", "Revenue", "Rating"]}
              rows={topWooshers.map((w) => [
                <span key={w.name} className="flex items-center gap-2">
                  <Avatar name={w.name} size="sm" />
                  {w.name}
                </span>,
                String(w.jobs),
                w.revenue,
                `${w.rating} ★`,
              ])}
            />
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="Orders Overview" />
          <CardBody>
            <DonutChart
              segments={[
                { label: "Completed", value: 85.4, color: "#10b981" },
                { label: "In Progress", value: 7, color: "#2563eb" },
                { label: "Pending", value: 5.2, color: "#f59e0b" },
                { label: "Cancelled", value: 2.4, color: "#ef4444" },
              ]}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Operational Performance" />
          <CardBody>
            <BarChartMock
              items={[
                { label: "On-time", value: 93 },
                { label: "Quality", value: 94 },
                { label: "Resolution", value: 96 },
              ]}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Insights & Alerts" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {insights.map((i) => (
                <li key={i.text} className="rounded-lg bg-slate-50 px-3 py-2">{i.text}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="rounded-xl bg-violet-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-violet-900">Build Custom Reports</p>
          <p className="text-sm text-violet-700">Create tailored reports for your business needs.</p>
        </div>
        <HeaderButton primary>Create Custom Report</HeaderButton>
      </div>
    </PageLayout>
  );
}
