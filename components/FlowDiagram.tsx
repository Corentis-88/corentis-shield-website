import { ArrowRight } from "lucide-react";

type FlowDiagramProps = {
  steps: string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="grid gap-3 lg:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]" style={{ "--step-count": steps.length } as React.CSSProperties}>
      {steps.map((step, index) => (
        <div key={step} className="flex items-stretch gap-3">
          <div className="card-base card-info card-lift flex min-h-28 flex-1 items-center p-5">
            <p className="text-base font-medium leading-6 text-white">{step}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden items-center text-cyanx lg:flex">
              <ArrowRight aria-hidden className="h-5 w-5" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
