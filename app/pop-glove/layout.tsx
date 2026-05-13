import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.O.P Glove — KNK Labs",
  description:
    "The P.O.P Glove — a next-generation luxury driving glove with an integrated dorsal-mounted timepiece.",
  openGraph: {
    title: "P.O.P Glove — KNK Labs",
    description:
      "Luxury driving glove with an integrated dorsal-mounted timepiece.",
  },
};

export default function PopGloveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
