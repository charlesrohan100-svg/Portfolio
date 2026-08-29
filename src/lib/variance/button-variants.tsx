import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-neutral-900 text-white hover:bg-neutral-700",
        secondary: "border border-neutral-300 hover:border-neutral-500",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);
