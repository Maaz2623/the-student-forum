import { Calendar, LucideIcon, TicketIcon, UserIcon } from "lucide-react";

type SidebarItemsProps = {
  label: string;
  link: string;
  icon?: LucideIcon;
  animation?: string;
};

export const sidebarItems: SidebarItemsProps[] = [
  {
    label: "Events",
    link: "/events",
    icon: Calendar,
  },
  {
    label: "My Tickets",
    link: "/my-tickets",
    icon: TicketIcon,
  },
  {
    label: "Manage Profile",
    link: "/my-profile",
    icon: UserIcon,
  },
];
