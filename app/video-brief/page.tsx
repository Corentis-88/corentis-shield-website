import { Section } from "@/components/Section";

const productVideo = [
  ["0-8s", "AI adoption is accelerating, but regulated actions need control."],
  ["8-18s", "Corentis Shield acts as a checkpoint before AI acts."],
  ["18-30s", "Risky outputs pause, human review is routed and evidence is captured."],
  ["30-42s", "Show a complaints/vulnerable-customer workflow example."],
  ["42-52s", "Show the pilot report and evidence pack."],
  ["52-60s", "Invite design partners and investors to talk."],
];

const investorVideo = [
  ["0-12s", "AI is moving from chat to action in regulated workflows."],
  ["12-25s", "Unchecked outputs create operational, customer and evidence risk."],
  ["25-42s", "Corentis creates the checkpoint before action."],
  ["42-62s", "Financial services complaints are the first wedge."],
  ["62-78s", "Scenario libraries, control matrices and evidence packs become reusable assets."],
  ["78-90s", "CTA: discuss pilots, funding and strategic partnerships."],
];

const keyMessages = [
  "Corentis does not ask organisations to blindly trust AI. It gives them a checkpoint before AI acts.",
  "The first wedge is complaints and vulnerable-customer workflows in financial services.",
  "The product path is review, scenario testing, pilot evidence, then controlled deployment.",
  "The long-term value is reusable assurance infrastructure for regulated AI outputs.",
];

const proofMoments = [
  "FCA complaints and redress pressure.",
  "McKinsey AI and agentic AI adoption momentum.",
  "IBM / Ponemon AI governance gap.",
  "Customer caution around AI agents in sensitive financial decisions.",
];

const sourcePacks = [
  ["Investor Overview", "/packs/corentis-investor-overview.pdf"],
  ["Design Partner Pack", "/packs/corentis-design-partner-pack.pdf"],
  ["Runtime Checkpoint Explainer", "/packs/corentis-runtime-checkpoint-explainer.pdf"],
];

const ctaVariants = [
  ["Design partner CTA", "/design-partners"],
  ["Investor CTA", "/investors"],
  ["Assurance CTA", "/assurance"],
  ["Walkthrough CTA", "/walkthrough"],
];

const visualIdeas = [
  "AI output approaching a checkpoint before reaching a customer workflow.",
  "A risky response pausing and routing to human review.",
  "Evidence log building as decisions are made.",
  "Pilot report pages: control matrix, scenario results, residual risks.",
  "Warm customer-operations and review-team scenes using approved site imagery.",
];

export default function VideoBriefPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Product video planning"
        title="Corentis video brief"
        intro="A structured brief for product and investor video production, showing the core message, proof moments, visual beats and CTA options."
      />

      <Section title="60-second product video structure">
        <Storyboard rows={productVideo} />
      </Section>

      <Section className="bg-white/[0.02]" title="90-second investor video structure">
        <Storyboard rows={investorVideo} />
      </Section>

      <Section title="Key messages">
        <CardGrid items={keyMessages} tone="premium" />
      </Section>

      <Section className="bg-white/[0.02]" title="Suggested visuals">
        <CardGrid items={visualIdeas} tone="info" />
      </Section>

      <Section title="Proof/stat moments">
        <CardGrid items={proofMoments} tone="warning" />
      </Section>

      <Section className="bg-white/[0.02]" title="Source packs for production">
        <div className="grid gap-4 md:grid-cols-3">
          {sourcePacks.map(([label, href]) => (
            <a key={href} href={href} className="card-base card-premium card-lift block p-5">
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="mt-3 text-xs leading-5 text-slate-400">Download supporting pack.</p>
            </a>
          ))}
        </div>
      </Section>

      <Section title="CTA variants">
        <div className="grid gap-4 md:grid-cols-4">
          {ctaVariants.map(([label, href]) => (
            <a key={href} href={href} className="card-base card-info card-lift block p-5">
              <p className="text-sm font-semibold text-cyan-50">{label}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Voiceover anchor">
        <div className="card-base card-premium p-8">
          <p className="text-2xl font-semibold leading-9 text-white text-balance">
            “Corentis does not ask organisations to blindly trust AI. It gives them a checkpoint
            before AI acts.”
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Suggested CTA options: “Discuss a design partnership”, “Download the investor overview”,
            or “Request a pilot walkthrough”.
          </p>
        </div>
      </Section>
    </>
  );
}

function Storyboard({ rows }: { rows: string[][] }) {
  return (
    <div className="grid gap-4">
      {rows.map(([time, copy]) => (
        <div
          key={time}
          className="card-base card-info card-lift grid gap-3 p-5 sm:grid-cols-[8rem_1fr]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanx">{time}</p>
          <p className="text-sm leading-6 text-slate-200">{copy}</p>
        </div>
      ))}
    </div>
  );
}

function CardGrid({ items, tone }: { items: string[]; tone: "premium" | "info" | "warning" }) {
  const className =
    tone === "premium" ? "card-premium" : tone === "info" ? "card-info" : "card-warning";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className={`card-base ${className} card-lift p-5`}>
          <p className="text-sm leading-6 text-slate-200">{item}</p>
        </div>
      ))}
    </div>
  );
}
