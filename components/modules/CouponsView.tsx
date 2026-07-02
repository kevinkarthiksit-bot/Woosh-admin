"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  DataTable,
  FilterBar,
  HeaderButton,
  PageHeader,
  PageLayout,
  StatusPill,
} from "@/components/admin-ui";
import { adminApi } from "@/lib/api";
import type { AdminCoupon } from "@/lib/api/types";

export function CouponsView() {
  const [coupons, setCoupons] = useState<AdminCoupon[]>([]);

  useEffect(() => {
    adminApi.coupons.list().then(setCoupons).catch(console.error);
  }, []);

  return (
    <PageLayout moduleKey="coupons">
      <PageHeader
        title="Offers & Coupons"
        subtitle="Create and manage promotional offers and discount coupons."
        actions={<HeaderButton primary>+ Create Coupon</HeaderButton>}
      />
      <Card>
        <CardBody>
          <FilterBar searchPlaceholder="Search coupon code..." />
          <div className="mt-4">
            <DataTable
              columns={["Code", "Type", "Value", "Expiry", "Status"]}
              rows={coupons.map((c) => [
                c.code,
                c.discountType,
                String(c.discountValue),
                c.expiryDate,
                <StatusPill key={c.id} status={c.isActive ? "Active" : "Inactive"} />,
              ])}
            />
          </div>
        </CardBody>
      </Card>
    </PageLayout>
  );
}
