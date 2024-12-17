import React from "react";
import { Teko } from "next/font/google";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./auth-dialog";
import { Button } from "@/components/ui/button";

const teko = Teko({
  subsets: ["latin"],
  weight: ["600"],
});

const Navbar = () => {
  return (
    <div className="border-gray-150 h-14 px-4 py-3 flex justify-between items-center">
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
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={`secondary`}>Sign in</Button>
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center bg-transparent border-none shadow-none">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <SignIn signUpFallbackRedirectUrl={`/events`} routing="hash" />
            </DialogContent>
          </Dialog>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
