export function QuickActionsGrid({ actions }: { actions: { label: string; icon?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-center text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          <span className="text-lg">{action.icon ?? "•"}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}
