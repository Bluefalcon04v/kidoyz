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
      <div className="top-20 left-32 absolute max-w-10/12">
        <CustomImage
          alt="Footer image background"
          src={KidoysMsgFooterImg}
          className="relative"
        />
        <CustomImage src={GiftHeadingImg} alt="gift img" className="right-38 bottom-3 absolute"/>
        <div className="top-0 absolute place-content-center place-items-center grid grid-cols-2 w-11/12 h-full">
          <div>
            <CustomImage
              src={Logo}
              alt="logo"
              className="w-52 object-fill aspect-video"
            />
            <Text
              variant="main"
              size="lg"
              className="text-shadow-2xs mt-2 !font-jua text-highlight"
            >
              Laugh, Play, Learn!
            </Text>
          </div>
          <div className="flex flex-col gap-6 font-semibold">
            <Text
              className="text-shadow-2xs font-dm-sans text-secondary-highlight"
              size="base"
            >
              Explore a wide range of toys for kids online in India at Kidoyz,
              your ultimate toy store. Find the perfect toys to spark joy and
              imagination in your little ones.
            </Text>
            <Text
              className="text-shadow-2xs font-dm-sans text-secondary-highlight"
              size="base"
            >
              {" "}
              Need help? Get in touch with us and we’ll be more than happy to
              guide you through!
            </Text>
            <div className="flex flex-col gap-2">
              <Text
                className="text-shadow-2xs font-dm-sans text-secondary-highlight"
                size="base"
              >
                <span className="font-medium">Phone Number : </span> +91
                8383960500
              </Text>
              <Text
                className="text-shadow-2xs font-dm-sans text-secondary-highlight"
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
