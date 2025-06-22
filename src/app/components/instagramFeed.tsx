import { GrayInstagramSvg } from "@/../public/svg";
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

      <div className="grid grid-cols-3">

      </div>
    </div>
  );
};

export default InstagramFeed;
