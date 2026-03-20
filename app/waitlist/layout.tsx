import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Be first in line. Join the KNK Labs priority waitlist for early access to Tek Glove and Echo Glove. No payment required.",
};

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
