"use client"
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <CategoryNav/>
        <HomeSlider/>
      </div>
    </>
  );
}
