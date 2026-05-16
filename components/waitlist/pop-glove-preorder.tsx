"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  handOptions,
  HandType,
  popGloveColours,
  sidewaysIdSet,
} from "@/lib/pop-glove";
import { useWaitlistSubmit } from "@/hooks/use-waitlist-submit";
import { PopGlovePreorderSuccess } from "./pop-glove-preorder-success";
import { PopGlovePreorderHeader } from "./pop-glove-preorder-header";
import { PopGloveHandSelector } from "./pop-glove-hand-selector";
import { PopGloveColourSelector } from "./pop-glove-colour-selector";
import { PopGloveConfigurationSummary } from "./pop-glove-configuration-summary";
import { PopGlovePreorderForm } from "./pop-glove-preorder-form";

export function PopGlovePreorder() {
  const [selectedHand, setSelectedHand] = useState<HandType>("right");
  const [selectedColourId, setSelectedColourId] = useState("03");
  const [submitted, setSubmitted] = useState(false);

  const { loading, error, setError, submitWaitlist } = useWaitlistSubmit();

  const availableColourIds = handOptions[selectedHand].availableColourIds;

  const selectedColour = useMemo(() => {
    return (
      popGloveColours.find((colour) => colour.id === selectedColourId) ??
      popGloveColours[0]
    );
  }, [selectedColourId]);

  const isClockSideways = sidewaysIdSet.has(selectedColour.id);

  const watchOrientation = isClockSideways ? "Sideways" : "Upright";

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

    const formData = new FormData(event.currentTarget);

    const fullName = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const country = String(formData.get("country") ?? "").trim();

    if (!fullName || !email || !country) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await submitWaitlist({
        formType: "pop",
        fullName,
        email,
        country,
        selectedHand: handOptions[selectedHand].label,
        selectedColour: selectedColour.name,
        selectedStyle: handOptions[selectedHand].style,
        watchOrientation,
      });

      setSubmitted(true);
    } catch {
      // error is already handled in hook
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
      className="min-w-0 overflow-x-clip border-t border-white/10 pt-10"
    >
      <PopGlovePreorderHeader />

      <div className="grid min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="order-2 min-w-0 lg:order-1 lg:sticky lg:top-24 lg:self-start">
          <PopGlovePreorderForm
            loading={loading}
            error={error}
            selectedColourName={selectedColour.name}
            selectedColourImage={selectedColour.image}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="order-1 flex min-w-0 flex-col gap-10 lg:order-2">
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
      </div>
    </motion.div>
  );
}
