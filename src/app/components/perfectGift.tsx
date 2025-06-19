import {
  SHOPPING_FOR_DROPDOWN_DATA,
  TOYS_FOR_DROPDOWN_DATA,
} from "@/constant/const-data";
import { MusicHeadingImg, PerfectGiftImg } from "@/../public/images";
import Dropdown, { IDropdownRef } from "./ui/Dropdown";
import { CustomImage } from "./ui/CardImage";
import { Heading } from "./ui/Heading";
import React, { useRef } from "react";
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";

const PerfectGift = () => {
  const dropdownRef = useRef<IDropdownRef>(null);
  const handleDropdownChange = (value: string | number) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="bg-gradient-to-tr from-yellow-50 to-[#c1f9ff83] my-20 p-20 rounded-2xl">
      <Heading
        variant="main"
        size="xl"
        className="text-teal"
        image={MusicHeadingImg}
      >
        Find the perfect gift
      </Heading>
      <div className="place-content-center place-items-center grid grid-cols-3">
        <div className="flex flex-col gap-10 col-span-2 py-12 w-4/6 h-full">
          <div className="flex justify-start items-start gap-4">
            <Text variant="main" size="lg" className="!min-w-max !font-jua">
              {" "}
              I am shopping for{" "}
            </Text>
            <Dropdown
              onChange={handleDropdownChange}
              defaultValue="0 - 1 years"
              ref={dropdownRef}
              options={SHOPPING_FOR_DROPDOWN_DATA}
            />
          </div>
          <div className="flex justify-start items-start gap-12">
            <Text variant="main" size="lg" className="min-w-max !font-jua">
              {" "}
              They like a lot
            </Text>
            <Dropdown
              onChange={handleDropdownChange}
              defaultValue="Trains & Vehicles "
              ref={dropdownRef}
              options={TOYS_FOR_DROPDOWN_DATA}
            />
          </div>
          <Button>Find a Gift</Button>
        </div>
        <CustomImage
          src={PerfectGiftImg}
          alt="gift section image"
          className="w-96 h-80 !object-cover !aspect-video"
        ></CustomImage>
      </div>
    </div>
  );
};

export default PerfectGift;
