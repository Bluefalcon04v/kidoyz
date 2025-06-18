import { MusicHeadingImg, PerfectGiftImg } from "@/../public/images";
import { CustomImage } from "./ui/CardImage";
import { Heading } from "./ui/Heading";
import React from "react";

const PerfectGift = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-50 to-[#c1f9ff83] my-20 p-20 rounded-2xl" >
      <Heading variant="main" size="xl" className="text-teal" image={MusicHeadingImg}>
        Find the perfect gift
      </Heading>
      <div className="place-content-center place-items-center grid grid-cols-2 my-20">
        <div></div>
        <CustomImage src={PerfectGiftImg} alt="gift section image" className="w-96 h-80 !object-cover !aspect-video"></CustomImage>
      </div>
    </div>
  );
};

export default PerfectGift;
