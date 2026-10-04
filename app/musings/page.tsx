import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionCTA, Dot, Underlined, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { musings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Musings",
  description: "Being real people, doing real work, and living meaningful lives. Writing on leadership, Meantorship™, and the Enneagram.",
};

function fmt(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function MusingsPage() {
  const [featured, ...rest] = musings;
  return (
    <>
      <PageHero
        eyebrow="Musings"
        title={
          <>
            a better <span className="text-sun"><Underlined>way.</Underlined></span>
          </>
        }
        intro={<p>Join us as we explore being real people, doing real work, and living meaningful lives.</p>}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#latest" variant="ghost">
            Read the latest
          </Button>
          <Button href="/contact">Book a discovery session</Button>
        </div>
      </PageHero>

      <Section id="latest">
        <Reveal className="relative overflow-hidden border border-sun/40 bg-gradient-to-br from-navy-700 to-navy-900 p-8 md:p-12">
          <Mark className="absolute -right-6 -bottom-10 h-64 w-auto opacity-15" />
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sun">Latest · {fmt(featured.date)}</p>
          <h2 className="relative mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{featured.title}</h2>
          <p className="relative mt-5 max-w-2xl text-lg text-white/75">{featured.excerpt}</p>
        </Reveal>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <StaggerItem key={m.title} className="glass group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal">{fmt(m.date)}</p>
              <h3 className="mt-3 text-lg leading-snug font-bold">{m.title}</h3>
              {m.excerpt && <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{m.excerpt}</p>}
              <span className="mt-5 h-0.5 w-10 bg-sun transition-all duration-500 group-hover:w-20" />
            </StaggerItem>
          ))}
        </Stagger>
        <SectionCTA next="/meantorship" nextLabel="What is Meantorship™" />
      </Section>

      <section className="relative overflow-hidden border-t border-teal/15 bg-ink">
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-sun">Not ready to commit?</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              join the club. more joy, less grind<Dot />
            </h2>
            <p className="mt-3 max-w-xl text-white/70">We're exploring a better way to lead, work, and live. Come along.</p>
          </Reveal>
          <Reveal className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact?topic=club" variant="ghost">
              Join the club
            </Button>
            <Button href="/contact">Contact us</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
