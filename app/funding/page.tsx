import { ButtonLink } from "@/components/ButtonLink";
import { CTABanner } from "@/components/CTABanner";
import { PhotoPanel } from "@/components/PhotoPanel";
import { Section } from "@/components/Section";

const builtItems = [
  "Corentis Shield website",
  "Shield product prototype",
  "deterministic decision engine",
  "regulated scenario library",
  "evidence vault",
  "review queue",
  "agent API concept",
  "pilot report",
  "design partner pack",
];

const nextPhase = [
  "design partner pilot",
  "scenario library expansion",
  "policy-to-control engine",
  "output evaluation benchmark",
  "API/private gateway hardening",
  "evidence report exports",
  "security/privacy review",
];

const valueCards = [
  {
    title: "Practical AI assurance",
    description:
      "Corentis Shield gives teams a way to check AI outputs before action, route human review and record evidence. It turns AI risk into something visible, testable and reviewable.",
    className: "card-info",
  },
  {
    title: "Pilot-ready evidence",
    description:
      "Start with one sensitive workflow. Test draft replies, proposed actions and case updates before live use. Produce evidence that teams, partners and decision-makers can review.",
    className: "card-premium",
  },
  {
    title: "A reusable scenario library",
    description:
      "Each pilot can strengthen a growing library of regulated scenarios, expected decisions, risk labels and evidence requirements. Over time, that becomes a stronger way to test AI outputs across sectors.",
    className: "card-premium",
  },
  {
    title: "Output evaluation at scale",
    description:
      "Corentis can compare AI outputs across models, workflows and scenario packs to understand where agents fail, where review is needed and where controls should sit.",
    className: "card-info",
  },
  {
    title: "A commercial deployment path",
    description:
      "Corentis can start with focused reviews, grow through design-partner pilots, and scale through recurring software, API usage, private gateways and sector-specific assurance packs.",
    className: "card-success",
  },
];

const designPartners = [
  "fintechs preparing AI workflow pilots",
  "financial-services customer operations teams",
  "complaints teams",
  "AI vendors serving regulated firms",
  "compliance and conduct-risk teams",
  "outsourced customer-service providers",
];

const audiences = [
  {
    title: "Assurance and responsible AI teams",
    description: "A way to test and evidence AI outputs before deployment.",
  },
  {
    title: "Regulated-sector design partners",
    description: "A low-risk pilot path using one sensitive workflow.",
  },
  {
    title: "Innovation and growth investors",
    description: "A route from review to pilot to recurring software deployment.",
  },
  {
    title: "AI infrastructure partners",
    description:
      "A checkpoint layer that can connect through API, SDK, webhook or private gateway.",
  },
  {
    title: "Public-sector and research collaborators",
    description: "A method for building reusable scenario packs and evaluation reports.",
  },
];

export default function FundingPage() {
  return (
    <>
      <Section
        className="grid-bg pt-20"
        eyebrow="Partners and funding"
        title="Corentis is building practical AI assurance infrastructure for the next phase of AI adoption."
        intro="As AI agents move from chat to action, regulated workflows need a checkpoint before outputs reach customers, teams or live systems."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/why-corentis">Why Corentis?</ButtonLink>
          <ButtonLink href="/contact#design-partner" variant="secondary">
            Discuss a design partnership
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="What we are building"
        intro="Corentis Shield is an AI checkpoint for regulated workflows. It checks outputs before action, routes human review and records evidence."
      >
        <div className="card-base card-premium p-7">
          <p className="max-w-4xl text-lg leading-8 text-slate-300">
            The product path is deliberately practical: start with one workflow, test the outputs,
            find the review points, then move toward a deployable checkpoint through API, SDK,
            webhook or private gateway options.
          </p>
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="What has already been built">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {builtItems.map((item) => (
            <div key={item} className="card-base card-success card-lift p-5 text-teal-50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="What the next phase needs">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {nextPhase.map((item) => (
              <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
                {item}
              </div>
            ))}
          </div>
          <PhotoPanel
            src="/images/stock/team-reviewing-laptop-meeting.jpg"
            alt="Team of professionals reviewing a laptop during a business meeting."
            label="Pilot path"
            caption="Funding and design partnerships turn the checkpoint into deployable assurance infrastructure."
            objectPosition="center 44%"
          />
        </div>
      </Section>

      <Section
        className="bg-white/[0.02]"
        title="Where Corentis creates value"
        intro="Corentis starts with a simple checkpoint before AI action. The same approach can support pilots, evidence reports, reusable scenario libraries and live deployment."
      >
        <div className="grid gap-5 lg:grid-cols-5">
          {valueCards.map((item) => (
            <div key={item.title} className={`card-base ${item.className} card-lift p-5`}>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="card-base card-premium mt-8 p-6">
          <h3 className="text-xl font-semibold text-white">Why this matters</h3>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">
            AI adoption will not be limited by model capability alone. It will also depend on
            whether organisations can prove that AI outputs were checked, reviewed and evidenced
            before they reached the real world.
          </p>
        </div>
      </Section>

      <Section title="Design partner profile">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designPartners.map((item) => (
            <div key={item} className="card-base card-premium card-lift p-5 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]" title="Who this speaks to">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item) => (
            <div key={item.title} className="card-base card-info card-lift p-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Partner brief">
        <div className="card-base card-info p-7">
          <h2 className="text-2xl font-semibold text-white">Request the Corentis partner brief</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-cyan-50">
            A concise overview of the Corentis Shield opportunity, technical approach, pilot roadmap
            and strategic asset pathway.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact#investor" variant="secondary">
              Request partner brief
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <CTABanner
          title="Support the checkpoint layer for AI agents."
          primaryLabel="Discuss a design partnership"
          primaryHref="/design-partners"
          secondaryLabel="Book a conversation"
          secondaryHref="/contact#investor"
        />
      </Section>
    </>
  );
}
