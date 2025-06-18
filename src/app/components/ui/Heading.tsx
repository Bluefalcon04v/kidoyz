import React from "react";
import { cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

export type IHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "default" | "main" | "secondary";
  image?: string | StaticImageData;
  size?: "default" | "sm" | "base" | "lg" | "xl";
};

const headingVariants = cva("tracking-wider", {
  variants: {
    variant: {
      main: " text-outline-shadow font-jua font-bold text-highlight ",
      secondary: "text-secondary font-semibold font-jua",
      default: "text-dark-gray font-jua font-semibold",
    },
    size: {
      default: "text-xl",
      sm: "text-md",
      base: "text-xl",
      lg: "text-2xl",
      xl: "text-4xl",
    },
  },
  defaultVariants: {
    variant: "main",
    size: "default",
  },
});

export const Heading: React.FC<IHeading> = ({
  className,
  variant,
  size,
  image,
  ...props
}) => {
  return (
    <div className="flex justify-center items-center content-center w-full">
      {image && (
        <Image
          src={image}
          alt={`default ${image}`}
          width={300}
          height={200}
          className="mr-2 h-fit size-28 object-contain aspect-auto"
        />
      )}
      <h1
        {...props}
        className={headingVariants({ variant, size, className })}
      />
    </div>
  );
};
