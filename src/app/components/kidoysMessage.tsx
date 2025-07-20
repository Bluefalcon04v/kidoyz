import { GiftHeadingImg, KidoysMsgBG, KidoysMsgFooterImg, Logo } from "@/../public/images";
import { CustomImage } from "./ui/CardImage";
import { Text } from "./ui/Text";
import React from "react";

const KidoysMessage = () => {
  return (
    <div className="z-30 relative">
      <CustomImage
        src={KidoysMsgBG}
        alt="Footer image background"
        className="z-20 relative"
      />
      <div className="top-20 left-32 max-xl:left-0 absolute max-w-10/12 max-xl:max-w-full">
        <CustomImage
          alt="Footer image background"
          src={KidoysMsgFooterImg}
          className="relative"
        />
        <CustomImage src={GiftHeadingImg} alt="gift img" className="max-md:hidden right-38 bottom-3 absolute"/>
        <div className="top-0 absolute place-content-center place-items-center grid grid-cols-2 max-lg:grid-cols-3 w-11/12 h-full">
          <div className="max-lg:col-span-1">
            <CustomImage
              src={Logo}
              alt="logo"
              className="w-52 max-lg:w-20 object-fill aspect-video"
            />
            <Text
              variant="main"
              size="lg"
              className="text-shadow-2xs mt-2 !font-jua text-highlight max-md:text-xs max-xl:text-sm"
            >
              Laugh, Play, Learn!
            </Text>
          </div>
          <div className="flex flex-col gap-6 max-lg:col-span-2 w-full font-semibold">
            <Text
              className="text-shadow-2xs font-dm-sans text-secondary-highlight max-md:text-xs max-xl:text-sm"
              size="base"
            >
              Explore a wide range of toys for kids online in India at Kidoyz,
              your ultimate toy store. Find the perfect toys to spark joy and
              imagination in your little ones.
            </Text>
            <Text
              className="text-shadow-2xs font-dm-sans text-secondary-highlight max-md:text-xs max-xl:text-sm"
              size="base"
            >
              {" "}
              Need help? Get in touch with us and we’ll be more than happy to
              guide you through!
            </Text>
            <div className="flex flex-col gap-2">
              <Text
                className="text-shadow-2xs font-dm-sans text-secondary-highlight max-md:text-xs max-xl:text-sm"
                size="base"
              >
                <span className="font-medium">Phone Number : </span> +91
                8383960500
              </Text>
              <Text
                className="text-shadow-2xs font-dm-sans text-secondary-highlight max-md:text-xs max-xl:text-sm"
                size="base"
              >
                <span className="font-medium">Email : </span>{" "}
                hi.kidoyz@gmail.com, info@kidoyz.com
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidoysMessage;
