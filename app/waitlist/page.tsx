"use client";

import {
  WaitlistForm,
  WaitlistHero,
  WaitlistSuccess,
  PopGlovePreorder,
} from "@/components/waitlist";
import { useState } from "react";
import { motion } from "motion/react";
import { WaitlistTabs } from "@/components/waitlist/waitlist-tabs";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-svh bg-bg pt-16">
      {/* Standard Waitlist Section */}
      <div className="px-6 md:px-12 py-10 border-b border-white/5">
        <div className="mx-auto max-w-7xl">
          <WaitlistHero />
          <WaitlistTabs />
        </div>
      </div>
    </div>
  );
}
