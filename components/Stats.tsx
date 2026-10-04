"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const stats = [
  { n: 1, s: "", label: "Meantor™ who holds your whole context, so you manage the growth, not the logistics" },
  { n: 3, s: "", label: "Kinds of Meantorship™, for individuals, businesses, and organizations" },
  { n: 100, s: "+", label: "Individuals coached by founder Sarah Walton" },
  { n: 20, s: "+", label: "Organizations supported, from Fortune 100s to nonprofits" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-teal/15 bg-navy-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`px-5 py-9 md:px-8 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-teal/15`}
          >
            <p className="font-display text-5xl font-bold text-gradient md:text-6xl">
              <Count to={s.n} suffix={s.s} />
            </p>
            <p className="mt-3 text-sm leading-snug text-white/65">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
