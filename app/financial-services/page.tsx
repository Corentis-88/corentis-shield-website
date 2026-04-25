import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";

const examples = [
  "a complaint reply before it is sent",
  "a collections message before it reaches a customer",
  "a CRM update before it is recorded",
  "a proposed closure before a complaint is closed",
  "a guidance response before it crosses an advice boundary",
];

const useCases = [
  "complaints handling",
  "vulnerable customer support",
  "collections and hardship",
  "customer communications",
  "advice/guidance boundaries",
  "case triage",
  "supervisor escalation",
  "audit evidence",
];

export default function FinancialServicesPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Financial Services"
        title="Helping financial-services teams use AI with more confidence."
        intro="Complaints, hardship and vulnerable-customer situations need careful handling. Corentis Shield checks AI replies and proposed actions before they reach the customer. Human review where it matters."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="card-base card-info card-lift p-5 text-slate-100"
                >
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
        title="Where Corentis Shield helps first"
        intro="Corentis Shield checks AI outputs in sensitive customer workflows, where tone, timing, evidence and escalation matter."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {examples.map((example) => (
            <div
              key={example}
              className="card-base card-info card-lift p-5 text-sm leading-6 text-cyan-50"
            >
              {example}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Financial services is the first proof point, not the limit"
        intro="The same checkpoint pattern can extend into insurance claims, pension servicing, customer support, public-sector casework, healthcare administration and other regulated workflows."
      >
        <CTABanner
          title="Bring clearer oversight to a sensitive AI workflow."
          primaryLabel="Book an AI assurance review"
          primaryHref="/contact"
          secondaryLabel="See the checkpoint in action"
          secondaryHref="/runtime-guard"
        />
      </Section>
    </>
  );
}
