import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import certSoc2 from "@/assets/cert-soc2.png";
import certGdpr from "@/assets/cert-gdpr.png";
import certIso42001 from "@/assets/cert-iso42001.png";
import certIso27001 from "@/assets/cert-iso27001.png";
import certIso27701 from "@/assets/cert-iso27701.png";
import certHipaa from "@/assets/cert-hipaa.png";
import forbesLogo from "@/assets/forbes-logo.png";

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

// Paper hero — scale contrast is the compositional tool, not color.
// Large type on warm paper, minimal decoration, one dominant headline.
const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-surface-primary">
      <div className="container">
        {/* Intro */}
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

        {/* Stats — scale contrast is the compositional tool here.
           Thick top rule in content-primary to mark "stats begin". */}
        <div
          className="mt-32 pt-16 border-t animate-fade-up"
          style={{ borderColor: "var(--content-primary)", animationDelay: "0.45s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[56px] md:text-[80px] leading-[0.9] text-content-primary mb-4 tracking-[-0.02em]">
                  {s.value}
                </p>
                <p className="text-[12px] text-content-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials — Forbes AI 50 anchors the block, certifications
           gathered into a single bordered card below. One unified moment
           instead of three separate micro-elements. */}
        <div
          className="mt-32 pt-16 border-t animate-fade-up"
          style={{ borderColor: "var(--content-primary)", animationDelay: "0.6s" }}
        >
          {/* Forbes — the dominant recognition moment */}
          <a
            href="https://www.forbes.com/lists/ai50/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block mb-12"
          >
            <p className="text-[12px] text-content-secondary mb-5">Featured in</p>
            <div className="flex items-end gap-5 md:gap-6">
              <img
                src={forbesLogo}
                alt="Forbes"
                className="h-9 md:h-11 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
                loading="lazy"
              />
              <p className="text-[40px] md:text-[56px] leading-[0.9] text-content-primary tracking-[-0.02em]">
                AI 50
              </p>
              <ArrowUpRight
                className="h-5 w-5 mb-1 text-content-secondary group-hover:text-content-primary transition-colors"
                strokeWidth={1.5}
              />
            </div>
          </a>

          {/* Certifications — single bordered card, cleaner grid, bigger badges */}
          <div
            className="border p-8 md:p-10"
            style={{ borderColor: "var(--surface-tertiary)", borderRadius: 12 }}
          >
            <p className="text-[12px] text-content-secondary mb-10">Certified end-to-end</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6 items-center">
              {certifications.map((cert) => (
                <div key={cert.alt} className="flex items-center justify-center">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-14 md:h-16 w-auto opacity-80 mix-blend-multiply dark:mix-blend-screen dark:invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
