import { useState } from "react";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import PageHeader from "@/components/PageHeader";
import {
  Target,
  MessageSquare,
  Zap,
  Globe,
  Users,
  Video,
  Brain,
  Clock,
  Presentation,
  Shield,
  Search,
} from "lucide-react";

const pitchSteps = [
  {
    step: "01",
    title: "The best brief leads to Listen.",
    description:
      "Ask what they're trying to learn, not how they want to run the study. Position yourself as a strategic partner first. Listen becomes the natural solution when there is a need to understand the \"why\" across a large sample.",
  },
  {
    step: "02",
    title: "Show, don't explain.",
    description:
      "Use previous examples to show clients the Listen process and output. This will help build their trust in Listen, the new way to uncover insights.",
  },
  {
    step: "03",
    title: "Price it right, win the room.",
    description:
      "Present the Listen cost as the research cost, with your agency margin built in.",
  },
];

const positioningTabs = [
  {
    id: "cpg",
    label: "CPG",
    content:
      "Position Listen as the fastest way to test ideas before they go to market. CPG teams are constantly under pressure to validate concepts, messaging, and pack designs with real consumers. Listen lets you run rapid concept tests with hundreds of participants, getting authentic video responses and emotional reactions in days, not weeks. Lead with the ability to understand what truly resonates before spending on production or launch.",
  },
  {
    id: "tech",
    label: "Technology",
    content:
      "Position Listen as the go-to tool for continuous product discovery. Tech teams need to validate feature ideas early and often, but traditional research slows sprint cycles down. Listen lets product and UX teams run fast, async studies with real users to test concepts, flows, and messaging. Lead with speed, cost-efficiency, and the ability to move at the pace of product development.",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    content:
      "Position Listen as the edge in predicting what will actually sell. E-commerce brands need consumer signal before they commit to inventory, campaigns, or creative. Listen lets them run fast, video-based concept tests to understand which products, descriptions, and visuals will break through. Lead with the ability to de-risk product and marketing decisions with real consumer voices.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    content:
      "Position Listen as the way to run healthcare research at scale without cutting corners. Talk to doctors and patients across countries and languages at the same time, with a moderator that actually understands medical terms and drug names. If a respondent mentions a side effect, we flag it automatically so your safety team has a clean record. Lead with an approach to consent, data, and moderation built to work with your legal and compliance teams, not around them.",
  },
  {
    id: "financial",
    label: "Financial Services",
    content:
      "Position Listen as the key to building messaging that earns trust and validating brand positioning. Financial services brands need to communicate clearly and credibly to diverse audiences, but testing messaging and brand perception is often deprioritized due to time and cost. Listen enables rapid messaging tests and brand research with real consumers to understand what builds confidence and what creates confusion. Lead with the ability to move from \"we assume\" to \"consumers told us\" before a campaign goes live.",
  },
  {
    id: "hospitality",
    label: "Hospitality & Travel",
    content:
      "Position Listen as the richest source of guest feedback on services, experiences, and concepts. Hospitality and travel brands collect satisfaction scores, but rarely get the \"why.\" Listen enables video-based conversations with guests to capture emotional nuance, unpack service gaps, and validate new concept ideas. Lead with depth of insight that goes beyond ratings and star reviews.",
  },
];

const keyBenefits = [
  { icon: Clock, title: "Speed", description: "Move from setup to insights quickly while maintaining depth and rigor." },
  { icon: Zap, title: "Scale", description: "Run high-quality qualitative research with any sample size, without increasing effort." },
  { icon: Search, title: "Depth", description: "Get granular insights through automated targeted follow-ups that help understand the \"why\" behind responses." },
  { icon: Globe, title: "Multilingual", description: "Conduct and analyze research across 100+ languages with native-level understanding." },
  { icon: Users, title: "Flexible scheduling", description: "Respondents can join from their mobile device, from anywhere, whenever suits them. This flexibility makes incentives more comparable to quant studies." },
  { icon: Presentation, title: "Compelling outputs", description: "Instantly create reels, charts, summaries and content that can enhance your final deliverables." },
];

