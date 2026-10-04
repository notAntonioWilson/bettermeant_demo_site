import Link from "next/link";
import { Mail, ShoppingBag } from "lucide-react";
import { Instagram, Linkedin } from "./BrandIcons";
import { Logo, Mark } from "./Logo";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-teal/15 bg-ink">
      <div className="glow-line absolute inset-x-0 top-0 h-px" />
      <Mark className="pointer-events-none absolute -right-10 -bottom-16 h-80 w-auto opacity-[0.05]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 font-display text-2xl font-bold text-white">
            More <span className="text-teal">joy</span>. Less <span className="text-sun">grind</span>.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
            Mentorship reimagined for modern work and life. For individuals, business owners, and organizations.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-sun">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link className="hover:text-teal" href="/">Home</Link></li>
            <li><Link className="hover:text-teal" href="/meantorship">Meantorship™</Link></li>
            <li><Link className="hover:text-teal" href="/team">Team</Link></li>
            <li><Link className="hover:text-teal" href="/musings">Musings</Link></li>
            <li><Link className="hover:text-teal" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-sun">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link className="hover:text-teal" href="/services/individuals">For individuals</Link></li>
            <li><Link className="hover:text-teal" href="/services/owners">For owners & entrepreneurs</Link></li>
            <li><Link className="hover:text-teal" href="/services/teams">For teams & companies</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-sun">Connect</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><a className="flex items-center gap-2 hover:text-teal" href={`mailto:${site.email}`}><Mail className="h-4 w-4" />{site.email}</a></li>
            <li><a className="flex items-center gap-2 hover:text-teal" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
            <li><a className="flex items-center gap-2 hover:text-teal" href={site.instagram} target="_blank" rel="noreferrer"><Instagram className="h-4 w-4" />@bettermeant.co</a></li>
            <li><a className="flex items-center gap-2 hover:text-teal" href={site.store} target="_blank" rel="noreferrer"><ShoppingBag className="h-4 w-4" />Store</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Bettermeant. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={site.terms} target="_blank" rel="noreferrer" className="hover:text-white/70">Terms of Use</a>
            <a href={site.privacy} target="_blank" rel="noreferrer" className="hover:text-white/70">Privacy Policy</a>
            <span>Concept by OTAI Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
