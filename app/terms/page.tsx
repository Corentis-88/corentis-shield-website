import { Section } from "@/components/Section";
import companyDetails from "@/content/company-details.json";

export default function TermsPage() {
  return (
    <Section
      className="grid-bg pt-20"
      eyebrow="Terms"
      title="Website terms."
      intro="These are preliminary website terms for Corentis Technologies and should be reviewed before public launch."
    >
      <div className="card-base card-premium max-w-4xl p-7">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>
            This website is operated by {companyDetails.companyName}, a private limited company
            registered in England and Wales under company number {companyDetails.companyNumber}.
            Registered office: {companyDetails.registeredOfficeSingleLine}. Contact:{" "}
            {companyDetails.email}.
          </p>
          <p>
            The information on this website is provided for general business and product-positioning
            purposes. It does not constitute legal, regulatory, financial or technical assurance
            advice.
          </p>
          <p>
            References to Corentis Shield, Assurance Lab, evidence reports and related functionality
            describe the intended Corentis product direction and should be confirmed during any
            commercial, funding or pilot discussion.
          </p>
          <p>
            Before this website replaces the live site, these terms should be reviewed and expanded
            to cover ownership, acceptable use, liability, external links, jurisdiction and any
            operational terms required by Corentis Technologies.
          </p>
        </div>
      </div>
    </Section>
  );
}
