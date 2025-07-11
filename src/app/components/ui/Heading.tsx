import React from "react";
import { cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

export type IHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "default" | "main" | "secondary";
  image?: string | StaticImageData;
  size?: "default" | "sm" | "base" | "lg" | "xl";
};

const headingVariants = cva("text-pretty tracking-wider", {
  variants: {
    variant: {
      main: "text-outline-shadow font-jua font-bold text-highlight ",
      secondary: "text-secondary font-semibold font-jua",
      default: "text-dark-gray font-jua font-semibold",
    },
    size: {
      default: "text-xl max-md:text-lg max-lg:text-lg",
      sm: "text-md  max-md:text-sm",
      base: "text-xl max-lg:text-lg max-md:text-lg",
      lg: "text-2xl max-lg:text-xl max-md:text-xl",
      xl: "text-4xl max-lg:text-3xl max-md:text-2xl",
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
          className="mr-2 h-fit size-28 max-md:size-16 max-lg:size-20 object-contain aspect-auto"
        />
      )}
      <h1
        {...props}
        className={headingVariants({ variant, size, className })}
      />
    </div>
  );
};
