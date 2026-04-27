import { ContactForm } from "@/components/ContactForm";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Section } from "@/components/Section";

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
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
