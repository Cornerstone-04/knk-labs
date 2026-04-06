"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 2200;
    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);

      setProgress(Math.round(eased * 100));

      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 400);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="screen-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
        >
          <div className="flex w-35 flex-col items-center gap-4 md:w-40">
            {/* Logo */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex w-full items-center justify-center"
            >
              <img
                src="/knk-logo-white-2.png"
                alt="KNK Labs"
                width={300}
                height={150}
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex w-full flex-col items-center gap-2"
            >
              <div className="relative h-0.5 md:h-1 w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-orange"
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.05s linear",
                  }}
                />
              </div>

              <span className="font-mono text-xs font-medium tracking-[0.2em] text-white/30">
                {`${String(progress).padStart(3, "0")}%`}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
