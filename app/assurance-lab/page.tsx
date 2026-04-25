import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { FlowDiagram } from "@/components/FlowDiagram";
import { MetricCard } from "@/components/MetricCard";
import { Section } from "@/components/Section";

const tests = [
  "test draft replies",
  "test proposed actions",
  "spot risky outputs",
  "find missing evidence",
  "identify where human review is needed",
  "create a report before deployment",
];

export default function AssuranceLabPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Assurance Lab"
        title="Test AI outputs before they go live."
        intro="Run AI replies, actions and workflow updates through realistic scenarios before they are used in sensitive work. Test before live use."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-base card-premium overflow-hidden rounded-2xl p-3 shadow-card">
            <Image
              src="/images/corentis/Corentis2.png"
              alt="Corentis Assurance Lab testing AI outputs before deployment."
              width={1400}
              height={1000}
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tests.map((test) => (
              <div key={test} className="card-base card-info card-lift p-4 text-sm text-slate-200">
                {test}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="A practical way to test before live use">
        <FlowDiagram
          steps={[
            "Choose one workflow",
            "Run realistic scenarios",
            "Capture AI replies and actions",
            "Find risk and evidence gaps",
            "Compare with the Corentis Shield path",
            "Create a pilot-ready report",
          ]}
        />
      </Section>

      <Section className="bg-white/[0.02]" title="Signals teams can discuss">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Risks surfaced",
            "Review points found",
            "Evidence gaps identified",
            "Outputs blocked before use",
            "Pilot-ready report",
          ].map((metric) => (
            <MetricCard key={metric} label={metric} />
          ))}
        </div>
      </Section>

      <Section
        title="Useful for funding, pilots and internal review"
        intro="Assurance Lab turns AI risk into scenarios, outcomes and evidence people can review before live use."
      >
        <CTABanner
          title="Start with one workflow. Learn where the checkpoint is needed."
          primaryLabel="Book an AI assurance review"
          primaryHref="/contact"
          secondaryLabel="Discuss a design partnership"
          secondaryHref="/funding"
        />
      </Section>
    </>
  );
}
