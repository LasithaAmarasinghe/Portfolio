import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Date ranges on Experience/Education/Leadership cards. Solid in light mode;
        // a soft tint in dark mode so it doesn't overpower the dark card.
        period:
          "whitespace-nowrap px-3 py-1 text-sm border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:border-secondary/40 dark:bg-secondary/15 dark:text-[hsl(262_90%_80%)] dark:hover:bg-secondary/20",
        tag: "border-transparent bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
