import React from "react";
import { cva } from "class-variance-authority";

type IHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "main" | "secondary";
  size?: "default" | "sm" | "lg";
};

const headingVariants = cva(
  "flex justify-center content-center w-full text-primary tracking-wide",
  {
    variants: {
      variant: {
        main: " text-outline-shadow  font-jua",
        secondary: "bg-teal",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "main",
      size: "default",
    },
  }
);

export const Heading: React.FC<IHeading> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={headingVariants({ variant, size, className })} />
  );
};
