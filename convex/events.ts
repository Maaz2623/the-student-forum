import { query } from "./_generated/server";

export const getEvents = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").order("desc").collect();

    if (!events) return;

    return events;
  },
});
