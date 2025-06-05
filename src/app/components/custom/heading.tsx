import React from "react";
import { cva } from "class-variance-authority";

type IHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "main" | "secondary";
  size?: "default" | "sm" | "lg" | "xl";
};

const headingVariants = cva(
  "flex justify-center content-center w-full tracking-wider",
  {
    variants: {
      variant: {
        main: " text-outline-shadow font-jua font-bold text-highlight leading-16",
        secondary: "text-dark-gray !text-2xl font-semibold font-jua",
      },
      size: {
        default: "text-xl",
        sm: "text-md",
        lg: "text-2xl",
        xl: "text-5xl",
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
