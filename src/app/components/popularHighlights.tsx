import { POPULAR_HIGHLIGHTS_DATA } from "@/constant/const-data";
import { CustomImage } from "./ui/CardImage";
import React from "react";
import Link from "next/link";
import Slider from "./slider";

const PopularHighlights = () => {
  return (
    <div className="my-20 h-[70vh]">
      <div className="relative h-full">
        <div className="top-0 z-0 absolute rounded-md w-full h-full popular-background-img" />
        <Slider
          className="z-10 absolute px-16 h-full"
          card={(item: { image: string; link: string }) => (
            <Link href={item.link} >
              <CustomImage src={item.image} alt={`Highlight image`} className="mb-10" />
            </Link>
          )}
          data={POPULAR_HIGHLIGHTS_DATA}
          breakpoints={2}
        />
      </div>
    </div>
  );
};

export default PopularHighlights;