const standouts = [
  { icon: Video, title: "End-to-end, natural video conversations", description: "Interviews feel more like a conversation than a survey, with adaptive follow-ups that respond to what was just said and a moderator style that feels natural." },
  { icon: Brain, title: "True multimodal analysis", description: "Insights are derived not only from what people say, but also from visuals, tone of voice, emotions, behaviors, and context, all analyzed together." },
  { icon: Target, title: "Research-grade AI moderation", description: "The AI moderator is built on established research methodologies and probing techniques, ensuring consistency, depth, and relevance across interviews, while also incorporating researcher expertise and study nuance." },
  { icon: Clock, title: "Unlimited depth and duration", description: "Studies are not constrained by rigid time limits, enabling deeper exploration when needed without compromising participant experience." },
  { icon: Presentation, title: "Leverage insights effectively", description: "Support core stakeholder materials with Listen's in-depth analysis. Quickly answer research questions with our Research Agent or drive home a key point with emphasis by generating a custom highlight reel." },
  { icon: Shield, title: "Quality Guard", description: "Automated respondent quality checks that catch bots, low-effort responses, and off-topic answers before they hit your dataset." },
];

const objections = [
  {
    objection: "Will our internal stakeholders trust AI-moderated research findings?",
    response:
      "Yes, Listen already powers insights at top enterprises like Microsoft, Google, Nestle, Levi's and more. Listen only fields verified respondents and maintains full traceability within its platform.",
  },
  {
    objection: "Is AI actually able to conduct real research?",
    response:
      "Listen conducts full video interviews. Listen can draft interview guides based on your research objectives and detects when to ask follow-up questions in real time.",
  },
  {
    objection: "We can't afford to add another tool.",
    response:
      "Listen is significantly more cost-effective than traditional qual, and projects that once took weeks to field and analyze can be completed in days. The ROI pitch writes itself.",
  },
  {
    objection: "What about data security and compliance?",
    response:
      "Listen is SOC 2 Type II certified, GDPR compliant, HIPAA compliant, and ISO 27001, ISO 27701, and ISO 42001 certified. Enterprise-grade security that satisfies the most demanding clients.",
  },
];

