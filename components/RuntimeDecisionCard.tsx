type RuntimeDecisionCardProps = {
  title: string;
  description: string;
  variant?: "default" | "info" | "success" | "warning" | "danger" | "premium";
};

const variantClasses = {
  default: "card-base card-lift",
  info: "card-base card-info card-lift",
  success: "card-base card-success card-lift",
  warning: "card-base card-warning card-lift",
  danger: "card-base card-danger card-lift",
  premium: "card-base card-premium card-lift",
};

function inferVariant(title: string): RuntimeDecisionCardProps["variant"] {
  const lower = title.toLowerCase();
  if (lower.includes("proceed") || lower.includes("allow")) return "success";
  if (lower.includes("review") || lower.includes("approve")) return "warning";
  if (lower.includes("escalate")) return "warning";
  if (lower.includes("block")) return "danger";
  return "premium";
}

export function RuntimeDecisionCard({ title, description, variant }: RuntimeDecisionCardProps) {
  const cardVariant = variant ?? inferVariant(title) ?? "default";
  return (
    <div className={`${variantClasses[cardVariant]} p-6`}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
