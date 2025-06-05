import React from "react";
import { Heading } from "@/custom/heading";
import { CatHeadingImg, SRBImg1, SRBImg2, SRBImg3 } from "@/../public/images";
import Image, { StaticImageData } from "next/image";

const ShopByReel = () => {
  return (
    <div className="mt-16">
      <Heading size="xl" image={CatHeadingImg}>
        Shop By Reels
      </Heading>
      <Heading variant="secondary" size="lg">
        Nurture Your Child’s Imagination—the Right Way!
      </Heading>
      <div className="gap-x-6 grid grid-cols-4 bg-white my-8 p-4 rounded-sm w-full">
        <ReelCard image={SRBImg1} />
        <ReelCard image={SRBImg2} />
        <ReelCard image={SRBImg1} />
        <ReelCard image={SRBImg3} />
      </div>
    </div>
  );
};

export default ShopByReel;

interface IReelCard {
  image: string | StaticImageData;
}

const ReelCard = ({ image }: IReelCard) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt="Reel Image"
        width={500}
        height={500}
        objectFit="cover"
        className="shadow-sm rounded-sm"
      />
      <div className="bottom-0 absolute flex bg-gradient-to-b from-15% from-black via-black/35 to-95% to-black shadow p-3 rounded-b-sm w-full">
        <Image
          src={image}
          alt="Reel Image"
          width={200}
          height={200}
          className="border border-white rounded-sm size-14 object-center aspect-square"
        />
        <div className="text-shadow-sm pl-2 font-rubik text-white">
          <p>Wooden Dressing Pink & White</p>
          <div className="flex gap-3">
            <p>₹ 15,000</p>
            <p className="line-through">₹ 19,800</p>
          </div>
        </div>
      </div>
    </div>
  );
};
