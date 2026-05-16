"use client";

import { PopGlovePreorder, WaitlistHero } from "@/components/waitlist";
// import { WaitlistTabs } from "@/components/waitlist/waitlist-tabs";

export default function WaitlistPage() {
  return (
    <div className="min-h-svh bg-bg pt-16">
      <div className="px-6 md:px-12 py-10 border-b border-white/5">
        <div className="mx-auto max-w-7xl">
          <WaitlistHero />
          <div className="mt-12">
            <PopGlovePreorder />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
