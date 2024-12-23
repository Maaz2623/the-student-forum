"use client";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useMutation } from "convex/react";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { api } from "../../../../../convex/_generated/api";

const QRScanner = () => {
  const [data, setData] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element

  const burn = useMutation(api.tickets.burnTicket);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Constraints for camera input (you can customize as needed)
    const constraints = {
      video: {
        facingMode: "environment", // Use the back camera on mobile
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    };

    // Ensure the video element is available before initializing the scanner
    if (videoRef.current) {
      codeReader.decodeFromConstraints(
        constraints,
        videoRef.current,
        async (result, error) => {
          if (result) {
            // Await the mutation to burn the ticket
            const burnt = await burn({
              uniqueCode: result.getText(),
            });

            if (burnt) {
              toast.success("Ticket Valid");
              setData(result.getText()); // Retrieve the decoded text
            } else {
              toast.error("Invalid Ticket");
            }
          } else if (error) {
            // Handle error here if needed
          }
        }
      );
    }

    // Cleanup function to stop the scanner and camera stream when the component unmounts
    return () => {
      codeReader.reset();
    };
  }, [burn]);

  return (
    <div>
      <>
        <video ref={videoRef} width="300" height="300" />
        <p>{data}</p>
      </>
    </div>
  );
};

export default QRScanner;
