import { BearHeadingImg, CRImg1 } from "@/../public/images";
import { CustomImage } from "./ui/CardImage";
import { Heading } from "./ui/Heading";
import React from "react";

const ClientReviews = () => {
  return (
    <div className="my-20">
      <Heading variant="main" size="xl" image={BearHeadingImg}>
        Client Chronicles: Reviews
      </Heading>
      <CustomImage src={CRImg1} alt="image" className="mt-6 w-full"/>
    </div>
  );
};

export default ClientReviews;
