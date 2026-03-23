"use client";

import {
  DevelopersComingSoon,
  DevelopersHeader,
  DevelopersIntro,
  DevelopersTools,
} from "@/components/developers";

export default function DevelopersPage() {
  return (
    <div className="bg-bg pt-16">
      <DevelopersHeader />
      <DevelopersIntro />
      <DevelopersTools />
      <DevelopersComingSoon />
    </div>
  );
}
