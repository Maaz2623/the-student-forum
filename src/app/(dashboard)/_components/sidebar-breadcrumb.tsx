"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import React from "react";

const SidebarBreadcrumb = () => {

  // Split the pathname into segments

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Render the base Dashboard link */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/events">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SidebarBreadcrumb;
