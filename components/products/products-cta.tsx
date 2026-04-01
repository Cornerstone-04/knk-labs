"use client";

import { CTASection, CTATitle } from "../ui/cta-section";

export const ProductsCta = () => {
  return (
    <CTASection
      label="Limited Availability"
      title={
        <CTATitle firstLine="Ready to Experience" secondLine="the Future?" />
      }
      buttonText="Join the Waitlist"
      href="/waitlist"
    />
  );
};
