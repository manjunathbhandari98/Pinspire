import React, { useState } from "react";
import ProfileImage from "../assets/images/profile.jpeg";

const Profile = () => {
  const [hasProfile, setHasProfile] =
    useState(true);
  useState(true);
  return (
    <div className="rounded-full cursor-pointer">
      {hasProfile ? (
        <img
          src={ProfileImage}
          alt=""
          width="36px"
          height="36px"
          className="rounded-full"
        />
      ) : (
        <div className="bg-blue-600 text-white text-2xl font-bold p-3 rounded-full w-9 h-9 flex items-center justify-center">
          I
        </div>
      )}
    </div>
  );
};

export default Profile;
