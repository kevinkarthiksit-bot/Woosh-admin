import { cn } from "@/lib/utils";

export function DataTable({
  columns,
  rows,
  className,
}: {
  columns: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold text-slate-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Pagination({
  showing,
  total,
  page = 1,
  pages = 5,
}: {
  showing: string;
  total: number;
  page?: number;
  pages?: number;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-4 py-3 text-sm text-slate-600">
      <span>
        Showing {showing} of {total.toLocaleString()}
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(pages, 5) }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            type="button"
            className={`rounded px-2.5 py-1 ${p === page ? "bg-blue-600 text-white" : "hover:bg-slate-100"}`}
          >
            {p}
          </button>
        ))}
      </div>
      <select className="rounded border border-slate-300 px-2 py-1 text-sm">
        <option>10 per page</option>
      </select>
    </div>
  );
}
