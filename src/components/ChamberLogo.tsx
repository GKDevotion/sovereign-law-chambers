import React from 'react';

interface ChamberLogoProps {
  className?: string;
  size?: number;
  variant?: 'mark' | 'monogram';
}

export const ChamberLogo: React.FC<ChamberLogoProps> = ({
  className = '',
  size = 40,
  variant = 'mark',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* High-end vector legal insignia mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="SLC Legal Insignia"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Octagonal / Shield Seal Border */}
        <polygon
          points="24,2 40,8 46,24 40,40 24,46 8,40 2,24 8,8"
          className="stroke-amber-700/80 dark:stroke-amber-400"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Inner Guilloché Hairline Rim */}
        <polygon
          points="24,5 37,10 42,24 37,38 24,43 11,38 6,24 11,10"
          className="stroke-amber-700/30 dark:stroke-amber-400/30"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Central Scales of Justice Pillar */}
        <line
          x1="24"
          y1="12"
          x2="24"
          y2="36"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Finial Orb */}
        <circle cx="24" cy="11" r="1.75" fill="url(#goldGrad)" />

        {/* Horizontal Beam */}
        <line
          x1="14"
          y1="17"
          x2="34"
          y2="17"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Left Scale Suspension & Pan */}
        <line x1="14" y1="17" x2="11" y2="25" className="stroke-amber-700/70 dark:stroke-amber-300/80" strokeWidth="0.8" />
        <line x1="14" y1="17" x2="17" y2="25" className="stroke-amber-700/70 dark:stroke-amber-300/80" strokeWidth="0.8" />
        <path
          d="M10 25C10 27.5 13.5 29 14 29C14.5 29 18 27.5 18 25H10Z"
          fill="url(#goldGrad)"
          fillOpacity="0.3"
          className="stroke-amber-700 dark:stroke-amber-300"
          strokeWidth="1"
        />

        {/* Right Scale Suspension & Pan */}
        <line x1="34" y1="17" x2="31" y2="25" className="stroke-amber-700/70 dark:stroke-amber-300/80" strokeWidth="0.8" />
        <line x1="34" y1="17" x2="37" y2="25" className="stroke-amber-700/70 dark:stroke-amber-300/80" strokeWidth="0.8" />
        <path
          d="M30 25C30 27.5 33.5 29 34 29C34.5 29 38 27.5 38 25H30Z"
          fill="url(#goldGrad)"
          fillOpacity="0.3"
          className="stroke-amber-700 dark:stroke-amber-300"
          strokeWidth="1"
        />

        {/* Base Pedestal */}
        <path
          d="M18 36H30"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Corner Four Judicial Dots */}
        <circle cx="24" cy="7" r="1" className="fill-amber-700 dark:fill-amber-400" />
        <circle cx="24" cy="41" r="1" className="fill-amber-700 dark:fill-amber-400" />
      </svg>

      {/* Pure Logo Monogram / Mark - No long full name as requested */}
      {variant === 'monogram' && (
        <div className="flex flex-col justify-center">
          <span className="font-serif font-black text-xl tracking-[0.2em] text-slate-950 dark:text-slate-100 uppercase leading-none">
            SLC
          </span>
          <span className="text-[9px] font-medium tracking-[0.25em] text-amber-800 dark:text-amber-400 uppercase pt-0.5">
            Chambers
          </span>
        </div>
      )}
    </div>
  );
};
