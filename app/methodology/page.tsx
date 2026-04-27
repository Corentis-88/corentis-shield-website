import { BeforeAfterControlPanel } from "@/components/BeforeAfterControlPanel";
import { ButtonLink } from "@/components/ButtonLink";
import { CheckpointFlowGraphic } from "@/components/CheckpointFlowGraphic";
import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

const controlLoop = [
  {
    title: "Define the regulated workflow",
    description: "Start with one workflow, its boundaries, users, systems and sensitive actions.",
  },
  {
    title: "Translate policy into controls",
    description: "Turn policy, risk and evidence requirements into operational checks.",
  },
  {
    title: "Place checkpoints before action",
    description: "Check AI outputs before risky replies, updates or workflow actions move forward.",
  },
  {
    title: "Route exceptions to review",
    description: "Send sensitive, uncertain or incomplete cases to the right human review queue.",
  },
  {
    title: "Record decisions and evidence",
    description: "Create a record of what was proposed, checked, decided and reviewed.",
  },
  {
    title: "Review and improve controls",
    description: "Use pilot evidence to refine controls, scenarios and rollout decisions.",
  },
];

const methodParts = [
  ["Policy Controls", "Policy translated into practical checks and evidence requirements."],
  ["Corentis Shield", "The checkpoint before AI outputs become real-world action."],
  ["Review Queue", "A route for human review where risk, context or evidence requires it."],
  ["Assurance Lab", "Scenario testing for AI replies, proposed actions and workflow updates."],
  ["Evidence Vault", "A record of proposals, decisions, reviews, timestamps and evidence."],
  ["Pilot Report", "A structured report that helps teams decide what is ready to deploy."],
];

const methodologyEvidenceIds = [
  "fca-consumer-duty-communications-2025",
  "ibm-ai-governance-gap-2025",
  "mckinsey-ai-negative-consequences-2025",
];

const methodologyResources = resourcePacks.filter((pack) =>
  ["runtime-checkpoint-explainer", "assurance-governance-summary"].includes(pack.slug)
);

export default function MethodologyPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Methodology"
        title="A practical method for controlled AI workflows."
        intro="Corentis helps organisations operationalise governance, not merely document it."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/pilot-report">View pilot report</ButtonLink>
          <ButtonLink href="/contact#assurance" variant="secondary">
            Start a conversation
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="The Corentis control loop"
        intro="A repeatable path from policy to checkpoint, review, evidence and improvement."
      >
        <ProcessTimeline steps={controlLoop} />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="The checkpoint in motion"
        intro="Policy intent becomes operational controls, runtime checks, human review, evidence and a pilot report teams can inspect."
      >
        <CheckpointFlowGraphic />
      </Section>

      <Section title="What the method includes">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methodParts.map(([title, description]) => (
            <div key={title} className="card-base card-premium card-lift p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why this is different from a policy document"
        intro="A policy document describes what should happen. Corentis is designed to help teams test whether those expectations can be turned into visible checkpoints, review routes and evidence at the point an AI-assisted workflow is actually running."
      >
        <BeforeAfterControlPanel />
      </Section>

      <Section
        title="Evidence-led control loop"
        intro="The Corentis method is grounded in the need to make AI-assisted work reviewable while the workflow is running, not only after something has gone wrong."
      >
        <EvidenceStatCards ids={methodologyEvidenceIds} tone="premium" />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="From policy to proof"
        intro="Corentis is designed to help teams prove that AI-assisted workflows were checked, reviewed and evidenced before action."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {["Policy", "Checkpoint", "Review", "Evidence", "Pilot Report"].map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Control matrix preview">
        <ControlMatrixPreview />
      </Section>

      <Section className="bg-white/[0.02]" title="Related evidence packs">
        <div className="grid gap-5 md:grid-cols-2">
          {methodologyResources.map((resource) => (
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
