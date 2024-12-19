"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, LogOutIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const SidebarUserButton = () => {
  const { user, isLoaded } = useUser();

  const { signOut } = useClerk();

  // Render a loading skeleton if the user data is not loaded yet
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-x-2 px-2 py-1 border w-full justify-start">
        <Skeleton className="h-8 w-8 rounded-full bg-neutral-300" />
        <div className="w-full text-start space-y-2">
          <Skeleton className="text-md font-medium h-4 w-full bg-neutral-300" />
          <Skeleton className="text-gray-600 text-sm h-3 bg-neutral-300 w-3/4 font-light truncate" />
        </div>
      </div>
    );
  }

  // Extract the user's email and profile image or provide fallback values
  const email = user?.primaryEmailAddress?.emailAddress || "null@example.com";
  const profileImage = user?.imageUrl || "/dummy-profile-image.svg";

  // Function to truncate the email for better display
  const truncateEmail = (email: string) => {
    const [name, domain] = email.split("@");
    if (name.length > 5) {
      return `${name.slice(0, 4)}...${name.slice(-2)}@${domain}`;
    }
    return email;
  };

  const truncatedEmail = truncateEmail(email);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex border border-neutral-200 items-center rounded-md gap-x-2 px-2 py-1 bg-black/5 hover:bg-black/10 transition duration-200 w-full justify-start">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="size-10 rounded-full object-cover object-center"
          width={50}
          height={50}
        />
        <div className="w-full text-start">
          <p className="text-md font-medium">Mohammed Maaz</p>
          <p className="text-gray-600 text-sm font-normal truncate">
            {truncatedEmail}
          </p>
        </div>
        <ChevronsUpDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-[250px] w-[200px] ml-8">
        <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut({ redirectUrl: "/" })}
          className="text-rose-700 flex justify-between items-center hover:text-rose-600"
        >
          <p>Signout</p>
          <LogOutIcon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarUserButton;
