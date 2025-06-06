"use client";
import EveryAgeToys from "@/components/everyAgeToys";
import BackToSchool from "./components/backToSchool";
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";
import ShopByReel from "@/components/shopByReel";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <div className="">
        <CategoryNav />
        <HomeSlider />
        <ShopByReel/>
        <EveryAgeToys/>
        <BackToSchool/>
        <Card >
          <Card.Title variant={"main"} >Hello world</Card.Title>
        </Card>
      </div>
    </>
  );
}
