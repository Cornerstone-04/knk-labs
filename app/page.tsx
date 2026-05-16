"use client";

import {
  BundleSecction,
  CTAStrip,
  DeveloperStrip,
  ExpertiseStrip,
  HeroSection,
  MarqueeStrip,
  PopGloveDividerStrip,
  PopGloveHeroSection,
  ProductsSection,
  StatsSection,
  SystemSection,
} from "@/components/home/";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <PopGloveHeroSection />
      <PopGloveDividerStrip />
      <HeroSection />
      <MarqueeStrip />
      <StatsSection />
      <SystemSection />
      <ProductsSection />
      <BundleSecction />
      <ExpertiseStrip />
      <DeveloperStrip />
      <CTAStrip />
    </div>
  );
}
