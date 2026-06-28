type WhyChooseIconProps = {
  id: string;
};

export default function WhyChooseIcon({ id }: WhyChooseIconProps) {
  const stroke = '#14b8a6';
  const strokeWidth = 1.5;

  switch (id) {
    case 'ai':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <path d="M18 48 L18 36 L30 30 L30 42 Z" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M50 48 L50 32 L62 26 L62 42 Z" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="40" cy="18" r="8" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M32 26 L40 26 M40 26 L48 26 M40 26 L40 34" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M30 42 L50 32" stroke={stroke} strokeWidth={strokeWidth} strokeDasharray="3 3" />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <path d="M16 44 L24 36 L40 36 L48 28 L64 28 L64 44 Z" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M24 36 L24 48 L56 48 L56 36" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M32 48 L32 52 M40 48 L40 52 M48 48 L48 52" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="48" cy="22" r="4" stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'security':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <path d="M40 14 L58 22 L58 38 C58 48 40 54 40 54 C40 54 22 48 22 38 L22 22 Z" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M34 38 L38 42 L46 32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 50 L24 50 L28 54 L36 54" stroke={stroke} strokeWidth={strokeWidth} opacity="0.5" />
        </svg>
      );
    case 'agile':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <rect x="18" y="28" width="44" height="26" rx="2" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M18 34 L62 34" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="28" cy="42" r="4" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="40" cy="42" r="4" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="52" cy="42" r="4" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M40 18 L40 28 M36 22 L40 18 L44 22" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );
    case 'scale':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <path d="M20 48 L20 40 L28 40 L28 32 L36 32 L36 24 L44 24 L44 16 L52 16" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
          <path d="M52 16 L60 10" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <path d="M56 8 L60 10 L58 14" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="18" y="50" width="44" height="4" rx="1" stroke={stroke} strokeWidth={strokeWidth} opacity="0.5" />
        </svg>
      );
    case 'partnership':
      return (
        <svg viewBox="0 0 80 64" fill="none" aria-hidden>
          <circle cx="28" cy="24" r="8" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="52" cy="24" r="8" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M20 48 C20 38 24 34 28 34 C32 34 36 38 40 42 C44 38 48 34 52 34 C56 34 60 38 60 48" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M40 42 L40 50" stroke={stroke} strokeWidth={strokeWidth} />
          <path d="M32 50 L48 50" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
