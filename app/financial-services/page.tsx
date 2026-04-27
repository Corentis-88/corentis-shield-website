import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { PhotoPanel } from "@/components/PhotoPanel";
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

const heroIntro = [
  "Complaints, hardship and vulnerable-customer situations need careful handling.",
  "Corentis Shield checks AI replies and proposed actions before they reach the customer.",
  "Human review where it matters.",
].join(" ");

const examplesIntro = [
  "Corentis Shield checks AI outputs in sensitive customer workflows,",
  "where tone, timing, evidence and escalation matter.",
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
        title="Helping financial-services teams use AI with more confidence."
        intro={heroIntro}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
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

      <Section title="Where Corentis Shield helps first" intro={examplesIntro}>
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
              actions.
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
