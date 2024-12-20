import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import { clerkClient } from "@clerk/nextjs/server";

const MembersPage = async () => {
  const { data } = await (await clerkClient()).users.getUserList();

  const formattedUserList = data.map((user) => ({
    profileImage: user.imageUrl || "",
    user: {
      email: user.primaryEmailAddress?.emailAddress || "",
      fullName: user.fullName || "",
    },
    id: user.id,
  }));

  console.log(data);

  return (
    <div className="h-full">
      <header className=" mt-4 text-2xl font-medium">Our Community</header>
      <Separator className="my-6" />
      <div className="">
        <DataTable columns={columns} data={formattedUserList} />
      </div>
    </div>
  );
};

export default MembersPage;
