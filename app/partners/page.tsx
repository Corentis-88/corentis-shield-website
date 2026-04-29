import { ButtonLink } from "@/components/ButtonLink";
import { CTABanner } from "@/components/CTABanner";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

const seeking = [
  "design partners",
  "pilot organisations",
  "research collaborators",
  "public innovation funding",
  "strategic investors",
];

const building = [
  "Runtime checkpoint layer",
  "Policy-to-control system",
  "Scenario testing layer",
  "Evidence pack generation",
  "Review queue and escalation workflow",
];

const lookingFor = [
  "financial-services design partner",
  "regulated support workflow pilot",
  "AI assurance research collaboration",
  "funding and investment conversations",
];

const nowEvidenceIds = [
  "mckinsey-agentic-ai-2025",
  "fca-complaints-redress-2025-h1",
  "ibm-ai-governance-gap-2025",
];

const partnerResources = resourcePacks.filter((pack) =>
  ["investor-overview", "design-partner-pack"].includes(pack.slug)
);

const fundableReasons = [
  {
    title: "Narrow first wedge",
    description:
      "Financial-services complaints and vulnerable-customer workflows are concrete enough to pilot and sensitive enough to prove the need for control.",
  },
  {
    title: "Broader platform potential",
    description:
      "The same checkpoint pattern can extend across regulated AI-agent workflows where outputs affect customers, records or decisions.",
  },
  {
    title: "UK AI assurance relevance",
    description:
      "Corentis is built around operational control, evidence generation and safer adoption of AI in regulated settings.",
  },
  {
    title: "Strategic asset pathway",
    description:
      "Scenario testing, reusable control patterns and evidence artefacts can become a repeatable assurance layer over time.",
  },
];

const readyConversations = [
  {
    title: "Design partner pilot",
    description: "Test one controlled AI workflow before production deployment.",
    href: "/design-partners",
  },
  {
    title: "Investor/funding discussion",
    description: "Explore the checkpoint layer, commercial path and strategic asset potential.",
    href: "/investors",
  },
  {
    title: "AI assurance collaboration",
    description: "Discuss runtime evidence, control matrices and assurance artefacts.",
    href: "/assurance",
  },
  {
    title: "Regulated workflow walkthrough",
    description: "Walk through a simple complaints/vulnerable-customer example.",
    href: "/walkthrough",
  },
];

const fundingConversations = [
  {
    title: "Strategic AI infrastructure",
    description: "Position Corentis as UK runtime control infrastructure for regulated AI agents.",
  },
  {
    title: "Financial-services sandbox testing",
    description: "Prepare a complaints and vulnerable-customer workflow test route.",
  },
  {
    title: "AI assurance innovation",
    description: "Frame Corentis Shield as a runtime assurance mechanism with evidence artefacts.",
  },
  {
    title: "R&D feasibility and benchmarking",
    description: "Develop ControlBench as a feasibility route for benchmarked runtime assurance.",
  },
  {
    title: "Regional growth capital later",
    description: "Keep regional finance routes warm after first external signals.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Partners"
        title="Partners"
        intro="Corentis is an early-stage UK AI assurance and control company seeking practical conversations around pilots, evidence and deployment."
      >
        <ButtonLink href="/contact#investor">Discuss partnership or funding</ButtonLink>
      </Section>

      <Section title="Who we are seeking">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {seeking.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Four conversations Corentis is ready for">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {readyConversations.map((item) => (
            <a key={item.href} href={item.href} className="card-base card-info card-lift block p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section
        title="Why Corentis fits innovation conversations"
        intro="Corentis is designed around regulated AI assurance, safer AI deployment, operational control of AI agents, evidence generation, reusable infrastructure and UK-based AI product development."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {building.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why this could become more than a single workflow product"
        intro="The first wedge is narrow, but the control problem is broader: regulated teams need repeatable assurance mechanisms around AI outputs before they become action."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "control patterns can be reused",
            "evidence artefacts can become standardised",
            "scenario libraries can grow over time",
            "regulated teams need repeatable assurance mechanisms",
          ].map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Why this matters now"
        intro="AI adoption and agentic AI momentum are moving into operational workflows while regulated-service pressure and AI governance gaps remain visible."
      >
        <EvidenceStatCards ids={nowEvidenceIds} tone="premium" />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why Corentis is pilot-worthy"
        intro="Corentis is not trying to solve every AI governance problem at once. It starts with one measurable question: can sensitive AI-assisted workflow actions be checked, reviewed and evidenced before they move forward?"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fundableReasons.map((item) => (
            <div key={item.title} className="card-base card-premium card-lift p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What we are looking for">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lookingFor.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Current partner and funding conversations we are preparing for"
        intro="Corentis is preparing these conversations carefully. This does not claim funding, acceptance, regulatory approval or live customer deployment."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {fundingConversations.map((item) => (
            <div key={item.title} className="card-base card-premium card-lift p-5">
              <h2 className="text-base font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Partner and funding packs">
        <div className="grid gap-5 md:grid-cols-2">
          {partnerResources.map((resource) => (
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
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/packs/corentis-investor-overview.pdf">
            Download Investor Overview
          </ButtonLink>
          <ButtonLink href="/packs/corentis-design-partner-pack.pdf" variant="secondary">
            Download Design Partner Pack
          </ButtonLink>
          <ButtonLink href="/contact#investor" variant="secondary">
            Start a partnership/funding conversation
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Early-stage disclaimer">
        <div className="card-base card-warning p-7">
          <p className="max-w-4xl text-base leading-8 text-amber-50">
            Corentis is early-stage and currently developing pilot-ready prototypes. We do not claim
            regulatory approval, formal certification, or completed enterprise deployments.
          </p>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Discuss partnership or funding."
          primaryLabel="Start a conversation"
          primaryHref="/contact#investor"
          secondaryLabel="Explore resources"
          secondaryHref="/resources"
        />
      </Section>
    </>
  );
}
