"use client";
import { FOOTER_DATA } from "@/constant/const-data";
import {
  CatHeadingImg,
  TOSApplePay,
  TOSGooglePay,
  TOSMasterCard,
  TOSPayoneer,
  TOSPayPal,
} from "@/../public/images";
import React, { useEffect, useState } from "react";
import { RightArrowSvg } from "@/../public/svg";
import { usePathname } from "next/navigation";
import { CustomImage } from "./ui/CardImage";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <div
      className={cn(
        "z-10 relative bg-white mx-auto mt-10 w-full",
        isHome && "-top-20"
      )}
    >
      <div
        className={cn(
          " relative  place-content-center place-items-center bg-white mx-auto py-20 w-full h-full",
          isHome && "top-20 pt-60 pb-40"
        )}
      >
        <div className="grid grid-cols-6 w-full max-w-[1450px]">
          {FOOTER_DATA.map((section, index) => (
            <div key={index} className="flex flex-col gap-y-7">
              <Text className="!font-dm-sans font-semibold uppercase">
                {section.title}
              </Text>
              <div className="flex flex-col gap-5">
                {section.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group flex items-center gap-2 w-fit"
                  >
                    {link.icon}
                    <Text className="hover:text-shadow-xs !font-dm-sans group-hover:!text-primary transition-all ease-in-out">
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="col-span-2">
            <CustomImage
              src={CatHeadingImg}
              alt="cat image"
              className="size-20"
            />
            <Text className="my-2 mb-6">
              Receive offer, product alerts, and more. By signing up, you agree
              to our Privacy Policy
            </Text>
            <input
              type="text"
              className="ml-3 px-2 py-2 rounded-sm outline-2 outline-gray focus:outline-primary w-80 font-dm-sans text-lg"
              placeholder="Enter your email"
            />
            <Button
              className="group mt-4 ml-3 px-10 !rounded-full"
              variant="primary"
              size="lg"
            >
              Subscribe Now{" "}
              <span className="ml-2">
                <RightArrowSvg />
              </span>{" "}
            </Button>
          </div>
        </div>
        <Text className="mt-24 max-w-[1450px] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Platea pharetra semper arcu
          hendrerit ut volutpat non diam. Id convallis elementum eget
          pellentesque nulla lacus massa mollis. Lacus velit id odio lectus
          magna id. Venenatis imperdiet imperdiet ac volutpat ut ipsum sit vitae
          sit. Lorem ipsum dolor sit amet consectetur. Platea pharetra semper
          arcu hendrerit ut volutpat non diam. Id convallis elementum eget
          pellentesque nulla lacus massa mollis. Lacus velit id odio lectus
          magna id. Venenatis imperdiet imperdiet ac volutpat ut ipsum sit vitae
          sit. Lorem ipsum dolor sit amet consectetur. Platea pharetra semper
          arcu hendrerit ut volutpat non diam. Id convallis elementum eget
          pellentesque nulla lacus massa mollis. Lacus velit id odio lectus
          magna id. Venenatis imperdiet imperdiet ac volutpat ut ipsum sit vitae
          sit.
        </Text>
        <TermAndService />
      </div>
    </div>
  );
};

export default Footer;

const TermAndService = () => {
  const TOS_DATA = [
    { link: "/#", image: TOSApplePay },
    { link: "/#", image: TOSGooglePay },
    { link: "/#", image: TOSMasterCard },
    { link: "/#", image: TOSPayPal },
    { link: "/#", image: TOSPayoneer },
  ];
  const date = new Date().getFullYear();
  return (
    <div className="-bottom-20 relative flex justify-between items-center bg-[#FFF8E4] px-10 py-8 rounded-3xl w-full max-w-[1450px]">
      <div>© {date} Kidoyz. All rights reserved</div>
      <div className="flex items-center gap-6 capitalize">
        <Link
          href={"/term-of-services"}
          className="hover:text-gray text-xl cursor-pointer"
        >
          term of service
        </Link>
        <Link
          href={"/policy-services"}
          className="hover:text-gray text-xl cursor-pointer"
        >
          policy service
        </Link>
        {TOS_DATA.map((i, index) => (
          <Link key={index} href={i.link}>
            <CustomImage
              src={i.image}
              alt="image"
              className="shadow-sm hover:shadow-2xl w-16 hover:scale-110 transition-all ease-in-out cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
