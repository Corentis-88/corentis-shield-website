import { Badge } from "@/components/Badge";

export function ProductCard() {
  return (
    <div className="card-base card-premium p-6 shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-sm font-medium text-slate-400">Corentis Shield</p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Checkpoint decision
          </h3>
        </div>
        <Badge tone="danger">Blocked</Badge>
      </div>
      <div className="space-y-5 pt-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            AI output
          </p>
          <p className="mt-2 text-base leading-7 text-white">
            Draft a standard payment-pressure message after a hardship
            disclosure.
          </p>
        </div>
        <div className="card-base card-danger p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
            Reason
          </p>
          <p className="mt-2 text-sm leading-6 text-red-50">
            Customer hardship disclosed. Collections-pressure wording conflicts
            with the configured vulnerability handling policy.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="card-base card-warning p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Next step
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Human review and evidence capture.
            </p>
          </div>
          <div className="card-base card-info p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Evidence
            </p>
            <p className="mt-2 text-sm text-cyan-50">
              Checkpoint decision recorded in the Evidence Vault.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
