import React from "react";
import { CATEGORY_ITEMS } from "@/constant/const-data";
import Link from "next/link";

const CategoryNav = () => {
  return (
    <div className="flex justify-between bg-white px-8 py-5">
      {CATEGORY_ITEMS.map((i, index) => (
        <Link
          href={i.link}
          key={index}
          className="group flex flex-col items-center gap-1 cursor-pointer"
        >
          {i.icon}
          <p className="font-jua text-secondary group-hover:text-primary">
            {i.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryNav;
