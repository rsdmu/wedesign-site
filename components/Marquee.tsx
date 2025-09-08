"use client";
import React from "react";
import { ORGS } from "@/lib/utils";
import { motion, useAnimationFrame } from "framer-motion";

export default function Marquee(){
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap py-3">
        {Array.from({length: 3}).map((_, idx) => (
          <div key={idx} className="flex gap-6">
            {ORGS.map((o,i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80">{o}</span>
            ))}
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
