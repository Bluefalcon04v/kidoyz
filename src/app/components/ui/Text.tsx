import React from "react";
import { cva } from "class-variance-authority";

export type IText = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "main" | "secondary";
  size?: "default" | "sm" | "md" | "lg" | "xl";
  alignment?: "left" | "center" | "right";
  tracking?: "sm" | "md";
};

const textVariants = cva("flex px-2 font-lato", {
  variants: {
    variant: {
      main: "text-dark-gray ",
      secondary: "text-neutral ",
    },
    size: {
      default: "text-xl",
      sm: "text-md",
      md: "text-base",
      lg: "text-2xl",
      xl: "text-4xl",
    },
    tracking: {
      sm: "tracking-[1.2px]",
      md: "tracking-[1.5px]",
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
  tracking,
  variant,
  size,
  ...props
}) => {
  return (
    <p
      {...props}
      className={textVariants({
        variant,
        size,
        className,
        alignment,
        tracking,
      })}
    />
  );
};
