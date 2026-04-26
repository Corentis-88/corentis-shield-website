import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { FlowDiagram } from "@/components/FlowDiagram";
import { RuntimeDecisionCard } from "@/components/RuntimeDecisionCard";
import { RuntimeDecisionDemo } from "@/components/RuntimeDecisionDemo";
import { Section } from "@/components/Section";

const decisions = [
  ["Proceed", "The output fits your rules."],
  ["Review", "A person should check before the action continues."],
  ["Escalate", "A specialist or supervisor should take over."],
  ["Block", "The output conflicts with policy, risk or evidence requirements."],
];

const heroIntro = [
  "If it can act, it needs a checkpoint.",
  "Corentis Shield sits between an AI output and a customer, system or workflow action.",
].join(" ");

const technicalIntro = [
  "Under the simple checkpoint is the control layer technical teams need:",
  "policy checks, approval routing and evidence records before AI outputs are used.",
].join(" ");

export default function RuntimeGuardPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Corentis Shield"
        title="Check AI outputs before they reach the real world."
        intro={heroIntro}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <RuntimeDecisionDemo />
          <div className="card-base card-premium overflow-hidden rounded-2xl p-3 shadow-card">
            <Image
              src="/images/corentis/Corentis3.png"
              alt="Corentis Shield checking an AI reply before it reaches a customer."
              width={1400}
              height={1000}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </Section>

      <Section title="The checkpoint before the real world">
        <FlowDiagram
          steps={[
            "AI creates an output",
            "Corentis Shield checks it",
            "Decision returned",
            "Evidence recorded",
          ]}
        />
      </Section>

      <Section className="bg-white/[0.02]" title="Clear outcomes before action">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {decisions.map(([title, description]) => (
            <RuntimeDecisionCard key={title} title={title} description={description} />
          ))}
        </div>
      </Section>

      <Section
        title="What Corentis Shield checks"
        intro="Draft replies. Proposed actions. Workflow updates. Check before action."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "The AI output",
            "The customer or case context",
            "Policy and approval rules",
            "Missing evidence or escalation needs",
          ].map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="For technical teams" intro={technicalIntro}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-base card-info p-6 font-mono text-sm leading-7 text-slate-200">
            <p className="text-cyan-100">Example input</p>
            <pre className="mt-4 whitespace-pre-wrap">{`agent: complaints_ai
output_type: customer_reply
context: hardship disclosed, complaint open, missed payment
draft_reply: "We are unable to pause collections at this time."`}</pre>
          </div>
          <div className="card-base card-danger p-6 font-mono text-sm leading-7 text-red-50">
            <p className="text-red-100">Example decision</p>
            <pre className="mt-4 whitespace-pre-wrap">{`decision: block
reason: hardship disclosure and open complaint make the wording unsafe under configured policy
next_step: human_review
evidence_needed: hardship disclosure, complaint history, proposed resolution`}</pre>
          </div>
        </div>
      </Section>

      <Section title="Action-level control, not just risk documentation">
        <div className="card-base card-info p-7">
          <p className="max-w-4xl text-lg leading-8 text-cyan-50">
            Governance tools document AI risk. Prompt guardrails filter model behaviour. Corentis
            Shield focuses on the moment before an AI output reaches a customer, system or live
            workflow.
          </p>
        </div>
        <div className="mt-12">
          <CTABanner
            title="See where Corentis Shield could fit into your AI workflow."
            primaryLabel="Book a conversation"
            primaryHref="/contact"
            secondaryLabel="Book an AI assurance review"
            secondaryHref="/contact"
          />
        </div>
      </Section>
    </>
  );
}
