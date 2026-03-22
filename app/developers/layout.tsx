import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Hub",
  description:
    "Build with the KNK ecosystem. Gesture APIs, haptic libraries, device SDKs, and firmware tools designed for builders and innovators.",
};

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
