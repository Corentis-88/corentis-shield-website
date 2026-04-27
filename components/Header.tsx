import Image from "next/image";
import Link from "next/link";

const contactLinkClassName = [
  "hidden rounded-md border border-cyanx/35 bg-cyanx/10 px-4 py-2",
  "text-sm font-semibold text-cyan-50 transition hover:bg-cyanx/[0.18]",
  "sm:inline-flex",
].join(" ");

const navItems = [
  { label: "Home", href: "/" },
  { label: "Why Corentis", href: "/why-corentis" },
  { label: "Corentis Shield", href: "/runtime-guard" },
  { label: "Assurance Lab", href: "/assurance-lab" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "Products", href: "/offerings" },
  { label: "Partners & Funders", href: "/funding" },
  { label: "Contact", href: "/contact" },
];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="inline-flex min-h-14 w-24 items-center justify-start rounded-md px-3 py-2 text-left text-sm text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Corentis home">
          <Image
            src="/images/corentis/corentis-logo-v1-header.png"
            alt="Corentis"
            width={206}
            height={60}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <NavLinks className="hidden items-stretch gap-1 xl:flex" />
        <Link href="/contact" className={contactLinkClassName}>
          Book a conversation
        </Link>
      </nav>
      <NavLinks className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 pb-3 sm:px-8 xl:hidden" />
    </header>
  );
}
