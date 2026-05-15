"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PopGlovePreorder } from "./pop-glove-preorder";
import { WaitlistForm } from "./waitlist-form";
import { WaitlistSuccess } from "./waitlist-success";

type WaitlistTab = "knk" | "pop";

const tabs: {
  id: WaitlistTab;
  label: string;
  description: string;
}[] = [
  {
    id: "knk",
    label: "KNK Gloves",
    description: "Tech Glove, Echo Glove, and KNK product updates.",
  },
  {
    id: "pop",
    label: "P.O.P Gloves",
    description: "Configure and reserve your P.O.P Glove edition.",
  },
];

export function WaitlistTabs() {
  const [activeTab, setActiveTab] = useState<WaitlistTab>("knk");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="overflow-x-clip border-b border-border py-12 md:py-16">
      <div className="mx-auto min-w-0">
        <div className="mb-10 md:mb-12">
          <div className="grid w-full max-w-xl grid-cols-2 border border-white/10 bg-surface p-1 sm:inline-grid sm:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative cursor-pointer px-4 py-3 font-mono text-xxs tracking-[0.14em] transition-colors duration-300 sm:px-8 ${
                    isActive ? "text-black" : "text-white/50 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="waitlist-active-tab"
                      className="absolute inset-0 bg-orange"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/45">
            {tabs.find((tab) => tab.id === activeTab)?.description}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "knk" ? (
            <motion.div
              key="knk-waitlist"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl border border-white/10 bg-surface/40 p-5 sm:p-8 md:p-10"
            >
              {submitted ? (
                <WaitlistSuccess />
              ) : (
                <WaitlistForm successAction={() => setSubmitted(true)} />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="pop-waitlist"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="min-w-0"
            >
              <PopGlovePreorder />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
