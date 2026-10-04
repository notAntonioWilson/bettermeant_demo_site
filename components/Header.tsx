"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { Instagram, Linkedin } from "./BrandIcons";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/")));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`overflow-hidden border-b border-white/5 bg-ink transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 text-xs text-white/60 md:px-8">
          <div className="flex items-center gap-3">
            <span>{site.location}</span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span className="hidden sm:inline">Mentorship for leaders, owners & organizations</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:text-teal md:flex">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-teal">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-teal/15 bg-navy-950/85 backdrop-blur-xl" : "border-white/5 bg-navy-950/60 backdrop-blur-md"
        }`}
      >
        <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${scrolled ? "h-16" : "h-20"}`}>
          <Link href="/" aria-label="Bettermeant home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
                  <button
                    onClick={() => setDrop((d) => !d)}
                    className={`flex items-center gap-1 px-3.5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive("/services") ? "text-teal" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${drop ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {drop && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-80 pt-3"
                      >
                        <div className="overflow-hidden border border-teal/20 bg-navy-900/[0.98] p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                          {item.children.map((c) => (
                            <Link key={c.href} href={c.href} className="block px-4 py-3 transition-colors hover:bg-teal/10">
                              <span className="block text-sm font-semibold text-white">{c.label}</span>
                              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-teal">{c.note}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative block px-3.5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive(item.href) ? "text-teal" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span layoutId="nav-active" className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-sun" />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="bg-sun px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-all hover:bg-sun-soft hover:shadow-[0_0_28px_rgba(236,192,68,0.45)]"
            >
              Book a discovery session
            </Link>
          </div>

          <button className="text-white lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
        <motion.div style={{ scaleX: progress }} className="glow-line h-[2px] origin-left" />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-teal/15 bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-5">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div className="py-2">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-sun">{item.label}</p>
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block py-2 pl-3 text-white/85">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={item.href} className="block py-2 text-lg font-semibold text-white">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Link href="/contact" className="block bg-sun px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink">
                  Book a discovery session
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
