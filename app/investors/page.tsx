import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import resourcePacks from "@/content/resource-packs.json";

export const metadata: Metadata = {
  title: "Investors & Funding | Corentis Shield",
  description:
    "Explore Corentis Shield, an early-stage AI checkpoint layer for regulated workflows, starting with financial services complaints and vulnerable-customer use cases.",
};

const evidenceIds = [
  "fca-complaints-redress-2025-h1",
  "mckinsey-agentic-ai-2025",
  "ibm-ai-governance-gap-2025",
];

const platformLogic = [
  "policy controls",
  "runtime checkpoints",
  "scenario testing",
  "review queues",
  "evidence vault",
  "pilot reports",
  "reusable control patterns",
];

const seeking = [
  "design partners",
  "pilot conversations",
  "strategic investment/funding conversations",
  "regulated workflow collaborators",
  "AI assurance research/commercial partners",
];

const validationUses = [
  {
    title: "Product development",
    description: "Strengthen Corentis Shield as the commercial runtime-control layer.",
  },
  {
    title: "ControlBench UK",
    description: "Develop the strategic AI assurance dataset and evaluation harness.",
  },
  {
    title: "Sandbox and pilot validation",
    description: "Prepare financial-services complaints and vulnerable-customer workflow testing.",
  },
  {
    title: "Design-partner work",
    description:
      "Turn real workflow insight into scenario libraries, controls and evidence outputs.",
  },
];

const investorFundingPacks = resourcePacks.filter((pack) =>
  ["funding-readiness-overview", "controlbench-rd-brief", "sovereign-ai-strategic-memo"].includes(
    pack.slug
  )
);

export default function InvestorsPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Investors & Funding"
        title="AI agents need control infrastructure"
        intro="Corentis Shield is an AI checkpoint for regulated workflows: policy-bound, reviewable and evidence-generating before sensitive actions move forward."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/packs/corentis-investor-overview.pdf">
            Download Investor Overview
          </ButtonLink>
          <ButtonLink href="/contact#investor" variant="secondary">
            Register investor interest
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="Why now"
        intro="Corentis sits across regulated-service pressure, AI/agentic AI adoption momentum and a growing need for operational AI control."
      >
        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          <div className="card-base card-premium p-6">
            <p className="text-base leading-7 text-slate-300">
              AI assurance is becoming a major growth market. The UK government estimates the UK AI
              assurance market was already worth approximately £1.01bn GVA in 2024 and could reach
              £18.8bn by 2035 if adoption barriers are addressed. Corentis is focused on one of the
              sharpest emerging needs inside that market: runtime assurance for AI agents before
              they take regulated actions.
            </p>
          </div>
          <div className="card-base card-info p-6">
            <p className="text-base leading-7 text-slate-300">
              Within financial services, the adjacent AI-in-RegTech market is forecast to grow from
              $3.51bn in 2026 to $12.33bn by 2030, creating a strong commercial opening for tools
              that help regulated firms deploy AI safely, visibly and with evidence.
            </p>
          </div>
        </div>
        <EvidenceStatCards ids={evidenceIds} tone="premium" />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="The wedge"
        intro="Corentis starts with financial-services complaints and vulnerable-customer workflows: narrow enough to pilot, concrete enough to evidence, and sensitive enough to prove why checkpointing matters."
      >
        <div className="card-base card-premium p-7">
          <p className="max-w-4xl text-lg leading-8 text-slate-300">
            The aim is to prove the checkpoint/control pattern in a high-consequence workflow, then
            expand into adjacent regulated workflows where AI outputs affect customers, records,
            decisions or operational actions.
          </p>
        </div>
      </Section>

      <Section title="The platform logic">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformLogic.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why this is not just another AI tool"
        intro="Corentis is not a chatbot, model wrapper or dashboard after the event. The product sits at the action boundary where AI output becomes operational behaviour."
      >
        <div className="card-base card-success p-7">
          <p className="max-w-4xl text-lg leading-8 text-teal-50">
            The company is early-stage and developing pilot-ready prototypes. The current aim is to
            prove focused design partner workflows before broader commercial rollout.
          </p>
        </div>
      </Section>

      <Section
        title="ControlBench UK as a strategic asset"
        intro="ControlBench UK is being developed as a strategic AI assurance dataset and evaluation harness for regulated AI agents. It supports the wider infrastructure story behind Corentis Shield."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="card-base card-premium p-7">
            <p className="text-base leading-7 text-slate-300">
              The asset brings together regulated-workflow scenarios, vulnerability-handling tests,
              policy-control checks, human-review gates, blocked-action examples, escalation logic
              and audit-ready evidence outputs.
            </p>
          </div>
          <div className="card-base card-success p-7">
            <p className="text-base leading-7 text-teal-50">
              Corentis Shield is the commercial checkpoint layer. ControlBench UK helps validate the
              scenarios, controls and evidence model that make the checkpoint credible.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What Corentis is seeking">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {seeking.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Strategic support and validation use cases"
        intro="Corentis is preparing an early-stage funding round and is interested in speaking with experienced angels, strategic partners and investors focused on AI assurance, RegTech and regulated AI infrastructure. This page is for interest and conversation only; it does not offer shares or investment terms."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {validationUses.map((route) => (
            <div key={route.title} className="card-base card-info card-lift p-6">
              <h2 className="text-lg font-semibold text-white">{route.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{route.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {investorFundingPacks.map((resource) => (
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
    </>
  );
}
