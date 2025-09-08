import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function FeatureCard({title, children, className}:{title:string; children:React.ReactNode; className?:string}){
  return (
    <div className={cn("card", className)}>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 text-white/80 text-sm leading-6">{children}</div>
    </div>
  );
}
