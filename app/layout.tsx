import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.bodyburdenlab.com"),
  alternates: {
    canonical: "https://www.bodyburdenlab.com",
  },
  openGraph: {
    siteName: "Body Burden Lab",
    type: "website",
    title: "Body Burden — Microplastics Exposure Calculator",
    description:
      "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Body+Burden+%E2%80%94+Microplastics+Exposure+Calculator&tag=Tool",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Burden — Microplastics Exposure Calculator",
    description:
      "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Body+Burden+%E2%80%94+Microplastics+Exposure+Calculator&tag=Tool",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PB7R3G61HJ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PB7R3G61HJ');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
