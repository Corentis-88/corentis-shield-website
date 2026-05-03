import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CheckpointFlowGraphic } from "@/components/CheckpointFlowGraphic";
import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { PilotReportPreview } from "@/components/PilotReportPreview";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Guided Product Walkthrough | Corentis Shield",
  description:
    "Walk through how Corentis Shield can pause risky AI outputs, route human review and capture evidence.",
};

const steps = [
  "A regulated workflow is selected",
  "Policy controls are defined",
  "AI proposes an output or next action",
  "Corentis checks the proposed action",
  "Safe actions can continue",
  "Risky or sensitive actions pause",
  "Human review is routed",
  "Evidence is captured",
  "A pilot report shows what happened",
];

const demonstrates = [
  "control before action",
  "human accountability",
  "explainable checkpoints",
  "evidence without scrambling afterwards",
  "clearer go/no-go decisions for pilots",
];

export default function WalkthroughPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Guided product walkthrough"
        title="See how Corentis Shield checks an AI-assisted complaints workflow before action."
        intro="This walkthrough uses a realistic financial-services complaint scenario to show how Corentis detects risk signals, applies policy controls, blocks unsafe actions, routes the case to human review and captures an evidence trail."
      >
        <ButtonLink href="/contact#walkthrough">Request a walkthrough</ButtonLink>
      </Section>

      <Section
        title="How the walkthrough works"
        intro="This guided product walkthrough is designed for funders, buyers, investors and design partners. It demonstrates the intended control flow and evidence model for a pre-deployment pilot."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="card-base card-info card-lift p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanx">
                Step {index + 1}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-100">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="The checkpoint flow">
        <CheckpointFlowGraphic />
      </Section>

      <Section title="What this demonstrates">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {demonstrates.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="What you will see">
        <div className="grid gap-6 lg:grid-cols-2">
          <PilotReportPreview />
          <ControlMatrixPreview />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">
          The walkthrough shows the intended Corentis Shield control flow for an AI-assisted
          complaints workflow. It is designed to demonstrate the checkpoint logic, escalation path
          and evidence trail before a live pilot environment is connected.
        </p>
      </Section>
    </>
  );
}
