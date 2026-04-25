import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FlowDiagram } from "@/components/FlowDiagram";
import { ProductCard } from "@/components/ProductCard";
import { RuntimeDecisionCard } from "@/components/RuntimeDecisionCard";
import { RuntimeDecisionDemo } from "@/components/RuntimeDecisionDemo";
import { Section } from "@/components/Section";

const riskItems = [
  "a payment-pressure message sent to a vulnerable customer",
  "a complaint closed without enough evidence",
  "a CRM note added without review",
  "a guidance response that drifts into advice",
  "a workflow step triggered too soon",
];

const shieldReasons = [
  {
    title: "Check the output",
    description:
      "Draft replies, proposed actions and workflow updates are reviewed before they are used.",
  },
  {
    title: "Review the context",
    description:
      "Customer vulnerability, open complaints, risk signals and missing evidence can change what should happen next.",
  },
  {
    title: "Route to people",
    description:
      "Sensitive outputs can go to the right person before anything reaches the customer or system.",
  },
  {
    title: "Record the evidence",
    description:
      "Teams can see what was checked, why the decision was made and what evidence was missing.",
  },
];

const checks = [
  {
    title: "The AI output",
    description: "Draft messages, proposed actions or workflow updates.",
  },
  {
    title: "The customer or case context",
    description:
      "Risk signals, vulnerability, complaints, evidence and business rules.",
  },
  {
    title: "The policy rules",
    description: "Configured controls, approval rules and escalation points.",
  },
  {
    title: "The evidence trail",
    description: "What was checked, what decision was made, and why.",
  },
];

const decisions = [
  {
    title: "Proceed",
    description: "The output fits your rules.",
  },
  {
    title: "Review",
    description: "A person should check before the action continues.",
  },
  {
    title: "Escalate",
    description: "A specialist or supervisor should take over.",
  },
  {
    title: "Block",
    description:
      "The output conflicts with policy, risk or evidence requirements.",
  },
];

const sources = [
  {
    label: "Source: McKinsey, The State of AI 2025",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    label: "Source: Deloitte, State of AI in the Enterprise 2026",
    href: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html",
  },
  {
    label: "Source: BCG, When AI Acts Alone, 2025",
    href: "https://www.bcg.com/press/17december2025-when-ai-acts-alone-next-era-risk",
  },
  {
    label: "Source: EY, Responsible AI survey 2025",
    href: "https://www.ey.com/en_gl/insights/ai/how-can-responsible-ai-bridge-the-gap-between-investment-and-impact",
  },
];

export default function Home() {
  return (
    <>
      <section className="grid-bg px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanx">
              Corentis Shield - AI checkpoint for regulated workflows
            </p>
            <div className="mt-5 inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-2 text-sm font-semibold text-amber-100">
              If it can act, it needs a checkpoint.
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              AI needs a checkpoint before it acts. Corentis provides it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Corentis Shield checks AI outputs before they reach customers,
              teams or live systems - so sensitive actions can proceed, be
              reviewed, be escalated or be stopped with evidence recorded.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/runtime-guard">
                See the checkpoint in action
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Book a conversation
              </ButtonLink>
            </div>
          </div>
          <div className="space-y-5">
            <div className="card-base card-premium overflow-hidden rounded-2xl p-3 shadow-card">
              <Image
                src="/images/corentis/Corentis1.png"
                alt="Corentis Shield checking an AI agent output before action."
                width={1400}
                height={1000}
                priority
                className="h-auto w-full rounded-xl"
              />
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]" title="AI and AI agents are here.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              McKinsey says 62% of surveyed organisations are at least
              experimenting with AI agents. Deloitte says worker access to AI
              rose by 50% in 2025, and companies expect more AI projects to move
              into production.
            </p>
            <p>
              As more AI projects move into production, so do AI-related
              incidents. BCG reported that these incidents rose by 21% from 2024
              to 2025.
            </p>
            <p>
              In one 2025 EY survey of 975 large global companies, AI-related
              risks were associated with an estimated $4.3bn in losses across
              this sample alone.
            </p>
            <div className="card-base card-premium mt-8 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanx">
                This is the problem Corentis Shield is built for.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance">
                AI needs a checkpoint before it acts. Corentis provides it.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Corentis Shield checks AI outputs before they reach customers,
                teams or live systems - so sensitive actions can proceed, be
                reviewed, be escalated or be stopped with evidence recorded.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {sources.map((source) => (
              <a
                key={source.label}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="card-base card-warning card-lift block p-4 text-sm font-medium leading-6 text-amber-50"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="A bad output becomes a bigger problem when it reaches the real world."
        intro="A risky AI reply is not just a bad answer if it reaches a customer. A missing evidence check is not just a gap if a case is closed. Once AI outputs move into action, teams need a clear checkpoint."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {riskItems.map((item) => (
            <div key={item} className="card-base card-danger card-lift p-5">
              <p className="text-sm font-medium leading-6 text-rose-50">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="AI agent on its own vs AI agent with Corentis Shield"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-base card-warning p-7">
            <h3 className="text-2xl font-semibold text-white">
              AI agent on its own
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
              {[
                "output may move straight to action",
                "context may be missed",
                "evidence may be incomplete",
                "human review may be unclear",
                "issues may be found too late",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-base card-success p-7">
            <h3 className="text-2xl font-semibold text-white">
              AI agent with Corentis Shield
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
              {[
                "output is checked first",
                "policy and risk are reviewed",
                "missing evidence is surfaced",
                "human review is routed",
                "the decision is recorded",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Why Corentis Shield?"
        intro="Because teams need a simple checkpoint between an AI output and a real-world action."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {shieldReasons.map((item) => (
            <div key={item.title} className="card-base card-info card-lift p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="What Corentis Shield checks"
        intro="The output. The context. The rules. The evidence."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {checks.map((item) => (
            <div key={item.title} className="card-base card-info card-lift p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="The checkpoint flow"
        intro="Check before action. Review where it matters. Record the decision."
      >
        <FlowDiagram
          steps={[
            "AI creates an output",
            "Corentis Shield checks it",
            "Policy, risk and evidence are reviewed",
            "Proceed / Review / Escalate / Block",
            "The decision is recorded",
          ]}
        />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Clear outcomes before action"
        intro="Corentis Shield gives teams a simple decision before an AI output reaches the real world."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {decisions.map((decision) => (
            <RuntimeDecisionCard key={decision.title} {...decision} />
          ))}
        </div>
      </Section>

      <Section
        title="Start with one workflow."
        intro="You do not need to redesign every AI process on day one. Start with one sensitive workflow. Test the outputs. Find the review points. See where a checkpoint is needed before live use."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <RuntimeDecisionDemo />
          <div className="card-base card-premium p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white text-balance">
              Before you deploy an AI agent, test the checkpoint.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Start with one sensitive workflow. Corentis can help you test AI
              outputs, find where review is needed and see what evidence should
              be recorded before live use.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book a conversation</ButtonLink>
              <ButtonLink href="/funding" variant="secondary">
                Discuss a design partnership
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
