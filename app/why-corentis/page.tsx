import { ButtonLink } from "@/components/ButtonLink";
import { CTABanner } from "@/components/CTABanner";
import { FlowDiagram } from "@/components/FlowDiagram";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Section } from "@/components/Section";

const stats = [
  {
    stat: "62%",
    text: "of surveyed organisations are at least experimenting with AI agents.",
    source: "Source: McKinsey, The State of AI 2025.",
  },
  {
    stat: "50%",
    text: "rise in worker access to AI in 2025.",
    source: "Source: Deloitte, State of AI in the Enterprise 2026.",
  },
  {
    stat: "21%",
    text: "rise in AI-related incidents from 2024 to 2025.",
    source: "Source: BCG, When AI Acts Alone, 2025.",
  },
  {
    stat: "$4.3bn",
    text: "in estimated losses associated with AI-related risks across one EY sample.",
    source: "Source: EY, Responsible AI survey 2025.",
  },
];

const riskExamples = [
  "payment-pressure message sent to a vulnerable customer",
  "complaint closed without enough evidence",
  "CRM update added without review",
  "guidance response drifting into advice",
  "workflow action triggered too soon",
];

const assuranceFit = [
  "novel assurance mechanism",
  "pilot-ready",
  "helps identify risks from AI systems",
  "creates reviewable evidence",
  "supports safe adoption",
];

const comparisons = [
  {
    title: "Generic AI governance",
    items: [
      "documents risks",
      "tracks policies",
      "supports oversight",
      "often sits before or after deployment",
    ],
  },
  {
    title: "Prompt guardrails",
    items: [
      "steer model responses",
      "filter unsafe content",
      "catch some input/output issues",
      "may miss business context",
    ],
  },
  {
    title: "Corentis Shield",
    items: [
      "checks output before action",
      "reviews policy, risk, context and evidence",
      "routes review or escalation",
      "blocks risky outputs",
      "records the decision",
    ],
  },
];

const sectors = [
  "financial services",
  "insurance",
  "pensions",
  "healthcare admin",
  "housing",
  "public sector",
  "enterprise operations",
];

const strategicAssetItems = [
  "high-value scenario and data asset",
  "evaluation harness",
  "benchmark reports",
  "reusable methodology",
  "wider UK AI assurance ecosystem",
];

const commercialPath = [
  "AI Output Check Review",
  "Assurance Lab pilot",
  "Corentis Shield deployment",
  "API / SDK / webhook / private gateway",
  "Sector-specific assurance packs",
];

export default function WhyCorentisPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Why Corentis?"
        title="A practical checkpoint for AI adoption in regulated workflows."
        intro="Corentis Shield is built for the moment AI moves from suggestion to action."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Discuss a design partnership</ButtonLink>
          <ButtonLink href="/runtime-guard" variant="secondary">
            See the checkpoint in action
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="AI is moving from chat to action."
        intro="AI agents are starting to draft replies, update records, recommend decisions and trigger workflows. That makes them useful, but it also means organisations need a way to check outputs before they become real-world actions."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.source} className="card-base card-warning card-lift p-5">
              <p className="text-3xl font-semibold text-white">{item.stat}</p>
              <p className="mt-3 text-sm leading-6 text-amber-50">{item.text}</p>
              <p className="mt-4 text-xs leading-5 text-slate-400">{item.source}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="The risk is unchecked action."
        intro="A risky AI output is easier to manage while it is still a draft. The risk grows when it reaches a customer, a case record, a workflow or a live system. Once an AI action has happened, the cost is usually higher, the fix is slower and the evidence trail is harder to rebuild."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PhotoPanel
            src="/images/stock/customer-support-advisor-laptop.jpg"
            alt="Customer support advisor wearing a headset and working on a laptop."
            label="Human workflows"
            caption="Sensitive workflows are still human workflows."
            objectPosition="center 40%"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {riskExamples.map((item) => (
              <div key={item} className="card-base card-danger card-lift p-5">
                <p className="text-sm leading-6 text-rose-50">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="The checkpoint before the real world."
        intro="Corentis Shield checks the AI output, reviews the context, routes human review and records evidence before action. It gives teams a simple decision point: proceed, review, escalate or block."
      >
        <FlowDiagram
          steps={[
            "AI output",
            "Corentis Shield check",
            "Proceed / Review / Escalate / Block",
            "Evidence recorded",
          ]}
        />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Assurance before action, not paperwork after the fact."
        intro="Corentis Shield is designed as a practical AI assurance mechanism. It does not just document AI risk after a system is live. It helps turn AI outputs into reviewable, evidence-backed decisions before they reach customers, teams or systems."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {assuranceFit.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Not just governance. Not just guardrails.">
        <div className="grid gap-5 lg:grid-cols-3">
          {comparisons.map((column, index) => (
            <div
              key={column.title}
              className={`card-base card-lift p-6 ${index === 2 ? "card-success" : "card-info"}`}
            >
              <h3 className="text-xl font-semibold text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyanx" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card-base card-premium mt-8 p-6">
          <p className="text-lg leading-8 text-cyan-50">
            Most tools help describe the risk. Corentis creates the checkpoint before the risk
            reaches the real world.
          </p>
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="One checkpoint pattern. Many regulated workflows."
        intro="Financial-services complaints and vulnerable-customer cases are the first proof point. The same checkpoint pattern can extend to insurance claims, pensions servicing, healthcare administration, housing, public-sector casework and enterprise customer operations."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div key={sector} className="card-base card-premium card-lift p-5 text-slate-100">
              {sector}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="From product to regulated AI output benchmark."
        intro="Every pilot can strengthen a larger assurance asset: scenario packs, risk labels, expected decisions, evidence requirements, model-output results and benchmark reports. Over time, Corentis can help build a reusable way to test AI outputs in regulated workflows."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {strategicAssetItems.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="A clear route from review to deployment."
        intro="Corentis can start with focused assurance reviews, grow through design-partner pilots, and scale through recurring software, API usage, private gateway deployments and sector-specific assurance packs."
      >
        <FlowDiagram steps={commercialPath} />
      </Section>

      <Section
        title="The next step is validation."
        intro="The next phase is to validate Corentis Shield with design partners, expand the scenario library, harden the API/private gateway path, and generate pilot reports that show how AI outputs can be checked before live use."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <PhotoPanel
            src="/images/stock/team-reviewing-laptop-meeting.jpg"
            alt="Team of professionals reviewing a laptop during a business meeting."
            label="Design partner pilot"
            caption="Start with one workflow, review the evidence, then decide what to deploy."
            objectPosition="center 45%"
          />
          <CTABanner
            title="Help test the checkpoint layer for AI agents."
            primaryLabel="Discuss a design partnership"
            primaryHref="/contact"
            secondaryLabel="Book a conversation"
            secondaryHref="/contact"
          />
        </div>
      </Section>
    </>
  );
}
