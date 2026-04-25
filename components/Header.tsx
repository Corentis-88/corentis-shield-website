import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Corentis Shield", href: "/runtime-guard" },
  { label: "Assurance Lab", href: "/assurance-lab" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "Offerings", href: "/offerings" },
  { label: "Funding & Partners", href: "/funding" },
  { label: "Contact", href: "/contact" },
];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
            className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
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
        <Link href="/" className="flex items-center gap-3" aria-label="Corentis Technologies home">
          <Logo />
        </Link>
        <NavLinks className="hidden items-center gap-1 lg:flex" />
        <Link
          href="/contact"
          className="hidden rounded-md border border-cyanx/35 bg-cyanx/10 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyanx/[0.18] sm:inline-flex"
        >
          Book a conversation
        </Link>
      </nav>
      <NavLinks className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 pb-3 sm:px-8 lg:hidden" />
    </header>
  );
}
