import { AnimatedCounter } from "@/lib/animatedCounter";
import { motion } from "motion/react";

const STATS = [
  { value: 2, suffix: "", label: "Gloves" },
  { value: 7, suffix: "+", label: "Core Technologies" },
  { value: 2005, suffix: "", label: "Launch Year" },
];

export const StatsSection = () => {
  return (
    <div className="border-b border-border grid grid-cols-3">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`flex flex-col items-center justify-center py-10 px-1 text-center h-full gap-2 ${i < 2 ? "border-r border-border" : ""}`}
        >
          <span className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </span>
          <span className="font-mono text-xxs tracking-[0.2em] uppercase text-white/30">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
