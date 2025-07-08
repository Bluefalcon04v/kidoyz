"use client";
import { HeartIcon, ProfileIcon, ShoppingCartIcon } from "@/public/svg/index";
import { Logo } from "@/public/images/index";
import { Button } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-6 container">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          height={400}
          width={800}
          quality={100}
          className="w-28 aspect-video"
        />
      </Link>
      <div className="flex justify-center items-center gap-6 h-fit">
        <input
          type="search"
          name="search"
          className="px-2 py-2 rounded-sm outline-2 outline-gray focus:outline-primary w-80 font-dm-sans text-sm"
          placeholder="Search the store"
        />
        <div className="flex items-center gap-5">
          <ProfileIcon />
          <HeartIcon />
          <Link href={"./my-cart"}>
            <ShoppingCartIcon />
          </Link>
        </div>
        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
