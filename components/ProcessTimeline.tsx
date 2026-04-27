type ProcessTimelineProps = {
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="card-base card-info card-lift p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanx">
            Step {index + 1}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
