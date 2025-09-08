"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#research", label: "Research" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "/open-source", label: "Open Source" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={clsx("fixed inset-x-0 top-0 z-50 transition", scrolled && "bg-[rgba(246,243,237,0.7)] backdrop-blur border-b border-black/5")}>
      <div className="container-prose flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="WeDesign+" width={40} height={40} priority />
          <span className="font-medium tracking-tight">WeDesign+</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted hover:text-ink transition">{n.label}</Link>
          ))}
          <Link href="#cta" className="btn-primary">Join the Beta</Link>
        </nav>
      </div>
    </header>
  );
}
