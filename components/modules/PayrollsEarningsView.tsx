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
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { demoPayroll, payrollKpis } from "@/lib/demo-data/payroll";
import { formatInr } from "@/lib/format";

export function PayrollsEarningsView() {
  const [activeTab, setActiveTab] = useState("summary");
  const [selected, setSelected] = useState(demoPayroll[0]);

  const tabs = [
    { id: "summary", label: "Payroll Summary" },
    { id: "history", label: "Salary History" },
    { id: "incentives", label: "Incentives" },
    { id: "tips", label: "Tips" },
    { id: "deductions", label: "Deductions" },
    { id: "payments", label: "Payments" },
  ];

  return (
    <PageLayout moduleKey="payrollsEarnings">
      <PageHeader
        title="Payrolls & Earnings"
        subtitle="Manage employee payroll, incentives, tips and payments."
        actions={
          <>
            <HeaderSelect>
              <option>May 2024</option>
            </HeaderSelect>
            <HeaderButton>Generate Payroll</HeaderButton>
            <HeaderButton primary>Approve & Pay Salaries</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {payrollKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} trend={kpi.trend} trendUp={kpi.trendUp} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search by name, employee ID or phone..." />
              </div>
              <DataTable
                columns={["Employee", "ID", "Role", "Location", "Salary", "Incentives", "Tips", "Deductions", "Net Payable", "Status"]}
                rows={demoPayroll.map((p) => [
                  <button key={p.employeeId} type="button" onClick={() => setSelected(p)} className="flex items-center gap-2">
                    <Avatar name={p.name} size="sm" />
                    {p.name}
                  </button>,
                  p.employeeId,
                  p.role,
                  p.location,
                  formatInr(p.salary),
                  formatInr(p.incentives),
                  formatInr(p.tips),
                  formatInr(p.deductions),
                  formatInr(p.netPayable),
                  <StatusPill key={`${p.employeeId}-st`} status={p.status} />,
                ])}
              />
              <Pagination showing="1 to 8" total={48} />
            </CardBody>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader title="Payroll Overview" />
              <CardBody>
                <DonutChart
                  segments={[
                    { label: "Base Salary", value: 70.7, color: "#2563eb" },
                    { label: "Incentives", value: 19.5, color: "#10b981" },
                    { label: "Tips", value: 7.8, color: "#ec4899" },
                    { label: "Deductions", value: 4.4, color: "#ef4444" },
                  ]}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Earnings Breakdown" />
              <CardBody>
                <BarChartMock
                  items={[
                    { label: "Base", value: 100 },
                    { label: "Incentives", value: 28 },
                    { label: "Tips", value: 11 },
                  ]}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader title="Payroll Trend" />
              <CardBody>
                <LineChartMock />
              </CardBody>
            </Card>
          </div>
        </div>
        <DetailPanel title="Employee Earnings" badge={<StatusPill status={selected.status} />}>
          <div className="flex items-center gap-3">
            <Avatar name={selected.name} size="lg" />
            <div>
              <p className="font-semibold">{selected.name}</p>
              <p className="text-sm text-slate-600">{selected.role}</p>
            </div>
          </div>
          <div className="mt-4 space-y-1 text-sm">
            <div className="flex justify-between"><span>Base Salary</span><span>{formatInr(selected.salary)}</span></div>
            <div className="flex justify-between"><span>Incentives</span><span>{formatInr(selected.incentives)}</span></div>
            <div className="flex justify-between"><span>Tips</span><span>{formatInr(selected.tips)}</span></div>
            <div className="flex justify-between text-rose-600"><span>Deductions</span><span>-{formatInr(selected.deductions)}</span></div>
            <div className="flex justify-between border-t pt-2 font-bold text-emerald-700">
              <span>Net Payable</span><span>{formatInr(selected.netPayable)}</span>
            </div>
          </div>
          <HeaderButton primary>Approve & Pay {formatInr(selected.netPayable)}</HeaderButton>
        </DetailPanel>
      </div>
    </PageLayout>
  );
}
