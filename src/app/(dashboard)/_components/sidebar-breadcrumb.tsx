"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarBreadcrumb = () => {
  const pathname = usePathname();

  // Extract the last part of the route as the page title
  const currentPage = pathname
    .split("/")
    .filter((part) => part)
    .pop()
    ?.replace(/-/g, " ") // Replace dashes with spaces for better readability
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SidebarBreadcrumb;
