"use client";

import { HowToWearIntro } from "./how-to-wear-intro";
import { RoyalPopSpotlight } from "./royal-pop-spotlight";
import { DockingSteps } from "./docking-steps";
import { TransformationPoints } from "./transformation-points";

export function PopGloveHowToWear() {
  return (
    <section className="overflow-x-clip border-b border-border px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <HowToWearIntro />
        <RoyalPopSpotlight />
        <DockingSteps />
        <TransformationPoints />
      </div>
    </section>
  );
}
