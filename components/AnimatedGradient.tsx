"use client";
import React from "react";

// Replaces the previous framer-motion animation with a CSS keyframe-based
// animation so that we no longer depend on the framer-motion library.
export function AnimatedGradient(){
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="pointer-events-none blur-3xl animate-gradient">
        <div className="h-[60vh] w-[80vw] md:w-[60vw] rounded-full from-brand-400 via-violet-500 to-emerald-400 bg-gradient-to-tr opacity-20" />
      </div>
      <style jsx>{`
        @keyframes gradientFade {
          from { opacity: 0.3; transform: scale(0.9) translate(-100px, -100px); }
          to { opacity: 0.6; transform: scale(1) translate(0, 0); }
        }
        .animate-gradient {
          animation: gradientFade 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
