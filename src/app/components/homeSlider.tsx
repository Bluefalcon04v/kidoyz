"use Client";
import { HomeImg1 } from "@/../public/images";
import Image from "next/image";
import Slider from "./slider";
import React from "react";

const HomeSlider = () => {
  const sliderData = [HomeImg1, HomeImg1, HomeImg1];
  return (
    <div className="my-4">
      <Slider
        data={sliderData}
        breakpoints={1}
        card={(imageSrc: string) => (
          <div className="w-full h-[25vw] max-lg:h-[40vw]">
            <Image
              className="w-full h-full object-fill"
              alt="banner-image"
              src={imageSrc}
              quality={100}
              height={481}
              width={965}
              priority
            />
          </div>
        )}
      />
    </div>
  );
};

export default HomeSlider;
