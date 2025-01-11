import React, { useState } from "react";

const Profile = () => {
  const [profileImage, setProfileImage] =
    useState("../assets/images/logo.png");
  return (
    <div className="rounded-full cursor-pointer">
      {profileImage ? (
        <img
          src={profileImage}
          alt=""
          width="20px"
          height="20px"
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
