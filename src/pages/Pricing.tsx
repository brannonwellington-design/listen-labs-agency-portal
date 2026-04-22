import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const creditTiers = [
  { label: "Self-Recruited (agency sources respondents)", priceLine1: "$20 per respondent", priceLine2: "2 credits per respondent" },
  { label: "Listen Consumer Panel, 20%+ incidence rate", priceLine1: "$50 per respondent", priceLine2: "5 credits per respondent" },
  { label: "Listen Consumer Panel, 5–20% incidence rate", priceLine1: "$80 per respondent", priceLine2: "8 credits per respondent" },
  { label: "Listen B2B / Specialist (complex or low-incidence audiences)", priceLine1: "On request", priceLine2: "" },
];

const canRecruit = [
  "Verified respondents in 45+ countries",
  "Consumer audiences spanning the general population",
  "B2B audiences across job titles, seniority levels and industries",
  "100+ languages supported",
];

const customQuote = [
  "Low-incidence or hard-to-reach audiences",
  "Specialist / clinical / professional audiences",
];

const faqs = [
  { q: "What constitutes a 'project'?", a: "A project is a single study with one brief, one respondent pool, and one set of deliverables. Multiple waves of the same study count as separate projects." },
  { q: "What constitutes a 'completed response'?", a: "A completed response is a respondent who finishes the full interview flow, passes Quality Guard checks, and whose transcript is available in your dashboard." },
  { q: "How quickly can a study turn around?", a: "Most studies wrap in 2–5 days, vs. 4–8 weeks for traditional qual. Specialist recruits may take longer. Setup, moderation, and analysis run in real time." },
  {
    q: "Is the platform secure and compliant?",
    a: (
      <>
        Yes. Listen is compliant with SOC 2 Type II, GDPR, HIPAA, ISO 27001, ISO 27701, and
        ISO 42001. Full details at{" "}
        <a
          href="https://trust.listenlabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-content-brand underline underline-offset-4 hover:opacity-80"
        >
          trust.listenlabs.ai
        </a>
      </>
    ),
  },
  { q: "Are there volume discounts?", a: "Yes. High-volume pricing is available. Contact us for custom agency partnership rates." },
  { q: "Will our clients accept AI moderation?", a: "Increasingly, they're the ones asking for it. Top players across CPG, tech, e-commerce, healthcare, financial services, and hospitality & travel have run Listen studies through their own review processes and adopted." },
];

const platformFeatures = [
  "AI-moderated interviews at scale",
  "Auto-generated decks & video reels",
  "100+ languages",
  "Unlimited team seats",
  "SOC 2 · GDPR · HIPAA · ISO 27001 · ISO 27701 · ISO 42001",
];

// Reusable bordered container (no shadow, brand radius)
const cardStyle = "border p-8 md:p-10 bg-surface-highlight";
const cardBorder = { borderColor: "var(--surface-tertiary)", borderRadius: 12 };

const Pricing = () => {
  return (
    <div className="min-h-screen bg-surface-primary">
      <NavBar />
      <PageHeader
        label="Agency Pricing"
        title="Pricing & feasibility."
        description="Transparent, flexible pricing for research panels and agency partners."
      />

      {/* Two Components */}
      <section className="py-20 bg-surface-primary">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Listen's pricing: two components.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Platform Access card */}
            <div className={cardStyle} style={cardBorder}>
              <p className="text-[12px] text-content-secondary mb-4">Platform Access</p>
              <p className="text-[48px] leading-none text-content-primary mb-2">$5,000</p>
              <p className="text-[14px] text-content-secondary mb-8">/ project</p>
              <ul className="space-y-3 mb-8">
                {platformFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-content-primary">
                    <Check
                      className="h-4 w-4 mt-[2px] shrink-0"
                      strokeWidth={1.25}
                      style={{ color: "var(--content-brand)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="px-5 py-4 border-l-2"
                style={{
                  backgroundColor: "var(--surface-brand-secondary)",
                  borderColor: "var(--content-brand)",
                }}
              >
                <p className="text-[14px] text-content-primary">
                  One-time pilot rate: $1,000 / project for new agency partners
                </p>
              </div>
            </div>

            {/* Respondent Credits card */}
            <div className={cardStyle} style={cardBorder}>
              <p className="text-[12px] text-content-secondary mb-4">Respondent Credits</p>
              <p className="text-[32px] leading-[1.1] text-content-primary mb-2">
                Scales with your fieldwork.
              </p>
              <p className="text-[14px] text-content-secondary mb-8">
                Charged per completed response. Pricing depends on who handles sourcing and audience type.
              </p>
              <ul>
                {creditTiers.map((tier, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-12 gap-4 py-4 border-t text-[14px]"
                    style={{
                      borderColor: "var(--surface-tertiary)",
                      borderBottomWidth: i === creditTiers.length - 1 ? 1 : 0,
                    }}
                  >
                    <span className="col-span-7 text-content-secondary">{tier.label}</span>
                    <span className="col-span-5 text-right">
                      <span className="block text-content-primary">{tier.priceLine1}</span>
                      {tier.priceLine2 && (
                        <span className="block text-[12px] text-content-secondary mt-1">
                          {tier.priceLine2}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-content-secondary mt-4">
                Pricing shown is for US-only respondents.
              </p>
            </div>

            {/* Subscriptions — full-width panel spanning both columns */}
            <div className={`${cardStyle} md:col-span-2`} style={cardBorder}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-5">
                  <p className="text-[12px] text-content-secondary mb-4">Subscriptions</p>
                  <p className="text-[32px] leading-[1.1] text-content-primary">
                    Pilot, then annual.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[14px] text-content-primary leading-[1.6] mb-4">
                    Agencies typically begin with one pilot project at the discounted platform
                    rate. After piloting, we encourage moving to an annual subscription structured
                    around your anticipated usage over the next 12 months, a bundle of projects
                    and respondent credits sized to your needs.
                  </p>
                  <p className="text-[14px] text-content-secondary leading-[1.6]">
                    Most agencies run their first project within a week of signing up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Feasibility */}
      <section className="py-20 bg-surface-highlight">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Audience feasibility.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[12px] text-content-secondary mb-4">What Listen can recruit</p>
              <ul className="space-y-3">
                {canRecruit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-content-primary">
                    <Check
                      className="h-4 w-4 mt-[2px] shrink-0"
                      strokeWidth={1.25}
                      style={{ color: "var(--content-brand)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] text-content-secondary mb-4">What requires a custom quote</p>
              <ul className="space-y-3">
                {customQuote.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-content-primary">
                    <Check className="h-4 w-4 mt-[2px] shrink-0 text-content-secondary" strokeWidth={1.25} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface-primary">
        <div className="container">
          <h2 className="text-[32px] md:text-[40px] leading-[1.05] text-content-primary mb-12">
            Frequently asked questions.
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-t"
                style={{
                  borderColor: "var(--surface-tertiary)",
                  borderBottomWidth: i === faqs.length - 1 ? 1 : 0,
                }}
              >
                <AccordionTrigger className="text-content-primary text-[16px] py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-content-secondary text-[14px] leading-[1.6] pb-5 max-w-3xl">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Pricing;
