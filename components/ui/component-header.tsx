import { motion } from "motion/react";

type ComponentHeaderProps = {
  eyebrow: string;
  title: string;
  accentText?: string;
  description?: string;
};

export function ComponentHeader({
  eyebrow,
  title,
  accentText,
  description,
}: ComponentHeaderProps) {
  return (
    <div className="border-b border-border px-6 pt-20 pb-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-[0.9] text-white"
        >
          {title}
          {accentText && (
            <>
              <br />
              <span className="text-orange">{accentText}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-[50ch] font-sans text-[0.9rem] leading-[1.8] text-white/45"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
