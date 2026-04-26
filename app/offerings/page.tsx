import { CTABanner } from "@/components/CTABanner";
import { OfferingCard } from "@/components/OfferingCard";
import { Section } from "@/components/Section";

const offerings = [
  {
    name: "Starter",
    title: "AI Output Check Review",
    forText: "teams with one AI workflow they want to understand before piloting.",
    includes: [
      "one AI workflow review",
      "draft reply and action checks",
      "risk and evidence notes",
      "human review recommendations",
      "suggested controls",
      "findings call",
    ],
    positioning: "Start with one workflow and find where control is needed.",
  },
  {
    name: "Growth",
    title: "Corentis Assurance Lab",
    forText: "teams preparing AI replies and actions for sensitive workflows.",
    includes: [
      "scenario testing",
      "AI output review",
      "risk signals surfaced",
      "evidence gaps identified",
      "pilot-ready report",
      "recommended next controls",
    ],
    positioning: "Test AI replies and actions before deployment.",
  },
  {
    name: "Enterprise",
    title: "Corentis Shield",
    forText: "regulated organisations moving AI into live customer or business workflows.",
    includes: [
      "AI output checkpoint",
      "policy and approval checks",
      "human review routing",
      "evidence records",
      "custom controls",
      "workflow integrations",
      "governance reporting support",
    ],
    positioning: "Check and control AI outputs in live workflows.",
  },
];

const comparison = [
  {
    offer: "Starter",
    bestFor: "One workflow",
    proves: "Where risk, review and evidence questions appear",
    output: "Findings and suggested controls",
    buyer: "Founder, product lead, compliance lead",
    next: "Test before live use",
  },
  {
    offer: "Growth",
    bestFor: "Pre-deployment testing",
    proves: "How AI replies and actions behave in realistic scenarios",
    output: "Scenario results and pilot-ready report",
    buyer: "AI programme or operations team",
    next: "Add live checkpoint controls",
  },
  {
    offer: "Enterprise",
    bestFor: "Live workflows",
    proves: "AI outputs can be checked before they act",
    output: "Checkpoint, review routes and evidence records",
    buyer: "Regulated organisation or enterprise AI owner",
    next: "Pilot Corentis Shield",
  },
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

const adoptionPathIntro = [
  "Begin with a focused output review. Move into scenario testing.",
  "Adopt Corentis Shield when you are ready to check AI outputs in live workflows.",
].join(" ");

export default function OfferingsPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Offerings"
        title="Start small. Add control as confidence grows."
        intro="Start small. Test one workflow. Learn where risk appears. Add the checkpoint when ready."
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

      <Section title="Start small. Learn fast. Add control." intro={adoptionPathIntro}>
        <CTABanner
          title="Start with the AI workflow that matters most."
          primaryLabel="Book an AI assurance review"
          primaryHref="/contact"
          secondaryLabel="See the checkpoint in action"
          secondaryHref="/runtime-guard"
        />
      </Section>
    </>
  );
}
