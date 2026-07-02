import { cn } from "@/lib/utils";
import { Card, CardBody } from "./Card";

export function StatCard({
  label,
  value,
  subtext,
  trend,
  trendUp,
  icon,
  iconBg = "bg-blue-50 text-blue-600",
}: {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
  iconBg?: string;
}) {
  return (
    <Card>
      <CardBody className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
          {subtext && <p className="mt-0.5 text-xs text-slate-500">{subtext}</p>}
          {trend && (
            <p
              className={cn(
                "mt-1 text-xs font-medium",
                trendUp === false ? "text-rose-600" : "text-emerald-600",
              )}
            >
              {trendUp === false ? "↓" : "↑"} {trend}
            </p>
          )}
        </div>
        {icon && (
          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconBg)}>
            {icon}
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export function KpiRow({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{children}</div>;
}
