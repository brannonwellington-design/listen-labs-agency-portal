import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Listen Labs · Paper · Button
// - Inter 400 only (enforced via Tailwind fontWeight overrides)
// - 8px corner radius (brand default)
// - No drop shadow, no bubbly fills, no uppercase
// - Heights follow the brand component height scale: XL 32 · L 24 · M 20 · S 16
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Brand blue fill
        default:
          "bg-[color:var(--surface-brand-primary)] text-[color:var(--content-brand-contrast)] hover:bg-[color:var(--surface-brand-primary)]/90",
        // Paper with content-primary border (editorial button)
        outline:
          "border border-[color:var(--content-primary)] bg-transparent text-[color:var(--content-primary)] hover:bg-[color:var(--surface-secondary)]",
        // Inverse (for use on dark surfaces)
        inverse:
          "bg-[color:var(--surface-inverse-primary)] text-[color:var(--content-inverse-primary)] hover:bg-[color:var(--surface-inverse-secondary)]",
        // Secondary paper chip
        secondary:
          "bg-[color:var(--surface-secondary)] text-[color:var(--content-primary)] hover:bg-[color:var(--surface-tertiary)]",
        ghost:
          "text-[color:var(--content-primary)] hover:bg-[color:var(--surface-secondary)]",
        link:
          "text-[color:var(--content-brand)] underline-offset-4 hover:underline",
        destructive:
          "bg-[color:var(--content-negative)] text-[color:var(--content-brand-contrast)] hover:bg-[color:var(--content-negative)]/90",
      },
      size: {
        // XL 32 (was too small for CTA) → we add an extended 40 for hero use
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
