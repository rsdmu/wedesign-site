import Link from "next/link";
import { DOMAIN } from "@/lib/utils";

export function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-2xl py-10 grid md:grid-cols-3 gap-8 text-sm text-white/70">
        <div>
          <div className="font-semibold text-white">WeDesign<span className="text-white/50">+</span></div>
          <p className="mt-2 max-w-sm">Participatory AI to design inclusive, welcoming, and accessible public spaces.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-white/80 font-medium">Company</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/product" className="hover:text-white">Product</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white">How it Works</Link></li>
              <li><Link href="/research" className="hover:text-white">Research</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white/80 font-medium">Connect</div>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:hello@wedesign.one" className="hover:text-white">hello@{DOMAIN}</a></li>
              <li><Link href="/contact" className="hover:text-white">Request a demo</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-white/60">
          <p>&copy; {new Date().getFullYear()} WeDesign+. All rights reserved.</p>
          <p className="mt-1">Montreal, Canada</p>
        </div>
      </div>
    </footer>
  )
}
