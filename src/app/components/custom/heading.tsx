import React from "react";
import { cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

type IHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: "main" | "secondary";
  image?: string | StaticImageData;
  size?: "default" | "sm" | "lg" | "xl";
};

const headingVariants = cva(
  "tracking-wider",
  {
    variants: {
      variant: {
        main: " text-outline-shadow font-jua font-bold text-highlight ",
        secondary: "text-dark-gray font-semibold font-jua",
      },
      size: {
        default: "text-xl",
        sm: "text-md",
        lg: "text-2xl",
        xl: "text-4xl",
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
  image,
  ...props
}) => {
  return (
    <div className="flex justify-center items-center content-center w-full">
      {image && (
        <Image
          src={image}
          alt={`default ${image}`}
          width={200}
          height={200}
          className="size-24 object-cover aspect-square"
        />
      )}
      <h1
        {...props}
        className={headingVariants({ variant, size, className })}
      />
    </div>
  );
};
