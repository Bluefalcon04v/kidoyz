import { DEALOFDAYCARTDATA } from "@/constant/const-data";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import React from "react";

const DealOfDayCart = () => {
  return (
    <div className="bg-white shadow-sm px-6 py-6 rounded-xl">
      <Text variant="main" className="my-2 !font-jua" size="lg">
        Deal of the day
      </Text>

      <div className="gap-4 gap-x-8 grid grid-cols-2 pr-2 max-h-[40vh] overflow-y-scroll">
        {DEALOFDAYCARTDATA.map((item, index) => (
          <Card key={index} className="flex gap-3 py-2 !cursor-default">
            <Card.Image
              src={item.image}
              alt="bag image"
              className="rounded-xl size-40"
            />
            <div className="flex flex-col gap-2 my-2">
              <Card.Text
                variant="main"
                size="sm"
                tracking="md"
                fontSemibold
                className="w-11/12 h-full leading-tight"
              >
                {item.title}
              </Card.Text>
              <div className="flex">
                <Card.Text variant="default" size="sm">
                  Rs. {item.sellingPrice}
                </Card.Text>
                <Card.Text variant="disable" size="sm" lineThrough>
                  Rs. {item.actualPrice}
                </Card.Text>
                <Card.Text variant="success" size="sm" fontSemibold={false}>
                  {item.percentageOff}% Off
                </Card.Text>
              </div>
              <Card.Button className="!font-medium">ADD TO CART</Card.Button>
              <Card.CloseButton className="group top-1 right-0 absolute" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealOfDayCart;
