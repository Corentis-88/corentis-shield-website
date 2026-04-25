import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";

type OfferingCardProps = {
  name: string;
  title: string;
  forText: string;
  includes: string[];
  positioning: string;
};

export function OfferingCard({ name, title, forText, includes, positioning }: OfferingCardProps) {
  return (
    <div className="card-base card-premium card-lift flex h-full flex-col p-6">
      <Badge tone={name === "Enterprise" ? "cyan" : "neutral"}>{name}</Badge>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        <span className="font-semibold text-slate-100">For: </span>
        {forText}
      </p>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyanx" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-white/10 pt-5 text-base font-semibold leading-7 text-white">
        {positioning}
      </p>
      <div className="mt-auto pt-6">
        <ButtonLink href="/contact" variant="secondary">
          Talk to Corentis
        </ButtonLink>
      </div>
    </div>
  );
}
