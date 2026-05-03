import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ControlBench UK | Corentis Shield",
  description:
    "ControlBench UK is a strategic AI assurance dataset and evaluation harness for regulated AI agents.",
};

const assetContents = [
  "curated regulated-workflow scenarios",
  "financial-services complaint examples",
  "vulnerable-customer handling scenarios",
  "policy-conflict cases",
  "blocked-action examples",
  "human-review triggers",
  "escalation tests",
  "expected evidence outputs",
  "scoring and evaluation guidance",
  "runtime assurance test tasks",
];

const beneficiaries = [
  {
    title: "Regulated firms",
    text: "A clearer way to test AI-assisted work before outputs reach customers, records or live workflows.",
  },
  {
    title: "Assurance reviewers",
    text: "Reusable scenarios, controls and evidence outputs for inspecting whether AI-agent workflows are ready to progress.",
  },
  {
    title: "Funders and strategic partners",
    text: "A credible strategic asset that connects AI assurance, RegTech and practical regulated-sector adoption.",
  },
  {
    title: "Design partners",
    text: "A structured route to test complaints, vulnerable-customer and escalation workflows before live deployment.",
  },
];

const trustItems = [
  "tests AI-agent behaviour before customer impact",
  "turns policy intent into measurable checks",
  "supports human-review gates and escalation logic",
  "captures audit-ready evidence outputs",
  "creates reusable assurance assets for UK regulated workflows",
];

export default function ControlBenchUkPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="ControlBench UK"
        title="ControlBench UK"
        intro="A strategic AI assurance dataset and evaluation harness for regulated AI agents."
      >
        <div className="card-base card-premium max-w-4xl p-7">
          <p className="text-lg leading-8 text-slate-300">
            ControlBench UK is being developed to help UK organisations test whether AI agents can
            behave safely, consistently and accountably before they affect customers, records or
            regulated workflows.
          </p>
        </div>
      </Section>

      <Section
        title="What ControlBench UK is"
        intro="ControlBench UK is a developing strategic AI assurance asset: a reusable set of scenarios, datasets, checks and evaluation tasks for regulated AI-agent workflows."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {assetContents.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-sm text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Why regulated AI needs benchmark assurance"
        intro="AI agents are moving from answering questions to proposing actions. Regulated organisations need a way to test those actions against policy, risk, review and evidence requirements before they move into live workflows."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="card-base card-premium p-6">
            <h2 className="text-xl font-semibold text-white">Scenario realism</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Benchmark tasks should reflect real regulated workflow pressure: complaints, hardship,
              vulnerable-customer signals, escalation and evidence gaps.
            </p>
          </div>
          <div className="card-base card-premium p-6">
            <h2 className="text-xl font-semibold text-white">Action-boundary checks</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The important test is not only what an AI model says. It is whether the proposed
              action should proceed, pause, escalate or be blocked.
            </p>
          </div>
          <div className="card-base card-premium p-6">
            <h2 className="text-xl font-semibold text-white">Evidence by design</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Assurance needs outputs that reviewers can inspect: decisions, controls, review
              routes, blocked actions and evidence completeness.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Who benefits">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {beneficiaries.map((item) => (
            <div key={item.title} className="card-base card-success card-lift p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-teal-50">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="How it supports UK AI trust, integrity and assurance"
        intro="ControlBench UK is designed to help move responsible AI from policy statements into testable operational evidence."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-sm text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How it connects to Corentis Shield"
        intro="ControlBench UK provides the scenarios, evaluation tasks and expected evidence model. Corentis Shield is the commercial runtime checkpoint layer that applies controls before AI-assisted work moves forward."
      >
        <div className="card-base card-info max-w-4xl p-7">
          <p className="text-lg leading-8 text-cyan-50">
            AI needs a checkpoint before it acts. Corentis provides it. ControlBench UK helps test
            the checkpoint pattern before regulated teams move toward live pilots or deployment.
          </p>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="card-base card-premium p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white text-balance">
            Interested in design-partner or funding validation?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Corentis is preparing for design-partner, sandbox and funding validation. Current work
            is focused on financial-services complaints, vulnerable-customer handling, AI-agent
            checkpointing, assurance datasets and evidence-backed human review.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact#design-partner">Discuss validation</ButtonLink>
            <ButtonLink href="/packs/corentis-controlbench-rd-brief.pdf" variant="secondary">
              Open ControlBench brief
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
