type LogoMarkProps = {
  compact?: boolean;
  inverse?: boolean;
  className?: string;
};

export default function LogoMark({ inverse = false, className = '' }: LogoMarkProps) {
  const background = inverse ? '#293D48' : '#FBF0DE';
  const primary = inverse ? '#FBF0DE' : '#293D48';
  const accent = '#EA9F43';

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      aria-label="Church Multiplication Collective"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-11 w-11 shrink-0"
        role="img"
      >
        <rect width="512" height="512" rx="96" fill={background} />
        <rect
          x="64"
          y="64"
          width="384"
          height="384"
          rx="64"
          stroke={primary}
          strokeWidth="28"
        />
        <line
          x1="174"
          y1="174"
          x2="338"
          y2="338"
          stroke={primary}
          strokeWidth="52"
          strokeLinecap="round"
        />
        <line
          x1="338"
          y1="174"
          x2="174"
          y2="338"
          stroke={primary}
          strokeWidth="52"
          strokeLinecap="round"
        />
        <rect x="239" y="111" width="34" height="34" transform="rotate(45 256 128)" fill={accent} />
        <rect x="239" y="367" width="34" height="34" transform="rotate(45 256 384)" fill={accent} />
        <rect x="111" y="239" width="34" height="34" transform="rotate(45 128 256)" fill={accent} />
        <rect x="367" y="239" width="34" height="34" transform="rotate(45 384 256)" fill={accent} />
      </svg>
    </div>
  );
}
