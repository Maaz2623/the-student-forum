"use client";
import React, { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const EventTicketPayment = () => {
  const AMOUNT = 250;

  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", { method: "POST" });
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
          router.push(`/payment/success`);
        },
        prefill: {
          name: "Mohammed Maaz",
          email: "mohammedmaaz2623@gmail.com",
          contact: "8296472301",
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
    <div className="min-h-screen flex justify-center items-center">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div>
        <Button disabled={isProcessing} onClick={handlePayment}>
          Pay {AMOUNT}
        </Button>
      </div>
    </div>
  );
};

export default EventTicketPayment;
