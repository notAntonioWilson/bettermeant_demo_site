import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { Section, SectionHead, SectionCTA, Dot, Underlined } from "@/components/ui";
import { NumberedSteps } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Instagram, Linkedin } from "@/components/BrandIcons";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "The first step to something better. Book a discovery session with Bettermeant.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            the first step to something <span className="text-sun"><Underlined>better.</Underlined></span>
          </>
        }
        intro={
          <>
            <p>
              Start with a discovery session. It's not a sales call. It's a real conversation to understand where you are, where you
              want to go, and whether Bettermeant is the right fit.
            </p>
            <div className="!mt-8 grid gap-3 text-base">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white hover:text-teal">
                <Mail className="h-5 w-5 text-teal" /> {site.email}
              </a>
              <span className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-teal" /> {site.location}
              </span>
              <div className="flex items-center gap-4 pt-1">
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/80 hover:text-teal">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/80 hover:text-teal">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
              </div>
            </div>
          </>
        }
        aside={<InquiryForm />}
      />

      <Section>
        <SectionHead
          eyebrow="What happens next"
          title={
            <>
              no pressure. no pitch. just <span className="text-sun">honesty</span>
              <Dot />
            </>
          }
        />
        <NumberedSteps
          steps={[
            { n: "01", title: "Inquire", text: "Send the form or email us. We'll set up a discovery session to understand your needs." },
            { n: "02", title: "Connect", text: "We dive into your goals and curate the right level and type of support for you." },
            { n: "03", title: "Become better", text: "Your Meantor™ helps you feel and do better with guidance built for you." },
          ]}
        />
        <Reveal className="mt-10 text-white/60">
          Don't want to wait? Email{" "}
          <a href={`mailto:${site.email}`} className="text-teal underline-offset-4 hover:underline">
            {site.email}
          </a>{" "}
          and we'll get back to you as soon as possible.
        </Reveal>
        <SectionCTA next="/meantorship#kinds" nextLabel="Compare the three kinds" contactLabel="Email us" contactHref={`mailto:${site.email}`} />
      </Section>
    </>
  );
}
