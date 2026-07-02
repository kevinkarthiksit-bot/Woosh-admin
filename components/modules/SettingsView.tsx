"use client";

import { Card, CardBody, HeaderButton, PageHeader, PageLayout } from "@/components/admin-ui";

export function SettingsView() {
  return (
    <PageLayout moduleKey="settings">
      <PageHeader
        title="Settings"
        subtitle="Admin settings, roles and permissions."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardBody>
            <h3 className="font-semibold text-slate-900">General Settings</h3>
            <p className="mt-2 text-sm text-slate-600">Business name, timezone, default location.</p>
            <div className="mt-4">
              <HeaderButton>Edit Settings</HeaderButton>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3 className="font-semibold text-slate-900">Roles & Permissions</h3>
            <p className="mt-2 text-sm text-slate-600">Super Admin, Ops, Finance roles.</p>
            <div className="mt-4">
              <HeaderButton>Manage Roles</HeaderButton>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageLayout>
  );
}
