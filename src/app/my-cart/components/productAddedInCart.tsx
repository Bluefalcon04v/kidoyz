import { OfferSvg, ShippingTruckSvg, TickSvg } from "@/../public/svg";
import { PRODUCTADDEDINCARTDATA } from "@/constant/const-data";
import QuantityInput from "@/components/ui/QuantityInput";
import { Card } from "@/components/ui/Card";
import React from "react";

const ProductAddedInCart = () => {
  return (
    <div className="bg-white shadow-sm px-6 py-8 rounded-xl">
      <div className="flex gap-2">
        <div className="success-badge-style badge-style">
          <TickSvg /> Rs. 3,000/- Total Saving on this Order
        </div>
        <div className="!bg-none border-none badge-style">
          <ShippingTruckSvg /> Yay! No shipping fee on this order
        </div>
      </div>

      <div className="flex flex-col pr-3 divide-y divide-neutral-300 max-h-[50vh] overflow-y-auto">
        {PRODUCTADDEDINCARTDATA.map((item, index) => (
          <Card key={index} className="flex gap-3 py-6 !cursor-default">
            {/* image */}
            <Card.Image
              src={item.image}
              alt="bag image"
              className="rounded-xl size-40"
            />
            {/* descriptions */}
            <div className="flex flex-col gap-2 my-2">
              <Card.Text
                variant="main"
                size="default"
                tracking="md"
                className="w-11/12 font-semibold"
              >
                {item.title}
              </Card.Text>
              <div className="flex gap-2">
                <Card.Text variant="success" size="base">
                  Rs. {item.sellingPrice}
                </Card.Text>
                <Card.Text variant="disable" lineThrough>
                  Rs. {item.actualPrice}
                </Card.Text>
                <div className="px-2 font-medium text-sm success-badge-style badge-style">
                  {item.percentageOff}% Off <OfferSvg />
                </div>
                <Card.Text variant="disable">Inclusive all Taxes</Card.Text>
              </div>
              <div className="flex gap-2 w-fit">
                <Card.Text>Qty:</Card.Text>
                <QuantityInput />
              </div>
            </div>
            <Card.CloseButton />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductAddedInCart;
