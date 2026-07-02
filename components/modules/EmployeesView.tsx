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
  ProgressRing,
  StatCard,
  StatusPill,
  Tabs,
} from "@/components/admin-ui";
import { demoEmployees, employeeKpis } from "@/lib/demo-data/employees";

export function EmployeesView() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(demoEmployees[0]);

  const tabs = [
    { id: "all", label: "All Employees", count: 48 },
    { id: "duty", label: "On Duty", count: 28 },
    { id: "leave", label: "On Leave", count: 3 },
    { id: "inactive", label: "Inactive", count: 3 },
  ];

  return (
    <PageLayout moduleKey="employees">
      <PageHeader
        title="Employee Management"
        subtitle="Manage your team, track performance and employee details."
        actions={
          <>
            <HeaderSelect>
              <option>May 12 – May 18, 2024</option>
            </HeaderSelect>
            <HeaderButton>Filters</HeaderButton>
            <HeaderButton primary>+ Add Employee</HeaderButton>
          </>
        }
      />
      <KpiRow>
        {employeeKpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} subtext={kpi.subtext} />
        ))}
      </KpiRow>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Card>
            <CardBody className="p-0">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
              <div className="border-b border-slate-100 p-4">
                <FilterBar searchPlaceholder="Search by name, phone or employee ID..." />
              </div>
              <DataTable
                columns={["Employee", "Employee ID", "Role", "Phone", "Location", "Status", "Performance", "Jobs"]}
                rows={demoEmployees.map((e) => [
                  <button key={e.employeeId} type="button" onClick={() => setSelected(e)} className="flex items-center gap-2">
                    <Avatar name={e.name} size="sm" />
                    {e.name}
                  </button>,
                  e.employeeId,
                  e.role,
                  e.phone,
                  e.location,
                  <StatusPill key={`${e.employeeId}-st`} status={e.status} />,
                  `${e.performanceScore} ★`,
                  e.jobsCompleted,
                ])}
              />
              <Pagination showing="1 to 10" total={48} />
            </CardBody>
          </Card>
        </div>
        <DetailPanel title="Employee Details" badge={<StatusPill status={selected.status} />}>
          <div className="flex items-center gap-3">
            <Avatar name={selected.name} size="lg" />
            <div>
              <p className="font-semibold">{selected.name}</p>
              <p className="text-sm text-slate-600">{selected.role}</p>
              <p className="text-xs text-slate-500">{selected.employeeId}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <ProgressRing value={selected.performanceScore} label="Excellent" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm">
            <div className="rounded-lg bg-slate-50 p-2">
              <p className="font-bold">156</p>
              <p className="text-xs text-slate-500">Jobs Completed</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <p className="font-bold">₹2,450</p>
              <p className="text-xs text-slate-500">Earnings</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <HeaderButton primary>View Profile</HeaderButton>
            <HeaderButton>Edit Details</HeaderButton>
          </div>
        </DetailPanel>
      </div>
    </PageLayout>
  );
}
