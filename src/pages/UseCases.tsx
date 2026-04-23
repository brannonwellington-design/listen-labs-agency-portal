import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import PageHeader from "@/components/PageHeader";
import microsoftLogo from "@/assets/logos/microsoft.png";
import googleLogo from "@/assets/logos/google.png";
import pgLogo from "@/assets/logos/pg.png";
import nestleLogo from "@/assets/logos/nestle.svg";
import emeraldLogo from "@/assets/logos/emerald.png";
import kantarLogo from "@/assets/logos/kantar.png";

const useCases = [
  {
    tag: "B2B Research at Scale",
    title: "3× interview capacity for B2B.",
    client: "Emerald Research Group",
    challenge:
      "Reaching C-suite decision-makers for in-depth interviews is notoriously difficult; they're busy, spread across time zones, and traditional scheduling requires weeks of blocked moderator time.",
    result:
      "Emerald scaled from 20–30 interviews over a month to 60 interviews in under a week. Respondents engaged at 5am or 11pm on their own terms.",
    metric: "3× capacity",
    quote:
      "Before working with Listen Labs, I thought, like many people, that qualitative data doesn't scale.",
    attribution: "Eric Knoben, Partner, Emerald Research Group",
    bestFor: "Tech, SaaS, Enterprise, Professional Services",
  },
  {
    tag: "Creative Agency Research",
    title: "Real consumer voices in every creative session.",
    client: "McKinney",
    challenge:
      "In creative agencies, strong internal opinions fill the void when consumer data isn't available. Research arrives too late to shape the work, and recruiting hard-to-reach audiences like CFOs traditionally takes weeks for just a handful of interviews.",
    result:
      "McKinney used Listen to bring real consumer reactions directly into live creative sessions, recruiting 15 CFO and startup founder respondents in a single day and completing full analysis in under 3 days.",
    metric: "24-hr recruitment",
    quote: "Without Listen, I wouldn't be in the room.",
    attribution: "Danica Tereau, Senior Data Strategist, McKinney",
    bestFor: "Advertising, Creative Agencies, Brand Consultancies",
  },
  {
    tag: "Creative & Ad Testing",
    title: "20× faster creative testing.",
    client: "Microsoft (via Vital Findings)",
    challenge:
      "Microsoft needed to test Copilot ad creatives across audiences before launch, but traditional qual testing couldn't keep pace with campaign timelines.",
    result:
      "Vital Findings used Listen to run AI-moderated video interviews evaluating ad concepts with target users, delivering creative insights in days instead of the typical 4–6 week cycle.",
    metric: "20× faster",
    quote:
      "We were able to collect user stories within a day. Our leadership team was very thrilled.",
    attribution: "Romani Patel, Senior Research Manager, Microsoft",
    bestFor: "CPG, Tech, DTC, Retail",
  },
  {
    tag: "Multi-Language Research",
    title: "8 languages, one study.",
    client: "Canva",
    challenge:
      "Canva needed qualitative insights across non-English speaking European markets, but coordinating moderators across 8 languages and time zones was cost-prohibitive.",
    result:
      "Listen's AI Moderator conducted interviews in all 8 languages simultaneously. Respondents participated in their own language, on their own schedule. No local moderators needed.",
    metric: "100+ languages",
    quote:
      "Listen enabled us to get qualitative insights at scale in non-English speaking markets.",
    attribution: "Matt Harris, Research & Insight Lead (Europe), Canva",
    bestFor: "Global Brands, FMCG, Tech, Financial Services",
  },
  {
    tag: "Brand & Consumer Insights",
    title: "4× bigger samples in hours.",
    client: "Simple Modern",
    challenge:
      "A fast-growing DTC drinkware brand needed deeper consumer insights beyond their Oklahoma base, but traditional focus groups only reached ~30 local people after weeks of scheduling.",
    result:
      "Listen delivered 120 video interviews in 2.5 hours, 4× bigger samples with nationwide reach. The team moved from basic market sizing to understanding the \"why\" behind consumer behavior.",
    metric: "4× reach",
    quote:
      "Numbers tell you what coffee snobs buy. Listen Labs tells you why.",
    attribution: "Chris Hoyle, Chief Marketing Officer, Simple Modern",
    bestFor: "DTC, CPG, Retail, Consumer Brands",
  },
  {
    tag: "Concept Testing",
    title: "6× faster product validation.",
    client: "Chubbies",
    challenge:
      "A lean insights team couldn't keep up with the volume of product decisions needing consumer feedback. Traditional qual was too slow and too narrow in reach.",
    result:
      "Listen enabled rapid concept validation across broader audiences without scheduling constraints, testing multiple concepts simultaneously.",
    metric: "6× faster",
    quote:
      "Listen compresses hours of work into minutes, reaches a broader audience than our schedule allows, and uncovers qual/quant insights in real time.",
    attribution: "Lauren Neville, Director of Insights and Innovation, Chubbies",
    bestFor: "DTC, Retail, CPG, Apparel",
  },
];

