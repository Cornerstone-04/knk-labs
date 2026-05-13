"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PopGloveLoaderProps {
  onComplete?: () => void;
}

export default function PopGloveLoader({ onComplete }: PopGloveLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate asset loading with smooth progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 25;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Complete loader after minimum duration
    const timer = setTimeout(() => {
      setProgress(100);
      if (onComplete) {
        setTimeout(onComplete, 400);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-orange/10 via-transparent to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        {/* Glove Silhouette Animation */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <motion.svg
            viewBox="0 0 128 128"
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Simplified glove outline */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "64px 64px" }}
            >
              <circle
                cx="64"
                cy="64"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-orange/20"
              />
              <circle
                cx="64"
                cy="64"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-orange/10"
              />
            </motion.g>

            {/* Glove hand illustration (stylized) */}
            <motion.path
              d="M 64 20 L 70 40 L 75 35 L 78 50 L 82 42 L 85 58 L 88 48 L 90 65 C 90 75 82 85 64 90 C 46 85 38 75 38 65 L 40 48 L 43 58 L 46 42 L 50 50 L 53 35 L 58 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Watch circle on glove */}
            <motion.circle
              cx="64"
              cy="55"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-orange"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.circle
              cx="64"
              cy="55"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-orange/50"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </motion.svg>
        </div>

        {/* Logo Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-heading font-black text-[clamp(2rem,8vw,4rem)] leading-none tracking-[-0.02em] text-white normal-case">
            P.O.P
          </h1>
          <p className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mt-4">
            Loading Experience
          </p>
        </motion.div>

        {/* Scanning Lines Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-orange/20 via-transparent to-transparent pointer-events-none"
          animate={{ y: [0, -100] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-12 left-12 right-12 md:left-24 md:right-24 flex flex-col gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-orange"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-mono text-xxxs text-white/40">INITIALIZING</p>
          <p className="font-mono text-xxxs text-orange/60">
            {Math.round(progress)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
