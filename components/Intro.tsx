"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mark } from "./Logo";

/** Brand intro: the striped mark assembles, the wordmark lands, then it lifts away. Once per visit. */
export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("bm-intro") === "1";
      sessionStorage.setItem("bm-intro", "1");
    } catch {}
    if (seen) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grid-bg absolute inset-0" />
          <div className="relative flex flex-col items-center gap-6">
            <Mark animate className="h-24 w-auto drop-shadow-[0_0_40px_rgba(94,200,210,0.45)]" />
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.02em" }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="font-mark text-4xl font-semibold"
            >
              <span className="text-teal">better</span>
              <span className="text-white">meant</span>
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glow-line h-px w-48 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
