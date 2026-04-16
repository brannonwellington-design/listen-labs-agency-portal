import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
            A complete toolkit for adding AI-moderated research to your agency's services.
            Faster insights, bigger studies, and a methodology your clients haven't heard of yet.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="sm:px-8">
              Get Started
              <ArrowRight className="ml-1 h-[18px] w-[18px]" strokeWidth={1.25} />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://listenlabs.ai/book-my-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Agency Onboarding Call
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
            { value: "100+", label: "Languages supported" },
            { value: "30M+", label: "Respondents available" },
            { value: "300+", label: "Customers" },
            { value: "SOC 2 & GDPR", label: "Compliant", hasIcon: true },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className={`text-content-primary mb-2 flex items-center gap-2 leading-none ${
                  stat.hasIcon ? "text-[20px]" : "text-[40px]"
                }`}
              >
                {stat.hasIcon && <ShieldCheck className="w-[22px] h-[22px]" strokeWidth={1.75} />}
                {stat.value}
              </p>
              <p className="text-[12px] text-content-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
