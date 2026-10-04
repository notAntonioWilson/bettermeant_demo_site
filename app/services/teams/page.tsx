import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHead, SectionCTA, Dot, Underlined, Button, GlowOrbs } from "@/components/ui";
import { KindsGrid, StoryCards, ClientWall } from "@/components/blocks";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Check, Compass, Handshake, MessageCircle, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "For teams & companies",
  description: "Enterprise Meantorship™: leadership and team development that sticks and compounds across your culture.",
};

const offer = [
  "Custom workshops that unleash the potential in your leaders",
  "Assessments that guide teams toward excellence",
  "Plans designed around your organization's unique needs",
  "Subject matter experts across many industries",
  "Practical approaches that maximize your team's potential",
  "Individual and group leadership training",
];

const pillars = [
  { icon: Mic, t: "Inspire", d: "Engage your team with workshops, speakers, community, and more." },
  { icon: MessageCircle, t: "Coach", d: "Work, life, or business, we have the right Meantor™." },
  { icon: Compass, t: "Advise", d: "Tap into seasoned experts to help you and your company." },
  { icon: Handshake, t: "Partner", d: "Elevate employee experience, turn managers into leaders, and get expert guidance as you grow." },
];

const industries = ["Healthcare", "Non-profit", "Retail", "Corporate", "Media", "Education"];

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="For teams & companies · Enterprise Meantorship™"
        title={
          <>
            power up your organization with the <span className="text-sun"><Underlined>right support.</Underlined></span>
          </>
        }
        intro={
          <p>
            For corporate leaders and organizations who have invested in development before and are ready for growth that actually
            sticks and compounds across culture.
          </p>
        }
        aside={
          <div className="glass relative overflow-hidden p-8">
            <div className="glow-line absolute inset-x-0 top-0 h-px" />
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-sun">What we bring</p>
            <ul className="mt-5 space-y-3">
              {offer.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#enterprise" variant="ghost">
            Enterprise Meantorship™
          </Button>
          <Button href="/contact">Schedule a conversation</Button>
        </div>
      </PageHero>

      <Section>
        <GlowOrbs />
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              four ways we support your <span className="text-sun">people</span>
              <Dot />
            </>
          }
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <StaggerItem key={p.t} className="glass group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40">
              <span className="absolute right-5 top-4 font-mono text-xs text-white/30">0{i + 1}</span>
              <div className="flex h-12 w-12 items-center justify-center border border-teal/30 bg-teal/10 text-teal">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">
                {p.t.toLowerCase()}
                <Dot />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <span className="mr-2 font-mono text-xs uppercase tracking-[0.22em] text-white/50">Experts across</span>
          {industries.map((i) => (
            <span key={i} className="border border-teal/30 bg-teal/5 px-4 py-2 text-sm text-white/85">
              {i}
            </span>
          ))}
        </Reveal>
        <SectionCTA next="#enterprise" nextLabel="See Enterprise Meantorship™" contactLabel="Schedule a conversation" />
      </Section>

      <Section id="enterprise" tone="deeper">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Enterprise Meantorship™"
              title={
                <>
                  growth that sticks and <span className="text-sun">compounds</span>
                  <Dot />
                </>
              }
              intro="Individual Meantorship™ for each enrolled leader, coordinated team development, and programs scoped to your goals and culture."
            />
            <StoryCards only={[2]} />
          </div>
          <div className="lg:col-span-7">
            <KindsGrid only={["enterprise"]} />
          </div>
        </div>
        <SectionCTA next="#proof" nextLabel="Who we've worked with" contactLabel="Schedule a conversation" />
      </Section>

      <Section id="proof">
        <SectionHead
          center
          eyebrow="Proof"
          title={
            <>
              trusted by teams at <span className="text-teal">world-class companies</span>
              <Dot />
            </>
          }
        />
        <ClientWall />
        <div className="mt-10">
          <StoryCards only={[0]} />
        </div>
        <SectionCTA className="justify-center" next="/meantorship" nextLabel="How Meantorship™ works" contactLabel="Schedule a conversation" />
      </Section>
    </>
  );
}
