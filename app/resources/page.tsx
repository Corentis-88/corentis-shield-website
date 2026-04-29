import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { PilotReportPreview } from "@/components/PilotReportPreview";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

const chooser = [
  {
    audience: "For investors and strategic funders",
    pack: "Investor Overview PDF",
    description: "Market timing, platform potential and the path to validation.",
    href: "/packs/corentis-investor-overview.pdf",
  },
  {
    audience: "For assurance and governance teams",
    pack: "Assurance & Evidence Brief PDF",
    description: "Control loop, evidence outputs and assurance usefulness.",
    href: "/packs/corentis-assurance-governance-summary.pdf",
  },
  {
    audience: "For regulated-sector pilots",
    pack: "Design Partner Pack PDF",
    description: "A low-friction path for one sensitive workflow.",
    href: "/packs/corentis-design-partner-pack.pdf",
  },
  {
    audience: "For technical/product readers",
    pack: "Runtime Checkpoint Explainer PDF",
    description: "A simple explanation of checkpoint before action.",
    href: "/packs/corentis-runtime-checkpoint-explainer.pdf",
  },
  {
    audience: "Assurance reviewers",
    pack: "Control Matrix Example PDF",
    description: "How risk areas map to controls, review and evidence.",
    href: "/packs/corentis-control-matrix-example.pdf",
  },
  {
    audience: "Buyers wanting proof shape",
    pack: "Sample Pilot Report PDF",
    description: "What a controlled workflow pilot can produce.",
    href: "/packs/corentis-sample-pilot-report.pdf",
  },
  {
    audience: "Start here",
    pack: "Vision & Funding Readiness Overview PDF",
    description: "Start here for the vision, timing and strategic funding conversation.",
    helperText: "Use this when a funder, investor or strategic partner needs the big picture.",
    href: "/packs/corentis-funding-readiness-overview.pdf",
  },
];

const audiencePathways = [
  ["I am exploring a pilot", "/design-partners"],
  ["I am reviewing investment/funding fit", "/investors"],
  ["I am checking governance/assurance fit", "/assurance"],
  ["I want to understand the product quickly", "/walkthrough"],
];

const audienceNeeds = [
  ["Investors", "Market, defensibility, validation and expansion logic."],
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
        intro="Choose the right pack for the conversation you want to have."
      />

      <Section title="Choose the right pack">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chooser.map(({ audience, pack, description, helperText, href }) => (
            <a
              key={audience}
              href={href}
              aria-label={`Download ${pack}`}
              className="card-base card-info card-lift group block cursor-pointer p-6 transition hover:border-cyanx/45 hover:bg-cyanx/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanx"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
                {audience}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{pack}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              {helperText && <p className="mt-3 text-xs leading-5 text-slate-400">{helperText}</p>}
              <p className="mt-5 text-sm font-semibold text-cyan-50 transition group-hover:text-white">
                Open PDF <span aria-hidden="true">-&gt;</span>
              </p>
            </a>
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
