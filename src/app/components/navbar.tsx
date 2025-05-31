import { HeartIcon, ProfileIcon, ShoppingCartIcon } from "@/public/svg/index";
import { Logo } from "@/public/images/index";
import { Button } from "./custom/button";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container flex justify-between py-6">
      <Image
        src={Logo}
        alt="logo"
        height={400}
        width={800}
        quality={100}
        className="aspect-video w-28"
      />
      <div className="flex h-fit gap-6 justify-center items-center">
        <input
          type="search"
          name="search"
          className="outline-2 outline-gray focus:outline-primary font-dm-sans text-sm px-2 w-80 py-2 rounded-sm"
          placeholder="Search the store"
        />
        <div className="flex gap-5 items-center">
          <ProfileIcon />
          <HeartIcon />
          <ShoppingCartIcon />
        </div>
        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
