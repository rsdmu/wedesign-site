"use client";
import React from "react";

export default function VideoPlayer(){
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 glass">
      <video className="w-full h-auto" controls playsInline poster="/og.png">
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
