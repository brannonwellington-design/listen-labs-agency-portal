import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import ListenLogo from "./ListenLogo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Pricing & Feasibility", href: "/pricing" },
  { label: "How to Pitch", href: "/how-to-pitch" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "FAQs", href: "/faqs" },
];

// Map of page → Project Title for the Listen Labs / Title header
const pageTitleMap: Record<string, string> = {
  "/": "Agency Portal",
  "/pricing": "Pricing & Feasibility",
  "/how-to-pitch": "How to Pitch",
  "/use-cases": "Use Cases",
  "/faqs": "FAQs",
};

const MobileThemeRow = ({ onSelect }: { onSelect: () => void }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        onSelect();
      }}
      className="w-full flex items-center justify-between text-sm py-2 text-content-secondary hover:text-content-primary transition-colors"
    >
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.25} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.25} />
      )}
    </button>
  );
};

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const projectTitle = pageTitleMap[location.pathname] ?? "Agency Portal";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b bg-surface-primary"
      style={{ borderColor: "var(--surface-tertiary)" }}
    >
      {/* Three-column flex: logo | centered header | nav. Equal flex-1
          on the outer two keeps the middle visually centered regardless
          of what the outer columns hold. */}
      <div className="h-14 flex items-center gap-4 px-4 md:px-6">
        {/* Left — logo (mark-only below md, full wordmark from md up) */}
        <div className="flex-1 min-w-0 flex items-center">
          <Link to="/" className="text-content-primary inline-flex items-center" aria-label="Home">
            <ListenLogo markOnly className="h-5 w-auto md:hidden" />
            <ListenLogo className="h-5 w-auto hidden md:block" />
          </Link>
        </div>

        {/* Center — Listen Labs / Project Title breadcrumb */}
        <Link
          to="/"
          className="shrink-0 text-[12px] leading-none text-center whitespace-nowrap"
        >
          <span className="text-content-secondary">Listen Labs /</span>{" "}
          <span className="text-content-primary">{projectTitle}</span>
        </Link>

        {/* Right — inline nav at lg+, hamburger below */}
        <div className="flex-1 min-w-0 flex items-center justify-end gap-6">
          {/* Desktop nav — only when there's room for all four labels */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-[12px] transition-colors whitespace-nowrap",
                    active
                      ? "text-content-primary"
                      : "text-content-secondary hover:text-content-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://listenlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-content-secondary hover:text-content-primary transition-colors whitespace-nowrap"
            >
              Platform <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile/tablet hamburger — visible until lg */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-surface-primary">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-sm py-2",
                        location.pathname === link.href
                          ? "text-content-primary"
                          : "text-content-secondary hover:text-content-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://listenlabs.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-content-secondary hover:text-content-primary py-2"
                  >
                    Platform <ArrowUpRight className="h-3 w-3" strokeWidth={1} />
                  </a>
                  <div
                    className="pt-4 mt-2 border-t"
                    style={{ borderColor: "var(--surface-tertiary)" }}
                  >
                    <MobileThemeRow onSelect={() => setOpen(false)} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
