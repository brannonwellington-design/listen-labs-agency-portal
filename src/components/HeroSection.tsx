import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import certSoc2 from "@/assets/cert-soc2.png";
import certGdpr from "@/assets/cert-gdpr.png";
import certIso42001 from "@/assets/cert-iso42001.png";
import certIso27001 from "@/assets/cert-iso27001.png";
import certIso27701 from "@/assets/cert-iso27701.png";
import certHipaa from "@/assets/cert-hipaa.png";
import forbesAi50 from "@/assets/forbes-ai-50.png";

const stats = [
  { value: "1M+", label: "Interviews conducted" },
  { value: "100+", label: "Languages supported" },
  { value: "30M+", label: "Respondents available" },
  { value: "300+", label: "Customers" },
];

const certifications = [
  { src: certSoc2, alt: "AICPA SOC 2" },
  { src: certGdpr, alt: "GDPR" },
  { src: certIso42001, alt: "ISO 42001" },
  { src: certIso27001, alt: "ISO 27001" },
  { src: certIso27701, alt: "ISO 27701" },
  { src: certHipaa, alt: "HIPAA" },
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-surface-primary">
      <div className="container">
        {/* Forbes AI 50 tag — 1px hairline, full-rounded editorial mark */}
        <a
          href="https://www.forbes.com/lists/ai50/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-content-primary/70 hover:border-content-primary px-3.5 py-1.5 mb-10 transition-colors animate-fade-in"
        >
          <span className="text-[12px] text-content-primary">Featured in</span>
          <img
            src={forbesAi50}
            alt="Forbes AI 50"
            className="h-[14px] w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
            loading="lazy"
          />
        </a>

        {/* Two-line hero headline — label promoted to primary, tagline in secondary */}
        <h1
          className="text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.02em] mb-10 animate-fade-up"
        >
          <span className="block text-content-primary">Listen Agency Partner Program</span>
          <span className="block text-content-secondary">Win more research briefs with Listen.</span>
        </h1>

        <p
          className="text-[16px] md:text-[18px] text-content-primary max-w-2xl mb-10 leading-[1.55] animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Your complete guide to adding AI moderation to your toolkit to best support your
          clients' objectives. Faster insights, bigger studies, and a methodology your clients
          haven't heard of yet.
        </p>

        {/* CTA + inline cert strip — two rhythms, one row on desktop */}
        <div
          className="flex flex-col lg:flex-row lg:items-center gap-8 mb-16 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a
              href="https://listenlabs.ai/book-my-demo?utm_source=agency_page&utm_medium=referral&utm_campaign=agency_landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Agency Onboarding Call
              <ArrowRight className="ml-1 h-[18px] w-[18px]" strokeWidth={1.25} />
            </a>
          </Button>

          {/* Compact certification strip — inline beside CTA */}
          <div className="flex items-center gap-4 lg:ml-auto">
            {certifications.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className="h-8 w-auto opacity-75 mix-blend-multiply dark:mix-blend-screen dark:invert"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Stat tiles — filled surface-secondary, 8px radius, numerals dominate */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface-secondary p-6 md:p-8"
              style={{ borderRadius: 8 }}
            >
              <p className="text-[48px] md:text-[64px] leading-[0.9] text-content-primary mb-3 tracking-[-0.02em]">
                {s.value}
              </p>
              <p className="text-[12px] text-content-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
