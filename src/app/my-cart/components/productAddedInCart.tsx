import { ShippingTruckSvg, TickSvg } from "@/../public/svg";
import { Card } from "@/components/ui/Card";
import React from "react";
import { B2SImg1 } from "../../../../public/images";

const ProductAddedInCart = () => {
  return (
    <div className="bg-white shadow px-6 py-10 rounded-xl">
      <div className="flex gap-2">
        <div className="success-badge-style badge-style">
          <TickSvg /> Rs. 3,000/- Total Saving on this Order
        </div>
        <div className="!bg-none border-none badge-style">
          <ShippingTruckSvg /> Yay! No shipping fee on this order
        </div>
      </div>

      <div className="my-4">
        <Card className="flex gap-3">
          <Card.Image src={B2SImg1} alt="bag image" className="rounded-xl size-40"/>
          <div>
            <Card.Text variant="main" size="lg">Kids Cute Toddler Mini DIY Premium Backpack- RedColor</Card.Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductAddedInCart;
