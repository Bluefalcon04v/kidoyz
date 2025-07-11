import { OUR_FRESH_NEWS_DATA } from "@/constant/const-data";
import { Avatar, CatHeadingImg } from "@/../public/images";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Card } from "./ui/Card";
import Slider from "./slider";
import Link from "next/link";
import React from "react";

interface IOurFreshNews {
  customer: string;
  title: string;
  image: string;
  link: string;
  desc: string;
  time: string;
}

const OurFreshNews = () => {
  return (
    <div className="my-20">
      <Heading variant="main" size="xl" image={CatHeadingImg}>
        Our fresh news
      </Heading>
      <Text alignment="center" size="base" className="mx-auto w-1/2">
        Our blog is more than just a collection of articles - it&apos;s a hub of
        ideas, inspiration, and thought-provoking discussions.
      </Text>
      <Slider
        className="z-10 absolute my-16 px-16 h-full"
        card={(item: IOurFreshNews) => (
          <Link href={item.link}>
            <FreshCard data={item} />
          </Link>
        )}
        data={OUR_FRESH_NEWS_DATA}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
          1440: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      />
    </div>
  );
};

export default OurFreshNews;

const FreshCard = ({ data }: { data: IOurFreshNews }) => {
  return (
    <Card className="bg-white shadow rounded-2xl h-full">
      <Card.Image
        src={data.image}
        alt="OFN Images"
        className="p-0.5 rounded-t-2xl rounded-b-md h-full"
      />
      <div className="flex flex-col gap-3 mt-2 mb-10 p-3 h-full font-lato 0">
        <div className="flex items-center content-center gap-1">
          <Card.Image src={Avatar} alt="avatar" className="size-10" />
          <div>
            <Text size="base">{data.customer}</Text>
            <Text size="sm" variant="secondary">
              {data.time}
            </Text>
          </div>
        </div>
        <Text className="min-h-16" size="lg">
          {data.title}
        </Text>
        <Text className="mb-16" size="md" variant="secondary">
          {data.desc}
        </Text>
      </div>
    </Card>
  );
};
