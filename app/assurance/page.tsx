import type { Metadata } from "next";
import { BeforeAfterControlPanel } from "@/components/BeforeAfterControlPanel";
import { ButtonLink } from "@/components/ButtonLink";
import { CheckpointFlowGraphic } from "@/components/CheckpointFlowGraphic";
import { ControlMatrixPreview } from "@/components/ControlMatrixPreview";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "AI Assurance & Runtime Evidence | Corentis Shield",
  description:
    "See how Corentis Shield is designed to support runtime checkpoints, human review routes and evidence artefacts around AI-assisted regulated workflows.",
};

const evidenceOutputs = [
  "control matrix",
  "scenario test log",
  "blocked-action log",
  "review queue history",
  "policy version trail",
  "evidence pack",
  "pilot report",
];

export default function AssurancePage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Assurance"
        title="From policy intent to runtime evidence"
        intro="Corentis Shield is designed to help teams turn governance expectations into checkpoints, review routes and evidence capture around AI-assisted workflows."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/packs/corentis-assurance-governance-summary.pdf">
            Download Assurance Summary
          </ButtonLink>
          <ButtonLink href="/packs/corentis-control-matrix-example.pdf" variant="secondary">
            View Control Matrix Example
          </ButtonLink>
          <ButtonLink href="/contact#assurance" variant="secondary">
            Discuss an assurance workflow
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="The assurance problem"
        intro="Policies and governance frameworks matter, but regulated teams also need evidence of what happened when AI-assisted workflows actually ran."
      >
        <BeforeAfterControlPanel />
      </Section>

      <Section className="bg-white/[0.02]" title="Corentis control loop">
        <CheckpointFlowGraphic />
      </Section>

      <Section title="Evidence outputs">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {evidenceOutputs.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Control matrix preview">
        <ControlMatrixPreview />
      </Section>

      <Section title="Limitations">
        <div className="card-base card-warning p-7">
          <p className="max-w-4xl text-base leading-8 text-amber-50">
            Corentis supports governance and assurance workflows. It does not replace legal,
            compliance, risk or regulatory judgement.
          </p>
        </div>
      </Section>
    </>
  );
}
