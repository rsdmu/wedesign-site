import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/40">
      <div className="container-prose py-10 text-sm text-muted">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <p>© {new Date().getFullYear()} WeDesign+. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-ink" href="/open-source">Open Source</Link>
            <Link className="hover:text-ink" href="/privacy">Privacy</Link>
            <a className="hover:text-ink" href="mailto:hello@wedesign.one">hello@wedesign.one</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
