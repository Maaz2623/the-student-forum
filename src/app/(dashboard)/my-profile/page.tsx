"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MyProfilePage = () => {
  const router = useRouter();

  const { user } = useUser();
  const profileImage = user?.imageUrl || "/dummy-profile-image.svg";

  return (
    <div className="border h-full">
      {/* Banner Section */}
      <div
        className="h-44 relative rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpeg')",
        }}
      >
        {/* Profile Image */}
        <Image
          src={profileImage}
          alt="Profile Image"
          width={150}
          height={150}
          onClick={() => router.push(`/manage-profile`)}
          className="w-24 h-24 md:w-32 md:h-32 object-cover object-center cursor-pointer absolute left-4 md:left-10 -bottom-12 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* User Info Section */}
      <div className="pt-16 px-4 md:px-10">
        <h1 className="text-xl md:text-2xl font-semibold">
          {user?.fullName || "Anonymous User"}
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          {user?.primaryEmailAddress?.emailAddress || "user@example.com"}
        </p>
      </div>

      {/* Achievements Section */}
      <h1 className="pt-4 px-4 md:px-10 md:pt-10 text-xl md:text-2xl font-semibold">
        Achievements
      </h1>
      <div className="border w-full h-fit px-4 md:p-10 flex flex-wrap gap-4">
        {/* Achievement Cards */}
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-[200px] bg-gray-500 h-[100px] rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default MyProfilePage;
