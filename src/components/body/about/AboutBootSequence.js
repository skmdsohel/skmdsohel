import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_LINES = [
  "booting portfolio…",
  "loading cloud modules…",
  "syncing devops stack…",
  "ready.",
];

export function useAboutBootSequence() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [contentReady, setContentReady] = useState(false);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(100);
      setContentReady(true);
      setBootDone(true);
      return undefined;
    }

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);

      const idx = Math.min(
        STATUS_LINES.length - 1,
        Math.floor((elapsed / duration) * STATUS_LINES.length)
      );
      setStatusIndex(idx);

      if (elapsed >= 520) setContentReady(true);
      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      } else {
        setBootDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return {
    progress,
    statusLine: STATUS_LINES[statusIndex],
    contentReady,
    bootDone,
  };
}

export function AboutBootBar({ progress, statusLine, bootDone }) {
  return (
    <AnimatePresence>
      {!bootDone && (
        <motion.div
          className="about-boot"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.35 }}
          aria-live="polite"
          aria-busy={!bootDone}
        >
          <div className="about-boot__row">
            <span className="about-boot__label">System</span>
            <span className="about-boot__status">{statusLine}</span>
            <span className="about-boot__percent">{Math.round(progress)}%</span>
          </div>
          <div className="about-boot__track">
            <motion.div
              className="about-boot__fill"
              style={{ width: `${progress}%` }}
              layout
            />
            <div className="about-boot__shine" aria-hidden />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BioSkeleton({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="about-copy-skeleton"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden
        >
          <div className="about-skeleton-line about-skeleton-line--long" />
          <div className="about-skeleton-line about-skeleton-line--medium" />
          <div className="about-skeleton-line about-skeleton-line--long" />
          <div className="about-skeleton-line about-skeleton-line--short" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}