"use client";

import {
  AboutCta,
  AboutExpertise,
  AboutHero,
  AboutIntro,
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="bg-bg pt-16">
      <AboutHero />

      <AboutIntro />
      <AboutExpertise />
      <AboutCta />
    </div>
  );
}
