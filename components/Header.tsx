"use client";
import React from "react";
import Link from "next/link";
import {Logo} from "./Logo";
import {usePathname} from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  {href: "/", label: "Home"},
  {href: "/product", label: "Product"},
  {href: "/how-it-works", label: "How it Works"},
  {href: "/research", label: "Research"},
  {href: "/team", label: "Team"},
  {href: "/contact", label: "Contact"}
];

export function Header(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50">
      <div className="container-2xl">
        <div className="mt-4 md:mt-6 rounded-2xl glass border-white/10">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <span className="font-semibold tracking-tight text-white">WeDesign<span className="text-white/60">+</span></span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map(item => (
                <Link key={item.href} href={item.href} className={cn(
                  "px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10",
                  pathname === item.href && "text-white bg-white/10"
                )}>{item.label}</Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">Request a demo</Link>
              <button className="md:hidden px-3 py-2 rounded-lg bg-white/10">☰</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
