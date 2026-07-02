export function FilterBar({
  searchPlaceholder = "Search...",
  children,
}: {
  searchPlaceholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        type="search"
        placeholder={searchPlaceholder}
        className="min-w-[200px] flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
      />
      {children}
      <button
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Export
      </button>
    </div>
  );
}
