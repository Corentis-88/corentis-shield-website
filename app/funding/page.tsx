import { ButtonLink } from "@/components/ButtonLink";
import { CTABanner } from "@/components/CTABanner";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import companyDetails from "@/content/company-details.json";
import fundingRoutes from "@/content/funding-routes.json";
import resourcePacks from "@/content/resource-packs.json";

const priorityIds = [
  "frontier-ai-discovery",
  "sovereign-ai-fund",
  "fca-supercharged-sandbox",
  "ai-assurance-innovation-fund",
  "frontier-ai-benchmarking-datasets",
  "northern-powerhouse-investment-fund-ii",
];

const routePriority = priorityIds
  .map((id) => fundingRoutes.find((route) => route.id === id))
  .filter((route): route is (typeof fundingRoutes)[number] => Boolean(route));

const fundingPacks = resourcePacks.filter((pack) =>
  [
    "funding-readiness-overview",
    "controlbench-rd-brief",
    "fca-supercharged-sandbox-brief",
    "ai-assurance-innovation-fund-readiness-brief",
    "sovereign-ai-strategic-memo",
    "90-day-funding-execution-plan",
  ].includes(pack.slug)
);

const applicationTracks = [
  {
    title: "Track A: Corentis ControlBench",
    subtitle: "For Frontier AI Discovery",
    items: [
      "R&D feasibility",
      "runtime assurance benchmark",
      "baseline comparisons",
      "agentic workflow testing",
      "evidence completeness scoring",
      "scenario library",
    ],
  },
  {
    title: "Track B: Corentis Shield Financial Services Pilot",
    subtitle: "For FCA Supercharged Sandbox",
    items: [
      "complaints workflow",
      "vulnerable-customer signals",
      "human review before action",
      "evidence logs",
      "non-production pilot",
    ],
  },
  {
    title: "Track C: Corentis AI Assurance Pack",
    subtitle: "For AI Assurance Innovation Fund and assurance stakeholders",
    items: [
      "policy-to-control mapping",
      "runtime checkpoints",
      "human review",
      "assurance artefacts",
      "pilot reports",
    ],
  },
];

const technicalDefensibility = [
  "policy-to-control mapping",
  "runtime action checkpoints",
  "scenario-based testing",
  "evidence completeness scoring",
  "human-review routing",
  "reusable control patterns",
  "audit and pilot artefact generation",
];

const readinessStatus = [
  ["V2 website live", "Prepared"],
  ["PDFs available", "Prepared"],
  ["Application pack created", "Prepared"],
  ["Company details confirmed", "Prepared"],
  ["Contact form tested", "To confirm"],
  ["Innovation application materials prepared", "In progress"],
  ["Sovereign AI memo prepared", "Prepared"],
  ["Financial-services sandbox pack prepared", "Prepared"],
  ["AI Assurance pack prepared", "Prepared"],
  ["First design partner list prepared", "In progress"],
];

const nowEvidenceIds = [
  "mckinsey-agentic-ai-2025",
  "fca-complaints-redress-2025-h1",
  "ibm-ai-governance-gap-2025",
];

function statusTone(status: string) {
  if (status.includes("Open now"))
    return "border-emerald-300/30 bg-emerald-300/10 text-emerald-100";
  if (status.includes("Opens soon")) return "border-cyan-300/30 bg-cyan-300/10 text-cyan-100";
  if (status.includes("Expected")) return "border-amber-300/30 bg-amber-300/10 text-amber-100";
  return "border-slate-300/20 bg-white/10 text-slate-100";
}

