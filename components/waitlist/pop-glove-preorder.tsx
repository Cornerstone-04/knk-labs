"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { handOptions, popGloveColours, sidewaysIdSet } from "@/lib/pop-glove";
import { PopGlovePreorderSuccess } from "./pop-glove-preorder-success";
import { PopGlovePreorderHeader } from "./pop-glove-preorder-header";
import { PopGloveHandSelector } from "./pop-glove-hand-selector";
import { PopGloveColourSelector } from "./pop-glove-colour-selector";
import { PopGloveConfigurationSummary } from "./pop-glove-configuration-summary";
import { PopGlovePreorderForm } from "./pop-glove-preorder-form";

type HandType = "left" | "right" | "fingerless";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function PopGlovePreorder() {
  const [selectedHand, setSelectedHand] = useState<HandType>("right");
  const [selectedColourId, setSelectedColourId] = useState("03");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableColourIds = handOptions[selectedHand].availableColourIds;

  const selectedColour = useMemo(() => {
    return (
      popGloveColours.find((colour) => colour.id === selectedColourId) ??
      popGloveColours[0]
    );
  }, [selectedColourId]);

  const isClockSideways = sidewaysIdSet.has(selectedColour.id);

  function handleHandChange(hand: HandType) {
    const firstAvailableColourId = handOptions[hand].availableColourIds[0];

    setSelectedHand(hand);
    setSelectedColourId(firstAvailableColourId);
  }

  function handleColourChange(colourId: string) {
    if (!(availableColourIds as readonly string[]).includes(colourId)) {
      return;
    }

    setSelectedColourId(colourId);
  }

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoading(true);
      await delay(600);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return <PopGlovePreorderSuccess selectedColourName={selectedColour.name} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="border border-white/5 bg-surface p-8 md:p-12"
    >
      <PopGlovePreorderHeader />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-12">
          <PopGloveHandSelector
            selectedHand={selectedHand}
            onHandChange={handleHandChange}
          />

          <PopGloveColourSelector
            selectedColourId={selectedColour.id}
            availableColourIds={availableColourIds}
            onColourChange={handleColourChange}
          />

          <PopGloveConfigurationSummary
            selectedColour={selectedColour}
            selectedHand={selectedHand}
            isClockSideways={isClockSideways}
          />
        </div>

        <PopGlovePreorderForm
          loading={loading}
          selectedColourName={selectedColour.name}
          selectedColourImage={selectedColour.image}
          onSubmit={handleSubmit}
        />
      </div>
    </motion.div>
  );
}
