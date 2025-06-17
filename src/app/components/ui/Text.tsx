import React from "react";
import { cva } from "class-variance-authority";

export type IText = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "main" | "secondary";
  size?: "default" | "sm" | "lg" | "xl";
  alignment?: "left" | "center" | "right";
};

const textVariants = cva("flex font-lato", {
  variants: {
    variant: {
      main: "text-dark-gray ",
      secondary: "text-neutral ",
    },
    size: {
      default: "text-xl",
      sm: "text-md",
      lg: "text-2xl",
      xl: "text-4xl",
    },
    alignment: {
      left: "justify-start",
      center: "justify-center ",
      right: "justify-end",
    },
  },
  defaultVariants: {
    variant: "main",
    size: "default",
    alignment: "left",
  },
});

export const Text: React.FC<IText> = ({
  className,
  alignment,
  variant,
  size,
  ...props
}) => {
  return (
    <p
      {...props}
      className={textVariants({ variant, size, className, alignment })}
    />
  );
};
