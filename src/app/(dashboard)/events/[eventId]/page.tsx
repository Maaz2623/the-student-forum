"use client";

import {
  CalendarIcon,
  DownloadIcon,
  InfoIcon,
  MapPin,
  TicketIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/transparent-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const EventIdPage = () => {
  const AMOUNT = 250;

  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Make sure the server knows you're sending JSON
        },
        body: JSON.stringify({
          amount: AMOUNT, // Pass the amount as a JSON string
        }),
      });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "The Student Forum",
        description: "Test Transaction",
        order_id: data.orderId,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: function (response: any) {
          console.log("Payment Successfull", response);
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("Payment Failed", error);
      router.push(`/payment/error`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="rounded-lg min-h-screen">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="flex flex-col md:flex-row gap-y-6 gap-x-8 p-0 md:p-3">
        {/* Event Image */}
        <div className="aspect-video w-full md:w-[400px] rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 shadow-md" />

        {/* Event Details */}
        <div className="flex flex-col gap-y-4 p-3 md:p-0">
          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Pretense</h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              dolorem.
            </p>
          </div>

          {/* Date and Location */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="w-5 h-5 text-gray-600" />
              <p className="text-gray-800">Dec 23, 2025</p>
            </div>
            <Link
              href="https://maps.app.goo.gl/DWt147x2xojzJN1w8"
              target="_blank"
              className="flex items-center gap-x-2 text-blue-600 hover:underline"
            >
              <MapPin className="w-5 h-5" />
              <p>Auditorium</p>
            </Link>
          </div>

          {/* Attendees and Info Dialog */}
          <div className="flex items-center gap-x-3">
            <UsersIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">+260</span>
            <Dialog>
              <DialogTrigger>
                <InfoIcon className="w-5 h-5 text-blue-800 cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="bg-white border shadow-lg rounded-lg p-4 max-w-xs">
                <DialogHeader>
                  <DialogTitle className="text-lg font-medium text-gray-800">
                    Attendees Information
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-600">
                    Shows the count of people attending the event.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Ticket Price and Brochure */}
          <div className="flex justify-between md:justify-start mt-auto items-center gap-x-4">
            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="relative flex items-center gap-x-2 bg-green-600"
            >
              <TicketIcon className="w-5 h-5 text-white" />
              <Separator orientation="vertical" className="h-5" />
              <span className="text-white font-medium">₹250</span>
            </Button>
            <Button
              disabled={isProcessing}
              variant="outline"
              className="flex items-center gap-x-2"
            >
              <DownloadIcon className="w-5 h-5 text-gray-600" />
              <span>Brochure</span>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />
    </div>
  );
};

export default EventIdPage;
