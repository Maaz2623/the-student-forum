import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUser = mutation({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    enum RoleType {
      MEMBER = "MEMBER",
      ADMIN = "ADMIN",
      SUPER_ADMIN = "SUPER_ADMIN",
    }

    if (!user) {
      return await ctx.db.insert("users", {
        userId: args.userId,
        userRole: RoleType.MEMBER,
      });
    }

    return user;
  },
});

export const getCurrentUser = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUser = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .first();

    return currentUser;
  },
});
