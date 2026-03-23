import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";
import { Toaster } from "sonner";
import ScreenLoader from "@/components/ui/page-loader";

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
  metadataBase: new URL("https://knk.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://knk.vercel.app",
    title: "KNK Labs — Innovation at Your Fingertips",
    description:
      "Makers of Tek Glove and Echo Glove. Advanced wearable technology for athletes, engineers, and innovators.",
    siteName: "KNK Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "KNK Labs — Innovation at Your Fingertips",
    description: "Makers of Tek Glove and Echo Glove.",
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
      className={`${barlow.variable} ${inter.variable} ${dmMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <ScreenLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
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
