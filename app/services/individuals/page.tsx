import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionHead, SectionCTA, Dot, Underlined, Button, GlowOrbs } from "@/components/ui";
import { KindsGrid, NumberedSteps, StoryCards } from "@/components/blocks";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "For individuals",
  description: "Personal Meantorship™: a support system to help you thrive through the career decisions, hard conversations, and heavy seasons.",
};

const moments = ["The career decision.", "The difficult conversation.", "The growing responsibility.", "The season where what used to work no longer does."];

const areas = [
  { t: "Executive", d: "The skills and confidence to do the job you want, not the job you have." },
  { t: "Leadership", d: "Learn to love leadership and feel confident and purposeful in your role." },
  { t: "Career", d: "Find a career that fuels you and uses your skills and experience." },
  { t: "Business", d: "The confidence and skills to lead and run a business, and the mindset to enjoy it." },
  { t: "Life", d: "Learn to love and appreciate the messiness of life." },
  { t: "Relationships", d: "Navigate any relationship, personal or professional, with ease." },
];

const model = [
  { t: "Dedicated Meantor™", d: "Matched to your needs and your style." },
  { t: "Expert team", d: "An expert team in the background providing additional support, coaching, and training." },
  { t: "Custom-built program", d: "Every client gets a program built from the Bettermeant approach, starting with a full life audit." },
  { t: "Support reimagined", d: "Training and real growth in a supportive environment." },
  { t: "Inspired. Connected.", d: "Connected with yourself as an individual and a leader, and inspired for the life ahead." },
];

export default function IndividualsPage() {
  return (
    <>
      <PageHero
        image="/images/individual.jpg"
        eyebrow="For individuals · Personal Meantorship™"
        title={
          <>
            we can't change the world. but we can help you <span className="text-sun"><Underlined>change your world.</Underlined></span>
          </>
        }
        intro={
          <p>
            You don't need another person giving you advice from the sidelines. You need someone in your corner who understands who
            you are, what you're carrying, and the person and leader you're working to become.
          </p>
        }
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#personal" variant="ghost">
            What's included
          </Button>
          <Button href="/contact">Book a discovery session</Button>
        </div>
      </PageHero>

      <Section>
        <GlowOrbs />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="More than coaching"
              title={
                <>
                  a support system to help you <span className="text-sun">thrive</span>
                  <Dot />
                </>
              }
            />
            <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-white/75">
              <p>
                Bettermeant combines coaching, practical tools, honest perspective, and real-time support to help you navigate the
                moments that matter.
              </p>
              <p>
                We help you build more than skills. Together, we strengthen your self-awareness, confidence, judgment, and identity
                as a leader, so you can make clearer decisions, lead with greater intention, and create a life and career that feel
                like your own.
              </p>
              <p className="font-semibold text-white">
                This isn't about fixing you or turning you into someone else. It's about helping you understand yourself, trust
                yourself, and handle what comes next.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-white/50">The moments that matter</p>
            </Reveal>
            <Stagger className="space-y-3">
              {moments.map((m, i) => (
                <StaggerItem key={m} className="flex items-center gap-5 border border-teal/20 bg-white/[0.03] px-5 py-5">
                  <span className="font-mono text-sm text-sun">0{i + 1}</span>
                  <span className="font-display text-lg font-semibold text-white">{m}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
        <SectionCTA next="#how" nextLabel="How it works" />
      </Section>

      <Section id="how" tone="deeper">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              three steps to <span className="text-teal">better</span>
              <Dot />
            </>
          }
        />
        <NumberedSteps
          steps={[
            { n: "01", title: "Inquire", text: "Book a discovery session. One of our experts meets with you to understand your needs." },
            { n: "02", title: "Connect", text: "We dive into your personal goals and curate the right level and type of support for you." },
            { n: "03", title: "Become better", text: "The right Meantor™ helps you feel and do better with guidance built for you." },
          ]}
        />
        <Reveal className="relative mt-14 aspect-[16/7] overflow-hidden border border-teal/20 md:aspect-[1297/444]">
          <Image src="/images/individual.jpg" alt="A Bettermeant client" fill sizes="(max-width:1280px) 100vw, 1216px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-sun">Our model</p>
            <p className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              it's no longer lonely at the top<Dot />
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {model.map((m, i) => (
            <StaggerItem key={m.t} className="glass h-full p-5">
              <span className="font-mono text-sm text-teal">0{i + 1}</span>
              <p className="mt-3 font-display font-semibold text-white">{m.t}</p>
              <p className="mt-1 text-sm text-white/65">{m.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <SectionCTA next="#areas" nextLabel="Where we help" />
      </Section>

      <Section id="areas">
        <SectionHead
          eyebrow="Where we help"
          title={
            <>
              whatever you're working through, there's a <span className="text-sun">Meantor™</span> for it
              <Dot />
            </>
          }
          intro="Not sure what you need? That's normal. Every program starts with a full life audit, and we build the team around you."
        />
        <Stagger className="grid gap-px overflow-hidden border border-teal/15 bg-teal/15 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <StaggerItem key={a.t} className="group bg-navy-950 p-7 transition-colors hover:bg-navy-900">
              <h3 className="text-xl font-bold">
                {a.t.toLowerCase()}
                <span className="text-teal">.</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{a.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <SectionCTA next="/team" nextLabel="Meet the Meantors" />
      </Section>

      <Section id="personal" tone="deeper">
        <GlowOrbs />
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Personal Meantorship™"
              title={
                <>
                  what you get<Dot />
                </>
              }
              intro="For individuals navigating career growth, life transitions, or a season that's heavier than it should be."
            />
            <StoryCards only={[0]} />
          </div>
          <div className="lg:col-span-7">
            <KindsGrid only={["personal"]} />
          </div>
        </div>
        <SectionCTA next="/meantorship#kinds" nextLabel="Compare all three kinds" />
      </Section>
    </>
  );
}
