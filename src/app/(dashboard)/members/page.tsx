import { createClerkClient } from "@clerk/nextjs/server";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";

const MembersPage = async () => {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY!,
  });
  const userList = await clerkClient.users.getUserList();

  const formattedUserList = userList.data.map((user) => ({
    profileImage: user.imageUrl || "",
    user: {
      email: user.primaryEmailAddress?.emailAddress || "",
      fullName: user.fullName || "",
    },
    id: user.id,
  }));

  return (
    <div className="h-full">
      <header className=" mt-4 text-3xl font-semibold">Our Community</header>
      <Separator className="my-6" />
      <div className="">
        <DataTable columns={columns} data={formattedUserList} />
      </div>
    </div>
  );
};

export default MembersPage;
