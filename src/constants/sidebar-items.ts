import { Calendar, LucideIcon, Settings, User } from "lucide-react";

type SidebarItemsProps = {
  label: string;
  link: string;
  icon?: LucideIcon;
};

export const sidebarItems: SidebarItemsProps[] = [
  {
    label: "Events",
    link: "/events",
    icon: Calendar,
  },
  {
    label: "Profile",
    link: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: Settings,
  },
];