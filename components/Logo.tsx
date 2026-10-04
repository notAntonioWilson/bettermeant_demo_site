"use client";

import { motion } from "framer-motion";

const stripes = [
  { d: "M10 40 A40 40 0 0 1 90 40 Z", fill: "#ecc044" },
  { d: "M5 47 H95 Q97 47 96.5 50 L94 61 Q93.5 63 91 63 H9 Q6.5 63 6 61 L3.5 50 Q3 47 5 47 Z", fill: "#f6dd72" },
  { d: "M9 69 H91 L81 85 H19 Z", fill: "#5ec8d2" },
  { d: "M24 91 H76 L50 121 Z", fill: "#44887f" },
];

export function Mark({
  className = "h-8 w-auto",
  animate = false,
  delay = 0,
}: {
  className?: string;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <svg viewBox="0 0 100 122" className={className} aria-hidden="true">
      {stripes.map((s, i) =>
        animate ? (
          <motion.path
            key={i}
            d={s.d}
            fill={s.fill}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <path key={i} d={s.d} fill={s.fill} />
        )
      )}
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="font-mark text-[1.75rem] leading-none font-semibold tracking-tight">
        <span className="text-teal">better</span>
        <span className="text-white">meant</span>
      </span>
      <Mark className="h-6 w-auto -translate-y-0.5" />
    </span>
  );
}
