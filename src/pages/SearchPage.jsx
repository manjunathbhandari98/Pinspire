// Search Page for Mobile view
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  IoSearch,
  IoClose,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ className }) => {
  const [inputValue, setInputValue] =
    useState("");
  const navigate = useNavigate();
  const closeSearch = () => {
    navigate("/");
  };

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden relative">
        <div className="fixed top-0 left-0 w-full h-full bg-white p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <input
              type="search"
              placeholder="Search for ideas..."
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              className="flex-grow p-2 border border-gray-300 rounded-lg"
            />
            <IoClose
              className="text-[24px] text-black ml-2 cursor-pointer"
              onClick={closeSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
