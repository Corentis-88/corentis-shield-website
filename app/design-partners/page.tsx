import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CheckpointFlowGraphic } from "@/components/CheckpointFlowGraphic";
import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { PilotReportPreview } from "@/components/PilotReportPreview";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Design Partner Pilots | Corentis Shield",
  description:
    "Explore design partner pilots for controlled AI-assisted workflows, including complaints handling, vulnerable-customer support and regulated casework.",
};

const audiences = [
  "complaints teams",
  "vulnerable customer teams",
  "regulated customer support",
  "AI transformation teams",
  "operations leaders",
  "governance/risk teams",
];

const firstPilots = [
  "financial services complaints workflow",
  "vulnerable customer handling",
  "regulated support casework",
  "internal AI copilot for sensitive customer cases",
  "AI-assisted drafting where human approval is required",
];

const pilotTests = [
  "whether policies can become operational controls",
  "which AI outputs should pause before action",
  "which signals should trigger escalation",
  "how human review should work",
  "what evidence should be captured automatically",
  "what a pilot report should show before wider rollout",
];

const stages = [
  "Select workflow",
  "Define boundaries",
  "Map policy controls",
  "Run scenario tests",
  "Simulate runtime checkpoints",
  "Review blocked/escalated actions",
  "Generate evidence pack",
  "Decide next step",
];

const receives = [
  "control-plan sample",
  "scenario test results",
  "review queue summary",
  "evidence pack",
  "sample pilot report",
  "recommendations for controlled next step",
];

export default function DesignPartnersPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Design partners"
        title="Pilot a controlled AI workflow before it goes live"
        intro="Corentis Shield helps teams test checkpoints, human review, escalation and evidence capture around AI-assisted regulated workflows."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#design-partner">
            Start a design partner conversation
          </ButtonLink>
          <ButtonLink href="/packs/corentis-design-partner-pack.pdf" variant="secondary">
            Download Design Partner Pack
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="Who this is for"
        intro="Corentis is seeking focused conversations with regulated teams who want a low-friction way to test AI-assisted work before production deployment."
      >
        <CardGrid items={audiences} tone="info" />
      </Section>

      <Section className="bg-white/[0.02]" title="Ideal first pilot">
        <CardGrid items={firstPilots} tone="premium" />
      </Section>

      <Section
        title="What a design partner pilot could test"
        intro="The pilot can start in a non-production setting, using realistic scenarios to learn where checkpointing, review and evidence are needed."
      >
        <CardGrid items={pilotTests} tone="success" />
      </Section>

      <Section className="bg-white/[0.02]" title="Suggested pilot stages">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <div key={stage} className="card-base card-info card-lift p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
                Stage {index + 1}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-100">{stage}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The checkpoint pattern">
        <CheckpointFlowGraphic />
      </Section>

      <Section className="bg-white/[0.02]" title="What the design partner receives">
        <CardGrid items={receives} tone="premium" />
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          A design partner pilot can begin as non-production exploration. Corentis does not claim
          regulatory approval or live enterprise deployment.
        </p>
      </Section>

      <Section title="Preview the evidence shape">
        <div className="grid gap-6 lg:grid-cols-2">
          <PilotReportPreview />
          <ControlMatrixPreview />
        </div>
      </Section>
    </>
  );
}

function CardGrid({ items, tone }: { items: string[]; tone: "info" | "premium" | "success" }) {
  const className =
    tone === "info" ? "card-info" : tone === "success" ? "card-success" : "card-premium";

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className={`card-base ${className} card-lift p-5 text-slate-100`}>
          {item}
        </div>
      ))}
    </div>
  );
}
