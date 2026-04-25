type MetricCardProps = {
  label: string;
  value?: string;
};

export function MetricCard({ label, value = "Measured" }: MetricCardProps) {
  return (
    <div className="card-base card-info card-lift p-5">
      <p className="text-2xl font-semibold text-cyan-100">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}
