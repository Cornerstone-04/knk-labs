import { CTASection, CTATitle } from "../ui/cta-section";

export const CTAStrip = () => {
  return (
    <CTASection
      label="Limited Availability"
      // size="large"
      title={<CTATitle firstLine="Be First." secondLine="Be Ahead." />}
      description="Join the priority waitlist for early access to Tek Glove, Echo Glove, or the full KNK System bundle."
      buttonText="Join the Waitlist"
      href="/waitlist"
    />
  );
};
