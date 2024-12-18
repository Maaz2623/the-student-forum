"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import {
  sidebarGeneralItems,
  sidebarProfileItems,
} from "@/constants/sidebar-items";
import SidebarUserButton from "./sidebar-user-button";

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
              {sidebarGeneralItems.map((item) => {
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
                            pathname.includes(item.tag) && "scale-y-100"
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
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarProfileItems.map((item) => {
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
                            pathname.includes(item.tag) && "scale-y-100"
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
      <SidebarFooter>
        <SidebarUserButton />
      </SidebarFooter>
      <SidebarRail className="border-1 border-green-500" />
    </Sidebar>
  );
}
