const flowSteps = [
  {
    label: "AI proposes",
    detail: "Draft reply, recommendation, case update or workflow action.",
  },
  {
    label: "Corentis checks",
    detail: "Policy, risk, context, approval and evidence requirements.",
  },
  {
    label: "Decision returned",
    detail: "Proceed, review, escalate or block before action.",
  },
  {
    label: "Human review",
    detail: "Sensitive or uncertain cases go to the right person.",
  },
  {
    label: "Evidence logged",
    detail: "Proposal, reason, decision, reviewer and timestamp recorded.",
  },
];

export function CheckpointFlowGraphic() {
  return (
    <div className="card-base card-premium overflow-hidden p-6">
      <div className="grid gap-4 lg:grid-cols-5">
        {flowSteps.map((step, index) => (
          <div key={step.label} className="relative">
            <div className="card-base card-info h-full p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyanx/35 bg-cyanx/10 text-sm font-semibold text-cyan-50">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-white">{step.label}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{step.detail}</p>
            </div>
            {index < flowSteps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cyanx/50 lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
