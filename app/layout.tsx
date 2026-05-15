import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono, Geist } from "next/font/google";
import { Toaster } from "sonner";
import PageLoader from "@/components/layout/page-loader";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.knklabs.co.uk"),
  title: {
    default: "KNK Labs — Innovation at Your Fingertips",
    template: "%s | KNK Labs",
  },
  description:
    "KNK Labs builds advanced wearable technology engineered to enhance performance, elevate safety, and redefine human–machine interaction. Makers of Tek Glove and Echo Glove.",
  applicationName: "KNK Labs",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Echo Glove",
    "KNK Labs",
    "KNK",
    "King Krown Labs",
    "Tek Glove",
    "TekGlove",
    "therapy glove",
    "EMS glove",
    "TENS glove",
    "Smart Watch glove",
    "wearable therapy",
    "arthritis glove",
    "recovery glove",
    "Parkinson's wearable",
    "carpal tunnel treatment",
    "smart glove",
    "Tek Athletic",
    "Keniye Koroye",
    "wearable technology UK",
  ],
  authors: [{ name: "Keniye Koroye", url: "https://www.knklabs.co.uk" }],
  creator: "Keniye Koroye",
  openGraph: {
    type: "website",
    url: "https://www.knklabs.co.uk",
    title: "KNK Labs — Innovation at Your Fingertips",
    description:
      "Makers of Tek Glove and Echo Glove. Advanced wearable technology for athletes, engineers, and innovators.",
    siteName: "KNK Labs",
    images: [
      {
        url: "https://www.knklabs.co.uk/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "KNK Labs — Advanced wearable technology for athletes, engineers, and innovators.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KNK Labs — Innovation at Your Fingertips",
    description:
      "Makers of Tek Glove and Echo Glove. Advanced wearable technology for athletes, engineers, and innovators.",
    images: ["https://www.knklabs.co.uk/og-image-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    { rel: "icon", url: "/logo-orange.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        barlow.variable,
        inter.variable,
        dmMono.variable,
        "font-sans",
        geist.variable,
      )}
      data-scroll-behavior="smooth"
    >
      <body className="relative overflow-x-hidden">
        <PageLoader />
        <div className="relative min-h-screen">
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: "#0a0a0a",
                border: "1px solid #1a1a1a",
                color: "#ffffff",
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.75rem",
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
