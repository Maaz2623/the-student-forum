import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const incrementLike = mutation({
  args: {
    userId: v.string(),
    eventId: v.id("events"),
  },
  handler: async (ctx, args) => {
    const clerkAccount = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    if (!clerkAccount) return;

    await ctx.db.insert("likes", {
      userId: clerkAccount._id,
      eventId: args.eventId,
    });

    return {
      liked: true,
    };
  },
});

export const getLikeCount = query({
  args: {
    eventId: v.id("events"),
  },
  handler: async (ctx, args) => {
    const likes = await ctx.db
      .query("likes")
      .withIndex("by_event_id", (q) => q.eq("eventId", args.eventId))
      .collect();

    return likes.length; // Simply return the count of likes
  },
});
