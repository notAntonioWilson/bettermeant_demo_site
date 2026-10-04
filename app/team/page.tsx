import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHead, SectionCTA, Dot, Underlined, Button, GlowOrbs } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet Bettermeant: the founders, Meantors, and team changing the face of support.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function TeamPage() {
  const meantors = team.filter((t) => t.coach);
  return (
    <>
      <PageHero
        image="/images/team.jpg"
        eyebrow="Meet Bettermeant"
        title={
          <>
            more thriving. <span className="text-sun"><Underlined>less surviving.</Underlined></span>
          </>
        }
        intro={
          <p>
            We're changing the face of support by helping people, leaders, and organizations grow with clarity and intention. We make
            work and life feel more human, more lasting, and more meaningful, turning effort into progress and potential into impact.
          </p>
        }
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#meantors" variant="ghost">
            Meet the Meantors
          </Button>
          <Button href="/contact">Book a discovery session</Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden border-y border-teal/15 bg-navy-900">
        <div className="mx-auto grid max-w-7xl gap-px bg-teal/15 md:grid-cols-2">
          <Reveal className="bg-navy-900 px-5 py-10 md:px-8">
            <p className="font-display text-3xl font-bold text-white md:text-4xl">
              Work doesn't have to <span className="text-teal">suck</span>
              <Dot />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-navy-900 px-5 py-10 md:px-8">
            <p className="font-display text-3xl font-bold text-white md:text-4xl">
              Life doesn't have to <span className="text-sun">wait</span>
              <Dot />
            </p>
          </Reveal>
        </div>
      </section>

      <Section id="meantors">
        <GlowOrbs />
        <SectionHead
          eyebrow="Our Meantors™"
          title={
            <>
              the support you need, how you need it, <span className="text-sun">when you need it most</span>
              <Dot />
            </>
          }
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {meantors.map((m) => (
            <StaggerItem key={m.name} className="glass group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40">
              <Mark className="absolute -right-4 -top-4 h-24 w-auto opacity-10 transition-transform duration-700 group-hover:rotate-12" />
              <div className="flex h-16 w-16 items-center justify-center border border-teal/40 bg-gradient-to-br from-teal/25 to-navy-700 font-display text-xl font-bold text-white">
                {initials(m.name)}
              </div>
              <h3 className="mt-5 text-xl font-bold">
                {m.name.toLowerCase()}
                <Dot />
              </h3>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-teal">{m.coach}</p>
              <p className="mt-1 text-sm text-white/50">{m.role}</p>
              {m.line && <p className="mt-5 flex-1 border-t border-white/10 pt-4 text-white/85 italic">&ldquo;{m.line}&rdquo;</p>}
            </StaggerItem>
          ))}
          <StaggerItem className="relative flex h-full flex-col justify-between overflow-hidden border border-sun/50 bg-gradient-to-br from-navy-700 to-navy-900 p-7">
            <Mark className="absolute -right-6 -bottom-8 h-40 w-auto opacity-20" />
            <div className="relative">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-sun">Not sure who fits?</p>
              <p className="mt-3 font-display text-2xl leading-snug font-bold text-white">
                We'll match you with a Meantor™ suited to your needs and your style<Dot />
              </p>
            </div>
            <Link href="/contact" className="relative mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sun hover:text-sun-soft">
              Get matched <ArrowRight className="h-4 w-4" />
            </Link>
          </StaggerItem>
        </Stagger>
        <SectionCTA next="#team" nextLabel="Meet the full team" />
      </Section>

      <Section id="team" tone="deeper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="The team"
              title={
                <>
                  the people behind <span className="text-teal">better</span>
                  <Dot />
                </>
              }
            />
            <Reveal className="relative aspect-[4/3] overflow-hidden border border-teal/20">
              <Image src="/images/team.jpg" alt="The Bettermeant team" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </Reveal>
          </div>
          <Stagger className="grid content-start gap-px overflow-hidden border border-teal/15 bg-teal/15 sm:grid-cols-2 lg:col-span-7">
            {team.map((t) => (
              <StaggerItem key={t.name} className="flex items-center gap-4 bg-navy-950 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-teal/30 bg-teal/10 font-display text-sm font-bold text-teal">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-display font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <SectionCTA next="#story" nextLabel="Our story" />
      </Section>

      <Section id="story">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Our story"
              title={
                <>
                  support <span className="text-sun">reimagined</span>. and we're just getting started
                  <Dot />
                </>
              }
            />
          </div>
          <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-white/75 lg:col-span-7">
            <p>
              Bettermeant started as a personal mission: self-improvement, and finding ways to help others improve their quality of
              life. To be better. What came out of it was a kind of support that had been missing in the world. A team that works for
              the future you, the one you're meant to be, not the one you are today or the one others want you to be.
            </p>
            <p>
              Some days that support is a compassionate listener. Other days, a dedicated advisor. It holds you accountable,
              celebrates your wins, and guides you through the lessons that come with setbacks.
            </p>
            <p className="font-display text-lg font-semibold text-white">
              We exist to help the world find more joy, confidence, and life. A better way to live, work, and run businesses.
            </p>
          </Reveal>
        </div>
        <SectionCTA next="/musings" nextLabel="Read our musings" />
      </Section>
    </>
  );
}
