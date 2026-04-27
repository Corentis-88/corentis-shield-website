import Image from "next/image";
import { BeforeAfterControlPanel } from "@/components/BeforeAfterControlPanel";
import { ButtonLink } from "@/components/ButtonLink";
import { EvidenceStatCards } from "@/components/EvidenceStatCards";
import { FlowDiagram } from "@/components/FlowDiagram";
import { PhotoPanel } from "@/components/PhotoPanel";
import { ProductCard } from "@/components/ProductCard";
import { RuntimeDecisionCard } from "@/components/RuntimeDecisionCard";
import { RuntimeDecisionDemo } from "@/components/RuntimeDecisionDemo";
import { Section } from "@/components/Section";

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
    description: "Risk signals, vulnerability, complaints, evidence and business rules.",
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
    description: "The output conflicts with policy, risk or evidence requirements.",
  },
];

const adoptionCards = [
  {
    title: "Practical assurance mechanism",
    description: "Checks AI outputs before action and records what happened.",
  },
  {
    title: "Pilot-ready path",
    description: "Start with one workflow, test outputs and identify where human review is needed.",
  },
  {
    title: "Commercial deployment route",
    description: "Move from assurance review to API, SDK, webhook or private gateway.",
  },
  {
    title: "Strategic asset potential",
    description: "Build scenario libraries, expected decisions and benchmark reports.",
  },
];

const adoptionStages = [
  ["Explore", "Find where unchecked AI outputs could create risk."],
  ["Test", "Run realistic scenarios before live use."],
  ["Pilot", "Apply Corentis Shield to one sensitive workflow."],
  ["Deploy", "Connect through API, SDK, webhook or private gateway."],
  ["Scale", "Expand across workflows and build evidence over time."],
];

const nextBuildPhase = [
  "deployable pilot version",
  "expanded regulated scenario library",
  "policy-to-control engine",
  "output evaluation benchmark",
  "private gateway and API hardening",
  "design partner pilots",
];

const regulatedWorkflowCards = [
  "Complaints handling",
  "Vulnerable customer support",
  "AI-assisted casework",
  "Internal copilots",
  "Customer-facing agents",
  "Regulated operations",
];

const sprintPathways = [
  {
    title: "Why Corentis?",
    description: "The strategic case for a checkpoint before AI action.",
    href: "/why-corentis",
  },
  {
    title: "Methodology",
    description: "How policy becomes controls, review and evidence.",
    href: "/methodology",
  },
  {
    title: "Pilot report",
    description: "What a controlled AI workflow pilot can produce.",
    href: "/pilot-report",
  },
  {
    title: "Resources",
    description: "Placeholder packs for investors, buyers and design partners.",
    href: "/resources",
  },
  {
    title: "Partners & Funders",
    description: "A public-facing path for partnership and funding conversations.",
    href: "/partners-and-funders",
  },
  {
    title: "Founder",
    description: "Why this problem, why now and what Corentis is aiming to prove.",
    href: "/founder",
  },
];

const homepageEvidenceIds = [
  "fca-complaints-volume-2025-h1",
  "mckinsey-ai-adoption-2025",
  "ibm-ai-governance-gap-2025",
];

const aiAgentAlone = [
  "output may move straight to action",
  "context may be missed",
  "evidence may be incomplete",
  "human review may be unclear",
  "issues may be found too late",
];

const aiAgentWithShield = [
  "output is checked first",
  "policy and risk are reviewed",
  "missing evidence is surfaced",
  "human review is routed",
  "the decision is recorded",
];

const sourceCardClassName = [
  "card-base card-warning card-lift block p-4",
  "text-xs font-medium leading-5 text-amber-50",
].join(" ");

const heroTitleClassName = [
  "mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white",
  "text-balance sm:text-6xl lg:text-7xl",
].join(" ");

const outputRiskIntro = [
  "A risky AI reply is not just a bad answer if it reaches a customer.",
  "It can create rework, complaints, conduct risk and avoidable operational cost.",
  "Once AI outputs move into action, every mistake becomes more expensive to fix.",
].join(" ");

