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
import { Button } from "@/components/ui/button";

const pitchSteps = [
  {
    step: "01",
    title: "Start with the brief, not the tool.",
    description:
      "Ask what they're trying to learn, not how they want to run the study. Position yourself as a strategic partner first. Listen becomes the natural solution once the need is clear.",
  },
  {
    step: "02",
    title: "Show, don't explain.",
    description:
      "The best pitch is a demo or a pilot result. Offer to run a small test on a real brief. Most clients who see a Listen output become believers immediately.",
  },
  {
    step: "03",
    title: "Price it right, win the room.",
    description:
      "Present the Listen cost as the research cost, with your agency margin built in. Clients don't need to know the underlying tool — they need to know what they'll get and when.",
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
      "Position Listen as the go-to tool for continuous product discovery. Tech teams need to validate feature ideas early and often, but traditional research slows sprint cycles down. Listen lets product and UX teams run fast, async studies with real users to test concepts, flows, and messaging before a single line of code is written. Lead with speed, cost-efficiency, and the ability to move at the pace of product development.",
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
      "Position Listen as the most accessible way to reach patients, HCPs, and payers at scale. Healthcare research has traditionally been slow, expensive, and logistically complex. Listen enables async video conversations with hard-to-reach audiences across segments, delivering genuine emotional and behavioral insight. Lead with compliance-friendly, high-quality qual that doesn't require scheduling 1:1 interviews.",
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
  { icon: Users, title: "Flexible scheduling", description: "Respondents participate on their own time. They can join from their phone, anywhere, whenever it suits them." },
  { icon: Presentation, title: "Compelling outputs", description: "Instantly create reels, charts, summaries, and slide-ready content stakeholders engage with." },
];

const standouts = [
  { icon: Video, title: "End-to-end, natural video conversations", description: "Interviews feel more like a conversation than a survey, with adaptive follow-ups that respond to what was just said and a moderator style that feels natural." },
  { icon: Brain, title: "True multimodal analysis", description: "Insights are derived not only from what people say, but also from visuals, tone of voice, emotions, behaviors, and context — all analyzed together." },
  { icon: Target, title: "Research-grade AI moderation", description: "The AI moderator is built on established research methodologies and probing techniques, ensuring consistency, depth, and relevance across interviews — while tactfully incorporating the researcher's expertise." },
  { icon: Clock, title: "Unlimited depth and duration", description: "Studies are not constrained by rigid time limits, enabling deeper exploration when needed without compromising participant experience." },
  { icon: Presentation, title: "From insights to usable content", description: "Findings are immediately translated into stakeholder-ready outputs — video highlight reels, charts, summaries, and presentation-ready materials." },
  { icon: Shield, title: "Quality Guard", description: "Automated respondent quality checks that catch bots, low-effort responses, and off-topic answers before they hit your deliverable." },
];

const objections = [
  {
    objection: "Is AI actually able to conduct real research?",
    response:
      "Listen conducts full video interviews with natural conversation flow. The AI detects when to ask follow-up questions in real time and can even draft interview guides based on your research objectives.",
  },
  {
    objection: "We can't afford to add another tool.",
    response:
      "Listen is significantly more cost-effective than traditional qual, and projects that once took weeks to field and analyze can be completed in days. The ROI pitch writes itself.",
  },
  {
    objection: "We don't have time to learn a new platform.",
    response:
      "Agencies typically launch their first project within a day. The platform is designed to be intuitive: upload a discussion guide, define your audience, and Listen handles the rest.",
  },
  {
    objection: "What about data security and compliance?",
    response:
      "SOC 2 Type II certified, GDPR compliant, HIPAA compliant. Enterprise-grade security that satisfies the most demanding clients.",
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
        <div className="container max-w-5xl">
          <p className="text-[12px] text-content-secondary mb-8">The Value Proposition</p>
          <blockquote className="text-[28px] md:text-[40px] leading-[1.15] text-content-primary mb-8 max-w-4xl">
            Listen gives agencies what qual has always promised but rarely delivered: depth at scale,
            without the moderator bottleneck.{" "}
            <span className="text-content-brand">
              Clients get video evidence, not just summaries. You deliver in days, not weeks.
            </span>
          </blockquote>
          <p className="text-[16px] text-content-secondary leading-[1.6] max-w-3xl">
            The sell isn't "this is cheaper than focus groups." It's "you get more: more respondents,
            more flexibility, more evidence, faster." Position Listen as an upgrade to your current
            research workflow, not a replacement for it.
          </p>

          <div
            className="mt-12 p-8 border-l-2 max-w-3xl"
            style={{
              backgroundColor: "var(--surface-brand-secondary)",
              borderColor: "var(--content-brand)",
            }}
          >
            <p className="text-[12px] text-content-secondary mb-3">78-Second Overview</p>
            <p className="text-[18px] text-content-primary mb-6 leading-[1.4]">
              Drop this into a proposal or play it at the start of a meeting.
            </p>
            <Button size="sm" asChild>
              <a href="https://www.youtube.com/watch?v=v_-R9ijUo4Y" target="_blank" rel="noopener noreferrer">
                Watch the Overview
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pitch steps */}
      <section className="py-20 bg-surface-primary">
        <div className="container max-w-5xl">
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

      {/* Positioning tabs */}
      <section className="py-20 bg-surface-highlight">
        <div className="container max-w-5xl">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Position Listen by industry.
          </h2>
          <div
            className="flex flex-wrap gap-6 mb-8 border-b pb-4"
            style={{ borderColor: "var(--surface-tertiary)" }}
          >
            {positioningTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[14px] transition-colors ${
                  activeTab === tab.id
                    ? "text-content-primary"
                    : "text-content-secondary hover:text-content-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-[16px] text-content-primary leading-[1.6] max-w-3xl">
            {positioningTabs.find((t) => t.id === activeTab)?.content}
          </p>
        </div>
      </section>

      {/* Expertise Amplifier */}
      <section className="py-20 bg-surface-primary">
        <div className="container max-w-5xl">
          <h2 className="text-[28px] md:text-[32px] leading-[1.1] text-content-primary mb-6">
            Listen amplifies your expertise.
          </h2>
          <p className="text-[16px] text-content-secondary leading-[1.6] mb-4 max-w-3xl">
            Listen doesn't replace your expertise, it amplifies it. You design the research, craft the
            discussion guide, and interpret the findings. Listen handles the time-consuming 80% —
            scheduling, moderating, transcribing, and initial coding.
          </p>
          <p className="text-[16px] text-content-secondary leading-[1.6] max-w-3xl">
            Clients see linked verbatim quotes and timestamped clips. This is more transparent than
            traditional research, not less.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-surface-highlight">
        <div className="container max-w-5xl">
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
        <div className="container max-w-5xl">
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
        <div className="container max-w-5xl">
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
