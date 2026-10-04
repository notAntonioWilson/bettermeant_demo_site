import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHead, SectionCTA, Dot, Underlined, Button, GlowOrbs } from "@/components/ui";
import { KindsGrid, StoryCards, NumberedSteps } from "@/components/blocks";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { Briefcase, Compass, Layers, Scale, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "For owners & entrepreneurs",
  description: "Business Meantorship™: one partner who holds both the person and the business, for founders who built something real and became the bottleneck.",
};

const focus = [
  { icon: Users, t: "Confident leaders and owners", d: "Grow into the leader your business needs, and enjoy the role." },
  { icon: Compass, t: "Vision, mission, and direction", d: "Craft a compelling vision and mission with a clear plan behind it." },
  { icon: Layers, t: "Operations and structure", d: "Build seamless operations and structure that doesn't depend on you for everything." },
  { icon: Scale, t: "Finances, team, and key decisions", d: "Strengthen finances, team dynamics, and the functional decisions that shape the business." },
  { icon: Briefcase, t: "Valuable connections", d: "Get connected with leaders, partners, and companies that move you forward." },
];

export default function OwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For owners & entrepreneurs · Business Meantorship™"
        title={
          <>
            power up your business with the <span className="text-sun"><Underlined>right support.</Underlined></span>
          </>
        }
        intro={
          <p>
            We bring people, resources, and experience to help you run your business with confidence and enjoy the experience. One
            partner who holds both the person and the business.
          </p>
        }
        aside={
          <div className="glass relative overflow-hidden p-8">
            <div className="glow-line absolute inset-x-0 top-0 h-px" />
            <Mark className="absolute -right-6 -bottom-8 h-40 w-auto opacity-15" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sun">Fear</p>
            <p className="relative mt-4 font-display text-2xl leading-snug font-semibold text-white">
              &ldquo;What if I'm the bottleneck in my own business, and always will be?&rdquo;
            </p>
            <p className="relative mt-5 text-sm leading-relaxed text-white/65">
              Business Meantorship™ is the most chosen kind of Meantorship™, built for founders and owners who built something real
              and became the bottleneck.
            </p>
          </div>
        }
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#business" variant="ghost">
            What's included
          </Button>
          <Button href="/contact">Book a discovery session</Button>
        </div>
      </PageHero>

      <Section>
        <GlowOrbs />
        <SectionHead
          eyebrow="Small to mid-sized businesses"
          title={
            <>
              we're obsessed with helping businesses grow and <span className="text-sun">thrive</span>
              <Dot />
            </>
          }
          intro="Sessions flex between leadership and operations, so you never have to explain yourself from scratch."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {focus.map((f) => (
            <StaggerItem key={f.t} className="glass group p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40">
              <div className="flex h-11 w-11 items-center justify-center border border-teal/30 bg-teal/10 text-teal">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg leading-snug font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <SectionCTA next="#business" nextLabel="See Business Meantorship™" />
      </Section>

      <Section id="business" tone="deeper">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Business Meantorship™"
              title={
                <>
                  the person and the business, <span className="text-sun">held together</span>
                  <Dot />
                </>
              }
              intro="Everything in Personal Meantorship™, plus a full business layer covering Clarity & Direction, Leadership & People, and Structure & Operations."
            />
            <StoryCards only={[1]} />
          </div>
          <div className="lg:col-span-7">
            <KindsGrid only={["business"]} />
          </div>
        </div>
        <SectionCTA next="#start" nextLabel="How to get started" />
      </Section>

      <Section id="start">
        <SectionHead
          eyebrow="Getting started"
          title={
            <>
              from first call to real <span className="text-teal">momentum</span>
              <Dot />
            </>
          }
        />
        <NumberedSteps
          steps={[
            { n: "01", title: "Inquire", text: "Book a discovery session. We learn where you are and what the business needs." },
            { n: "02", title: "Connect", text: "We curate the right level and type of support for you and your key people." },
            { n: "03", title: "Become better", text: "Your Meantor™ works across the person and the business, with strategic advising built in." },
          ]}
        />
        <Reveal className="mt-10 border-l-2 border-sun pl-6">
          <p className="max-w-3xl font-display text-xl font-semibold text-white">
            Team Meantorship™ is available for your key people, so the whole leadership team grows with you.
          </p>
        </Reveal>
        <SectionCTA next="/services/teams" nextLabel="For teams & companies" />
      </Section>
    </>
  );
}
