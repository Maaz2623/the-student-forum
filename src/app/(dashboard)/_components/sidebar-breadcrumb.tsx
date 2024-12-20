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

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter((part) => part); // Remove empty segments

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Render the base Dashboard link */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/events">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Loop through the path segments to render the breadcrumb items */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`; // Create the path up to the current segment
          const label = segment
            .replace(/-/g, " ") // Replace dashes with spaces
            .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter

          return (
            <div
              className="flex items-center justify-center gap-x-1"
              key={index}
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {/* Make the last item a page instead of a link */}
                {index === pathSegments.length - 1 ? (
                  <BreadcrumbPage>
                    {label.includes("User") ? "User" : label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SidebarBreadcrumb;
