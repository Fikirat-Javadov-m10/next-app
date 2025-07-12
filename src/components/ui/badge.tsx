import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        online:
          "border-transparent bg-green-400 text-primary-foreground [a&]:hover:bg-green-400/90",
        degraded:
          "border-transparent bg-yellow-500 text-yellow-500-foreground [a&]:hover:bg-yellow-500/90",
        offline:
          "border-transparent bg-red-400 text-white [a&]:hover:bg-red-400/90 focus-visible:ring-red-400/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      },
    },
    defaultVariants: {
      variant: "online",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
