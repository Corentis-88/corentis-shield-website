import { Mail } from "lucide-react";
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

export default function ContactPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Contact"
      title="Let's talk about safer AI workflows."
      intro="Whether you are exploring a pilot, reviewing an AI workflow, or looking at funding and partnerships, we would be happy to talk. Start with one workflow."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div className="card-base card-premium p-6">
            <h2 className="text-xl font-semibold text-white">Good reasons to get in touch</h2>
            <div className="mt-5 space-y-3">
              {enquiryOptions.map((option) => (
                <div key={option} className="card-base card-info card-lift p-4 text-slate-200">
                  {option}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">Email: hello@corentis.co.uk</p>
          </div>
          <div className="card-base card-info p-6">
            <h2 className="text-xl font-semibold text-white">What a first conversation looks like</h2>
            <div className="mt-5 space-y-3">
              {conversationSteps.map((step) => (
                <p key={step} className="text-sm leading-6 text-cyan-50">
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>

        <form
          action="mailto:hello@corentis.co.uk"
          method="post"
          encType="text/plain"
          className="card-base card-premium p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-200">
              Name
              <input
                name="name"
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-slate-200">
            Enquiry type
            <select
              name="enquiry"
              className="mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanx"
              defaultValue={enquiryOptions[0]}
            >
              {enquiryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 block text-sm font-medium text-slate-200">
            Message
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanx"
              placeholder="Tell us about the AI workflow, pilot, funding conversation or partnership opportunity."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyanx px-5 py-3 text-sm font-semibold text-ink shadow-[0_12px_34px_rgba(48,213,255,0.18)] transition hover:bg-cyan-200"
          >
            <Mail aria-hidden className="h-4 w-4" />
            Open email draft
          </button>
        </form>
      </div>
    </Section>
  );
}
