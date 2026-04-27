import evidenceStats from "@/content/evidence-stats.json";

type EvidenceStat = (typeof evidenceStats)[number];

const toneClasses = {
  info: "card-info text-cyan-50",
  premium: "card-premium text-slate-100",
  warning: "card-warning text-amber-50",
};

type EvidenceStatCardsProps = {
  ids: string[];
  tone?: keyof typeof toneClasses;
};

export function getEvidenceStats(ids: string[]) {
  return ids
    .map((id) => evidenceStats.find((item) => item.id === id))
    .filter((item): item is EvidenceStat => Boolean(item));
}

export function EvidenceStatCards({ ids, tone = "info" }: EvidenceStatCardsProps) {
  const stats = getEvidenceStats(ids);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((item) => (
        <div key={item.id} className={`card-base card-lift p-5 ${toneClasses[tone]}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
            {item.shortLabel}
          </p>
          <p className="mt-4 text-xl font-semibold leading-7 text-white">{item.headlineStat}</p>
          {item.supportingDetail && (
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.supportingDetail}</p>
          )}
          <p className="mt-4 text-xs leading-5 text-slate-400">
            {item.sourcePublisher}, {item.sourceDate}
          </p>
        </div>
      ))}
    </div>
  );
}
