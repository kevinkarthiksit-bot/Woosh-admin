"use client";

import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: string; label: string; count?: number }[];
  active: string;
  onChange?: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-slate-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange?.(tab.id)}
          className={cn(
            "border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
            active === tab.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-600 hover:text-slate-900",
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-1.5 text-slate-400">({tab.count.toLocaleString()})</span>
          )}
        </button>
      ))}
    </div>
  );
}
