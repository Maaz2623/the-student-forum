import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ManageProfilePage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center pt-10">
      <UserProfile routing="hash" />
    </div>
  );
};

export default ManageProfilePage;
