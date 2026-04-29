import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Shield Products", href: "/offerings" },
  { label: "Why Corentis", href: "/why-corentis" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
  { label: "Design Partners", href: "/design-partners" },
  { label: "Investors", href: "/investors" },
  { label: "Assurance", href: "/assurance" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Founder", href: "/founder" },
  { label: "Corentis Shield", href: "/runtime-guard" },
  { label: "Assurance Lab", href: "/assurance-lab" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "Partner funding legacy", href: "/funding" },
  { label: "Contact", href: "/contact" },
  { label: "Cookies", href: "/cookies" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <Image
            src="/images/corentis/corentis-logo-v1-header.png"
            alt="Corentis"
            width={154}
            height={45}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Corentis Shield is an AI checkpoint for regulated workflows.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
