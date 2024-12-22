import { ConvexHttpClient } from "convex/browser";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import { Separator } from "@/components/ui/separator";
import EventCard from "./components/event-card";

const EventManagement = async () => {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  const getEvents = async () => {
    return await convex.query(api.events.getEvents);
  };

  const events = await getEvents();

  if (!events) return;
  return (
    <div className="">
      <header>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-sm text-neutral-600 mt-2">
          Join us in the events and enjoy unforgettable moments!
        </p>
      </header>
      <Separator className="my-6" />
      <div className="flex justify-center items-center w-full">
        <div className="flex md:flex-row flex-col justify-center md:justify-start items-center flex-wrap gap-x-7 gap-y-10 ">
          {events.map((event) => {
            return (
              <EventCard
                key={event._id as string}
                _id={event._id}
                eventName={event.eventName}
                eventCardDescription={event.eventCardDescription}
                eventDate={event.eventDate}
                eventVenue={event.eventVenue}
                _creationTime={event._creationTime}
                ticketPrice={event.ticketPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
