"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import toast from "react-hot-toast";
import {
  MoreHorizontal,
  PenBoxIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EventUpdateForm from "./event-update-form";
import { GotoEvent } from "./goto-event";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Doc<"events">>[] = [
  {
    accessorKey: "_id",
    header: "Event ID",
    cell: ({ row }) => {
      return (
        <p
          className="w-[100px] truncate hover:bg-neutral-200 rounded-sm px-1"
          onClick={() => {
            navigator.clipboard.writeText(row.original._id);
            toast.success(`Copied id to clipboard!`);
          }}
        >
          {row.original._id}
        </p>
      );
    },
  },
  {
    accessorKey: "eventName",
    header: "Name",
  },
  {
    accessorKey: "eventCardDescription",
    header: "Description",
    cell: ({ row }) => {
      return (
        <p className="w-[250px] truncate">
          {row.original.eventCardDescription}
        </p>
      );
    },
  },
  {
    accessorKey: "eventDate",
    header: "Date",
  },
  {
    accessorKey: "eventVenue",
    header: "Venue",
  },
  {
    accessorKey: "ticketPrice",
    header: "Ticket Price",
    cell: ({ row }) => {
      return (
        <p className="w-[100px] flex justify-center items-center">
          ₹{row.original.ticketPrice}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { eventName, eventCardDescription, eventVenue, _id, ticketPrice } =
        row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <EventUpdateForm
              eventId={_id}
              eventName={eventName}
              eventCardDescription={eventCardDescription}
              eventVenue={eventVenue}
              ticketPrice={ticketPrice}
            >
              <DropdownMenuItem
                className=""
                onSelect={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
              >
                <PenBoxIcon className="size-4 mr-1" />
                Edit
              </DropdownMenuItem>
            </EventUpdateForm>
            <GotoEvent eventId={_id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