const stats = [
  { value: "20×", label: "Faster data collection" },
  { value: "100+", label: "Languages supported" },
  { value: "3×", label: "More interview data" },
  { value: "$1M+", label: "Agency revenue generated" },
];

// `size` overrides the default max-h on a per-brand basis. Source logos
// have different internal padding + weight, so we tune a few to feel
// visually matched rather than mathematically identical.
const trustedBy = [
  { name: "Kantar", logo: kantarLogo, size: "max-h-11 md:max-h-12" },
  { name: "Emerald Research Group", logo: emeraldLogo, size: "max-h-16 md:max-h-20" },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Google", logo: googleLogo },
  { name: "P&G", logo: pgLogo },
  { name: "Nestlé", logo: nestleLogo, size: "max-h-7 md:max-h-8" },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-surface-primary">
      <NavBar />
      <PageHeader
        label="Use Cases"
        title="How agencies win with Listen."
        description="Real results from research agencies and the brands they serve."
      />

      {/* Use case list , editorial rows, no cards */}
      <section className="py-20 bg-surface-primary">
        <div className="container">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-6 md:gap-10 py-12 border-t"
              style={{
                borderColor: "var(--surface-tertiary)",
                borderBottomWidth: i === useCases.length - 1 ? 1 : 0,
              }}
            >
              <div className="col-span-12 md:col-span-4">
                <p className="text-[12px] text-content-secondary mb-6">{uc.tag}</p>
                <h3 className="text-[24px] md:text-[28px] leading-[1.1] text-content-primary mb-4">
                  {uc.title}
                </h3>
                <p className="text-[12px] text-content-secondary">{uc.client}</p>
                <p className="mt-10 text-[40px] leading-none text-content-brand">{uc.metric}</p>
              </div>

              <div className="col-span-12 md:col-span-8 space-y-6">
                <div>
                  <p className="text-[12px] text-content-secondary mb-2">The Challenge</p>
                  <p className="text-[14px] text-content-primary leading-[1.6]">{uc.challenge}</p>
                </div>
                <div>
                  <p className="text-[12px] text-content-secondary mb-2">The Result</p>
                  <p className="text-[14px] text-content-primary leading-[1.6]">{uc.result}</p>
                </div>
                {uc.quote && (
                  <blockquote
                    className="border-l-2 pl-5 py-1"
                    style={{ borderColor: "var(--content-brand)" }}
                  >
                    <p className="text-[16px] text-content-primary leading-[1.5]">"{uc.quote}"</p>
                    {uc.attribution && (
                      <footer className="mt-3 text-[12px] text-content-secondary">
                        {uc.attribution}
                      </footer>
                    )}
                  </blockquote>
                )}
                <p className="text-[12px] text-content-secondary">
                  <span className="text-content-primary">Best for:</span> {uc.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By the Numbers , inverse band, full-width, massive scale,
          hairline structure above stats for grid discipline */}
      <section className="py-32 bg-surface-inverse-primary">
        <div className="container">
          <div className="flex items-baseline justify-between mb-16">
            <p className="text-[12px] text-content-inverse-secondary">By the Numbers</p>
            <p className="text-[12px] text-content-inverse-secondary">
              Across the Listen agency network
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-[56px] md:text-[88px] leading-[0.9] tracking-[-0.02em] text-content-inverse-primary mb-5">
                  {s.value}
                </p>
                <p className="text-[14px] text-content-inverse-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by , editorial split: display headline anchors the left,
          logo grid lives on the right, inside a structural rule frame */}
      <section className="py-24 bg-surface-highlight">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="text-[12px] text-content-secondary mb-6">Trusted by</p>
              <h2 className="text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-content-primary mb-6">
                Brands your clients already know.
              </h2>
              <p className="text-[14px] text-content-secondary leading-[1.6] max-w-sm">
                Listen powers research at Fortune 500 brands and the agencies they
                partner with, spanning CPG, tech, financial services, and beyond.
              </p>
            </div>

            <div className="md:col-span-7">
              {/* Logo grid — each brand sits in its own surface-secondary tile,
                  uniform aspect ratio + max-h on the image so every lockup lands
                  at the same visual size regardless of source aspect. */}
              <div className="grid grid-cols-3 gap-1">
                {trustedBy.map((brand) => (
                  <div
                    key={brand.name}
                    className="bg-surface-secondary flex items-center justify-center aspect-[3/2] p-4"
                    style={{ borderRadius: 8 }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`${brand.size ?? "max-h-9 md:max-h-10"} w-auto max-w-[75%] object-contain opacity-80 mix-blend-multiply dark:mix-blend-screen dark:invert`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default UseCases;
