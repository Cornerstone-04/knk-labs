"use client";

import { CTASection, CTATitle } from "../ui/cta-section";

export const AboutCta = () => {
  return (
    <CTASection
      title={<CTATitle firstLine="Ready to Wear" secondLine="the Future?" />}
      buttonText="Join the Waitlist"
      href="/waitlist"
    />
  );
};
