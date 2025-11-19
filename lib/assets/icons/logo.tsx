import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="coinGradient"
          x1="256"
          y1="100"
          x2="256"
          y2="460"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient
          id="goldGradient"
          x1="150"
          y1="150"
          x2="362"
          y2="362"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <circle
        cx="256"
        cy="280"
        r="180"
        fill="url(#coinGradient)"
        stroke="#D97706"
        strokeWidth="8"
      />

      <circle
        cx="256"
        cy="280"
        r="160"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        opacity="0.3"
      />

      <path
        d="M256 190V170 M256 390V370"
        stroke="url(#goldGradient)"
        strokeWidth="24"
        strokeLinecap="round"
      />
      <text
        x="256"
        y="375"
        fontFamily="Arial, sans-serif"
        fontSize="220"
        fontWeight="bold"
        fill="url(#goldGradient)"
        textAnchor="middle"
      >
        $
      </text>

      <g transform="translate(156, 60) scale(0.8)">
        <path d="M125 0L250 62.5L125 125L0 62.5L125 0Z" fill="#38BDF8" />

        <path
          d="M250 62.5V130C250 150 200 165 125 165C50 165 0 150 0 130V62.5"
          fill="none"
        />
        <path
          d="M200 88V125C200 145 166.5 160 125 160C83.5 160 50 145 50 125V88"
          fill="#0EA5E9"
        />

        <circle cx="125" cy="62.5" r="8" fill="#FCD34D" />
        <path
          d="M125 62.5L210 110V160"
          stroke="#FCD34D"
          strokeWidth="6"
          fill="none"
        />
        <circle cx="210" cy="165" r="8" fill="#FCD34D" />
      </g>

      <path
        d="M330 330L390 270M390 270H340M390 270V320"
        stroke="#10B981"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
