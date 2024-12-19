import {
  Calendar,
  LucideIcon,
  TicketIcon,
  UserIcon,
  Users,
} from "lucide-react";

type SidebarItemsProps = {
  label: string;
  link: string;
  icon?: LucideIcon;
  animation?: string;
  tag: string;
};

export const sidebarGeneralItems: SidebarItemsProps[] = [
  {
    label: "Events",
    link: "/events",
    icon: Calendar,
    tag: "events",
  },
  {
    label: "Members",
    link: "/members",
    icon: Users,
    tag: "members",
  },
];

export const sidebarProfileItems: SidebarItemsProps[] = [
  {
    label: "My Profile",
    link: "/my-profile",
    icon: UserIcon,
    tag: "profile",
  },
  {
    label: "My Tickets",
    link: "/my-tickets",
    icon: TicketIcon,
    tag: "tickets",
  },
];
