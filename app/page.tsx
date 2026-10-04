import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import { Section, SectionHead, SectionCTA, Dot, Underlined, GlowOrbs, Button, Eyebrow } from "@/components/ui";
import { FeelingsGrid, ShiftsRow, Compare, ClientWall, Reviews } from "@/components/blocks";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { audiences, enterpriseQuote } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Stats />

      {/* Recognition */}
      <Section>
        <GlowOrbs />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead
              eyebrow="Sound familiar"
              title={
                <>
                  if any of this feels like <span className="text-sun">you</span>, you're in the right place<Dot />
                </>
              }
              intro="You don't have to label it burnout or breakdown. Most people just know something isn't working, and that what they have around them isn't enough."
            />
          </div>
          <div className="lg:col-span-8">
            <FeelingsGrid />
          </div>
        </div>
        <SectionCTA next="/meantorship" nextLabel="See how Meantorship works" />
      </Section>

      <Marquee />

      {/* Who we support */}
      <Section tone="deeper">
        <SectionHead
          eyebrow="Who we support"
          title={
            <>
              one model. built for <Underlined>where you are</Underlined>
              <Dot />
            </>
          }
          intro="Support that flexes with you, scaling up or down as needed. Picture a team of seasoned executives, career experts, startup veterans, and compassionate coaches in your corner."
        />
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <StaggerItem key={a.title}>
              <Link
                href={a.href}
                className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden border border-teal/20 p-8 transition-all duration-500 hover:border-teal/60"
              >
                {i === 0 ? (
                  <Image src="/images/individual.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-900 to-ink">
                    <Mark className={`absolute -right-8 top-6 h-64 w-auto opacity-15 transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-6`} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
                <div className="relative">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-teal">{a.kind}</p>
                  <h3 className="mt-3 text-3xl font-bold">
                    {a.title.toLowerCase()}
                    <Dot />
                  </h3>
                  <p className="mt-3 text-white/75">{a.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sun">
                    Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <SectionCTA next="/team" nextLabel="Meet the team" />
      </Section>

      {/* Coach vs Meantor */}
      <Section>
        <GlowOrbs />
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <SectionHead
            eyebrow="Why it's different"
            title={
              <>
                a coach is on your calendar. a Meantor™ is in your <span className="text-sun">life</span>
                <Dot />
              </>
            }
          />
          <Reveal className="mb-12 text-lg leading-relaxed text-white/70">
            Information has never been more available. Transformation has never been harder. Transformation doesn't happen through
            information. It happens through support, and real support adapts to what you need in this moment, not what's on the
            agenda for this session.
          </Reveal>
        </div>
        <Compare />
        <SectionCTA next="/meantorship#kinds" nextLabel="Compare the three kinds" />
      </Section>

      {/* Shifts */}
      <Section tone="deeper">
        <SectionHead
          eyebrow="The outcome"
          title={
            <>
              the shift that happens with the <span className="text-sun">right support</span>
              <Dot />
            </>
          }
        />
        <ShiftsRow />
        <SectionCTA next="/services/individuals" nextLabel="Explore our services" />
      </Section>

      {/* Proof */}
      <Section>
        <SectionHead
          center
          eyebrow="Trusted by leaders at"
          title={
            <>
              some of our <span className="text-teal">clients</span>
              <Dot />
            </>
          }
        />
        <ClientWall />
        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug font-semibold text-white md:text-3xl">&ldquo;{enterpriseQuote.quote}&rdquo;</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-teal">{enterpriseQuote.who}</p>
        </Reveal>
        <div className="mt-14">
          <Reviews />
        </div>
        <SectionCTA className="justify-center" next="/meantorship#stories" nextLabel="Read client stories" />
      </Section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-ink">
        <div className="grid-bg absolute inset-0" />
        <Mark className="absolute -right-20 top-1/2 h-[30rem] w-auto -translate-y-1/2 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Start with a conversation</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              you don't have to figure it out <span className="text-sun">alone</span>
              <Dot />
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              A discovery session is not a sales call. It's a real conversation to understand where you are, where you want to go,
              and whether Bettermeant is the right fit. No pressure. No pitch. Just honesty.
            </p>
          </Reveal>
          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book a discovery session</Button>
            <Button href="/musings" variant="light">
              Read our musings
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
