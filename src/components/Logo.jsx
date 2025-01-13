import React from "react";
import Images from "../assets/images/images";
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Pin Icon */}
      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg">
        <img
          src={Images.Pin}
          alt=""
          className="h-5 w-5"
        />
      </div>

      {/* Text */}
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Pin
        </span>
        spire
      </h1>
    </div>
  );
};

export default Logo;
