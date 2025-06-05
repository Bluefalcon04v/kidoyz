"use client";
import EveryAgeToys from "@/components/everyAgeToys";
import BackToSchool from "./components/backToSchool";
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";
import ShopByReel from "@/components/shopByReel";

export default function Home() {
  return (
    <>
      <div className="">
        <CategoryNav />
        <HomeSlider />
        <ShopByReel/>
        <EveryAgeToys/>
        <BackToSchool/>
      </div>
    </>
  );
}
