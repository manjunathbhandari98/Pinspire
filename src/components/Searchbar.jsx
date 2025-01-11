/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  IoSearch,
  IoClose,
} from "react-icons/io5";

const Searchbar = ({ className }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <div
      className={`search-bar relative hidden lg:block ${className}`}
    >
      <input
        type="text"
        placeholder="Search for Ideas..."
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
        className="w-[500px] bg-gray-100 p-3 my-2 focus:outline-none rounded-full text-gray-900 placeholder-gray-500"
      />
      <IoSearch
        className={`absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2 ${
          inputValue
            ? "cursor-pointer text-black"
            : "cursor-not-allowed text-gray-500"
        } `}
      />
    </div>
  );
};

export default Searchbar;
