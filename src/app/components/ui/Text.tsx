import React from "react";
import { cva } from "class-variance-authority";

export type IText = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "default" | "main" | "secondary" | "success" | "disable";
  size?: "default" | "sm" | "md" | "base" | "lg" | "xl";
  alignment?: "left" | "center" | "right";
  tracking?: "sm" | "md";
  lineThrough?: boolean;
  fontSemibold?: boolean;
};

const textVariants = cva("flex items-center-safe px-2 font-lato text-pretty", {
  variants: {
    variant: {
      main: "text-dark-gray ",
      secondary: "text-neutral ",
      default: "text-black",
      success: "text-green ",
      disable: "text-gray",
    },
    size: {
      default: "text-xl max-md:text-lg",
      sm: "text-sm max-md:text-xs",
      md: "text-base max-md:text-xs",
      base: "text-lg max-md:text-sm",
      lg: "text-2xl max-md:text-base",
      xl: "text-4xl max-md:text-xl",
    },
    fontSemibold: {
      true: "font-semibold",
      false: "",
    },
    lineThrough: {
      true: "line-through",
      false: "",
    },
    tracking: {
      sm: "tracking-[1.2px]",
      md: "tracking-[1.5px]",
    },
    alignment: {
      left: "justify-start",
      center: "justify-center text-center ",
      right: "justify-end",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    alignment: "left",
  },
});

export const Text: React.FC<IText> = ({
  fontSemibold,
  lineThrough,
  className,
  alignment,
  tracking,
  variant,
  size,
  ...props
}) => {
  return (
    <p
      className={textVariants({
        variant,
        size,
        lineThrough,
        alignment,
        tracking,
        fontSemibold,
        className,
      })}
      {...props}
    />
  );
};
