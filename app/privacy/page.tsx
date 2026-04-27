import { Section } from "@/components/Section";

const privacyItems = [
  {
    title: "What data is collected",
    text: "If you use the contact form, Corentis collects the details you choose to submit, such as your name, email address, organisation, enquiry type, message and consent choice.",
  },
  {
    title: "Formspree contact form",
    text: "The contact form is processed through Formspree. Form submissions are used so Corentis can receive and respond to website enquiries, design-partner conversations and funding or investor conversations.",
  },
  {
    title: "Cloudflare Pages hosting",
    text: "The website is intended to be hosted on Cloudflare Pages as a static site. Cloudflare may process technical information required to deliver, secure and operate the website.",
  },
  {
    title: "Purpose of processing",
    text: "Information is used to respond to enquiries, understand potential pilot or partnership opportunities, and maintain appropriate records of business conversations.",
  },
  {
    title: "Retention placeholder",
    text: "Enquiry records should be kept only for as long as needed for the relevant business purpose, legal requirement or follow-up conversation. A final retention schedule should be confirmed before public launch.",
  },
  {
    title: "Cookies and analytics status",
    text: "The site currently uses essential local storage to remember cookie choices. No analytics or marketing cookies are currently active. If analytics or advertising tools are added later, they should be controlled by consent.",
  },
];

export default function PrivacyPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Privacy"
      title="Privacy information."
      intro="How Corentis Technologies handles information submitted through this website."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {privacyItems.map((item) => (
          <div key={item.title} className="card-base card-premium card-lift p-6">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="card-base card-info mt-8 max-w-4xl p-7">
        <h2 className="text-2xl font-semibold text-white">Rights and contact route</h2>
        <p className="mt-3 text-base leading-8 text-cyan-50">
          People who contact Corentis can ask about the personal information held about them,
          request correction or deletion where appropriate, or raise a privacy question through the
          contact form.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          This page should still be legally reviewed before replacing the live public website,
          especially once final analytics, retention and operational processes are confirmed.
        </p>
      </div>
    </Section>
  );
}
