import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const resources = [
  {
    title: "Pricing & Feasibility",
    description: "Transparent, flexible pricing for agencies conducting all sorts of research.",
    href: "/pricing",
  },
  {
    title: "Pitch Resources",
    description:
      "Scripts, objection handling, and positioning guides so you can sell Listen confidently in any client conversation.",
    href: "/how-to-pitch",
  },
  {
    title: "Client Use Cases",
    description:
      "Real examples of agencies using Listen across brand tracking, concept testing, UX research, and customer discovery.",
    href: "/use-cases",
  },
  {
    title: "FAQs",
    description:
      "Honest answers about methodology, limitations, turnaround, and how Listen fits (or doesn't) alongside your clients' research goals.",
    href: "/faqs",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-surface-primary">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-[40px] md:text-[48px] leading-[1.05] text-content-primary mb-6">
            Everything you need to sell Listen.
          </h2>
          <p className="text-[18px] text-content-secondary leading-[1.5]">
            From your first client pitch to running large, multi-market studies.
          </p>
        </div>

        <div>
          {resources.map((resource, index) => (
            <Link
              key={resource.title}
              to={resource.href}
              className="group grid grid-cols-12 gap-6 items-baseline py-8 border-t transition-colors hover:bg-surface-secondary/50"
              style={{
                borderColor: "var(--surface-tertiary)",
                borderBottomWidth: index === resources.length - 1 ? 1 : 0,
              }}
            >
              <h3 className="col-span-12 md:col-span-4 text-[20px] text-content-primary">
                {resource.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-[16px] text-content-secondary leading-[1.5]">
                {resource.description}
              </p>
              <div className="hidden md:flex col-span-1 justify-end">
                <ArrowUpRight
                  className="h-[22px] w-[22px] text-content-secondary group-hover:text-content-primary transition-colors"
                  strokeWidth={1.75}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
