import { ButtonLink } from "@/components/ButtonLink";

type CTABannerProps = {
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTABanner({
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <div className="card-base card-premium overflow-hidden p-8 shadow-glow sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white text-balance">{title}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryHref && (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