const HowToPitch = () => {
  const [activeTab, setActiveTab] = useState("cpg");

  return (
    <div className="min-h-screen bg-surface-primary">
      <NavBar />
      <PageHeader
        label="Sales Enablement"
        title="How to pitch Listen."
        description="How to introduce Listen to clients who've never heard of AI-moderated research, and handle the questions that come up."
      />

      {/* Value Proposition */}
      <section className="py-20 bg-surface-highlight">
        <div className="container">
          <p className="text-[12px] text-content-secondary mb-8">The Value Proposition</p>
          <blockquote className="text-[28px] md:text-[40px] leading-[1.15] text-content-primary mb-8 max-w-4xl">
            <span className="text-content-brand">
              Listen gives agencies depth at scale and removes the moderator bottleneck.
            </span>{" "}
            Clients get video evidence, not just summaries. You deliver in days, not weeks.
          </blockquote>
          <p className="text-[16px] text-content-secondary leading-[1.6] max-w-3xl">
            The sell isn't "this is cheaper than focus groups." It's "you get more: more respondents,
            more flexibility, more evidence, faster." Position Listen as an upgrade to your current
            research workflow, not a replacement for it.
          </p>
        </div>
      </section>

      {/* Pitch steps */}
      <section className="py-20 bg-surface-primary">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            A pitch that actually works.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pitchSteps.map((step) => (
              <div
                key={step.step}
                className="border-t pt-6"
                style={{ borderColor: "var(--content-primary)" }}
              >
                <p className="text-[12px] text-content-secondary mb-6">{step.step}</p>
                <h3 className="text-[20px] text-content-primary mb-4 leading-[1.3]">{step.title}</h3>
                <p className="text-[14px] text-content-secondary leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning , full-width, editorial tab row with numbered indices */}
      <section className="py-24 bg-surface-highlight">
        <div className="container">
          <p className="text-[12px] text-content-secondary mb-8">Positioning</p>
          <h2 className="text-[48px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-content-primary mb-20 max-w-4xl">
            Position Listen by industry.
          </h2>

          {/* Tab row , 6-up grid, full-width, numbered, with a thick
              active-state underline for strong selected state */}
          <div
            className="grid grid-cols-3 md:grid-cols-6 border-t"
            style={{ borderColor: "var(--content-primary)" }}
          >
            {positioningTabs.map((tab, i) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left py-6 pr-4 transition-colors ${
                    active ? "text-content-primary" : "text-content-secondary hover:text-content-primary"
                  }`}
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: active ? "var(--content-primary)" : "transparent",
                  }}
                >
                  <span className="block text-[11px] text-content-secondary mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-[16px] md:text-[18px]">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content , two-column editorial layout: big industry name
              left, generous body right. Active tab label echoed in display
              scale as an anchor for the reader. */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-20">
            <div className="md:col-span-4">
              <p className="text-[12px] text-content-secondary mb-4">Industry</p>
              <p className="text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-content-primary">
                {positioningTabs.find((t) => t.id === activeTab)?.label}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] md:text-[20px] text-content-primary leading-[1.55]">
                {positioningTabs.find((t) => t.id === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Amplifier , full-width editorial split with a
          display-scale statement anchoring the left column */}
      <section className="py-24 bg-surface-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-7">
              <h2 className="text-[48px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-content-primary">
                Listen amplifies
                <br />
                your expertise.
              </h2>
            </div>
            <div className="md:col-span-5 space-y-6">
              <p className="text-[18px] md:text-[20px] text-content-primary leading-[1.55]">
                Listen doesn't replace your expertise, it amplifies it. You design the research,
                craft the discussion guide, and interpret the findings. Listen handles the
                time-consuming 80%; scheduling, moderating, transcribing, and initial coding.
              </p>
              <p className="text-[16px] text-content-secondary leading-[1.6]">
                Clients see linked verbatim quotes and timestamped clips. This is more transparent
                than traditional research, not less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-surface-highlight">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Key benefits.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {keyBenefits.map((b) => (
              <div key={b.title}>
                <b.icon className="h-5 w-5 text-content-brand mb-4" strokeWidth={1.5} />
                <h3 className="text-[18px] text-content-primary mb-2">{b.title}</h3>
                <p className="text-[14px] text-content-secondary leading-[1.6]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standouts */}
      <section className="py-20 bg-surface-primary">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Where Listen stands out.
          </h2>
          <div>
            {standouts.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-12 gap-6 items-start py-8 border-t"
                style={{
                  borderColor: "var(--surface-tertiary)",
                  borderBottomWidth: i === standouts.length - 1 ? 1 : 0,
                }}
              >
                <div className="col-span-1">
                  <s.icon className="h-[18px] w-[18px] text-content-brand" strokeWidth={1.25} />
                </div>
                <div className="col-span-11 md:col-span-4">
                  <h3 className="text-[16px] text-content-primary">{s.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[14px] text-content-secondary leading-[1.6]">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-20 bg-surface-highlight">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <MessageSquare className="h-6 w-6 text-content-brand" strokeWidth={2} />
            <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary">
              Handling common objections.
            </h2>
          </div>
          <div>
            {objections.map((item, i) => (
              <div
                key={i}
                className="py-8 border-t grid grid-cols-12 gap-6"
                style={{
                  borderColor: "var(--surface-tertiary)",
                  borderBottomWidth: i === objections.length - 1 ? 1 : 0,
                }}
              >
                <p className="col-span-12 md:col-span-5 text-[18px] text-content-primary">
                  "{item.objection}"
                </p>
                <p className="col-span-12 md:col-span-7 text-[14px] text-content-secondary leading-[1.6]">
                  → {item.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HowToPitch;
