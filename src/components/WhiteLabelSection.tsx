import { Check } from "lucide-react";

const benefits = [
  "Custom domain & branding, your logo, colors, and identity throughout",
  "Branded client onboarding flows and email templates",
  "White-label mobile apps (iOS & Android) under your brand",
  "Custom reporting with your agency's logo and styling",
  "Flexible pricing, set your own margins and plans",
  "No mention of our brand anywhere your clients can see",
];

const WhiteLabelSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-12" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-8 rounded-lg bg-primary" />
                  <div className="h-3 w-32 rounded bg-muted" />
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <div className="h-3 w-24 rounded bg-muted mb-4" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg bg-card p-4 border border-border">
                        <div className="h-8 w-8 rounded bg-primary/10 mb-2" />
                        <div className="h-2 w-full rounded bg-muted" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-secondary p-4">
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div className="h-2 flex-1 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-4" style={{ boxShadow: "var(--card-shadow-hover)" }}>
              <p className="text-xs font-medium text-muted-foreground mb-1">Your Brand</p>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs text-primary font-medium">Fully Customizable</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Branding & Customization
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Your Brand, Our Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Deliver a premium, branded experience to every client without building from scratch. Our platform disappears, your brand shines.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;
