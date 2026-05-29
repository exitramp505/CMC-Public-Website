export default function LogoMark({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  const textColor = inverse ? 'text-sand' : 'text-ink';
  const subColor = inverse ? 'text-sand/62' : 'text-slate/75';
  const stroke = inverse ? '#FBF0DE' : '#151616';
  const accent = '#EA9F43';
  return (
    <div className="flex items-center gap-3">
      <svg aria-hidden="true" viewBox="0 0 104 104" className={compact ? 'h-11 w-11' : 'h-12 w-12'}>
        <rect x="8" y="8" width="88" height="88" rx="18" fill="none" stroke={stroke} strokeWidth="5" />
        <rect x="16" y="16" width="72" height="72" rx="12" fill="none" stroke={accent} strokeWidth="2" opacity=".9" />
        <path d="M30 35h44" stroke={stroke} strokeWidth="3" strokeLinecap="round" opacity=".78" />
        <text x="52" y="62" textAnchor="middle" fontFamily="Montserrat, Arial, sans-serif" fontWeight="900" fontSize="25" fill={stroke} letterSpacing="1.5">CMC</text>
        <path d="M31 73c7-4 14-4 21 0 7-4 14-4 21 0" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      </svg>
      {!compact && (
        <div className="leading-none">
          <p className={`condensed-feel text-[16px] ${textColor}`}>Church Multiplication</p>
          <p className={`mt-1 text-[10px] font-bold uppercase tracking-[0.28em] ${subColor}`}>Collective</p>
        </div>
      )}
    </div>
  );
}
