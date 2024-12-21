"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EventCardProps {
  eventId: string;
  eventName: string;
  eventDate: number;
  eventVenue: string;
  eventCardDescription: string;
  likesCount: number;
}

const EventCard = ({
  eventId,
  eventName,
  eventDate,
  eventVenue,
  eventCardDescription,
  likesCount,
}: EventCardProps) => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const handleLike = () => {
    setLikes(likesCount + 1);
    setLiked(true);
  };

  return (
    <>
      <div className="w-[300px]  hover:shadow-2xl transition-all duration-200 cursor-pointer h-[350px] bg-gradient-to-b from-green-100 to-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video bg-gray-300">
          {/* Placeholder for an image */}
        </div>
        <div className="p-4 flex flex-col ">
          <div className="flex-grow">
            <h2 className="font-semibold md:text-md lg:text-xl text-gray-800">
              {eventName}
            </h2>
            <p className="lg:text-sm text-xs text-neutral-500 mt-1">
              {eventDate}, {eventVenue}
            </p>
            <p className="lg:text-sm text-xs text-neutral-600 mt-2">
              {eventCardDescription}
            </p>
          </div>
          <div className="lg:mt-4 md:mt-6 mt-8 flex gap-x-2">
            <Button
              onClick={() => router.push(`/events/${eventId}`)}
              size="sm"
              className="h-9 bg-gradient-to-br from-green-700 hover:text-white hover:bg-green-600 to-green-500 text-white"
              variant={`outline`}
            >
              <p className="text-xs">Join Now</p>
            </Button>
            <div className="relative">
              <Button
                onClick={handleLike}
                size="sm"
                className="relative bg-rose-50"
                variant="ghost"
              >
                <HeartIcon
                  className={cn(
                    "text-rose-500 transition-colors duration-300",
                    liked && "fill-current"
                  )}
                />
                <span className="absolute -top-2 -right-2 transition-all duration-300 bg-white border p-1 text-xs rounded-full size-5 text-neutral-800 flex justify-center items-center">
                  {likes}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
