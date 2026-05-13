import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.O.P Glove",
  description:
    "The P.O.P Glove — a next-generation luxury driving glove with an integrated AP Swatch Pop Royal timepiece. Time at the point you need it most.",
};

export default function PopGloveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
