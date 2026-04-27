import { ButtonLink } from "@/components/ButtonLink";
import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { PilotReportPreview } from "@/components/PilotReportPreview";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

const reportStructure = [
  "Use case summary",
  "Workflow boundaries",
  "Policy controls applied",
  "Runtime checkpoints",
  "Human review events",
  "Blocked or escalated actions",
  "Evidence captured",
  "Residual risks",
  "Recommendations for rollout",
];

const reportCards = [
  ["Executive summary", "A concise view of the pilot, workflow and key findings."],
  ["Control matrix", "The controls applied to AI outputs and sensitive actions."],
  ["Scenario test results", "How AI outputs behaved against realistic regulated scenarios."],
  ["Review queue analysis", "Where human review was triggered and why."],
  ["Evidence log", "A summary of proposals, decisions, reasons and timestamps."],
  ["Go/no-go recommendation", "A careful pilot-readiness view for next-step decisions."],
];

const pilotEvidenceIds = [
  "fca-vulnerable-customer-scale-2024",
  "fca-financial-difficulty-2024",
  "fca-complaints-redress-2025-h1",
];

const pilotResources = resourcePacks.filter((pack) =>
  ["sample-pilot-report", "control-matrix-example", "assurance-governance-summary"].includes(
    pack.slug
  )
);

const designPartnerLearning = [
  "which actions should be blocked",
  "which scenarios require human review",
  "what evidence is missing",
  "whether policy controls are clear enough",
  "whether the workflow is ready for a controlled next step",
];

export default function PilotReportPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Pilot Report"
        title="Sample Pilot Report"
        intro="Corentis can produce an evidence-led report from a controlled AI workflow pilot."
      >
        <ButtonLink href="/contact#walkthrough">Request a pilot walkthrough</ButtonLink>
      </Section>

      <Section title="What a pilot report can show">
        <div className="mb-8">
          <PilotReportPreview />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reportStructure.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why this sample workflow matters"
        intro="The sample report is illustrative, but the workflow context is real: complaints, vulnerability, hardship and redress are material operating pressures for regulated firms."
      >
        <EvidenceStatCards ids={pilotEvidenceIds} tone="warning" />
      </Section>

      <Section title="Sample report sections">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reportCards.map(([title, description]) => (
            <div key={title} className="card-base card-premium card-lift p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Control matrix preview">
        <ControlMatrixPreview />
      </Section>

      <Section title="What a design partner could learn">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {designPartnerLearning.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          This is a sample and illustrative pilot-report structure. It does not describe a completed
          customer deployment.
        </p>
      </Section>

      <Section className="bg-white/[0.02]" title="Download the pilot resources">
        <div className="grid gap-5 md:grid-cols-2">
          {pilotResources.map((resource) => (
            <ResourceCard
              key={resource.slug}
              title={resource.title}
              audience={resource.audience}
              description={resource.shortDescription}
              evidenceHook={resource.evidenceHook}
              href={resource.publicPdfPath}
              status={resource.status as "Available" | "Coming soon"}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
