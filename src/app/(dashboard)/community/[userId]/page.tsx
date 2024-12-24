import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/transparent-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Separator } from "@/components/ui/separator";
import AchievementsContainer from "../../my-profile/_components/achievements-container";
import { convex } from "@/lib/utils";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";

const UserIdPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const user = await convex.query(api.users.getUserById, {
    id: (await params).userId as Id<"users">,
  });

  if (!user) return;

  const profileImage = user.imageUrl || "/dummy-profile-image.svg";

  return (
    <div className="h-full">
      {/* Banner Section */}
      <div
        className="h-48 relative rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpeg')",
        }}
      >
        {/* Profile Image */}
        <Dialog>
          <DialogTrigger>
            <Image
              src={profileImage}
              alt="Profile Image"
              width={150}
              height={150}
              className="w-24 h-24 bg-neutral-100 md:w-32 md:h-32 object-cover object-center cursor-pointer absolute left-4 md:left-10 -bottom-12 rounded-full border-4 border-white shadow-md"
            />
          </DialogTrigger>
          <DialogContent className="bg-transparent p-0 flex border-none shadow-none justify-center items-center overflow-hidden px-4 md:w-[500px] md:h-[500px]">
            <VisuallyHidden.Root>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
            </VisuallyHidden.Root>
            <Image
              src={profileImage}
              alt="profile-image"
              width={800}
              height={800}
              className="object-cover object-center rounded-lg shadow-2xl"
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* User Info Section */}
      <div className="pt-16 px-4 md:px-10 md:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            {user?.fullName || "Anonymous User"}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            {user.emailAddress || "user@example.com"}
          </p>
        </div>
      </div>

      <Separator className="my-8" />
      {/* Achievements Section */}
      <h1 className="px-4 md:px-10 text-xl md:text-2xl font-semibold">
        Achievements
      </h1>
      <AchievementsContainer />
    </div>
  );
};

export default UserIdPage;
