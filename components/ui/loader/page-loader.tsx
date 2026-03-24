"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-8 bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-heading text-[clamp(2rem,6vw,4rem)] font-extrabold uppercase tracking-[0.18em] text-white"
            >
              KNK <span className="text-orange">Labs</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex w-32 flex-col items-center gap-2"
          >
            <div className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-orange"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>

            <span className="font-mono text-[0.55rem] tracking-[0.2em] text-white/30">
              {`${String(progress).padStart(3, "0")}%`}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
