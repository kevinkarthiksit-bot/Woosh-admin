export function DonutChart({
  segments,
  center,
}: {
  segments: { label: string; value: number; color: string }[];
  center?: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let offset = 0;
  const stops = segments.map((seg) => {
    const pct = (seg.value / total) * 100;
    const start = offset;
    offset += pct;
    return `${seg.color} ${start}% ${offset}%`;
  });
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-32 w-32 shrink-0 rounded-full"
        style={{ background: `conic-gradient(${stops.join(", ")})` }}
      >
        {center && (
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white text-center text-xs font-semibold text-slate-700">
            {center}
          </div>
        )}
      </div>
      <ul className="space-y-1 text-xs text-slate-600">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
            {s.label} ({((s.value / total) * 100).toFixed(1)}%)
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LineChartMock({ height = 120 }: { height?: number }) {
  return (
    <svg viewBox="0 0 300 100" className="w-full" style={{ height }}>
      <polyline
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        points="0,80 50,60 100,70 150,40 200,50 250,30 300,20"
      />
      <polyline
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4"
        points="0,70 50,65 100,55 150,60 200,45 250,40 300,35"
      />
    </svg>
  );
}

export function BarChartMock({ items }: { items: { label: string; value: number }[] }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-xs">
          <span className="w-24 truncate text-slate-600">{item.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
          <span className="w-10 text-right font-medium text-slate-700">{item.value}%</span>
        </div>
      ))}
    </div>
  );
}

export function ProgressRing({ value, max = 5, label }: { value: number; max?: number; label?: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="relative mx-auto h-24 w-24">
      <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeDasharray={`${pct}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-lg font-bold text-slate-900">{value}</span>
        {label && <span className="text-[10px] text-slate-500">{label}</span>}
      </div>
    </div>
  );
}
