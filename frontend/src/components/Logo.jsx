export default function Logo({ size = 40, showText = true }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logoGrad)" />
        <rect x="2" y="2" width="60" height="60" rx="16" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M22 20 L12 32 L22 44" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M42 20 L52 32 L42 44" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M35 16 L29 48" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
      {showText && (
        <span className="font-display font-bold text-lg sm:text-xl whitespace-nowrap">
          <span className="text-brand-primary">DEV</span>{" "}
          <span className="text-brand-text">.</span>
        </span>
      )}
    </div>
  );
}
