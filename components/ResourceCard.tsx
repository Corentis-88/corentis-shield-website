import { ButtonLink } from "@/components/ButtonLink";

type ResourceCardProps = {
  title: string;
  audience: string;
  description: string;
  status: "Available" | "Coming soon";
  href?: string;
  evidenceHook?: string;
};

export function ResourceCard({
  title,
  audience,
  description,
  status,
  href,
  evidenceHook,
}: ResourceCardProps) {
  const isAvailable = status === "Available" && href;

  return (
    <div className="card-base card-premium card-lift flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-50">
          {audience}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{description}</p>
      {evidenceHook && (
        <p className="mt-4 rounded-lg border border-cyanx/15 bg-cyanx/[0.06] p-3 text-xs leading-5 text-cyan-50">
          {evidenceHook}
        </p>
      )}
      <div className="mt-6">
        {isAvailable ? (
          <ButtonLink href={href}>Download PDF</ButtonLink>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-slate-600/60 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-500"
          >
            Coming soon
          </button>
        )}
      </div>
    </div>
  );
}
