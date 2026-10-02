import React from 'react';

interface LegalCrestProps {
  className?: string;
  size?: number;
}

export const LegalCrest: React.FC<LegalCrestProps> = ({ className = 'w-10 h-10', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sovereign Law Chambers Crest"
    >
      {/* Outer shield frame */}
      <path
        d="M50 8L82 22V52C82 72 68 88 50 94C32 88 18 72 18 52V22L50 8Z"
        className="stroke-amber-700/80 dark:stroke-amber-400/80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner fine hairline shield */}
      <path
        d="M50 14L76 26V50C76 67 65 80 50 86C35 80 24 67 24 50V26L50 14Z"
        className="stroke-amber-700/30 dark:stroke-amber-400/30"
        strokeWidth="1"
      />
      {/* Scales of Justice Central Column */}
      <line
        x1="50"
        y1="24"
        x2="50"
        y2="72"
        className="stroke-amber-800 dark:stroke-amber-300"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Base of column */}
      <path
        d="M40 72H60"
        className="stroke-amber-800 dark:stroke-amber-300"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Top finial ornament */}
      <circle
        cx="50"
        cy="24"
        r="3"
        className="fill-amber-800 dark:fill-amber-300"
      />
      {/* Crossbar */}
      <line
        x1="32"
        y1="34"
        x2="68"
        y2="34"
        className="stroke-amber-800 dark:stroke-amber-300"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left scale strings */}
      <line x1="32" y1="34" x2="26" y2="48" className="stroke-amber-700/70 dark:stroke-amber-300/70" strokeWidth="1" />
      <line x1="32" y1="34" x2="38" y2="48" className="stroke-amber-700/70 dark:stroke-amber-300/70" strokeWidth="1" />
      {/* Left pan */}
      <path
        d="M24 48C24 52 30 55 32 55C34 55 40 52 40 48H24Z"
        className="stroke-amber-800 dark:stroke-amber-300 fill-amber-700/10 dark:fill-amber-400/10"
        strokeWidth="1.5"
      />
      {/* Right scale strings */}
      <line x1="68" y1="34" x2="62" y2="48" className="stroke-amber-700/70 dark:stroke-amber-300/70" strokeWidth="1" />
      <line x1="68" y1="34" x2="74" y2="48" className="stroke-amber-700/70 dark:stroke-amber-300/70" strokeWidth="1" />
      {/* Right pan */}
      <path
        d="M60 48C60 52 66 55 68 55C70 55 76 52 76 48H60Z"
        className="stroke-amber-800 dark:stroke-amber-300 fill-amber-700/10 dark:fill-amber-400/10"
        strokeWidth="1.5"
      />
      {/* Four Law stars / dots symbolizing Lex, Veritas, Justitia, Fides */}
      <circle cx="50" cy="19" r="1.5" className="fill-amber-700 dark:fill-amber-400" />
      <circle cx="50" cy="80" r="1.5" className="fill-amber-700 dark:fill-amber-400" />
    </svg>
  );
};
