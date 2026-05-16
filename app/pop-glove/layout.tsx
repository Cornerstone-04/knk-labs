import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.O.P Glove",
  description:
    "The P.O.P Glove — a next-generation luxury driving glove with an integrated dorsal-mounted timepiece.",
  openGraph: {
    title: "P.O.P Glove",
    description:
      "Luxury driving glove with an integrated dorsal-mounted timepiece.",
    url: "https://www.knklabs.co.uk/products/pop-glove",
    images: [
      {
        url: "https://www.knklabs.co.uk/images/pop-glove/pop-og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "P.O.P Glove — a next-generation luxury driving glove with an integrated dorsal-mounted timepiece.",
      },
    ],
  },
};

export default function PopGloveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
