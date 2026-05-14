"use client";

import { useRef } from "react";
import { PopGloveHero } from "./pop-glove-hero";
import { PopGloveHistory } from "./pop-glove-history";
import { PopGloveHowToWear } from "./pop-glove-how-to-wear";
// import { PopGloveStyles } from "./pop-glove-styles";
import { PopGloveConfigurator } from "./pop-glove-configurator";
import { PopGloveFeatures } from "./pop-glove-features";
import { PopGloveCta } from "./pop-glove-cta";

export function PopGlovePageClient() {
  const configuratorRef = useRef<HTMLElement>(null);

  function scrollToConfigurator() {
    configuratorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="bg-bg text-white">
      <PopGloveHero onConfigureClick={scrollToConfigurator} />
      <PopGloveHistory />
      <PopGloveHowToWear />
      {/* <PopGloveStyles /> */}
      <PopGloveConfigurator ref={configuratorRef} />
      <PopGloveFeatures />
      <PopGloveCta onConfigureClick={scrollToConfigurator} />
    </main>
  );
}
