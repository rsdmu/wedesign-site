import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, DOMAIN, TAGLINE } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: SITE_NAME + " — " + TAGLINE,
  description: "WeDesign+ is a participatory AI platform that helps cities co-create inclusive public spaces that reflect diverse community needs.",
  metadataBase: new URL("https://" + DOMAIN),
  openGraph: {
    title: SITE_NAME,
    description: TAGLINE,
    url: "https://" + DOMAIN,
    siteName: SITE_NAME,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: TAGLINE,
    images: ["/og.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
