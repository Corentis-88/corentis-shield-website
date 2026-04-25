type BadgeProps = {
  children: React.ReactNode;
  tone?: "cyan" | "blue" | "neutral" | "danger";
};

const tones = {
  cyan: "border-cyanx/35 bg-cyanx/12 text-cyan-100 shadow-[0_0_24px_rgba(48,213,255,0.12)]",
  blue: "border-bluex/30 bg-bluex/10 text-blue-100",
  neutral: "border-slate-600/40 bg-white/5 text-slate-200",
  danger:
    "border-red-400/35 bg-red-500/12 text-red-100 shadow-[0_0_24px_rgba(248,113,113,0.12)]",
};

export function Badge({ children, tone = "cyan" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
