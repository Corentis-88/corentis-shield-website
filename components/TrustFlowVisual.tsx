import { BadgeCheck, FileText, UserRoundCheck } from "lucide-react";

export function TrustFlowVisual() {
  return (
    <div className="card-base card-premium relative overflow-hidden p-6 shadow-card">
      <div className="absolute inset-x-8 top-16 h-px bg-gradient-to-r from-transparent via-cyanx/40 to-transparent" />
      <div className="relative grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: UserRoundCheck,
            label: "People",
            text: "Teams keep oversight of sensitive AI decisions.",
          },
          {
            icon: BadgeCheck,
            label: "Controls",
            text: "Configured rules guide what can happen next.",
          },
          {
            icon: FileText,
            label: "Evidence",
            text: "Decisions are captured for review and learning.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="card-base card-info card-lift p-5 backdrop-blur"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyanx/25 bg-cyanx/10 text-cyanx">
                <Icon aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