const workflowIntro = [
  "You do not need to redesign every AI process on day one.",
  "Start with one sensitive workflow.",
  "Test the outputs.",
  "Find the review points.",
  "See where a checkpoint is needed before live use.",
].join(" ");

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
            <h1 className={heroTitleClassName}>AI and AI agents are here.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              McKinsey says 62% of surveyed organisations are at least experimenting with AI agents.
              Deloitte says worker access to AI rose by 50% in 2025, and companies expect more AI
              projects to move into production.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              As more AI projects move into production, so do AI-related incidents. BCG reported
              that these incidents rose by 21% from 2024 to 2025.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              In one 2025 EY survey of 975 large global companies, AI-related risks were associated
              with an estimated $4.3bn in losses across this sample alone.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sources.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className={sourceCardClassName}
                >
                  {source.label}
                </a>
              ))}
            </div>
            <div className="card-base card-premium mt-8 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanx">
                This is the problem Corentis Shield is built for.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance">
                AI needs a checkpoint before it acts. Corentis provides it.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Corentis Shield checks AI outputs before they reach customers, teams or live systems
                - so sensitive actions can proceed, be reviewed, be escalated or be stopped with
                evidence recorded.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/runtime-guard">See the checkpoint in action</ButtonLink>
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

      <Section
        title="Every unchecked AI output can carry a commercial cost."
        intro={outputRiskIntro}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <PhotoPanel
            src="/images/stock/customer-support-team-headsets.jpg"
            alt="Customer support team using laptops and headsets in a modern office."
            label="Customer operations"
            caption="AI outputs become real-world actions when they reach customer operations."
            objectPosition="center 42%"
          />
          <div>
            <p className="mb-5 text-base leading-7 text-slate-300">
              Replies, case notes and workflow steps need a checkpoint before they move forward.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {riskItems.map((item) => (
                <div key={item} className="card-base card-danger card-lift p-5">
                  <p className="text-sm font-medium leading-6 text-rose-50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="AI agent on its own vs AI agent with Corentis Shield"
      >
        <BeforeAfterControlPanel />
      </Section>

      <Section
        title="Why Corentis Shield?"
        intro="Because teams need a simple checkpoint between an AI output and a real-world action."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {shieldReasons.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Built for regulated workflows"
        intro="Corentis starts where AI outputs can affect customers, records, decisions or regulated operations."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regulatedWorkflowCards.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
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
            <InfoCard key={item.title} title={item.title} description={item.description} />
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
        title="From policy to proof"
        intro="A simple journey from governance intent to evidence people can inspect."
      >
        <FlowDiagram steps={["Policy", "Checkpoint", "Review", "Evidence", "Pilot Report"]} />
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Explore the funding-ready structure"
        intro="These pages create the route from product explanation to proof, methodology, partner conversations and future resource packs."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sprintPathways.map((item) => (
            <div key={item.title} className="card-base card-premium card-lift p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <div className="mt-5">
                <ButtonLink href={item.href} variant="secondary">
                  Open
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why a checkpoint layer matters now"
        intro="The problem is not simply whether organisations can use AI. It is whether they can control what AI is about to do before that action affects a customer, case or regulated workflow."
      >
        <EvidenceStatCards ids={homepageEvidenceIds} tone="premium" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/packs/corentis-investor-overview.pdf">
            Download Investor Overview
          </ButtonLink>
          <ButtonLink href="/methodology" variant="secondary">
            Explore Methodology
          </ButtonLink>
          <ButtonLink href="/pilot-report" variant="secondary">
            View Sample Pilot Report
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="More than a product: a route to trusted AI adoption"
        intro="Corentis Shield starts as a checkpoint for AI outputs. The same mechanism can support pilots, assurance reports, benchmark datasets and live deployment across regulated workflows."
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-5 md:grid-cols-2">
            {adoptionCards.map((item) => (
              <div key={item.title} className="card-base card-premium card-lift p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          <PhotoPanel
            src="/images/stock/business-data-review-meeting.jpg"
            alt="Business team reviewing data and charts during a meeting."
            label="Pilot evidence"
            caption="Pilot evidence people can review."
            objectPosition="center 48%"
          />
        </div>
      </Section>

      <Section title="Built for every stage of AI adoption">
        <div className="grid gap-4 md:grid-cols-5">
          {adoptionStages.map(([stage, description]) => (
            <div key={stage} className="card-base card-info card-lift p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanx">
                {stage}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{description}</p>
            </div>
          ))}
        </div>
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
        className="bg-white/[0.02]"
        title="The next build phase."
        intro="Funding and design partnerships help turn the current prototype into deployable AI assurance infrastructure."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nextBuildPhase.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/why-corentis">Why Corentis?</ButtonLink>
          <ButtonLink href="/contact#design-partner" variant="secondary">
            Discuss a design partnership
          </ButtonLink>
        </div>
      </Section>

      <Section title="Start with one workflow." intro={workflowIntro}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <RuntimeDecisionDemo />
          <div className="card-base card-premium p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white text-balance">
              Before you deploy an AI agent, test the checkpoint.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Start with one sensitive workflow. Corentis can help you test AI outputs, find where
              review is needed and see what evidence should be recorded before live use.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#walkthrough">Book a conversation</ButtonLink>
              <ButtonLink href="/contact#design-partner" variant="secondary">
                Discuss a design partnership
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Building with design partners"
        intro="Corentis is seeking early conversations with regulated teams, AI assurance stakeholders and strategic partners who want to test controlled AI workflows."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#design-partner">Request a pilot conversation</ButtonLink>
          <ButtonLink href="/pilot-report" variant="secondary">
            View pilot report
          </ButtonLink>
          <ButtonLink href="/methodology" variant="secondary">
            Read the methodology
          </ButtonLink>
          <ButtonLink href="/resources" variant="secondary">
            Explore the evidence packs
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-base card-info card-lift p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
