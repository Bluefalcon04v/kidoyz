import { Logo } from "@/public/images/index";
import { ProfileIcon } from "@/public/svg/index";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container flex justify-between py-2">
      <Image
        src={Logo}
        alt="logo"
        height={400}
        width={800}
        quality={100}
        className="aspect-video w-28"
      />
      <div className="flex h-fit gap-4">
        <input
          type="search"
          name="search"
          className="outline-2 outline-gray-color focus:outline-primary font-dm-sans text-sm px-2 w-80 py-2 rounded-sm "
          placeholder="Search the store"
        />

        <Image src={ProfileIcon} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
