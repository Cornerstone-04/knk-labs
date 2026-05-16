"use client";

import {
  BundleSecction,
  CTAStrip,
  DeveloperStrip,
  ExpertiseStrip,
  HeroSection,
  MarqueeStrip,
  PopGloveStrip,
  ProductsSection,
  StatsSection,
  SystemSection,
} from "@/components/home/";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <HeroSection />
      <MarqueeStrip />
      <StatsSection />
      <SystemSection />
      <ProductsSection />
      <PopGloveStrip />
      <BundleSecction />
      <ExpertiseStrip />
      <DeveloperStrip />
      <CTAStrip />
    </div>
  );
}
