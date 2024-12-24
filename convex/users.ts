import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUser = mutation({
  args: {
    userId: v.string(),
    imageUrl: v.string(),
    createdAt: v.float64(),
    emailAddress: v.string(),
    fullName: v.string(),
    phoneNumber: v.optional(v.string()),
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
        role: RoleType.MEMBER,
        imageUrl: args.imageUrl,
        banned: false,
        createdAt: Date.now(),
        emailAddress: args.emailAddress,
        fullName: args.fullName,
        phoneNumber: args.phoneNumber,
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
