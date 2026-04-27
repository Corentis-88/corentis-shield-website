const withoutCorentis = [
  "Policy lives in documents",
  "AI output may move too quickly",
  "Review points are unclear",
  "Evidence is gathered afterwards",
  "Escalation may be inconsistent",
];

const withCorentis = [
  "Policy becomes operational controls",
  "Sensitive actions pause before moving forward",
  "Human review is routed clearly",
  "Evidence is captured as the workflow runs",
  "Pilot reports become easier to produce",
];

export function BeforeAfterControlPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ControlColumn title="Without Corentis" items={withoutCorentis} tone="risk" />
      <ControlColumn title="With Corentis Shield" items={withCorentis} tone="safe" />
    </div>
  );
}

function ControlColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "risk" | "safe";
}) {
  const className = tone === "risk" ? "card-warning" : "card-success";
  const dotClassName = tone === "risk" ? "bg-amber-200" : "bg-teal-200";

  return (
    <div className={`card-base ${className} card-lift p-7`}>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${dotClassName}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
