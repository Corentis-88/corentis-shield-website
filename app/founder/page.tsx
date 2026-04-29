import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import companyDetails from "@/content/company-details.json";

const founderSections = [
  {
    title: "Why this problem",
    text: "Corentis was created from the belief that AI adoption will fail if organisations cannot control what AI does at the point of action.",
  },
  {
    title: "Why now",
    text: "AI is moving from answering questions to drafting replies, updating records and triggering workflow steps. That shift needs a checkpoint before action.",
  },
  {
    title: "Why start with regulated workflows",
    text: "Regulated workflows combine productivity pressure, customer sensitivity, evidence requirements and human accountability.",
  },
  {
    title: "What Corentis is aiming to prove",
    text: "The goal is to prove a repeatable control pattern through focused design partner pilots.",
  },
  {
    title: "Why complaints and vulnerable-customer workflows are the wedge",
    text: "They combine customer sensitivity, operational pressure, escalation needs, evidence requirements and reputational risk in one concrete workflow.",
  },
];

const fundingProofItems = [
  "validate the control pattern",
  "run scenario tests",
  "build benchmark and evaluation assets",
  "prepare design partner pilots",
  "strengthen evidence generation",
  "move from prototype to tested pilot",
];

export default function FounderPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Founder"
        title="Founder"
        intro="Corentis is being built around a practical control layer for regulated AI workflows."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#walkthrough">Start founder conversation</ButtonLink>
          <ButtonLink href="/design-partners" variant="secondary">
            Design partner pilots
          </ButtonLink>
          <ButtonLink href="/investors" variant="secondary">
            Investor/funder conversation
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="The founder story"
        intro="The starting point is simple: AI can help teams move faster, but regulated organisations need clearer control before AI outputs become real-world actions."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {founderSections.map((item) => (
            <div key={item.title} className="card-base card-premium card-lift p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="What Corentis is trying to prove next"
        intro="The next step is not a broad claim about all regulated AI. It is a focused proof path: one sensitive workflow, clear control boundaries, scenario testing, human review and evidence artefacts that a buyer or partner can inspect."
      >
        <div className="card-base card-premium p-7">
          <p className="max-w-4xl text-lg leading-8 text-slate-300">
            Corentis remains early-stage and pilot-focused. The credibility comes from narrowing the
            problem to the action boundary: what should happen before an AI output becomes a
            customer message, case update, recommendation or workflow action?
          </p>
        </div>
      </Section>

      <Section title="What funding would help prove">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fundingProofItems.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
        <div className="card-base card-warning mt-8 p-6">
          <p className="max-w-4xl text-sm leading-6 text-amber-50">
            {companyDetails.companyName} is a UK private limited company registered in England and
            Wales under company number {companyDetails.companyNumber}. Registered office:{" "}
            {companyDetails.registeredOfficeSingleLine}.
          </p>
        </div>
      </Section>
    </>
  );
}
