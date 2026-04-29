import { ContactForm } from "@/components/ContactForm";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Section } from "@/components/Section";
import companyDetails from "@/content/company-details.json";

const enquiryOptions = [
  "Book a conversation",
  "Discuss a design partnership",
  "Ask about Corentis Shield",
  "Funding or investor conversation",
];

const conversationSteps = [
  "Tell us the workflow you are considering.",
  "Share where the risk, review or evidence questions sit.",
  "Agree whether a review, scenario test or design-partner discussion makes sense.",
];

const contactPaths = [
  {
    id: "design-partner",
    title: "Design partner pilot",
    description:
      "For regulated teams that want to test a controlled AI workflow before production deployment.",
    prompt:
      "Tell us the workflow you want to test, the policy/risk concern, and whether you are exploring a non-production pilot.",
    cta: "Start design partner conversation",
  },
  {
    id: "investor",
    title: "Investor or funder conversation",
    description:
      "For investors, funding partners or strategic partners interested in AI control infrastructure for regulated workflows.",
    prompt:
      "Tell us whether you are interested in investment, funding, partnership, or strategic collaboration.",
    cta: "Start investor/funder conversation",
  },
  {
    id: "assurance",
    title: "Assurance/governance discussion",
    description:
      "For governance, risk, compliance, assurance or AI oversight teams exploring runtime evidence and human-review controls.",
    prompt:
      "Tell us which AI-assisted workflow, policy area or evidence requirement you want to explore.",
    cta: "Discuss assurance workflow",
  },
  {
    id: "walkthrough",
    title: "Product walkthrough",
    description:
      "For people who want to see how Corentis Shield works through a simple complaints/vulnerable-customer workflow example.",
    prompt:
      "Tell us whether you want a product walkthrough, pilot report walkthrough or investor-focused overview.",
    cta: "Request product walkthrough",
  },
];

const contactIntro = [
  "Whether you are exploring a pilot, reviewing an AI workflow, or looking at funding",
  "and partnerships, we would be happy to talk. Start with one workflow.",
].join(" ");

export default function ContactPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Contact"
      title="Let's talk about safer AI workflows."
      intro={contactIntro}
    >
      <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {contactPaths.map((path) => (
          <a
            key={path.id}
            id={path.id}
            href="#contact-form"
            className="card-base card-info card-lift block scroll-mt-28 p-5"
          >
            <h2 className="text-lg font-semibold text-white">{path.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{path.description}</p>
            <p className="mt-4 rounded-lg border border-cyanx/15 bg-cyanx/[0.06] p-3 text-xs leading-5 text-cyan-50">
              {path.prompt}
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan-100">{path.cta}</p>
          </a>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <PhotoPanel
            src="/images/stock/customer-support-advisor-laptop.jpg"
            alt="Customer support advisor wearing a headset and working on a laptop."
            label="First conversation"
            caption="Start with one workflow. We'll help you find where the checkpoint is needed."
            aspect="portrait"
            objectPosition="center 36%"
          />
          <div className="card-base card-premium p-6">
            <h2 className="text-xl font-semibold text-white">Good reasons to get in touch</h2>
            <div className="mt-5 space-y-3">
              {enquiryOptions.map((option) => (
                <div key={option} className="card-base card-info card-lift p-4 text-slate-200">
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div className="card-base card-info p-6">
            <h2 className="text-xl font-semibold text-white">
              What a first conversation looks like
            </h2>
            <div className="mt-5 space-y-3">
              {conversationSteps.map((step) => (
                <p key={step} className="text-sm leading-6 text-cyan-50">
                  {step}
                </p>
              ))}
            </div>
          </div>
          <div className="card-base card-info p-6">
            <h2 className="text-xl font-semibold text-white">Company contact</h2>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              <p>{companyDetails.companyName}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${companyDetails.email}`} className="text-cyan-100 underline">
                  {companyDetails.email}
                </a>
              </p>
              <p>Company No. {companyDetails.companyNumber}</p>
              <p>Registered office: {companyDetails.registeredOfficeSingleLine}</p>
            </div>
          </div>
        </div>

        <div id="contact-form" className="scroll-mt-28">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
