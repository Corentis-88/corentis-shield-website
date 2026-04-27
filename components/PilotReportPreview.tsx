const reportSections = [
  "Use-case boundary",
  "Control objectives",
  "Scenario tests",
  "Checkpoint outcomes",
  "Review queue summary",
  "Evidence log",
  "Residual risks",
  "Go/no-go recommendation",
];

export function PilotReportPreview() {
  return (
    <div className="card-base card-premium overflow-hidden p-6">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanx">
            Sample report structure
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">What a pilot report contains</h3>
        </div>
        <span className="rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
          Illustrative
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reportSections.map((section) => (
          <div key={section} className="card-base card-info p-4">
            <p className="text-sm font-medium leading-6 text-cyan-50">{section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
