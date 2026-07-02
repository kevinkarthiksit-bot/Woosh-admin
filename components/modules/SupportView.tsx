"use client";

import { useState } from "react";
import {
  Avatar,
  BarChartMock,
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
import { demoComplaints, supportKpis } from "@/lib/demo-data/support";

export function SupportView() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(demoComplaints[0]);

  const tabs = [
    { id: "all", label: "All Complaints", count: 128 },
    { id: "open", label: "Open", count: 36 },
    { id: "progress", label: "In Progress", count: 28 },
    { id: "resolved", label: "Resolved", count: 60 },
    { id: "escalated", label: "Escalated", count: 4 },
  ];

  return (
    <PageLayout moduleKey="support">
      <PageHeader
        title="Complaints & Support"
        subtitle="Manage customer complaints, track resolutions and improve service quality."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderSelect>
              <option>All Locations</option>
            </HeaderSelect>
            <HeaderButton>Export Report</HeaderButton>
            <HeaderButton primary>+ New Complaint</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {supportKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search complaints..." />
              </div>
              <DataTable
                columns={["Complaint ID", "Customer", "Category", "Related To", "Priority", "Status", "Assigned To", "Created On"]}
                rows={demoComplaints.map((c) => [
                  <button key={c.id} type="button" onClick={() => setSelected(c)} className="font-medium text-blue-600">
                    {c.id}
                  </button>,
                  <span key={`${c.id}-cust`} className="flex items-center gap-2">
                    <Avatar name={c.customer} size="sm" />
                    {c.customer}
                  </span>,
                  c.category,
                  c.relatedTo,
                  <StatusPill key={`${c.id}-pri`} status={c.priority} />,
                  <StatusPill key={`${c.id}-st`} status={c.status} />,
                  c.assignedTo,
                  c.createdOn,
                ])}
              />
              <Pagination showing="1 to 8" total={128} />
            </CardBody>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader title="Complaints by Category" />
              <CardBody>
                <DonutChart
                  segments={[
                    { label: "Service Quality", value: 32.8, color: "#7c3aed" },
                    { label: "Staff Behavior", value: 25, color: "#f59e0b" },
                    { label: "Payment", value: 20, color: "#10b981" },
                    { label: "Others", value: 22.2, color: "#94a3b8" },
                  ]}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Complaints Trend" />
              <CardBody>
                <LineChartMock />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Resolution Time (SLA)" />
              <CardBody>
                <DonutChart
                  segments={[
                    { label: "Within SLA", value: 60.9, color: "#10b981" },
                    { label: "Breached", value: 25, color: "#ef4444" },
                    { label: "At Risk", value: 14.1, color: "#f59e0b" },
                  ]}
                  center="60.9%"
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Customer Satisfaction" />
              <CardBody>
                <p className="text-2xl font-bold">4.6 / 5</p>
                <BarChartMock items={[{ label: "5★", value: 70 }, { label: "4★", value: 20 }, { label: "3★", value: 10 }]} />
              </CardBody>
            </Card>
          </div>
        </div>
        <DetailPanel title="Complaint Details" badge={<StatusPill status={selected.status} />}>
          <div className="flex items-center gap-3">
            <Avatar name={selected.customer} size="lg" />
            <div>
              <p className="font-semibold">{selected.customer}</p>
              <p className="text-sm text-slate-600">{selected.phone}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-slate-500">ID:</span> {selected.id}</p>
            <p><span className="text-slate-500">Category:</span> {selected.category}</p>
            <p><span className="text-slate-500">Priority:</span> <StatusPill status={selected.priority} /></p>
          </div>
          <p className="mt-4 text-sm text-slate-700">
            The car was not cleaned properly. Stains are still visible on the doors and glass.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <HeaderButton primary>Update Status</HeaderButton>
            <HeaderButton>Add Comment</HeaderButton>
            <HeaderButton>Escalate</HeaderButton>
          </div>
        </DetailPanel>
      </div>
      <Card>
        <CardHeader title="Quick Actions" />
        <CardBody>
          <QuickActionsGrid
            actions={[
              { label: "New Complaint", icon: "+" },
              { label: "Bulk Update", icon: "↻" },
              { label: "Escalate", icon: "!" },
              { label: "Auto Assign", icon: "A" },
              { label: "SLA Settings", icon: "⚙" },
              { label: "Support Team", icon: "👥" },
            ]}
          />
        </CardBody>
      </Card>
    </PageLayout>
  );
}
