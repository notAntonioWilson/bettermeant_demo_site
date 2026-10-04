import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-sun ${className}`}>
      <span className="h-px w-10 bg-sun/70" />
      {children}
    </p>
  );
}

export function Brush({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 18" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M3 11 C40 4, 90 6, 130 7 S200 9, 217 6 M14 14 C60 10, 120 11, 190 12"
        stroke="#ecc044"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** A word with the Bettermeant yellow brush underline. */
export function Underlined({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <Brush className="absolute -bottom-2 left-0 h-3 w-full md:-bottom-3 md:h-4" />
    </span>
  );
}

export function Dot() {
  return <span className="text-sun">.</span>;
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "light"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300";
  const styles = {
    primary: "bg-sun text-ink hover:bg-sun-soft hover:shadow-[0_0_32px_rgba(236,192,68,0.45)]",
    ghost: "border border-teal/50 text-teal hover:border-teal hover:bg-teal/10 hover:shadow-[0_0_28px_rgba(94,200,210,0.25)]",
    light: "border border-white/30 text-white hover:border-white hover:bg-white/10",
  }[variant];
  const external = href.startsWith("http") || href.startsWith("mailto");
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}

/** The two-button row that closes every section: keep exploring, or talk to us. */
export function SectionCTA({
  next,
  nextLabel,
  contactLabel = "Book a discovery session",
  contactHref = "/contact",
  className = "",
}: {
  next: string;
  nextLabel: string;
  contactLabel?: string;
  contactHref?: string;
  className?: string;
}) {
  return (
    <Reveal className={`mt-12 flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <Button href={next} variant="ghost">
        {nextLabel}
      </Button>
      <Button href={contactHref} variant="primary">
        {contactLabel}
      </Button>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  tone = "dark",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "deeper" | "light";
}) {
  const bg = {
    dark: "bg-navy-950",
    deeper: "bg-ink",
    light: "bg-mint text-navy-800",
  }[tone];
  return (
    <section id={id} className={`relative overflow-hidden ${bg} ${className}`}>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 text-4xl font-bold leading-[1.05] md:text-5xl ${light ? "!text-navy-800" : ""}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-navy-700" : "text-white/70"}`}>{intro}</p>}
    </Reveal>
  );
}

export function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -left-32 top-10 h-96 w-96 animate-pulse-slow rounded-full bg-teal/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 animate-pulse-slow rounded-full bg-sun/10 blur-[120px]" />
    </div>
  );
}
