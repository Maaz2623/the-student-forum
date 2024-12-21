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
    likesCount: v.number(),
  }),
  likes: defineTable({
    userId: v.id("users"),
    eventId: v.id("events"),
  }).index("by_user_and_event", ["userId", "eventId"]),
  tickets: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"), // Associate tickets with users
    price: v.number(),
    transactionId: v.string(),
    uniqueCode: v.string(),
    burnt: v.boolean(),
  }).index("by_transaction_id", ["transactionId"]),
});
