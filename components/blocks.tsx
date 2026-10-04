import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  ClipboardList,
  Coffee,
  Compass,
  Glasses,
  GraduationCap,
  Handshake,
  Heart,
  MessageCircle,
  Quote,
  Scale,
  Search,
  Shield,
  Star,
  UserX,
  X,
} from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "./Reveal";
import { Mark } from "./Logo";
import { Button } from "./ui";
import {
  feelings,
  kinds,
  meantor,
  replaced,
  reviews,
  shifts,
  stories,
  supportKinds,
  traditional,
  type Kind,
} from "@/lib/content";

const icons = {
  GraduationCap,
  MessageCircle,
  Compass,
  Handshake,
  Heart,
  Shield,
  Scale,
  Search,
  Coffee,
  ClipboardList,
  UserX,
  Glasses,
  BookOpen,
};

export function FeelingsGrid() {
  return (
    <Stagger className="grid gap-px overflow-hidden border border-teal/15 bg-teal/15 sm:grid-cols-2 lg:grid-cols-3">
      {feelings.map((f) => (
        <StaggerItem key={f.k} className="group relative bg-navy-950 p-7 transition-colors duration-500 hover:bg-navy-900">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-sun">{f.k}</span>
          <p className="mt-4 font-display text-xl leading-snug font-semibold text-white">&ldquo;{f.q}&rdquo;</p>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal transition-all duration-500 group-hover:w-full" />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ShiftsRow() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {shifts.map((s) => (
        <StaggerItem key={s.from} className="glass p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">From {s.from.toLowerCase()}</p>
          <ArrowDown className="my-3 h-5 w-5 text-sun" />
          <p className="font-display text-2xl font-bold text-teal">{s.to}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{s.text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function SupportGrid() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {supportKinds.map((s) => {
        const Icon = icons[s.icon];
        return (
          <StaggerItem key={s.title} className="glass group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="flex h-11 w-11 items-center justify-center border border-teal/30 bg-teal/10 text-teal">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function ReplacedList() {
  return (
    <Stagger className="space-y-3">
      {replaced.map((r) => {
        const Icon = icons[r.icon];
        return (
          <StaggerItem key={r.text} className="flex items-center gap-4 border border-white/10 bg-white/[0.03] px-5 py-4">
            <Icon className="h-5 w-5 shrink-0 text-teal" />
            <span className="flex-1 text-white/85">{r.text}</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] whitespace-nowrap text-sun/80">not enough</span>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function Compare() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Reveal className="border border-white/10 bg-white/[0.03] p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/50">Traditional support</p>
        <h3 className="mt-3 text-2xl font-bold text-white/80">Support as a calendar event</h3>
        <ul className="mt-6 space-y-4">
          {traditional.map((t) => (
            <li key={t} className="flex gap-3 text-white/60">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-white/30" />
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="relative overflow-hidden border border-teal/40 bg-gradient-to-br from-navy-700 to-navy-900 p-8 shadow-[0_0_60px_rgba(94,200,210,0.12)]">
        <Mark className="absolute -right-6 -bottom-8 h-48 w-auto opacity-10" />
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sun">A Meantor™</p>
        <h3 className="mt-3 text-2xl font-bold">Support as a relationship</h3>
        <ul className="relative mt-6 space-y-4">
          {meantor.map((t) => (
            <li key={t} className="flex gap-3 text-white/90">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function KindCard({ k, index = 0 }: { k: Kind; index?: number }) {
  return (
    <Reveal
      delay={index * 0.1}
      className={`relative flex h-full flex-col p-8 ${
        k.featured
          ? "border border-sun/60 bg-gradient-to-b from-navy-700 to-navy-900 shadow-[0_0_70px_rgba(236,192,68,0.14)] lg:-translate-y-4"
          : "glass"
      }`}
    >
      <span
        className={`self-start px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] ${
          k.featured ? "bg-sun text-ink" : "border border-teal/40 text-teal"
        }`}
      >
        {k.tag}
      </span>
      <h3 className="mt-5 text-2xl font-bold">{k.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{k.forWho}</p>
      <div className="my-6 h-px bg-white/10" />
      <ul className="flex-1 space-y-3">
        {k.includes.map((i) => (
          <li key={i} className="flex gap-3 text-sm text-white/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-2">
        <Button href="/contact" variant={k.featured ? "primary" : "ghost"}>
          {k.cta}
        </Button>
        <Link href={k.page} className="py-2 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/55 hover:text-teal">
          Learn more
        </Link>
      </div>
    </Reveal>
  );
}

export function KindsGrid({ only }: { only?: string[] }) {
  const list = only ? kinds.filter((k) => only.includes(k.id)) : kinds;
  return (
    <div className={`grid items-stretch gap-5 ${list.length === 3 ? "lg:grid-cols-3" : list.length === 2 ? "lg:grid-cols-2" : ""}`}>
      {list.map((k, i) => (
        <KindCard key={k.id} k={k} index={i} />
      ))}
    </div>
  );
}

export function StoryCards({ only }: { only?: number[] }) {
  const list = only ? only.map((i) => stories[i]) : stories;
  return (
    <div className={`grid gap-5 ${list.length >= 3 ? "lg:grid-cols-3" : list.length === 2 ? "lg:grid-cols-2" : ""}`}>
      {list.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.1} className="glass flex h-full flex-col p-7">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-teal">{s.label}</p>
          <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
          <p className="mt-1 text-sm text-white/50">{s.who}</p>
          <div className="mt-6 grid gap-3">
            <div className="border-l-2 border-white/20 pl-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">Before</p>
              <p className="mt-1 text-sm text-white/65">{s.before}</p>
            </div>
            <div className="border-l-2 border-sun pl-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sun">After</p>
              <p className="mt-1 text-sm text-white/90">{s.after}</p>
            </div>
          </div>
          <blockquote className="mt-6 flex-1 border-t border-white/10 pt-5 text-[0.95rem] leading-relaxed text-white/85 italic">
            &ldquo;{s.quote}&rdquo;
          </blockquote>
        </Reveal>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Stagger className="grid gap-5 md:grid-cols-3">
      {reviews.map((r) => (
        <StaggerItem key={r.name} className="relative flex h-full flex-col border border-white/10 bg-white/[0.03] p-7">
          <Quote className="h-8 w-8 text-teal/40" />
          <div className="mt-3 flex gap-1 text-sun">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-4 flex-1 leading-relaxed text-white/85">&ldquo;{r.quote}&rdquo;</p>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-display font-semibold text-white">{r.name}</p>
            <p className="text-sm text-white/50">{r.role}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ClientWall() {
  return (
    <Reveal className="relative overflow-hidden bg-white p-6 shadow-[0_0_80px_rgba(94,200,210,0.15)] md:p-10">
      <div className="glow-line absolute inset-x-0 top-0 h-1" />
      <Image
        src="/images/clients.jpg"
        alt="Client logos: Amazon, SurveyMonkey, Evergreen Aviation & Space Museum, Visa, Habitat for Humanity, Northwestern Mutual, Tillamook, Adidas, Nike, Google, Dave Friedman Team, Athletic Greens, Mars, CNM LLP"
        width={2817}
        height={655}
        className="h-auto w-full"
        sizes="(max-width: 1280px) 100vw, 1200px"
      />
    </Reveal>
  );
}

export function NumberedSteps({ steps }: { steps: { n: string; title: string; text: string }[] }) {
  return (
    <Stagger className="grid gap-px overflow-hidden border border-teal/15 bg-teal/15 md:grid-cols-3">
      {steps.map((s) => (
        <StaggerItem key={s.n} className="relative bg-navy-950 p-8">
          <span className="font-display text-6xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(94,200,210,0.55)]">{s.n}</span>
          <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
          <ArrowRight className="absolute right-6 top-8 hidden h-5 w-5 text-sun/60 md:block" />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
