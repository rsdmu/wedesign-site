import React from "react";

export function Logo({className}:{className?:string}){
  return (
    <div className={className}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="26" height="26" rx="6" className="stroke-white/40" strokeWidth="2" fill="url(#g)"/>
        <defs>
          <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 4) rotate(45) scale(24 24)">
            <stop stopColor="#60A5FA" stopOpacity="0.6"/>
            <stop offset="1" stopColor="transparent"/>
          </radialGradient>
        </defs>
        <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  )
}
