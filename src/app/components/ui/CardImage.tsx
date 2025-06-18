import { cva } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface ICardImage extends ImageProps {
  variant?: "default" | "top-rounded";
}

const cardImageVariants = cva("flex justify-center object-cover", {
  variants: {
    variant: {
      default: "rounded-md",
      "top-rounded": "rounded-t-full",
    },
  },
});

export const CustomImage: React.FC<ICardImage> = ({
  className,
  variant,
  alt,
  ...props
}) => {
  return (
    <Image
      alt={alt}
      className={cardImageVariants({ variant, className })}
      {...props}
    />
  );
};
