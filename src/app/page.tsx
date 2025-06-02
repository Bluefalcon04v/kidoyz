"use client";
import CategoryNav from "@/components/categoryNav";
import HomeSlider from "@/components/homeSlider";
import { Heading } from "@/components/custom/heading";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <CategoryNav />
        <HomeSlider />
        <Heading>Hello</Heading>
      </div>
    </>
  );
}
