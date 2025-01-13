import React, { useState } from "react";
import Images from "../assets/images/images";
import {
  MdOutlineNotificationsNone,
  MdOutlineNotificationsOff,
} from "react-icons/md";

const ChatRoom = ({
  userName,
  Profile = Images.User,
  time,
  message,
}) => {
  return (
    <div className="w-full h-screen bg-gray-200 text-black">
      <div className="user-info flex bg-white justify-between px-4 shadow-lg">
        <div className="user-name flex font-semibold space-x-4 text-xl py-4">
          <img
            src={Profile}
            alt=""
            width="45px"
            height="auto"
            className="rounded-full"
          />
          <div className="user-status flex flex-col">
            <h2>{userName}</h2>
            <p>
              <i className="status text-sm text-green-700">
                Typing...
              </i>
            </p>
          </div>
        </div>
        <div className="buttons py-4 px-2 cursor-pointer">
          <img
            src={Images.More}
            alt=""
            width="15px"
          />
        </div>
      </div>
      <div className="message-box items-center shadow-md rounded-sm bottom-0 right-0 left-0 flex bg-white px-2 py-2 m-3 space-x-5">
        <input
          type="text"
          placeholder="Type a Message.."
          className="w-full focus:outline-none"
        />
        <img
          src={Images.ImageGallery}
          alt=""
          className="w-6 h-6 object-contain cursor-pointer"
        />
        <img
          src={Images.Mic}
          alt=""
          className="w-6 h-6 object-contain cursor-pointer"
        />
        <div className="bg-green-600 p-2 rounded-md cursor-pointer">
          <img
            src={Images.Message}
            alt=""
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
