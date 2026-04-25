type LogoProps = {
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ showWordmark = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        className="h-10 w-10 flex-none"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="url(#corentisMarkBg)"
        />
        <path
          d="M15 24C15 18.48 19.48 14 25 14H34"
          stroke="#D9FBFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M33 24C33 29.52 28.52 34 23 34H14"
          stroke="#58DDF4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="15" cy="24" r="4" fill="#F6D28B" />
        <circle cx="34" cy="14" r="3" fill="#58DDF4" />
        <circle cx="14" cy="34" r="3" fill="#D9FBFF" />
        <defs>
          <linearGradient
            id="corentisMarkBg"
            x1="7"
            y1="5"
            x2="42"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10243A" />
            <stop offset="0.52" stopColor="#0A1729" />
            <stop offset="1" stopColor="#0F2D33" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark && (
        <span className="text-sm font-semibold tracking-wide text-white">
          Corentis Technologies
        </span>
      )}
    </div>
  );
}
