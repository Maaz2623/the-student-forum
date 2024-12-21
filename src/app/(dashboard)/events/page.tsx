import { Separator } from "@/components/ui/separator";
import React from "react";
import EventCard from "./_components/event-card";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

const EventsPage = async () => {
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
      <div className="flex justify-center items-center w-full border">
        <div className="flex md:flex-row flex-col justify-center md:justify-start items-center flex-wrap gap-x-7 gap-y-10 ">
          {events.map((event) => {
            return (
              <EventCard
                eventId={event._id}
                key={event._id}
                eventName={event.eventName}
                eventCardDescription={event.eventCardDescription}
                eventDate={event.eventDate}
                eventVenue={event.eventVenue}
                likesCount={event.likesCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
