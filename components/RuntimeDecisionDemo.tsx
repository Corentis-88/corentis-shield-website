import { CheckCircle2, FileClock, ShieldAlert, UserCheck } from "lucide-react";
import { Badge } from "@/components/Badge";

const demoRows = [
  {
    icon: ShieldAlert,
    label: "AI output",
    text: "Draft a standard payment-pressure message after a hardship disclosure.",
  },
  {
    icon: CheckCircle2,
    label: "Corentis Shield check",
    text: "Policy, risk, customer context, evidence needs and approval rules are checked.",
  },
  {
    icon: UserCheck,
    label: "Required next step",
    text: "Human review and evidence capture before any customer communication proceeds.",
  },
  {
    icon: FileClock,
    label: "Evidence recorded",
    text: "Decision, reason, policy version, timestamp and review status are recorded.",
  },
];

export function RuntimeDecisionDemo() {
  return (
    <div className="card-base card-premium p-6 shadow-card">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">Corentis Shield</p>
          <h3 className="mt-1 text-2xl font-semibold text-white">The checkpoint in action</h3>
        </div>
        <Badge tone="danger">Decision: BLOCKED</Badge>
      </div>
      <div className="mt-6 space-y-4">
        {demoRows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="card-base card-info card-lift p-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-cyanx/25 bg-cyanx/10 text-cyanx">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{row.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="card-base card-danger p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-200">Reason</p>
          <p className="mt-2 text-sm leading-6 text-red-50">
            Customer hardship disclosed. Collections-pressure wording conflicts with the configured
            vulnerability handling policy.
          </p>
        </div>
      </div>
    </div>
  );
}
