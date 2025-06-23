"use client";
import ParentsTrustKidyoz from "@/components/parentsTrustKidyoz";
import PopularHighlights from "@/components/popularHighlights";
import FeaturesComponent from "@/components/featuresComponent";
import KidoysMessage from "@/components/kidoysMessage";
import ClientReviews from "@/components/clientReviews";
import InstagramFeed from "@/components/instagramFeed";
import EveryAgeToys from "@/components/everyAgeToys";
import BackToSchool from "./components/backToSchool";
import OurFreshNews from "@/components/ourFreshNews";
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
      <PopularHighlights />
      <PerfectGift />
      <ClientReviews />
      <OurFreshNews />
      <FeaturesComponent />
      <InstagramFeed />
      <KidoysMessage />
    </div>
  );
}
