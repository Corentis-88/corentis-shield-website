import { CTABanner } from "@/components/CTABanner";
import { OfferingCard } from "@/components/OfferingCard";
import { Section } from "@/components/Section";

const offerings = [
  {
    name: "Starter",
    title: "AI Output Check Review",
    forText: "teams that want to understand one AI workflow before piloting.",
    includes: [
      "workflow risk map",
      "example outputs checked",
      "evidence gaps",
      "recommended controls",
      "next-step pilot plan",
    ],
    positioning: "Find where one workflow needs a checkpoint.",
  },
  {
    name: "Growth",
    title: "Assurance Lab",
    forText: "teams preparing AI replies and actions for sensitive workflows.",
    includes: [
      "scenario test results",
      "blocked, escalated and reviewed outputs",
      "evidence gap report",
      "pilot readiness report",
      "recommended next controls",
    ],
    positioning: "Test AI replies and actions before live use.",
  },
  {
    name: "Enterprise",
    title: "Corentis Shield",
    forText: "regulated organisations moving AI into live customer or business workflows.",
    includes: [
      "API, SDK, webhook or private gateway options",
      "review queue",
      "evidence vault",
      "policy-control versioning",
      "sector-specific assurance packs",
    ],
    positioning: "Check and control outputs in live workflows.",
  },
];

const comparison = [
  {
    offer: "Starter",
    bestFor: "One workflow",
    proves: "Where risk, review and evidence questions appear",
    output: "Risk map and pilot plan",
    buyer: "Founder, product lead, compliance lead",
    next: "Run scenario tests",
  },
  {
    offer: "Growth",
    bestFor: "Pre-deployment testing",
    proves: "How AI replies and actions behave in realistic scenarios",
    output: "Pilot readiness report",
    buyer: "AI programme or operations team",
    next: "Add live checkpoint controls",
  },
  {
    offer: "Enterprise",
    bestFor: "Live workflows",
    proves: "AI outputs can be checked before action",
    output: "Checkpoint, review queue and evidence vault",
    buyer: "Regulated organisation or enterprise AI owner",
    next: "Scale through software/API/private gateway",
  },
];

const businessPath = [
  "focused reviews",
  "design-partner pilots",
  "recurring software",
  "API usage",
  "private gateway deployments",
  "sector-specific assurance packs",
];

const comparisonGridClassName = [
  "grid min-w-[900px]",
  "grid-cols-[0.7fr_1.1fr_1.35fr_1.15fr_1.1fr_1fr]",
].join(" ");

const comparisonHeaderClassName = [
  comparisonGridClassName,
  "border-b border-white/10 bg-white/[0.04]",
  "text-xs font-semibold uppercase tracking-[0.16em] text-slate-400",
].join(" ");

const comparisonRowClassName = [
  comparisonGridClassName,
  "border-b border-white/10 text-sm text-slate-300 last:border-b-0",
].join(" ");

export default function OfferingsPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Shield Products"
        title="Start with assurance. Grow into live checkpoint control."
        intro="Start with one workflow. Test before live use. Add Corentis Shield when you are ready to check AI outputs in real workflows."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((offering) => (
            <OfferingCard key={offering.name} {...offering} />
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Compare the adoption path">
        <div className="card-base card-premium overflow-x-auto rounded-lg">
          <div>
            <div className={comparisonHeaderClassName}>
              {["Offer", "Best for", "What it proves", "Output", "Typical buyer", "Next step"].map(
                (heading) => (
                  <div key={heading} className="p-4">
                    {heading}
                  </div>
                )
              )}
            </div>
            {comparison.map((row) => (
              <div key={row.offer} className={comparisonRowClassName}>
                <div className="p-4 font-semibold text-white">{row.offer}</div>
                <div className="p-4">{row.bestFor}</div>
                <div className="p-4">{row.proves}</div>
                <div className="p-4">{row.output}</div>
                <div className="p-4">{row.buyer}</div>
                <div className="p-4 text-cyan-100">{row.next}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Corentis Growth Plan"
        intro="Corentis can begin with focused reviews, grow through design-partner pilots, and scale through recurring software, API usage, private gateway deployments and sector-specific assurance packs."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessPath.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Start small. Learn fast. Add control.">
        <CTABanner
          title="Start with the AI workflow that matters most."
          primaryLabel="Book a conversation"
          primaryHref="/contact#walkthrough"
          secondaryLabel="Why Corentis?"
          secondaryHref="/why-corentis"
        />
      </Section>
    </>
  );
}
