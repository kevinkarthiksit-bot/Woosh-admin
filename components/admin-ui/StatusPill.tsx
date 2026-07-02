import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-800",
  completed: "bg-emerald-100 text-emerald-800",
  paid: "bg-emerald-100 text-emerald-800",
  resolved: "bg-emerald-100 text-emerald-800",
  "in stock": "bg-emerald-100 text-emerald-800",
  "on duty": "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  open: "bg-amber-100 text-amber-800",
  "low stock": "bg-amber-100 text-amber-800",
  "in progress": "bg-blue-100 text-blue-800",
  assigned: "bg-violet-100 text-violet-800",
  escalated: "bg-rose-100 text-rose-800",
  cancelled: "bg-rose-100 text-rose-800",
  inactive: "bg-slate-200 text-slate-700",
  "out of stock": "bg-rose-100 text-rose-800",
  high: "bg-rose-100 text-rose-800",
  medium: "bg-amber-100 text-amber-800",
  low: "bg-emerald-100 text-emerald-800",
};

export function StatusPill({ status, className }: { status: string; className?: string }) {
  const key = status.toLowerCase();
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize",
        variants[key] ?? "bg-slate-100 text-slate-700",
        className,
      )}
    >
      {status}
    </span>
  );
}
