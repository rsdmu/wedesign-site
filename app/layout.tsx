import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wedesign.one"),
  title: "WeDesign+ — Participatory AI for Inclusive Public Spaces",
  description: "Research‑backed platform that turns community ideas into instant visual scenarios for equitable urban design.",
  openGraph: {
    title: "WeDesign+",
    description: "Participatory AI for inclusive public space design.",
    images: ["/og.png"],
    url: "https://wedesign.one",
    siteName: "WeDesign+",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeDesign+",
    description: "Participatory AI for inclusive public space design.",
    images: ["/og.png"],
  },
  alternates: { canonical: "https://wedesign.one" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pb-24 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
