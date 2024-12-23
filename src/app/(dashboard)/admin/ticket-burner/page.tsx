"use client";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useMutation } from "convex/react";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { api } from "../../../../../convex/_generated/api";
import { Scan } from "lucide-react";
import { cn } from "@/lib/utils";

const QRScanner = () => {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // Flag to prevent multiple scans

  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element

  const burn = useMutation(api.tickets.burnTicket);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const constraints = {
      video: {
        facingMode: "environment",
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    };

    if (videoRef.current) {
      codeReader.decodeFromConstraints(
        constraints,
        videoRef.current,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async (result, decodeError) => {
          if (result && !isProcessing) {
            setIsProcessing(true); // Disable further processing
            const scannedCode = result.getText();

            // Pause video playback
            if (videoRef.current) {
              videoRef.current.pause();
            }

            const burnt = await burn({
              uniqueCode: scannedCode,
            });

            if (burnt) {
              toast.success("Ticket Valid");
              setData(scannedCode);
            } else {
              setError(true);
              toast.error("Invalid Ticket");
            }

            // Resume video after 3 seconds
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.play();
              }
              setData("");
              setError(false);
              setIsProcessing(false); // Re-enable scanning
            }, 3000);
          }
        }
      );
    }

    return () => {
      codeReader.reset();
    };
  }, [burn, isProcessing]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg bg-black flex flex-col justify-center items-center">
      <div className="relative w-full h-full flex justify-center items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
        />
        <div className="z-40">
          <Scan
            className={cn(
              "lg:size-[500px] md:size-[400px] sm:size-[300px] size-250px text-white/80",
              data && "text-green-500",
              error && "text-red-500"
            )}
            strokeWidth={0.4}
          />
        </div>
      </div>
      {data && (
        <p className="absolute bottom-4 text-lg font-semibold text-gray-200 bg-gray-800 bg-opacity-50 p-2 rounded-md">
          Scanned Data: <span className="text-green-400">{data}</span>
        </p>
      )}
    </div>
  );
};

export default QRScanner;
