"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  DataTable,
  DetailPanel,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  PageHeader,
  PageLayout,
  StatCard,
  StatusPill,
} from "@/components/admin-ui";
import { activeJobs, liveAlerts, liveOpsKpis, woosherTracking } from "@/lib/demo-data/live-operations";

export function LiveOperationsView() {
  return (
    <PageLayout moduleKey="liveOperations">
      <PageHeader
        title="Live Operations"
        subtitle="Real-time overview of ongoing operations and field team."
        actions={
          <>
            <HeaderSelect>
              <option>All Locations</option>
            </HeaderSelect>
            <HeaderSelect>
              <option>May 18, 2024</option>
            </HeaderSelect>
            <HeaderButton>Filters</HeaderButton>
            <HeaderButton>Refresh</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {liveOpsKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader title="Live Map — Belagavi" />
          <CardBody>
            <div className="relative h-64 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300">
              <div className="absolute left-4 top-4 rounded-lg bg-white p-3 text-xs shadow">
                <p className="font-semibold">Job Status</p>
                <p className="text-slate-600">In Progress · Arrived · Traveling</p>
              </div>
              {["Amit", "Suresh", "Rahul"].map((name, i) => (
                <div
                  key={name}
                  className="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xs font-bold text-white shadow"
                  style={{ left: `${20 + i * 25}%`, top: `${30 + i * 15}%` }}
                >
                  {name[0]}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <DetailPanel title="Active Job #ORD1246" badge={<StatusPill status="In Progress" />}>
          <p className="text-sm font-medium">Rahul Kumar</p>
          <p className="text-xs text-slate-500">+91 98765 43210</p>
          <p className="mt-2 text-sm">Premium Car Wash (Exterior + Interior) — ₹499</p>
          <p className="mt-2 text-sm">
            <span className="text-slate-500">Assigned:</span> Amit Singh (4.6 ★)
          </p>
          <button type="button" className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Open Job Details
          </button>
        </DetailPanel>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="Active Jobs" />
          <CardBody className="p-0">
            <DataTable
              columns={["Order", "Customer", "Service", "Assigned", "Status", "ETA"]}
              rows={activeJobs.map((j) => [
                j.orderId,
                j.customer,
                j.service,
                j.assignedTo,
                <StatusPill key={j.orderId} status={j.status} />,
                j.eta,
              ])}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Woosher Tracking" />
          <CardBody>
            <ul className="space-y-3">
              {woosherTracking.map((w) => (
                <li key={w.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Avatar name={w.name} size="sm" />
                    <div>
                      <p className="font-medium">{w.name}</p>
                      <p className="text-xs text-slate-500">{w.location}</p>
                    </div>
                  </div>
                  <StatusPill status={w.status} />
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Alerts & Notifications" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {liveAlerts.map((a) => (
                <li key={a.text} className="flex justify-between">
                  <span>{a.text}</span>
                  <span className="text-slate-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </PageLayout>
  );
}
