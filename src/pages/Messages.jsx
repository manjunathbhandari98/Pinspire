import React, { useState } from "react";
import ChatRoom from "./ChatRoom";
import ChatSearch from "../components/ChatSearch";
import ProfileImage from "../assets/images/Profile.jpeg";
import Profile from "../components/Profile";

const messagesData = [
  {
    user: "John Doe",
    time: "10:00 AM",
    message: "Hello, how are you?",
  },
  {
    user: "Jane Smith",
    time: "10:30 AM",
    message: "Good morning!",
  },
  {
    user: "Mark Lee",
    time: "11:00 AM",
    message: "Can you send the files?",
  },
  // Add more messages as needed
];

const Messages = () => {
  const [selectedMessage, setSelectedMessage] =
    useState(null);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Messages List (Left Side) */}
      <div className="lg:w-1/3 w-full border-r p-4 overflow-y-auto">
        <h2 className="font-semibold text-2xl mb-4">
          Messages
        </h2>
        <ChatSearch />
        <div className="space-y-4">
          {messagesData.map((msg, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
              onClick={() =>
                setSelectedMessage(msg)
              }
            >
              <div className="flex w-full justify-between">
                <div className="user-dp flex gap-5 items-center">
                  <Profile />{" "}
                  {/* change image here */}
                  <div className="flex flex-col gap-1">
                    <div className="name font-semibold">
                      {msg.user}
                    </div>
                    <div className="message">
                      {msg.message}
                    </div>
                  </div>
                </div>
                <div className="time-count justify-center gap-3  items-center flex flex-col">
                  <div className="time">
                    {msg.time}
                  </div>
                  <div className="count flex rounded-full justify-center items-center text-white text-sm h-5 w-5 bg-gradient-to-r from-pink-500 via-red-500 to-red-500">
                    5
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Messages View (Right Side) */}
      <div className="lg:w-2/3 w-full p-4">
        {selectedMessage ? (
          <ChatRoom
            userName={selectedMessage.user}
            message={selectedMessage.message}
          />
        ) : (
          <div className="text-center text-gray-500">
            <p>Select a message to view</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
