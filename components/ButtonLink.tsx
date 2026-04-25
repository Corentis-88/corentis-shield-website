import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-cyanx text-ink shadow-[0_12px_34px_rgba(48,213,255,0.18)] hover:bg-cyan-200"
      : "border border-slate-600/60 bg-white/5 text-white hover:border-cyanx/60 hover:bg-cyanx/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles}`}
    >
      {children}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}
