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
import { usePathname, useRouter } from "next/navigation";
import OrganisationDropdown from "./organisation-dropdown";
import {
  sidebarGeneralItems,
  sidebarProfileItems,
} from "@/constants/sidebar-items";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

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
      <SidebarFooter className="">
        <Button
          onClick={() => {
            router.push(`/`);
            signOut({
              redirectUrl: "/",
            });
          }}
          variant={`secondary`}
          className="text-rose-600 flex justify-between items-center hover:text-rose-600"
        >
          <p>Sign out</p>
          <LogOutIcon />
        </Button>
      </SidebarFooter>
      <SidebarRail className="border-1 border-green-500" />
    </Sidebar>
  );
}
