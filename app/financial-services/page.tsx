import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Section } from "@/components/Section";

const useCases = [
  "complaints triage",
  "vulnerable-customer signals",
  "hardship disclosures",
  "human specialist escalation",
  "unsafe response blocking",
  "human approval before customer impact",
  "audit and review evidence",
  "management information",
];

const beforeCorentis = [
  "AI outputs may be hard to evidence",
  "escalation logic may be inconsistent",
  "human review may be unclear",
  "risk signals may be missed",
  "audit trails may be scattered",
];

const withCorentis = [
  "risky outputs are paused or blocked",
  "escalation rules are visible",
  "human review is explicit",
  "evidence is captured automatically",
  "teams can test scenarios before deployment",
];

const workflowFocus = [
  "complaints handling",
  "vulnerable customer support",
  "collections and hardship",
  "customer communications",
  "advice/guidance boundaries",
  "case triage",
  "supervisor escalation",
  "audit evidence",
];

const heroIntro = [
  "Corentis helps regulated teams test, control and evidence AI-assisted workflows before outputs reach customers, records or live systems.",
].join(" ");

const expansionIntro = [
  "The same checkpoint pattern can extend into insurance claims, pension servicing,",
  "customer support, public-sector casework, healthcare administration and other regulated workflows.",
].join(" ");

export default function FinancialServicesPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Financial Services"
        title="AI assurance for financial-services complaints and customer-support workflows."
        intro={heroIntro}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflowFocus.map((useCase) => (
                <div key={useCase} className="card-base card-info card-lift p-5 text-slate-100">
                  {useCase}
                </div>
              ))}
            </div>
          </div>
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

      <Section
        title="The first wedge: AI-assisted complaints and vulnerable-customer workflows"
        intro="The strongest first use case is narrow, human and evidence-heavy: complaints, hardship disclosures, vulnerability signals, customer-support responses and escalation decisions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((example) => (
            <div
              key={example}
              className="card-base card-info card-lift p-5 text-sm leading-6 text-cyan-50"
            >
              {example}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Before and with Corentis">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-base card-warning p-7">
            <h2 className="text-2xl font-semibold text-white">Before Corentis</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-amber-50">
              {beforeCorentis.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-base card-success p-7">
            <h2 className="text-2xl font-semibold text-white">With Corentis</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-teal-50">
              {withCorentis.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Built for sensitive customer moments">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <PhotoPanel
            src="/images/stock/call-centre-team-laptops.jpg"
            alt="Customer operations team using laptops and headsets in a call centre."
            label="Complaints operations"
            caption="Complaint replies, collections messages and case updates need checking before they reach customers."
            objectPosition="center 42%"
          />
          <div className="card-base card-premium p-7">
            <p className="text-lg leading-8 text-slate-300">
              Financial-services teams already manage sensitive customer moments. Corentis Shield
              helps them check AI outputs before those outputs become replies, records or workflow
              actions. It is designed to help firms test AI-assisted workflows before deployment,
              capture evidence for audit and review, and identify recurring risk themes through
              clearer management information.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Financial services is the first proof point, not the limit"
        intro={expansionIntro}
      >
        <CTABanner
          title="Bring clearer oversight to a sensitive AI workflow."
          primaryLabel="Book an AI assurance review"
          primaryHref="/contact#assurance"
          secondaryLabel="See the checkpoint in action"
          secondaryHref="/walkthrough"
        />
      </Section>
    </>
  );
}
