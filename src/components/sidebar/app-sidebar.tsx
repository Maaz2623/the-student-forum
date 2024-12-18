"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import OrganisationDropdown from "./organisation-dropdown";
import { sidebarItems } from "@/constants/sidebar-items";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} className="">
      <SidebarHeader>
        <OrganisationDropdown />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.link}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "h-10 text-base ",
                        pathname === item.link && "bg-black/5 font-medium"
                      )}
                    >
                      <Link href={item.link}>
                        <div
                          className={cn(
                            "h-full w-1 bg-green-600 scale-y-0 rounded-full transition-transform duration-300",
                            pathname === item.link && "scale-y-100"
                          )}
                        />
                        {Icon && <Icon />}
                        {item.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
