import React from "react";
import Link from "next/link";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "ghost";
};

export function Button({href, className, children, variant="primary", ...props}: Props){
  const base = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition shadow-sm";
  const primary = "bg-white text-black hover:bg-white/90";
  const ghost = "bg-white/10 text-white hover:bg-white/20";
  if (href){
    return <Link href={href} className={[base, variant==="primary" ? primary : ghost, className].filter(Boolean).join(" ")}>{children}</Link>
  }
  return <button className={[base, variant==="primary" ? primary : ghost, className].filter(Boolean).join(" ")} {...props}>{children}</button>
}
