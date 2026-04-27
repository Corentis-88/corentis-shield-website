const rows = [
  ["Vulnerable customer disclosure", "Pause direct response", "Human review", "Disclosure log"],
  ["Financial difficulty signal", "Escalate hardship", "Specialist review", "Support note"],
  ["Unsupported complaint closure", "Block closure", "Complaint handler", "Investigation evidence"],
  ["Sensitive compensation wording", "Require approval", "Supervisor", "Approved wording"],
  ["Missing investigation evidence", "Hold action", "Case owner", "Evidence gap flag"],
];

const headings = ["Risk area", "Runtime checkpoint", "Human review", "Evidence captured"];

export function ControlMatrixPreview() {
  return (
    <div className="card-base card-premium overflow-hidden p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanx">
          Control matrix preview
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">
          Policy intent turned into reviewable controls
        </h3>
      </div>
      <div className="hidden overflow-hidden rounded-xl border border-white/10 md:block">
        <div className="grid grid-cols-4 bg-cyanx/10">
          {headings.map((heading) => (
            <div
              key={heading}
              className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cyan-50"
            >
              {heading}
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row[0]} className="grid grid-cols-4 border-t border-white/10">
            {row.map((cell) => (
              <div key={cell} className="px-4 py-4 text-sm leading-6 text-slate-300">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:hidden">
        {rows.map((row) => (
          <div key={row[0]} className="card-base card-info p-4">
            <p className="font-semibold text-white">{row[0]}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {row[1]} {"->"} {row[2]} {"->"} {row[3]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
