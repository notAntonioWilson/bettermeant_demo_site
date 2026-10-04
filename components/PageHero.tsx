"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Mark } from "./Logo";
import { Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink pt-36 pb-12 md:pt-44 md:pb-16">
      {image && (
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src={image} alt="" fill priority className="object-cover object-center opacity-55" sizes="100vw" />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
      <div className="grid-bg absolute inset-0" />
      <motion.div style={{ y: markY, rotate: markRotate }} className="pointer-events-none absolute -right-16 top-24 hidden md:block">
        <Mark className="h-[26rem] w-auto opacity-[0.09]" />
      </motion.div>

      <div className={`relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 ${aside ? "lg:grid-cols-12" : ""}`}>
        <div className={aside ? "lg:col-span-7" : "max-w-4xl"}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-bold leading-[1.02] md:text-7xl"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-white/75"
            >
              {intro}
            </motion.div>
          )}
          {children && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              {children}
            </motion.div>
          )}
        </div>
        {aside && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  );
}
