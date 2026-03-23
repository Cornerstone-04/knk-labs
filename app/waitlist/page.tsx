"use client";

import {
  WaitlistForm,
  WaitlistHero,
  WaitlistSuccess,
} from "@/components/waitlist";
import { useState } from "react";


export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-svh bg-bg pt-16">
      <div className="px-6 py-20">
        <div className="mx-auto max-w-2xl px-4">
          <WaitlistHero />

          {submitted ? (
            <WaitlistSuccess />
          ) : (
            <WaitlistForm successAction={() => setSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
