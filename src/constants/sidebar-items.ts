import {
  Calendar,
  CalendarCogIcon,
  LucideIcon,
  TicketIcon,
  TicketXIcon,
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
    label: "Community",
    link: "/community",
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

export const sidebarBackendItems: SidebarItemsProps[] = [
  {
    label: "Event Management",
    link: "/admin/event-management",
    icon: CalendarCogIcon,
    tag: "event-management",
  },
  {
    label: "Ticket Burner",
    link: "/admin/ticket-burner",
    icon: TicketXIcon,
    tag: "ticket-burner",
  },
];
