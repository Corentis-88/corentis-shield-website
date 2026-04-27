import { Section } from "@/components/Section";

const cookieTypes = [
  {
    title: "Essential storage",
    text: "Used to remember your cookie choice and keep the static website working. This is treated as essential.",
  },
  {
    title: "Contact form processing",
    text: "The contact form is submitted to Formspree when you choose to send a message. This is not used for advertising cookies.",
  },
  {
    title: "Analytics",
    text: "No analytics cookies are currently active on this website. If analytics are added later, they should only run after consent.",
  },
  {
    title: "Marketing",
    text: "No marketing or advertising cookies are currently active on this website. If added later, they should only run after consent.",
  },
];

export default function CookiesPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Cookies"
      title="Cookie information."
      intro="This page explains the current cookie and storage position for the Corentis Shield website."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {cookieTypes.map((item) => (
          <div key={item.title} className="card-base card-premium card-lift p-6">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="card-base card-info mt-8 max-w-4xl p-7">
        <h2 className="text-2xl font-semibold text-white">Your choices</h2>
        <p className="mt-3 text-base leading-8 text-cyan-50">
          The banner lets you accept all, reject non-essential storage, choose essential only, or
          view the current choices. At present, accepting all does not activate analytics or
          marketing cookies because none are installed.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          To change your choice, clear this site&apos;s local storage in your browser and reload the
          page. A future version may add a permanent preferences link.
        </p>
      </div>
    </Section>
  );
}
