import { OUR_FRESH_NEWS_DATA } from "@/constant/const-data";
import { CatHeadingImg } from "@/../public/images";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import Slider from "./slider";
import Link from "next/link";
import React from "react";

type IOurFreshNews = {
  link: string;
  customer: string;
  time: string;
  title: string;
  desc: string;
};

const OurFreshNews = () => {
  return (
    <div className="my-20">
      <Heading variant="main" size="xl" image={CatHeadingImg}>
        Our fresh news
      </Heading>
      <Text alignment="center" size="lg" className="mx-auto w-2/3">
        Our blog is more than just a collection of articles - it&apos;s a hub of
        ideas, inspiration, and thought-provoking discussions.
      </Text>
      <Slider
        className="z-10 absolute px-16 h-full"
        card={(item: IOurFreshNews) => (
          <Link href={item.link}>
            <FreshCard data={item} />
          </Link>
        )}
        data={OUR_FRESH_NEWS_DATA}
        breakpoints={2}
      />
    </div>
  );
};

export default OurFreshNews;

const FreshCard = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};
