import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getEvents = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").order("desc").collect();

    if (!events) return;

    return events;
  },
});

export const getEvent = query({
  args: {
    eventId: v.id("events"),
  },
  handler: async (ctx, args) => {
    const event = await ctx.db.get(args.eventId);

    if (!event) return;

    return event;
  },
});

export const updateEvent = mutation({
  args: {
    eventId: v.id("events"),
    eventName: v.optional(v.string()),
    eventVenue: v.optional(v.string()),
    eventCardDescription: v.optional(v.string()),
    ticketPrice: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const event = await ctx.db.get(args.eventId);

    if (!event) return;

    const updatedEvent = await ctx.db.patch(args.eventId, {
      eventName: args.eventName,
      eventVenue: args.eventVenue,
      eventCardDescription: args.eventCardDescription,
      ticketPrice: args.ticketPrice,
    });

    return updatedEvent;
  },
});
