import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Privacy"
      title="Privacy information."
      intro="This is preliminary website privacy information for Corentis Technologies and should be reviewed before public launch."
    >
      <div className="card-base card-premium max-w-4xl p-7">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>
            This website currently collects only the information a visitor chooses to provide
            through the contact form or email link. The contact form opens an email draft and is not
            connected to a production mail backend at this stage.
          </p>
          <p>
            Information shared with Corentis may be used to respond to enquiries about AI assurance
            reviews, design partnerships, funding conversations or general business contact.
          </p>
          <p>
            Before this website replaces the live site, this page should be reviewed and expanded to
            reflect the final analytics, hosting, form-processing, retention and data-subject
            request processes used by Corentis Technologies.
          </p>
        </div>
      </div>
    </Section>
  );
}
