import { SHOP_BY_REEL_DATA } from "@/constant/const-data";
import { CatHeadingImg } from "@/../public/images";
import { IReelCard } from "@/interface/interface";
import { Heading } from "./ui/Heading";
import Slider from "./slider";
import Image from "next/image";
import React from "react";

const ShopByReel = () => {
  return (
    <div className="mt-16">
      <Heading size="xl" image={CatHeadingImg}>
        Shop By Reels
      </Heading>
      <Heading variant="default" size="lg">
        Nurture Your Child’s Imagination—the Right Way!
      </Heading>
      <div className="bg-white my-8 p-4 max-md:p-2 rounded-sm w-full">
        <Slider
          card={(item: IReelCard) => (
            <ReelCard
              sellingPrice={item.sellingPrice}
              actualPrice={item.actualPrice}
              image={item.image}
              title={item.title}
            />
          )}
          data={SHOP_BY_REEL_DATA}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            850: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            1440: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
          showArrows={false}
        />
      </div>
    </div>
  );
};

export default ShopByReel;

const ReelCard = ({ image, title, sellingPrice, actualPrice }: IReelCard) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt="Reel Image"
        width={500}
        height={500}
        objectFit="cover"
        className="shadow-sm rounded-sm max-md:h-80"
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
          <p>{title}</p>
          <div className="flex gap-3">
            <p>₹ {sellingPrice}</p>
            <p className="line-through">₹ {actualPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
