import React from "react";
import { Heading } from "./custom/heading";
import {
  AgeCardBGImg,
  BearHeadingImg,
  eightToTwelveYearsImg,
  fiveToEightYearsImg,
  oneToTwoYearsImg,
  twoTOFiveYearsImg,
  zeroToOneYearsImg,
} from "@/../public/images";
import Image, { StaticImageData } from "next/image";

const EveryAgeToys = () => {
  const AGECARDDATA = [
    { image: zeroToOneYearsImg, title: "0-1" },
    { image: oneToTwoYearsImg, title: "1-2" },
    { image: twoTOFiveYearsImg, title: "2-5" },
    { image: fiveToEightYearsImg, title: "5-8" },
    { image: eightToTwelveYearsImg, title: "8-12" },
  ];

  return (
    <div className="my-20">
      <Heading image={BearHeadingImg} size="xl">
        Toys for Every Age: Sorted!
      </Heading>
      <div className="gap-x-8 grid grid-cols-5 mt-8">
        {AGECARDDATA.map((i, index) => (
          <AgeCard key={index} image={i.image} title={i.title} />
        ))}
      </div>
    </div>
  );
};

export default EveryAgeToys;

interface IAgeCard {
  image: string | StaticImageData;
  title: string;
}

const AgeCard = ({ image, title }: IAgeCard) => {
  return (
    <div className="relative bg-white border-2 border-primary border-dashed rounded-3xl w-full">
      <Image
        src={AgeCardBGImg}
        alt="Age Card Background"
        height={300}
        width={300}
      />
      <div className="top-0 z-10 absolute items-center place-content-center place-items-center rounded-3xl w-full h-full">
        <Image src={image} alt="age image" width={96} height={121} className="size-32 object-contain" />
        <p className="text-shadow-2xs font-jua text-primary text-2xl">
          {title} Years
        </p>
      </div>
    </div>
  );
};
