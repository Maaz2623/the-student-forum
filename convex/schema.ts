import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    userRole: v.string(),
  }).index("by_user_id", ["userId"]),
  events: defineTable({
    eventName: v.string(),
    eventDate: v.number(), // Store event dates as timestamps
    eventVenue: v.string(),
    eventCardDescription: v.string(),
    ticketPrice: v.number(),
  }),
  likes: defineTable({
    userId: v.id("users"),
    eventId: v.id("events"),
  })
    .index("by_user_and_event", ["userId", "eventId"])
    .index("by_event_id", ["eventId"]),
  tickets: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"), // Associate tickets with users
    paymentId: v.string(),
    orderId: v.string(),
    uniqueCode: v.string(),
    burnt: v.boolean(),
  })
    .index("by_payment_id", ["paymentId"])
    .index("by_order_id", ["orderId"])
    .index("by_user_id_by_event_id", ["userId", "eventId"])
    .index("by_unique_code", ["uniqueCode"]),
});
