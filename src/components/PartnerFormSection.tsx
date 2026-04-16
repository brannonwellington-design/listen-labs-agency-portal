import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const PartnerFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch within 24 hours.");
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="partner-form" className="py-24 bg-background">
        <div className="container max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Application Received!</h2>
          <p className="text-lg text-muted-foreground">
            Thank you for your interest in our partner program. A member of our partnerships team will reach out within 24 hours to discuss next steps.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="partner-form" className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Partner Program
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Apply to Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join a growing network of agencies that are accelerating their growth with our platform. Here's what you get:
            </p>

            <div className="space-y-6">
              {[
                { title: "Competitive Margins", desc: "Tiered pricing with generous partner discounts up to 40%" },
                { title: "Sales Enablement", desc: "Co-branded collateral, demo environments, and pitch decks" },
                { title: "Training & Certification", desc: "Free onboarding, product certification, and ongoing training" },
                { title: "Marketing Support", desc: "Co-marketing funds, case studies, and lead referrals" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required placeholder="Smith" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" required placeholder="jane@agency.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Agency Name</Label>
                <Input id="company" required placeholder="Acme Agency" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Agency Size</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1–10 employees</SelectItem>
                    <SelectItem value="11-50">11–50 employees</SelectItem>
                    <SelectItem value="51-200">51–200 employees</SelectItem>
                    <SelectItem value="200+">200+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your agency</Label>
                <Textarea
                  id="message"
                  placeholder="What services do you offer? What kind of clients do you serve?"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-base py-6" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
                {!loading && <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our partner terms. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerFormSection;
