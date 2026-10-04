"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button, Eyebrow, Underlined } from "./ui";
import InquiryForm from "./InquiryForm";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src="/images/team.jpg"
          alt="The Bettermeant team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_25%] opacity-75"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-navy-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-ink/50" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-teal/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-36 pb-20 md:px-8 md:pt-44 lg:grid-cols-12 lg:pb-24">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Eyebrow>Mentorship reimagined for modern work and life</Eyebrow>
          </motion.div>

          <h1 className="mt-7 text-[3.2rem] leading-[0.98] font-bold md:text-[5.4rem]">
            {["a better way to", "lead. work."].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="block text-sun"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.44, ease }}
            >
              <Underlined>live.</Underlined>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/80"
          >
            It's not coaching, consulting or therapy. It's one dedicated Meantor™ who knows your whole story and flexes
            between coaching, advising, strategy, and accountability, backed by a team of seasoned executives and coaches.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/75"
          >
            {["Personal Meantorship™", "Business Meantorship™", "Enterprise Meantorship™"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-sun" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/meantorship" variant="ghost">
              What is Meantorship™
            </Button>
            <Button href="/contact" variant="light">
              Contact us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative lg:col-span-5"
        >
          <InquiryForm compact />
        </motion.div>
      </div>
    </section>
  );
}
