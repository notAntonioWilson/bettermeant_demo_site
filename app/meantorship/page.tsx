import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import { Section, SectionHead, SectionCTA, Dot, Underlined, Button, GlowOrbs } from "@/components/ui";
import { SupportGrid, ReplacedList, Compare, KindsGrid, StoryCards, Reviews, FeelingsGrid } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { enterpriseQuote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meantorship™",
  description: "The mentorship most people wish they had. Finally exists. Three kinds of Meantorship™ for individuals, businesses, and organizations.",
};

export default function MeantorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Meantorship™"
        title={
          <>
            the mentorship most people wish they had. <span className="text-sun"><Underlined>finally exists.</Underlined></span>
          </>
        }
        intro={
          <>
            <p>
              People don't wake up looking for coaching or leadership development. They wake up overwhelmed. Isolated. Carrying
              more than they should.
            </p>
            <p>
              Bettermeant has reimagined mentorship for modern work and life, giving people the meaningful support they need to grow
              without carrying it all alone.
            </p>
          </>
        }
        aside={
          <div className="glass relative overflow-hidden p-8">
            <div className="glow-line absolute inset-x-0 top-0 h-px" />
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-sun">What this feels like</p>
            <p className="mt-4 font-display text-xl leading-snug font-semibold text-white">&ldquo;{enterpriseQuote.quote}&rdquo;</p>
            <p className="mt-3 text-sm text-white/55">{enterpriseQuote.who}</p>
            <div className="mt-7 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-navy-900 p-5">
                <p className="font-display text-5xl font-bold text-sun">1</p>
                <p className="mt-2 text-sm text-white/70">Trusted relationship that holds everything</p>
              </div>
              <div className="bg-navy-900 p-5">
                <p className="font-display text-5xl font-bold text-teal">3</p>
                <p className="mt-2 text-sm text-white/70">Kinds of Meantorship™ for individuals, businesses & organizations</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#kinds" variant="ghost">
            Find the right fit
          </Button>
          <Button href="/contact">Book a discovery session</Button>
        </div>
      </PageHero>

      <Marquee />

      {/* Story */}
      <Section>
        <GlowOrbs />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Why we built it"
              title={
                <>
                  mentorship used to mean something. we're bringing it <span className="text-sun">back</span>
                  <Dot />
                </>
              }
            />
            <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-white/75">
              <p>
                For most of human history, people didn't navigate work and life alone. They had villages. Guilds. Apprenticeships.
                Extended families. Faith communities. Elders who walked alongside them as a constant, trusted presence.
              </p>
              <p>
                Real mentorship wasn't a program. It was a relationship. Someone who knew your whole story, showed up before you
                asked, and helped you grow into hard things instead of just getting through them.
              </p>
              <p>
                Modern work filled the gap with specialists. Coaches for confidence. Consultants for strategy. Trainers for skills.
                HR for compliance. Each one valuable. None of them designed to hold the whole person: the leader and the human, the
                business and the life, the hard week and the big decision.
              </p>
              <p className="font-display text-lg font-semibold text-white">
                We didn't create Meantorship™ because we wanted a new category. We created it because people deserved the real
                thing. So we built it.
              </p>
            </Reveal>
          </div>
          <div className="lg:pt-24">
            <Reveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-white/50">What replaced real mentorship</p>
            </Reveal>
            <ReplacedList />
            <Reveal className="relative mt-5 overflow-hidden border border-teal/40 bg-gradient-to-r from-teal/15 to-transparent p-6">
              <Mark className="absolute -right-3 -bottom-6 h-24 w-auto opacity-25" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal">What Bettermeant rebuilt</p>
              <p className="relative mt-2 text-lg font-semibold text-white">
                Real mentorship, the original kind, rebuilt for today's workers, leaders, organizations, and humans.
              </p>
            </Reveal>
          </div>
        </div>
        <SectionCTA next="#support" nextLabel="What a Meantor™ does" />
      </Section>

      {/* Eight kinds of support */}
      <Section id="support" tone="deeper">
        <SectionHead
          eyebrow="Support isn't one thing"
          title={
            <>
              neither is <span className="text-sun">Meantorship™</span>
              <Dot />
            </>
          }
          intro="Your Meantor™ shifts based on what you actually need in the moment. Eight kinds of support, one relationship."
        />
        <SupportGrid />
        <div className="mt-14">
          <Compare />
        </div>
        <SectionCTA next="#kinds" nextLabel="See the three kinds" />
      </Section>

      {/* Three kinds */}
      <Section id="kinds">
        <GlowOrbs />
        <SectionHead
          center
          eyebrow="Three kinds. One for every situation"
          title={
            <>
              find the one that sounds like <span className="text-sun">you</span>
              <Dot />
            </>
          }
          intro="These aren't pricing tiers. They're three different kinds of mentorship, each designed for a different life situation."
        />
        <KindsGrid />
        <SectionCTA className="justify-center" next="#stories" nextLabel="See the results" />
      </Section>

      {/* Stories */}
      <Section id="stories" tone="deeper">
        <SectionHead
          eyebrow="Lives made better"
          title={
            <>
              before and <span className="text-teal">after</span>
              <Dot />
            </>
          }
        />
        <StoryCards />
        <div className="mt-8">
          <Reviews />
        </div>
        <SectionCTA next="/team" nextLabel="Meet the Meantors" />
      </Section>

      {/* Recognition */}
      <Section>
        <SectionHead
          eyebrow="Is this you"
          title={
            <>
              if any of this feels like you, start with a <span className="text-sun">conversation</span>
              <Dot />
            </>
          }
          intro="A discovery session is not a sales call. It's a real conversation about where you are, where you want to go, and whether Bettermeant is the right fit."
        />
        <FeelingsGrid />
        <SectionCTA next="/services/owners" nextLabel="For business owners" />
      </Section>
    </>
  );
}
