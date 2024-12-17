import React from "react";
import { Teko } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const teko = Teko({
  subsets: ["latin"],
  weight: ["600"],
});

const Navbar = () => {
  return (
    <div className="border-b bg-slate-100 border-gray-150 h-14 px-4 py-3 flex justify-between items-center">
      <div className={`flex items-center justify-center gap-x-1`}>
        <Image
          src={`/logo.svg`}
          alt="logo"
          width={30}
          height={30}
          className=""
        />
        <p className={`${teko.className} text-xl sm:text-2xl lg:text-3xl`}>
          The Student Forum
        </p>
      </div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
