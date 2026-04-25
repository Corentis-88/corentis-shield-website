import { Badge } from "@/components/Badge";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl lg:mb-12">
            {eyebrow && <Badge tone="neutral">{eyebrow}</Badge>}
            {title && (
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-lg leading-8 text-slate-300">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
