"use client";

import { WaitlistHero } from "@/components/waitlist";
import { WaitlistTabs } from "@/components/waitlist/waitlist-tabs";

export default function WaitlistPage() {
  return (
    <div className="min-h-svh bg-bg pt-16">
      <div className="px-6 md:px-12 py-10 border-b border-white/5">
        <div className="mx-auto max-w-7xl">
          <WaitlistHero />
          <WaitlistTabs />
        </div>
      </div>
    </div>
  );
}