export default function FundingPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Funding readiness"
        title="Funding-ready focus: building UK control infrastructure for regulated AI agents"
        intro="Corentis Shield is being prepared for funding, sandbox and strategic investment routes that support safer AI adoption, AI assurance and regulated AI-agent infrastructure."
      >
        <div className="card-base card-warning max-w-4xl p-6">
          <p className="text-sm leading-6 text-amber-50">
            Corentis is early-stage. This page does not claim that funding has been awarded,
            submitted or accepted. It explains the funding logic, current route priorities and
            downloadable preparation packs.
          </p>
        </div>
      </Section>

      <Section
        title="Current funding route priorities"
        intro="These routes are prioritised by timing, fit and usefulness. Applicants should confirm live eligibility and deadlines before submission."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {routePriority.map((route, index) => (
            <div key={route.id} className="card-base card-premium card-lift p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  Priority {index + 1}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusTone(route.status)}`}
                >
                  {route.status}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">{route.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{route.corentisFit}</p>
              <p className="mt-4 text-sm leading-6 text-cyan-50">
                {route.recommendedCorentisFraming}
              </p>
              <div className="mt-5 grid gap-2 text-xs leading-5 text-slate-400 sm:grid-cols-2">
                <p>Opens: {route.opens}</p>
                <p>Closes: {route.closes}</p>
                <p>Type: {route.fundingType}</p>
                <p>Deadline risk: {route.deadlineRisk}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="What we are preparing">
        <div className="grid gap-5 lg:grid-cols-3">
          {applicationTracks.map((track) => (
            <div key={track.title} className="card-base card-info card-lift p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
                {track.subtitle}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">{track.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {track.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyanx" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Why Corentis fits the funding landscape"
        intro="AI adoption is moving from drafting to acting. Regulated teams need controls at the action boundary, where an AI output becomes a customer message, case update or workflow action."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="card-base card-premium p-7">
            <h2 className="text-2xl font-semibold text-white">
              Infrastructure, assurance and evidence
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Corentis is not another chatbot. The funding story is about runtime checkpoint
              infrastructure, assurance artefacts and evidence generation. The first wedge is
              narrow, but the control pattern can be reused across regulated AI-agent workflows.
            </p>
          </div>
          <EvidenceStatCards ids={nowEvidenceIds} tone="premium" />
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Technical defensibility: what Corentis needs to prove"
        intro="This is the R&D and validation path, not a claim that every element is fully proven today."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalDefensibility.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Download funding preparation packs">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fundingPacks.map((resource) => (
            <ResourceCard
              key={resource.slug}
              title={resource.title}
              audience={resource.audience}
              description={resource.shortDescription}
              evidenceHook={resource.evidenceHook}
              href={resource.publicPdfPath}
              status={resource.status as "Available" | "Available on request"}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Funding readiness status">
        <div className="grid gap-4 md:grid-cols-2">
          {readinessStatus.map(([item, status]) => (
            <div
              key={item}
              className="card-base card-premium flex items-center justify-between gap-4 p-5"
            >
              <span className="text-sm leading-6 text-slate-200">{item}</span>
              <span className="rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                {status}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Confirmed company details for formal applications">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="card-base card-premium p-7">
            <dl className="grid gap-4 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-white">Legal entity</dt>
                <dd>{companyDetails.companyName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Company number</dt>
                <dd>{companyDetails.companyNumber}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Company type</dt>
                <dd>{companyDetails.companyType}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Contact email</dt>
                <dd>
                  <a href={`mailto:${companyDetails.email}`} className="text-cyan-100 underline">
                    {companyDetails.email}
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-white">Registered office</dt>
                <dd>{companyDetails.registeredOfficeSingleLine}</dd>
              </div>
            </dl>
          </div>
          <div className="card-base card-warning p-7">
            <h2 className="text-xl font-semibold text-white">Still to confirm by application</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-amber-50">
              <li>Lead applicant/contact role.</li>
              <li>Project budget.</li>
              <li>Project start/end dates.</li>
              <li>Match funding or in-kind contribution, if required.</li>
              <li>Partner details, if applicable.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Prepare the next funding conversation carefully."
          primaryLabel="Download Funding Readiness Overview"
          primaryHref="/packs/corentis-funding-readiness-overview.pdf"
          secondaryLabel="Book a conversation"
          secondaryHref="/contact#investor"
        />
      </Section>
    </>
  );
}
