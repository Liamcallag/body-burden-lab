import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Body Burden — Microplastics Exposure Calculator",
    template: "%s | Body Burden",
  },
  description:
    "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
  keywords: [
    "microplastics calculator",
    "microplastic exposure",
    "how many microplastics do I consume",
    "body burden",
    "microplastics test online",
  ],
  openGraph: {
    siteName: "Body Burden",
    type: "website",
    images: [
      {
        url: "https://bodyburdenlab.com/api/og?title=Body+Burden+%E2%80%94+Microplastics+Exposure+Calculator&tag=Tool",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
