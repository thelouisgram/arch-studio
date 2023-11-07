import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-20 py-[80px] w-full h-10 items-center flex gap-28 relative">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width="97"
          height="40"
          priority={true}
        />
      </Link>
      <NavLinks />
      <div>
        <div className="w-[1px] h-[100px] bg-[#EEEFF4] absolute left-[10px] top-0" />
      </div>
    </div>
  );
};

export default Header;
