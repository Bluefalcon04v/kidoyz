import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import React from "react";

export type IButton = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "disabled" ;
  size?: "default" | "sm" | "lg";
};

const buttonVariants = cva(
  "flex justify-center items-center hover:shadow-md text-shadow-sm hover:text-shadow-none rounded-sm font-semibold leading-none tracking-wide active:scale-95 transition-all ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white active:bg-highlight font-dm-sans",
        secondary: "bg-teal text-white font-dm-sans active:saturate-200",
        disabled:
          "bg-stone-200 text-stone-400 !text-shadow-none hover:shadow-none !cursor-not-allowed",
      },
      size: {
        default: "px-8 py-2.5",
        sm: "px-2 py-1 text-sm",
        lg: "px-3 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export const Button: React.FC<IButton> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
};
