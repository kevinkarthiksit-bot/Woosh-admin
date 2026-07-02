"use client";

import {
  Card,
  CardBody,
  DataTable,
  FilterBar,
  HeaderButton,
  HeaderSelect,
  KpiRow,
  PageHeader,
  PageLayout,
  StatCard,
  StatusPill,
} from "@/components/admin-ui";

const attendanceRows = [
  ["Rahul Kumar", "WOOSH1024", "18 May 2024", "09:00 AM", "06:00 PM", "On Time"],
  ["Amit Singh", "WOOSH1025", "18 May 2024", "09:15 AM", "06:30 PM", "Late"],
  ["Suresh M.", "WOOSH1026", "18 May 2024", "—", "—", "On Leave"],
];

export function AttendanceView() {
  return (
    <PageLayout moduleKey="attendance">
      <PageHeader
        title="Attendance"
        subtitle="Track employee attendance and shift records."
        actions={
          <>
            <HeaderSelect>
              <option>May 2024</option>
            </HeaderSelect>
            <HeaderButton>Export</HeaderButton>
          </>
        }
      />
      <KpiRow>
        <StatCard label="Present Today" value="28" subtext="On duty" />
        <StatCard label="On Leave" value="3" subtext="Approved" />
        <StatCard label="Late Arrivals" value="2" subtext="This week" />
        <StatCard label="Attendance Rate" value="95%" subtext="This month" />
      </KpiRow>
      <Card>
        <CardBody>
          <FilterBar searchPlaceholder="Search employee..." />
          <div className="mt-4">
            <DataTable
              columns={["Employee", "ID", "Date", "Check In", "Check Out", "Status"]}
              rows={attendanceRows.map((row) => [
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                <StatusPill key={row[1]} status={row[5] === "On Leave" ? "On Leave" : row[5] === "Late" ? "Late" : "On Duty"} />,
              ])}
            />
          </div>
        </CardBody>
      </Card>
    </PageLayout>
  );
}
