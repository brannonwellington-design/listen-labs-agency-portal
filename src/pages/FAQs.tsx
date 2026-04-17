import { useState, useMemo } from "react";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import PageHeader from "@/components/PageHeader";
import { Brain, Rocket, Handshake, DollarSign, AlertTriangle, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    icon: Brain,
    title: "The Methodology",
    subtitle: "How AI moderation works, quality of output, and the participant experience.",
    faqs: [
      { q: "What is Listen?", a: "Listen is an AI-moderated video interview platform that conducts qualitative research at scale. Our AI moderator conducts natural, adaptive video conversations with respondents, then automatically analyzes and synthesizes the results." },
      { q: "How does AI moderation actually work?", a: "You upload a discussion guide and define your target audience. Listen's AI Moderator conducts video interviews that adapt in real-time based on responses, asking follow-up probes just like a human moderator would." },
      { q: "What do respondents actually experience?", a: "Respondents receive a link, join from any device with a camera and record their responses on their own schedule. Once completed, respondents are sent their agreed upon incentives." },
      { q: "What do I get as output?", a: "A comprehensive analysis including themes, sentiment analysis, key quotes, video highlight reels, and exportable reports. Everything is linked to source video for traceability." },
      { q: "How fast are results?", a: "Most projects complete in 2-5 days from launch to final analysis, compared to 4-8 weeks for traditional qual research." },
      { q: "Is the quality comparable to human moderation?", a: "For most use cases, yes. The AI moderator is consistent across every interview, never gets tired, and follows your guide precisely while probing naturally. Clients see linked verbatim quotes and timestamped video clips, which is more transparent than traditional research." },
      { q: "Is Listen secure?", a: "Yes. Listen is SOC 2 Type II certified, GDPR compliant, HIPAA compliant, and ISO 27001, ISO 27701, and ISO 42001 certified." },
    ],
  },
  {
    icon: Rocket,
    title: "Running Projects",
    subtitle: "Setup, timelines, participant recruitment, and language support.",
    faqs: [
      { q: "How long does it take to set up a study?", a: "Most agencies launch their first project within a day. Upload a discussion guide, define your audience, and Listen handles the rest." },
      { q: "What languages does Listen support?", a: "Listen supports 100+ languages with native-level understanding and analysis. There's no extra cost for multilingual studies." },
      { q: "What is a typical study size?", a: "Most studies range from 30-200 participants, though Listen can handle studies of any size." },
      { q: "Can Listen do shop-alongs and ethnographies?", a: "Yes. Listen can support shop-alongs and ethnographic-style research by allowing participants to record their experience or show their environment in real time while the AI Moderator asks contextual follow-up questions." },
      { q: "How does participant recruitment work?", a: "You can bring your own panel or use Listen's integrated panel partners. If using integrated panels, incentives are paid per participant and vary by audience and market." },
      { q: "Can researchers watch ongoing interviews?", a: "Not in real-time, but you can review completed interviews immediately and access full transcripts and video recordings." },
      { q: "Does Listen support complex routing logic?", a: "Listen supports conditional branching based on responses, but very complex multi-path routing may require consultation with our team." },
    ],
  },
  {
    icon: Handshake,
    title: "Working with Clients",
    subtitle: "How to present Listen to clients, what they see, and white-labeling.",
    faqs: [
      { q: "Can clients see the Listen platform?", a: "You choose. You can invite clients to your workspace with role-based permissions, or keep it behind the scenes and deliver only exports and reports." },
      { q: "Is white-labeling available?", a: "Yes, the platform can be fully white-labeled. Clients only see your agency's branding and pricing." },
      { q: "What export formats are available?", a: "Export to PDF, PowerPoint, Excel, and video formats. All exports can be customized with your agency branding." },
      { q: "Can we create client-ready presentations?", a: "Yes, Listen automatically generates executive summaries and decks from your study results." },
      { q: "How do video highlights work?", a: "AI automatically identifies key moments and creates shareable video clips with quotes, organized by theme or sentiment. Users can also easily customize their own highlight reels based on themes coming out of the responses." },
      { q: "How many seats does my team get?", a: "Unlimited. Every team member in your agency can have their own seat at no additional cost. Seats can be freely added, removed, or reassigned." },
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing & Credits",
    subtitle: "How credits work, how to quote clients, and what's included.",
    faqs: [
      { q: "What constitutes a 'project'?", a: "A project is a single study with one brief, one respondent pool, and one set of deliverables. Multiple waves of the same study count as separate projects." },
      { q: "What constitutes a 'completed response'?", a: "A completed response is a respondent who finishes the full interview flow, passes Quality Guard checks, and whose transcript is available in your dashboard." },
      { q: "How are projects priced?", a: "Pricing is based on interview duration and number of participants. Credits are consumed for AI moderation and analysis." },
      { q: "How are AI credits calculated?", a: "Credits are based on interview duration and the number of participants. Longer and more complex studies use more credits." },
      { q: "What's included in the platform cost?", a: "Platform access, AI moderation, all 100+ languages, unlimited seats, analysis tools, video exports, and dedicated support." },
      { q: "How do panel incentives work?", a: "If using integrated panels, incentives are paid per participant and vary by audience feasibility and market." },
      { q: "Are there volume discounts?", a: "Yes, enterprise and high-volume pricing is available. Contact us for custom agency partnership rates." },
      { q: "What if I run out of credits?", a: "You can purchase additional credits at any time. We'll notify you when you're running low." },
      { q: "What contract options are available?", a: "Annual contracts are standard, with quarterly and monthly options available for agencies testing the platform." },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitations & Edge Cases",
    subtitle: "What Listen can and can't do.",
    faqs: [
      { q: "Does Listen work for live group discussions?", a: "No. Listen focuses on 1-on-1 AI-moderated interviews. If your client needs live focus groups with a human moderator, Listen isn't the right tool for that project." },
      { q: "Are there language limitations?", a: "Listen supports 100+ languages with high accuracy. Some very niche dialects may have reduced performance, ask us about specific markets." },
      { q: "Is Listen suitable for sensitive topics?", a: "Listen works well for many sensitive topics, but for clinical or therapeutic research contexts, human moderation may be more appropriate. We're happy to discuss specific use cases." },
      { q: "Can Listen replace all qualitative research?", a: "No, and we don't position it that way. Listen is best positioned as an upgrade to your research workflow for the right projects, not a wholesale replacement for human-led qual." },
      { q: "What about very niche B2B audiences?", a: "Listen can handle the interview, but recruiting incredibly niche B2B respondents can be difficult at times. It may be easier to bring your own panel for these, if you have access to these audiences." },
    ],
  },
];

const FAQs = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return faqCategories;
    const q = search.toLowerCase();
    return faqCategories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (faq) => faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [search]);

  return (
    <div className="min-h-screen bg-surface-primary">
      <NavBar />
      <PageHeader
        label="FAQs"
        title="Frequently asked questions."
        description="Real questions from agency partners, answered plainly."
      />

      <section className="py-20 bg-surface-primary">
        <div className="container">
          {/* Search */}
          <div className="relative mb-16 max-w-3xl">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-content-secondary"
              strokeWidth={1.25}
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="pl-7 py-5 text-[16px] bg-transparent border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-[color:var(--content-primary)]"
              style={{ borderColor: "var(--surface-tertiary)" }}
            />
          </div>

          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-2">
                  <cat.icon className="h-[22px] w-[22px] text-content-brand" strokeWidth={1.75} />
                  <h2 className="text-[20px] text-content-primary">{cat.title}</h2>
                </div>
                <p className="text-[12px] text-content-secondary mb-6 ml-[34px]">{cat.subtitle}</p>
                <Accordion type="single" collapsible>
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.title}-${i}`}
                      className="border-t"
                      style={{
                        borderColor: "var(--surface-tertiary)",
                        borderBottomWidth: i === cat.faqs.length - 1 ? 1 : 0,
                      }}
                    >
                      <AccordionTrigger className="text-content-primary text-[15px] text-left py-5 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-content-secondary text-[14px] leading-[1.6] pb-5 max-w-3xl">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <p className="text-content-secondary py-8">
                No questions match your search. Try different keywords.
              </p>
            )}
          </div>

          <div className="mt-24 pt-12 border-t" style={{ borderColor: "var(--surface-tertiary)" }}>
            <h3 className="text-[24px] text-content-primary mb-3">Still have questions?</h3>
            <p className="text-[16px] text-content-secondary leading-[1.6] max-w-3xl">
              Our agency partnership team is here to help. Get personalized answers and guidance for
              your specific use case.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default FAQs;
