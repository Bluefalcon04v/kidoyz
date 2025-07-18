import ProductAddedInCart from "./components/productAddedInCart";
import DealOfDayCart from "./components/dealOfDayCart";
import OrderSummary from "./components/orderSummary";
import BackToSchool from "../components/backToSchool";
import { Text } from "@/components/ui/Text";
import React from "react";

export default function MyCart() {
  return (
    <div className="w-full">
      <Text variant="main" className="my-2 !font-jua" size="xl">
        My Cart
      </Text>
      <div className="gap-4 grid grid-cols-3">
        <div className="flex flex-col gap-4 col-span-2">
          <ProductAddedInCart />
          <DealOfDayCart />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
      <BackToSchool />
    </div>
  );
};
