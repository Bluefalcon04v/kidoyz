import { PRODUCTADDEDINCARTDATA } from "@/constant/const-data";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import React from "react";

const OrderSummary = () => {
  return (
    <div className="relative bg-white shadow-sm p-6 rounded-xl h-full">
      <Text variant="main" className="my-2 !font-jua" size="lg">
        Order Summary
      </Text>
      <Text variant="secondary" size="base">
        Products
      </Text>
      {/* product  */}
      <div className="max-h-[30vh] overflow-y-auto">
        {PRODUCTADDEDINCARTDATA.map((item, index) => (
          <Card key={index} className="flex gap-3 py-6 !cursor-default">
            {/* image */}
            <Card.Image
              src={item.image}
              alt="bag image"
              className="rounded-xl size-24"
            />
            {/* descriptions */}
            <div className="flex flex-col gap-2 my-2">
              <Card.Text
                variant="main"
                size="sm"
                tracking="sm"
                className="w-11/12 font-semibold"
              >
                {item.title}
              </Card.Text>
              <div className="flex gap-2">
                <Card.Text variant="success" size="base" fontSemibold>
                  Rs. {item.sellingPrice}
                </Card.Text>
                <Card.Text variant="disable" size="sm" lineThrough>
                  Rs. {item.actualPrice}
                </Card.Text>
              </div>
            </div>
            <Card.CloseButton />
          </Card>
        ))}
      </div>
      {/* sub total */}
      <SubTotal />
      <Coupons />
    </div>
  );
};

export default OrderSummary;

const SubTotal = () => {
  return (
    <>
      <div className="flex flex-col gap-3 mt-8">
        <div className="flex justify-between w-full">
          <Text variant="disable" size="md">
            Subtotal
          </Text>
          <Text variant="default" size="md" fontSemibold>
            Rs.1998/-
          </Text>
        </div>
        <div className="flex justify-between w-full">
          <Text variant="disable" size="md">
            Discount
          </Text>
          <Text variant="default" size="md" fontSemibold>
            -Rs. 3,000/-
          </Text>
        </div>
        <div className="flex justify-between w-full">
          <Text variant="disable" size="md">
            Shipping
          </Text>
          <Text variant="default" size="md" fontSemibold>
            Rs.0.00
          </Text>
        </div>
        <div className="flex justify-between w-full">
          <Text variant="disable" size="md">
            Additional Amount
          </Text>
          <Text variant="default" size="md" fontSemibold>
            N A
          </Text>
        </div>
      </div>
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-between w-full">
        <Text fontSemibold>Grand Total</Text>
        <Text fontSemibold>Rs. 1998/-</Text>
      </div>
    </>
  );
};

const Coupons = () => {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <div className="flex justify-between w-full">
        <Text variant="disable" size="md">
          Apply Coupon
        </Text>
        <Text variant="main" size="md" className="text-primary cursor-pointer">
          View All
        </Text>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="!bg-[#3AA39F]/10 !p-2 !px-3 border !border-[#3AA39F] rounded-md !w-full !font-medium !text-black">
          <span className="mr-2 text-[#3AA39F] text-xl">%</span> Rs. 3,000/-
          Total Saving on this Order
        </div>
        <div className="!bg-[#3AA39F]/10 !p-2 !px-3 border !border-[#3AA39F] rounded-md !w-full !font-medium !text-black">
          <span className="mr-2 text-[#3AA39F] text-xl">%</span> Rs. 3,000/-
          Total Saving on this Order
        </div>
        <div className="!bg-[#3AA39F]/10 !p-2 !px-3 border !border-[#3AA39F] rounded-md !w-full !font-medium !text-black">
          <span className="mr-2 text-[#3AA39F] text-xl">%</span> Rs. 3,000/-
          Total Saving on this Order
        </div>
      </div>

      <Button size="lg" className="bottom-4 absolute w-11/12 uppercase">
        {" "}
        Place ORDER
      </Button>
    </div>
  );
};
