import { PARENTS_TRUST_KIDYOZS_DATA } from "@/constant/const-data";
import { TrainHeadingImg } from "@/../public/images";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Card } from "./ui/Card";
import React from "react";

const ParentsTrustKidyoz = () => {
  return (
    <div className="bg-[#FFDC7A1A] px-20 py-16 rounded-lg">
      <Heading variant="main" size="xl" image={TrainHeadingImg}>
        Why Parents trust kidyoz
      </Heading>
      <Text
        size="lg"
        alignment="center"
        className="text-shadow-2xs mx-auto mt-10 w-5/6"
        tracking="md"
      >
        {" "}
        Parents trust kidyoz because we make learning fun, safe, and meaningful
        for children, ensuring every toy nurture their growth and development.{" "}
      </Text>
      <div className="flex gap-2 my-20">
        {PARENTS_TRUST_KIDYOZS_DATA.map((i, index) => (
          <Card key={index} className="flex flex-col gap-8 !cursor-default">
            <Card.Image
              src={i.image}
              alt={i.title}
              className="mx-auto size-48"
            ></Card.Image>
            <Card.Title variant="secondary" size="base">
              {i.title}
            </Card.Title>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ParentsTrustKidyoz;
