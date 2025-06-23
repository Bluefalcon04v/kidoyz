import { GrayInstagramSvg } from "@/../public/svg";
import {
  BrandStrip,
  INSTAFeedImg1,
  INSTAFeedImg2,
  INSTAFeedImg3,
  INSTAFeedImg4,
  INSTAFeedImg5,
  INSTAFeedImg6,
  INSTAFeedImg7,
} from "@/../public/images";
import { CustomImage } from "./ui/CardImage";
import { Text } from "./ui/Text";
import React from "react";

const InstagramFeed = () => {
  return (
    <div className="my-20">
      <Text alignment="center" size="xl" className="!font-jua uppercase">
        instagram feed
      </Text>
      <div className="flex items-center mx-auto my-2 w-fit">
        <GrayInstagramSvg />
        <Text className="!text-[#646667]">kidoyz.com</Text>
      </div>
      <div className="gap-2 grid grid-cols-6 mt-10">
        <div className="col-span-3">
          <CustomImage src={INSTAFeedImg1} alt="image 1" className="shadow-sm h-full object-fill" />
        </div>
        <div className="gap-2 grid grid-cols-3 grid-rows-2 col-span-3">
          <CustomImage src={INSTAFeedImg2} alt="image 2" className="shadow-sm w-full h-full aspect-video" />
          <CustomImage src={INSTAFeedImg3} alt="image 3" className="shadow-sm w-full h-full aspect-video" />
          <CustomImage src={INSTAFeedImg4} alt="image 4" className="shadow-sm w-full h-full aspect-video" />
          <CustomImage src={INSTAFeedImg5} alt="image 5" className="shadow-sm w-full h-full aspect-video" />
          <CustomImage src={INSTAFeedImg6} alt="image 6" className="shadow-sm w-full h-full aspect-video" />
          <CustomImage src={INSTAFeedImg7} alt="image 7" className="shadow-sm w-full h-full aspect-video" />
        </div>
      </div>
      <CustomImage src={BrandStrip} alt="brand strip"  className="my-20 w-full"/>
    </div>
  );
};

export default InstagramFeed;
