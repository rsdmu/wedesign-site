"use client";
import { motion } from "framer-motion";
import React from "react";

export function AnimatedGradient(){
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{opacity: 0.3, scale: 0.9, x: -100, y: -100}}
        animate={{opacity: 0.6, scale: 1, x: 0, y: 0}}
        transition={{duration: 3, ease: "easeOut"}}
        className="pointer-events-none blur-3xl"
      >
        <div className="h-[60vh] w-[80vw] md:w-[60vw] rounded-full from-brand-400 via-violet-500 to-emerald-400 bg-gradient-to-tr opacity-20" />
      </motion.div>
    </div>
  );
}
