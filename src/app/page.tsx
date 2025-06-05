"use client";
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";
import ShopByReel from "@/components/shopByReel";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <CategoryNav />
        <HomeSlider />
        <ShopByReel/>
       
      </div>
    </>
  );
}
