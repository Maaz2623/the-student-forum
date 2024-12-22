"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/transparent-dialog";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { DatePickerWithRange } from "./event-range-date-picker";

const formSchema = z.object({
  eventName: z.string(),
  eventCardDescription: z.string(),
  eventVenue: z.string(),
  ticketPrice: z.string(),
});

const EventCreateForm = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const update = useMutation(api.events.createEvent);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      eventCardDescription: "",
      eventVenue: "",
      ticketPrice: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      setOpen(false);
      toast.success("Event Updated");
    } catch {
      toast.error("Some error occured");
    } finally {
      setLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="outline-none focus:outline-none" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="w-full text-center text-2xl mb-3">
            Create Event
          </DialogTitle>
          <VisuallyHidden.Root>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex">
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Movie Night"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <label htmlFor="">Date</label>
                <DatePickerWithRange />
              </div>
            </div>
            <FormField
              control={form.control}
              name="eventCardDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Watch movies all night and enjoy"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventVenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Venue</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Auditorium"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ticketPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Ticket Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. ₹100"
                      {...field}
                      type="number"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-center justify-end">
              <Button type="submit" className="bg-green-600" disabled={loading}>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EventCreateForm;
