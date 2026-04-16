import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
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

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const projectTitle = pageTitleMap[location.pathname] ?? "Agency Portal";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b bg-surface-primary"
      style={{ borderColor: "var(--surface-tertiary)" }}
    >
      <div className="relative h-14 flex items-center px-4 md:px-6">
        {/* Logo — top left */}
        <Link to="/" className="flex items-center gap-2 relative z-10 text-content-primary" aria-label="Home">
          <ListenLogo className="h-5 w-auto" />
        </Link>

        {/* Brand header — centered */}
        <div className="absolute inset-x-0 top-0 pt-[14px] text-center pointer-events-none">
          <Link to="/" className="pointer-events-auto inline-block text-[12px] leading-none">
            <span className="text-content-secondary">Listen Labs /</span>{" "}
            <span className="text-content-primary">{projectTitle}</span>
          </Link>
        </div>

        {/* Right-aligned desktop nav */}
        <div className="hidden md:flex ml-auto items-center gap-6 relative z-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[12px] transition-colors",
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
            className="inline-flex items-center gap-1 text-[12px] text-content-secondary hover:text-content-primary transition-colors"
          >
            Platform <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <div className="md:hidden ml-auto flex items-center gap-3 relative z-10">
          <ThemeToggle />
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
                  Platform <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1} />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
