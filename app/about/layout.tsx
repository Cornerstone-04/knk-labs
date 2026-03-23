import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "KNK Labs is an innovation studio focused on next-generation wearable engineering. We merge AI, robotics, human ergonomics, and advanced materials to create wearables that think, sense, and act with you.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
