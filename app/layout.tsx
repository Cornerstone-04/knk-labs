import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono, Geist } from "next/font/google";
import { Toaster } from "sonner";
import PageLoader from "@/components/ui/loader/page-loader";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  title: {
    default: "KNK Labs — Innovation at Your Fingertips",
    template: "%s | KNK Labs",
  },
  description:
    "KNK Labs builds advanced wearable technology engineered to enhance performance, elevate safety, and redefine human–machine interaction. Makers of Tek Glove and Echo Glove.",
  metadataBase: new URL("https://knk-labs.vercel.app"),
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
    "Apple Watch glove",
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
  authors: [{ name: "Keniye Koroye", url: "https://knk-labs.vercel.app" }],
  creator: "Keniye Koroye",
  openGraph: {
    type: "website",
    url: "https://knk-labs.vercel.app",
    title: "KNK Labs — Innovation at Your Fingertips",
    description:
      "Makers of Tek Glove and Echo Glove. Advanced wearable technology for athletes, engineers, and innovators.",
    siteName: "KNK Labs",
    images: [
      {
        url: "https://knk-labs.vercel.app/knk_og_image.png?v=2",
        width: 1200,
        height: 630,
        alt: "TekGlove — The world's first therapy glove combining EMS, TENS, vibration and heat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KNK Labs — Innovation at Your Fingertips",
    description:
      "Makers of Tek Glove and Echo Glove. Advanced wearable technology for athletes, engineers, and innovators.",
    images: ["https://knk-labs.vercel.app/knk_og_image.png?v=2"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(barlow.variable, inter.variable, dmMono.variable, "font-sans", geist.variable)}
      data-scroll-behavior="smooth"
    >
      <body>
        {/*<PageLoader />*/}
        <Navbar />
        <main>{children}</main>
        <Footer />
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
      </body>
    </html>
  );
}
