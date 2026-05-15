"use client";

import { motion } from "motion/react";

type VideoSkeletonProps = {
  label?: string;
};

export function VideoSkeleton({
  label = "Loading Experience",
}: VideoSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-10 overflow-hidden bg-linear-to-br from-neutral-950 via-neutral-900 to-black"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          {/* Spinner */}
          <div className="relative flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border border-orange/15" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-16 w-16 rounded-full border border-transparent border-t-orange"
            />
          </div>

          {/* Text */}
          <div className="space-y-3 text-center">
            <p className="font-mono text-xxs tracking-[0.25em] text-orange/70 uppercase">
              {label}
            </p>

            <div className="space-y-2">
              <div className="mx-auto h-2 w-40 rounded-full bg-white/10" />
              <div className="mx-auto h-2 w-24 rounded-full bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
