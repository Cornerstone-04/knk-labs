import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the KNK Labs product line — Tek Glove and Echo Glove. Advanced wearable technology built for athletes, engineers, and innovators.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
