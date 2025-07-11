import { PARENTS_TRUST_KIDYOZS_DATA } from "@/constant/const-data";
import { TrainHeadingImg } from "@/../public/images";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Card } from "./ui/Card";
import React from "react";

const ParentsTrustKidyoz = () => {
  return (
    <div className="bg-[#FFDC7A1A] px-20 max-lg:px-10 py-16 max-lg:py-10 rounded-lg">
      <Heading variant="main" size="xl" image={TrainHeadingImg}>
        Why Parents trust kidyoz
      </Heading>
      <Text
        size="lg"
        alignment="center"
        className="text-shadow-2xs mx-auto mt-10 max-lg:mt-2 w-5/6"
        tracking="md"
      >
        {" "}
        Parents trust kidyoz because we make learning fun, safe, and meaningful
        for children, ensuring every toy nurture their growth and development.{" "}
      </Text>
      <div className="gap-2 max-md:gap-4 grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 my-20">
        {PARENTS_TRUST_KIDYOZS_DATA.map((i, index) => (
          <Card
            key={index}
            className="flex flex-col gap-8 max-md:gap-3 !cursor-default"
          >
            <Card.Image
              src={i.image}
              alt={i.title}
              className="mx-auto size-48 max-md:size-28"
            ></Card.Image>
            <Card.Title variant="secondary" size="base" className="text-center">
              {i.title}
            </Card.Title>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ParentsTrustKidyoz;
