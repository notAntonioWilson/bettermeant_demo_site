// All copy comes from bettermeant.co, cleaned for typos and kept true to what the site says.

export const site = {
  name: "Bettermeant",
  email: "hello@bettermeant.co",
  location: "Portland, Oregon",
  linkedin: "https://www.linkedin.com/company/bettermeant/",
  instagram: "https://www.instagram.com/bettermeant.co/",
  store: "https://www.bettermeant.co/store",
  terms: "https://www.bettermeant.co/websitetermsofuse",
  privacy: "https://www.bettermeant.co/privacy-policy",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Meantorship", href: "/meantorship" },
  {
    label: "Services",
    href: "/services/individuals",
    children: [
      { label: "For individuals", href: "/services/individuals", note: "Personal Meantorship" },
      { label: "For owners & entrepreneurs", href: "/services/owners", note: "Business Meantorship" },
      { label: "For teams & companies", href: "/services/teams", note: "Enterprise Meantorship" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Musings", href: "/musings" },
  { label: "Contact", href: "/contact" },
];

export const marquee = [
  "Mentorship reimagined",
  "Support is the strategy",
  "A coach is on your calendar",
  "A Meantor™ is in your life",
  "Work was meant to matter",
  "You don't have to carry it alone",
  "Transformation happens through support",
  "Less carrying. More leading.",
];

export const feelings = [
  { k: "Feel", q: "I'm responsible for everyone. Who's responsible for me?" },
  { k: "Think", q: "I know what I should do. I just can't make it stick." },
  { k: "Say", q: "I've read the books. I've tried the coaching. Nothing's changed." },
  { k: "Wish", q: "I just want one person who understands everything going on." },
  { k: "Fear", q: "What if I'm the bottleneck in my own business, and always will be?" },
  { k: "Hide", q: "I look fine on the outside. Inside, I'm running on empty." },
];

export const shifts = [
  { from: "Surviving", to: "Thriving", text: "Not waiting for the weekend. Actually living in what's in front of you." },
  { from: "Isolation", to: "Real support", text: "One person who knows your whole story and shows up as what you need." },
  { from: "White-knuckling", to: "Confidence", text: "Making decisions with clarity instead of just getting through them." },
  { from: "Stuck", to: "Momentum", text: "Finally closing the gap between knowing what to do and actually doing it." },
];

export const supportKinds = [
  { title: "Teaching", text: "When you need to learn something new. A skill, a framework, a better way.", icon: "GraduationCap" },
  { title: "Coaching", text: "When you need to look inward. Clarity, confidence, self-awareness, growth.", icon: "MessageCircle" },
  { title: "Strategic advice", text: "When you need to think through a decision, a direction, a plan.", icon: "Compass" },
  { title: "Accountability", text: "When you need someone holding the standard with you, not just cheering.", icon: "Handshake" },
  { title: "Encouragement", text: "When you can't quite find the grit to believe in yourself, and someone does.", icon: "Heart" },
  { title: "Reinforcement", text: "When you know what to do but need someone to hold it steady while you do it.", icon: "Shield" },
  { title: "Carrying the weight", text: "When you need someone to share the emotional load, not just the tactical one.", icon: "Scale" },
  { title: "Perspective", text: "When you're too close to see clearly and need someone who can.", icon: "Search" },
] as const;

export const traditional = [
  "One-hour sessions, usually twice a month",
  "A specialized lens. A coach sees coaching problems, a consultant sees consulting problems",
  "Shows up when you schedule them",
  "You manage the relationships, reconcile the advice, and carry the mental load",
];

export const meantor = [
  "Sessions plus real-time access in between, when something actually comes up",
  "Holds your whole context and flexes between coaching, advising, strategy, and accountability",
  "Checks in before something hard is coming",
  "You manage one relationship. They manage the rest.",
];

export const replaced = [
  { icon: "Coffee", text: "Coffee chats with senior colleagues" },
  { icon: "ClipboardList", text: "Formal mentor programs that match names on a spreadsheet" },
  { icon: "UserX", text: "\"Future managers\" too busy to actually show up" },
  { icon: "Glasses", text: "Specialized coaches with one lens, not the whole person" },
  { icon: "BookOpen", text: "Books, courses, and training programs" },
] as const;

export type Kind = {
  id: string;
  tag: string;
  name: string;
  forWho: string;
  includes: string[];
  cta: string;
  featured?: boolean;
  page: string;
};

export const kinds: Kind[] = [
  {
    id: "personal",
    tag: "Individual",
    name: "Personal Meantorship™",
    forWho:
      "For individuals navigating career growth, life transitions, or a season that's heavier than it should be, and carrying it largely alone.",
    includes: [
      "2 dedicated 1:1 sessions a month with your Meantor™",
      "Real-time access between sessions, not just on the calendar",
      "Proactive check-ins when something hard is coming",
      "Enneagram + Leaderid™ to map your growth",
      "LearningLabs™ and group experiences",
      "Frameworks and toolkits curated for your challenges",
    ],
    cta: "Book a discovery session",
    page: "/services/individuals",
  },
  {
    id: "business",
    tag: "Most chosen · Business owners",
    name: "Business Meantorship™",
    forWho:
      "For founders and business owners who built something real and became the bottleneck. One partner who holds both the person and the business.",
    includes: [
      "Everything in Personal Meantorship™, plus a full business layer",
      "Sessions flex between leadership and operations. No explaining yourself from scratch",
      "Real-time access for decisions that can't wait",
      "Strategic advising built in, not a separate engagement",
      "Clarity & Direction, Leadership & People, Structure & Operations",
      "Team Meantorship™ available for your key people",
    ],
    cta: "Book a discovery session",
    featured: true,
    page: "/services/owners",
  },
  {
    id: "enterprise",
    tag: "Corporate & enterprise",
    name: "Enterprise Meantorship™",
    forWho:
      "For corporate leaders and organizations who have invested in development before and are ready for growth that sticks and compounds across culture.",
    includes: [
      "Individual Meantorship™ for each enrolled leader",
      "Team Meantorship™ for coordinated, aligned development",
      "BetterLeader™: leadership growth from the inside out",
      "BetterCulture™: build the culture you actually want",
      "BetterBusiness™: lasting organizational foundations",
      "Custom programs scoped to your goals and culture",
    ],
    cta: "Schedule a conversation",
    page: "/services/teams",
  },
];

export const stories = [
  {
    label: "Individual · Leadership",
    title: "A VP stopped leading on autopilot",
    who: "VP, Global Finance · Visa",
    before: "Projecting confidence outward. Holding it together through force of will. Disconnected from the leader she wanted to be.",
    after: "Leading from identity, not effort. A more confident, honest version of herself.",
    quote: "I didn't just become a better leader. I became a more confident, honest version of myself.",
  },
  {
    label: "Business owner · 33 years in",
    title: "An entrepreneur outgrew his own thinking",
    who: "Mark Richards · Serial entrepreneur",
    before: "Running the business on decades of experience alone. Capable, but without support to think differently.",
    after: "New thinking unlocked new directions. Business and personal growth happened at the same time.",
    quote:
      "A profound impact on my business and me personally. I have been an entrepreneur for over 33 years yet find Sarah opens my ideas to new ways of thinking.",
  },
  {
    label: "Corporate · Team development",
    title: "An L&D leader whose training wasn't sticking",
    who: "VP, Learning & Development · Tillamook",
    before: "Programs ran. Content was delivered. Six months later, the behaviors hadn't changed.",
    after: "Behavior change that lasted, because it built inner capacity alongside outer skill.",
    quote:
      "The LearningLab concept is the perfect mix between training, real-life learning, and group coaching. It's been incredibly effective.",
  },
];

export const reviews = [
  {
    quote: "I am not letting things happen to me. I am making them happen for me. This was the best decision I made for myself.",
    name: "Leilianna Cantu",
    role: "Individual client",
  },
  {
    quote:
      "If you want coaching from someone who is locked in, cares deeply, and champions you even when you can't find the grit to believe in yourself, work with these amazing women.",
    name: "Brian Mills",
    role: "Business owner",
  },
  {
    quote:
      "You somehow blend EQ, strategy, and truth-telling in a way no one else can. You helped me see what was possible when I stopped leading on autopilot.",
    name: "Navira",
    role: "Product Director, Amazon",
  },
];

export const enterpriseQuote = {
  quote: "Working with Bettermeant is like having a trusted guide, a strategic partner, and a deeply human sounding board, all in one.",
  who: "Corporate client, enterprise engagement",
};

export const audiences = [
  {
    title: "Individual leaders",
    text: "Unlock your full potential with support and growth built specifically for you.",
    href: "/services/individuals",
    kind: "Personal Meantorship™",
  },
  {
    title: "Owners & entrepreneurs",
    text: "Grow a thriving business and enjoy what you do, with support that holds the person and the business.",
    href: "/services/owners",
    kind: "Business Meantorship™",
  },
  {
    title: "Teams & companies",
    text: "Elevate employee experience, turn managers into leaders, and get expert guidance for a growing company.",
    href: "/services/teams",
    kind: "Enterprise Meantorship™",
  },
];

export const team = [
  { name: "Sarah Walton", role: "Co-founder, Chief Bettermeant Officer", coach: "Leadership, business & executive coach", line: "I help you become who you are meant to be." },
  { name: "Jennifer Gruetzner", role: "Co-founder, Business & Finance", coach: "Executive & business coach" },
  { name: "Jan Favreau", role: "Co-founder, Practice Lead", coach: "Relationship & executive coach", line: "I help you connect to yourself and the world around you." },
  { name: "Lisa Lopez", role: "Co-founder, Leadership Coach" },
  { name: "Ami Joshi", role: "Client Operations", coach: "Leadership & business coach", line: "I help you impact your world by supporting meaningful growth within you." },
  { name: "Heather Armstrong", role: "Coach", coach: "Executive & communication coach", line: "I help you with communication, coherence and connection." },
  { name: "Kelsey McPherson", role: "Client Engagement" },
  { name: "Hannah Shontz", role: "Product & Programs" },
  { name: "Tracy Waldman", role: "Brand Design" },
  { name: "Adam Peña", role: "Design" },
];

export const musings = [
  { title: "I built the company I needed.", date: "2026-09-14", excerpt: "Five years into Bettermeant, the original founder writes about the journey and the lessons of the past five years." },
  { title: "Leadership in a Time of Pressure: Two Paths, One Choice", date: "2025-06-13", excerpt: "In times of rapid change, leaders face a choice: lead with fear or lead with trust. The way we lead through uncertainty will define what we build on the other side of it." },
  { title: "What Is Meantorship™?", date: "2025-05-23", excerpt: "Meantorship™ is more than coaching or mentorship. It's a new model for growing bold, self-aware leaders. Here's what makes it different, and better." },
  { title: "The Power of Self-Awareness: Why Every Leader Should Know Their Enneagram Type", date: "2025-05-23", excerpt: "Knowing your Enneagram type isn't just personal insight. It's a leadership advantage that fuels better teams and braver decisions." },
  { title: "Leadership in the Age of AI: What Human-Centered Leaders Must Do Next", date: "2025-05-23", excerpt: "" },
  { title: "Learning to lead.", date: "2025-02-13", excerpt: "Leadership isn't about titles. It's about mindset. Real leadership means slowing down, thinking strategically, and acting with intention." },
  { title: "Agency and leadership", date: "2025-01-29", excerpt: "Feeling stuck in your career, leadership, or personal growth? How to shift from autopilot to intention and regain momentum." },
  { title: "Lessons for a better life", date: "2024-04-24", excerpt: "Our Chief Bettermeant Officer shares simple ways to lead a better life. Small changes that can have a huge impact on us all." },
  { title: "On embracing better", date: "2024-01-19", excerpt: "Most people at the highest levels have had a coach of some sort. So why do so many of us question what a coach could do for us?" },
  { title: "The meaning revolution", date: "2024-01-19", excerpt: "Does your work really matter? The time is now for leaders to come to the table and for companies to make sure it all means something." },
  { title: "A year of Bettermeant", date: "2024-01-19", excerpt: "One year after leaving a high-paid corporate job, Sarah Walton reflects on how far Bettermeant has come and how far it wants to go." },
  { title: "The new best is… better", date: "2024-01-19", excerpt: "Trying to be the best is burning us out. What if the goal was growth, purpose, and the childlike kind of joy instead?" },
  { title: "Enneagram in the workplace", date: "2024-01-19", excerpt: "How leaders and teams can use the Enneagram to build better, more diverse teams and connect with people." },
  { title: "The Enneagram and personal development", date: "2023-11-20", excerpt: "We all need to understand not only how we are, but why we are. The Enneagram as a map to ourselves and to others." },
  { title: "Understanding the Enneagram", date: "2023-11-20", excerpt: "The nine personality types and how they relate to personal development and workplace dynamics." },
];
