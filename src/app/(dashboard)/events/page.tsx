import { Separator } from "@/components/ui/separator";
import React from "react";
import EventCard from "./_components/event-card";

const EventsPage = () => {
  return (
    <div className="">
      <header>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-sm text-neutral-600 mt-2">
          Join us in the events and enjoy unforgettable moments!
        </p>
      </header>
      <Separator className="my-6" />
      <div className="flex md:flex-row flex-col justify-center md:justify-start items-center flex-wrap gap-x-7 gap-y-10 ">
        <EventCard
          eventName="Pretense"
          eventCardDescription="Enjoy a day full of excitement, learning, and fun activities!"
          eventDate="23 Dec"
          eventVenue="Auditorium"
          likesCount={0}
        />
        <EventCard
          eventName="Symphony"
          eventCardDescription="Immerse yourself in the world of music and melody."
          eventDate="5 Jan"
          eventVenue="Concert Hall"
          likesCount={12}
        />
        <EventCard
          eventName="CodeFest"
          eventCardDescription="Show off your coding skills in this thrilling competition!"
          eventDate="14 Feb"
          eventVenue="Lab 3"
          likesCount={34}
        />
        <EventCard
          eventName="Artistry"
          eventCardDescription="Unleash your creativity in our art competition."
          eventDate="19 Mar"
          eventVenue="Exhibition Center"
          likesCount={7}
        />
        <EventCard
          eventName="Quizorama"
          eventCardDescription="Challenge your intellect with a series of mind-bending quizzes."
          eventDate="30 Apr"
          eventVenue="Room 101"
          likesCount={25}
        />
        <EventCard
          eventName="Dance Mania"
          eventCardDescription="Groove to the beats and showcase your dance moves."
          eventDate="20 May"
          eventVenue="Main Stage"
          likesCount={42}
        />
        <EventCard
          eventName="Hackathon"
          eventCardDescription="Innovate and create in a 24-hour hackathon!"
          eventDate="12 Jun"
          eventVenue="Tech Hub"
          likesCount={18}
        />
        <EventCard
          eventName="Drama Night"
          eventCardDescription="Experience a captivating evening of theatrical performances."
          eventDate="8 Jul"
          eventVenue="Theater"
          likesCount={10}
        />
        <EventCard
          eventName="TechTalk"
          eventCardDescription="Join us for an insightful discussion on cutting-edge technology."
          eventDate="15 Aug"
          eventVenue="Seminar Hall"
          likesCount={22}
        />
        <EventCard
          eventName="Carnival"
          eventCardDescription="A day filled with games, food, and endless fun!"
          eventDate="1 Sep"
          eventVenue="Open Grounds"
          likesCount={55}
        />
        <EventCard
          eventName="Literary Fest"
          eventCardDescription="Dive into the world of words and creativity."
          eventDate="25 Oct"
          eventVenue="Library"
          likesCount={9}
        />
        <EventCard
          eventName="Photography Contest"
          eventCardDescription="Capture the moment and win exciting prizes!"
          eventDate="12 Nov"
          eventVenue="Studio A"
          likesCount={15}
        />
        <EventCard
          eventName="Gaming Marathon"
          eventCardDescription="Compete in an all-night gaming extravaganza!"
          eventDate="29 Nov"
          eventVenue="Room 202"
          likesCount={30}
        />
        <EventCard
          eventName="Culinary Workshop"
          eventCardDescription="Learn to cook gourmet dishes with professional chefs."
          eventDate="10 Dec"
          eventVenue="Kitchen Arena"
          likesCount={20}
        />
        <EventCard
          eventName="Fitness Challenge"
          eventCardDescription="Test your physical limits and achieve your fitness goals."
          eventDate="20 Dec"
          eventVenue="Gymnasium"
          likesCount={5}
        />
        <EventCard
          eventName="Movie Night"
          eventCardDescription="Enjoy a relaxing evening with a classic movie screening."
          eventDate="31 Dec"
          eventVenue="Auditorium"
          likesCount={37}
        />
      </div>
    </div>
  );
};

export default EventsPage;
