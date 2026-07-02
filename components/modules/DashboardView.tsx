"use client";

import Link from "next/link";
import {
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
  StatusPill,
} from "@/components/admin-ui";
import {
  dashboardKpis,
  lowStockAlerts,
  recentNotifications,
  revenueSummary,
  serviceDonut,
} from "@/lib/demo-data";
import { demoCustomers } from "@/lib/demo-data/customers";
import { demoOrders } from "@/lib/demo-data/orders";
import { demoInventory } from "@/lib/demo-data/inventory";

export function DashboardView() {
  return (
    <PageLayout moduleKey="dashboard">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Admin! Here's what's happening with Woosh today."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderButton>Download Report</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {dashboardKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <div className="grid gap-4 lg:grid-cols-12">
        <Card className="lg:col-span-5">
          <CardHeader title="Revenue Overview" subtitle="This Week" />
          <CardBody>
            <LineChartMock height={160} />
          </CardBody>
        </Card>
        <Card className="lg:col-span-4">
          <CardHeader title="Revenue by Service Type" />
          <CardBody>
            <DonutChart segments={serviceDonut} center="₹12.45L" />
          </CardBody>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader title="Revenue Summary" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {revenueSummary.map((row) => (
                <li key={row.label} className="flex justify-between">
                  <span className="text-slate-600">{row.label}</span>
                  <span className="font-semibold text-slate-900">{row.value}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="Customer Management" action={<Link className="text-xs text-blue-600" href="/customers">View All</Link>} />
          <CardBody className="p-0">
            <DataTable
              columns={["Customer", "Phone", "Orders", "Status"]}
              rows={demoCustomers.slice(0, 3).map((c) => [
                c.name,
                c.phone,
                "12",
                <StatusPill key={c.id} status={c.status} />,
              ])}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Order Management" action={<Link className="text-xs text-blue-600" href="/orders">View All</Link>} />
          <CardBody className="p-0">
            <DataTable
              columns={["Order", "Customer", "Service", "Status"]}
              rows={demoOrders.slice(0, 3).map((o) => [
                o.orderNumber,
                o.customerName,
                o.serviceName,
                <StatusPill key={o.id} status={o.status} />,
              ])}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Inventory Management" action={<Link className="text-xs text-blue-600" href="/inventory">View All</Link>} />
          <CardBody className="p-0">
            <DataTable
              columns={["Item", "Stock", "Status"]}
              rows={demoInventory.map((i) => [
                i.name,
                `${i.currentStock} ${i.unit}`,
                <StatusPill key={i.id} status={i.status} />,
              ])}
            />
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader title="Low Stock Alerts" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {lowStockAlerts.map((a) => (
                <li key={a.item} className="flex justify-between text-amber-800">
                  <span>{a.item}</span>
                  <span>{a.qty}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Top Performing Services" />
          <CardBody>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>Premium Car Wash — 40%</li>
              <li>Basic Car Wash — 25%</li>
              <li>Bike Wash — 15%</li>
            </ul>
          </CardBody>
        </Card>
        <Card className="sm:col-span-2">
          <CardHeader title="Recent Notifications" />
          <CardBody>
            <ul className="space-y-2 text-sm">
              {recentNotifications.map((n) => (
                <li key={n.text} className="flex justify-between">
                  <span className="text-slate-700">{n.text}</span>
                  <span className="text-slate-400">{n.time}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </PageLayout>
  );
}
