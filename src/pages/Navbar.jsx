import { useState } from "react";
import NavOption from "../components/NavOption";
import Profile from "../components/Profile";
import Searchbar from "../components/Searchbar";
import { MdOutlineMessage } from "react-icons/md";
import Send from "../assets/images/send.png";
import Images from "../assets/images/images";
import Notification from "../assets/images/notification.png";
import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";
import Logo from "../components/logo";
const Navbar = () => {
  const [notifications, setNotifications] =
    useState(3);
  return (
    <>
      <div className="sm:flex lg-screen hidden gap-7  mx-4 my-3 sm:justify-evenly justify-center items-center">
        <div className="logo cursor-pointer">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="searchbar px-2">
          <Searchbar />
        </div>
        <NavOption
          route="/ideas"
          text="Ideas"
          onClick={() => {}}
        />
        <NavOption
          route="/create"
          text="Create"
          onClick={() => {}}
        />
        <NavOption
          route="/flicks"
          text="Flicks"
          onClick={() => {}}
        />
        <NavOption
          route="/messages"
          text={<MdOutlineMessage />}
          className={"text-2xl"}
          onClick={() => {}}
        />
        <Link
          to=""
          className="relative flex items-center"
        >
          {/* Notification Icon */}
          <div className="notification-icon">
            <NavButtons
              image={Images.Notification}
              alt="notification"
            />
          </div>

          {/* Counter */}
          {notifications >= 1 && (
            <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
              {notifications}
            </div>
          )}
        </Link>

        <Link to="/profile">
          <Profile />
        </Link>
      </div>

      {/* navbar for mobile screen */}

      <div className="sm:hidden mobile-screen block my-2">
        <div className="top-bar w-full justify-center flex p-3">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="buttons flex w-full justify-end gap-5">
            <Link
              to=""
              className="relative flex items-center"
            >
              {/* Notification Icon */}
              <div className="notification-icon">
                <img
                  src={Notification}
                  alt="notification"
                  className="w-[25px] h-[25px]"
                />
              </div>

              {/* Counter */}
              {notifications >= 1 && (
                <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
                  {notifications}
                </div>
              )}
            </Link>

            <Link to="/messages">
              <img
                src={Send}
                alt="messages"
                width="25px"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
