import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-olive/12 text-olive-deep",
        neutral: "border-stone/30 bg-transparent text-stone",
        copper: "border-transparent bg-copper/15 text-copper",
        success: "border-transparent bg-emerald-600/12 text-emerald-700",
        warning: "border-transparent bg-amber-500/15 text-amber-700",
        danger: "border-transparent bg-destructive/12 text-destructive",
        outline: "border-current bg-transparent text-ink/70",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
