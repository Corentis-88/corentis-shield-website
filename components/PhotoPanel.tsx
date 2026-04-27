import Image from "next/image";

type PhotoPanelProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  className?: string;
  aspect?: "wide" | "square" | "portrait";
  priority?: boolean;
  objectPosition?: string;
};

const aspectClasses = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export function PhotoPanel({
  src,
  alt,
  label,
  caption,
  className = "",
  aspect = "wide",
  priority = false,
  objectPosition = "center",
}: PhotoPanelProps) {
  return (
    <figure className={`card-base card-premium overflow-hidden p-2 shadow-card ${className}`}>
      <div className={`relative overflow-hidden rounded-xl ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/35 to-cyanx/10" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          {label && (
            <span className="inline-flex rounded-full border border-cyanx/35 bg-ink/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-50 backdrop-blur">
              {label}
            </span>
          )}
          {caption && (
            <figcaption className="mt-3 max-w-xl text-sm font-medium leading-6 text-white">
              {caption}
            </figcaption>
          )}
        </div>
      </div>
    </figure>
  );
}
