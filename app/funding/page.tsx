import { FileText } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";

const approach = [
  "checks outputs before action",
  "routes sensitive cases to people",
  "records evidence for review",
  "tests outputs before live use",
  "starts in financial services",
  "expands across regulated workflows",
];

const proceeds = [
  "build Corentis Shield into a deployable pilot",
  "expand the regulated scenario library",
  "develop the policy-to-control engine",
  "validate the assurance approach with design partners",
  "produce evidence reports and benchmark results",
  "prepare financial-services pilot deployments",
];

const designPartners = [
  "fintechs preparing AI workflow pilots",
  "financial-services customer operations teams",
  "complaint-handling teams",
  "AI vendors serving regulated firms",
  "compliance or conduct-risk teams",
  "outsourced customer-service providers",
];

export default function FundingPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Funding & Partners"
        title="Building the checkpoint layer for AI adoption."
        intro="AI is moving from chat to action. Sensitive workflows need a way to check outputs, route human review and record evidence before anything reaches the real world."
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-base card-premium p-7">
            <h2 className="text-2xl font-semibold text-white">The funder and investor story</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              AI adoption is moving from chat to action. If it can act, it needs a checkpoint.
              Corentis Shield checks outputs before action. Assurance Lab tests outputs before live
              use. Evidence trails support review, governance and practical pilots.
            </p>
          </div>
          <div className="card-base card-info card-lift p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyanx/30 bg-ink text-cyanx">
              <FileText aria-hidden className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">Funding brief</h2>
              <p className="mt-3 text-sm leading-6 text-cyan-50">
              A concise overview of the Corentis Shield opportunity, product approach and pilot
              roadmap.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="secondary">
                Request funding brief
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section title="The Corentis approach">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Funding use of proceeds">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proceeds.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5">
              <p className="text-sm leading-6 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Why this is infrastructure, not consultancy"
        intro="Corentis may start with focused reviews. The long-term product is a repeatable checkpoint platform with policy rules, review routes, evidence records and runtime control underneath."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {["Policy rules", "Review routes", "Evidence records", "Checkpoint API"].map((item) => (
            <div key={item} className="card-base card-info card-lift p-5 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Design partner profile">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designPartners.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="First proof point, wider pattern"
        intro="Financial services is the first proof point. The same checkpoint pattern can expand to insurance, healthcare administration, public sector, housing and enterprise operations."
      >
        <CTABanner
          title="Explore whether Corentis is a fit for your funding, pilot or partnership goals."
          primaryLabel="Discuss a design partnership"
          primaryHref="/contact"
          secondaryLabel="Talk to Corentis"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
