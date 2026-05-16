"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { howToWear } from "@/lib/pop-glove";
import { VideoSkeleton } from "@/components/ui/video-skeleton";

export function RoyalPopSpotlight() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  return (
    <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 items-start gap-10 border-b border-border pb-16 md:mb-24 md:gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="min-w-0"
      >
        <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
          {howToWear.royalPopSpotlight.eyebrow}
        </p>

        <h2 className="mb-6 wrap-break-word font-heading text-[clamp(2rem,7vw,3.5rem)] font-black leading-[0.98] tracking-[-0.02em] text-white normal-case">
          {howToWear.royalPopSpotlight.headline}
        </h2>

        <div className="max-w-[65ch]">
          {howToWear.royalPopSpotlight.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-6 wrap-break-word font-sans text-[0.95rem] leading-[1.8] text-white/60 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setShouldLoadVideo(true)}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="group relative mx-auto aspect-9/16 md:aspect-4/5 w-full max-w-160 min-w-0 overflow-hidden border border-border bg-surface transition-all ease-linear hover:border-white/20 hover:bg-surface/80 xl:aspect-square lg:mx-0"
      >
        {!videoLoaded && (
          <VideoSkeleton label="Loading AP x Swatch Royal Pop Video" />
        )}

        {shouldLoadVideo && (
          <>
            <video
              src="/videos/pop-reveal.mp4"
              poster="/images/pop-glove/poster.jpg"
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* <div className="absolute bottom-4 left-4 right-4 text-sm text-orange font-sans font-black">
              Video Credit: Hypebeast
            </div> */}
          </>
        )}
      </motion.div>
    </div>
  );
}
