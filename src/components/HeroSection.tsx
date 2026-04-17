import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import certSoc2 from "@/assets/cert-soc2.png";
import certGdpr from "@/assets/cert-gdpr.png";
import certIso42001 from "@/assets/cert-iso42001.png";
import certIso27001 from "@/assets/cert-iso27001.png";
import certIso27701 from "@/assets/cert-iso27701.png";
import certHipaa from "@/assets/cert-hipaa.png";
import forbesLogo from "@/assets/forbes-logo.png";

const certifications = [
  { src: certSoc2, alt: "AICPA SOC 2" },
  { src: certGdpr, alt: "GDPR" },
  { src: certIso42001, alt: "ISO 42001" },
  { src: certIso27001, alt: "ISO 27001" },
  { src: certIso27701, alt: "ISO 27701" },
  { src: certHipaa, alt: "HIPAA" },
];

// Paper hero — scale contrast is the compositional tool, not color.
// Large type on warm paper, minimal decoration, one dominant headline.
const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-surface-primary">
      <div className="container">
        <div className="max-w-4xl">
          <p className="text-[12px] text-content-secondary mb-8 animate-fade-in">
            Listen Agency Partner Program
          </p>

          <h1 className="text-[56px] md:text-[80px] leading-[1.02] text-content-primary mb-12 animate-fade-up">
            Win more research briefs with Listen.
          </h1>

          <p
            className="text-[18px] md:text-[20px] text-content-secondary max-w-2xl mb-12 leading-[1.5] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Your complete guide to adding AI moderation to your toolkit to best support your
            clients' objectives. Faster insights, bigger studies, and a methodology your clients
            haven't heard of yet.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" asChild>
              <a
                href="https://listenlabs.ai/book-my-demo?utm_source=agency_page&utm_medium=referral&utm_campaign=agency_landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Agency Onboarding Call
                <ArrowRight className="ml-1 h-[18px] w-[18px]" strokeWidth={1.25} />
              </a>
            </Button>
          </div>
        </div>

        {/* Stats band — size contrast over weight contrast */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 mt-32 pt-12 border-t animate-fade-up"
          style={{ borderColor: "var(--surface-tertiary)", animationDelay: "0.45s" }}
        >
          {[
            { value: "1M+", label: "Interviews conducted" },
            { value: "100+", label: "Languages supported" },
            { value: "30M+", label: "Respondents available" },
            { value: "300+", label: "Customers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[40px] text-content-primary mb-2 leading-none">{stat.value}</p>
              <p className="text-[12px] text-content-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certification badges — quiet row, monochrome, low-key */}
        <div
          className="flex flex-wrap items-center gap-x-10 gap-y-6 mt-16 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {certifications.map((cert) => (
            <img
              key={cert.alt}
              src={cert.src}
              alt={cert.alt}
              className="h-10 w-auto opacity-60 mix-blend-multiply dark:mix-blend-screen dark:invert"
              loading="lazy"
            />
          ))}
        </div>

        {/* Forbes AI 50 — editorial footnote link (rule + caption, no pill) */}
        <div
          className="mt-16 pt-8 border-t animate-fade-up"
          style={{ borderColor: "var(--surface-tertiary)", animationDelay: "0.65s" }}
        >
          <a
            href="https://www.forbes.com/lists/ai50/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-[12px] text-content-secondary">Featured in</span>
            <img
              src={forbesLogo}
              alt="Forbes"
              className="h-5 w-auto opacity-80 mix-blend-multiply dark:mix-blend-screen dark:invert"
              loading="lazy"
            />
            <span className="text-[12px] text-content-primary group-hover:underline underline-offset-4">
              AI 50
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
