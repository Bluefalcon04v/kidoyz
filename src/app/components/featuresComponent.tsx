import React from "react";
import { FEATURES_COMPONENT_DATA } from "@/constant/const-data";
import { Card } from "./ui/Card";

const FeaturesComponent = () => {
  return (
    <div className="flex justify-around gap-8 bg-[#FFF5F2] my-20 p-16 w-full">
      {FEATURES_COMPONENT_DATA.map((i, index) => (
        <Card key={index} className="flex place-content-center place-items-center gap-4 bg-white shadow-neutral-200 shadow-sm p-4 rounded-lg min-h-36 !cursor-default">
          <Card.Text>{i.icon}</Card.Text>
          <div>
            <Card.Text variant="main" size="base" className="!font-dm-sans font-semibold">{i.title}</Card.Text>
            <Card.Text variant="secondary" size="base" tracking="sm" className="!font-lato leading-tight">{i.desc}</Card.Text>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesComponent;
