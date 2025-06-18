"use client";
import ParentsTrustKidyoz from "@/components/parentsTrustKidyoz";
import PopularHighlights from "@/components/popularHighlights";
import EveryAgeToys from "@/components/everyAgeToys";
import BackToSchool from "./components/backToSchool";
import NewArrivals from "@/components/newArrivals";
import PerfectGift from "./components/perfectGift";
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";
import ShopByReel from "@/components/shopByReel";

export default function Home() {
  return (
    <div className="">
      <CategoryNav />
      <HomeSlider />
      <ShopByReel />
      <EveryAgeToys />
      <BackToSchool />
      <NewArrivals />
      <ParentsTrustKidyoz />
      <PopularHighlights/>
      <PerfectGift/>
    </div>
  );
}
