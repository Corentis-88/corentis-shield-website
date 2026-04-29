import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { PilotReportPreview } from "@/components/PilotReportPreview";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

const chooser = [
  [
    "Investors/funding",
    "Investor Overview PDF",
    "Market timing, platform potential and route to deployment.",
  ],
  [
    "Regulated operations/governance",
    "Assurance & Governance Summary PDF",
    "Control loop, evidence outputs and governance usefulness.",
  ],
  [
    "Potential pilot teams",
    "Design Partner Pack PDF",
    "A low-friction path for one sensitive workflow.",
  ],
  [
    "Product/technical readers",
    "Runtime Checkpoint Explainer PDF",
    "A simple explanation of checkpoint before action.",
  ],
  [
    "Assurance reviewers",
    "Control Matrix Example PDF",
    "How risk areas map to controls, review and evidence.",
  ],
  [
    "Buyers wanting proof shape",
    "Sample Pilot Report PDF",
    "What a controlled workflow pilot can produce.",
  ],
];

const audiencePathways = [
  ["I am exploring a pilot", "/design-partners"],
  ["I am reviewing investment/funding fit", "/investors"],
  ["I am checking governance/assurance fit", "/assurance"],
  ["I want to understand the product quickly", "/walkthrough"],
];

const audienceNeeds = [
  ["Investors", "Market, defensibility, traction and expansion logic."],
  ["Buyers", "Workflow fit, implementation safety and productivity value."],
  ["Assurance reviewers", "Control mapping, evidence and governance traceability."],
  ["Design partners", "A concrete pilot path using one sensitive workflow."],
];

export default function ResourcesPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Resources"
        title="Resources"
        intro="Practical material for investors, buyers, assurance reviewers and design partners."
      />

      <Section title="Choose the right pack">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chooser.map(([audience, pack, description]) => (
            <div key={audience} className="card-base card-info card-lift p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
                {audience}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{pack}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Choose your next step">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiencePathways.map(([label, href]) => (
            <a key={href} href={href} className="card-base card-premium card-lift block p-6">
              <h3 className="text-lg font-semibold text-white">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Open the focused path for this audience.
              </p>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Download packs">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resourcePacks.map((resource) => (
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

      <Section className="bg-white/[0.02]" title="Preview the proof shape">
        <div className="grid gap-6 lg:grid-cols-2">
          <PilotReportPreview />
          <ControlMatrixPreview />
        </div>
      </Section>

      <Section title="Video brief / storyboard">
        <div className="card-base card-premium card-lift p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
            Draft asset
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Corentis video brief</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            A structured internal brief for future product or investor video production, including
            messages, visual beats, proof moments and CTA options.
          </p>
          <div className="mt-6">
            <a
              href="/video-brief"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600/60 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyanx/60 hover:bg-cyanx/10"
            >
              Open video brief
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Different audiences need different evidence">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audienceNeeds.map(([title, description]) => (
            <div key={title} className="card-base card-info card-lift p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
