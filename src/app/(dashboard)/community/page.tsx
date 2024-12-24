import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import FullscreenLoader from "@/components/fullscreen-loader";
import { convex } from "@/lib/utils";
import { api } from "../../../../convex/_generated/api";
import { currentUser } from "@clerk/nextjs/server";

const MembersPage = async () => {
  const user = await currentUser();

  if (!user) return;

  const data = await convex.query(api.users.getAllUsers);

  if (!data) return;

  const formattedUserList = data.map((user) => ({
    profileImage: user.imageUrl || "",
    user: {
      email: user.emailAddress,
      fullName: user.fullName,
    },
    id: user._id,
  }));

  return (
    <div className="h-full">
      <header>
        <h1 className="text-3xl font-bold">Our Community</h1>
        <p className="text-sm text-neutral-600 mt-2">
          Meet our members of community and great achievers
        </p>
      </header>
      <Separator className="my-6" />
      <div className="">
        {data.length === 0 ? (
          <FullscreenLoader title="Loading members..." />
        ) : (
          <DataTable columns={columns} data={formattedUserList} />
        )}
      </div>
    </div>
  );
};

export default MembersPage;
