import React from "react";
import Images from "../assets/images/images";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";

// Bottom bar for Mobile devices
const BottomBar = () => {
  return (
    <div className="flex w-full sm:hidden fixed bottom-0 left-0 right-0 bg-white">
      <div className="options p-2 mx-4 flex w-full justify-between items-center">
        <div className="home">
          <NavButtons
            image={Images.Home}
            height="30"
            width="30"
            route="/"
          />
        </div>
        <div className="search">
          <NavButtons
            image={Images.Search}
            height="30"
            width="30"
            route="/search-page"
          />
        </div>
        <div className="flicks">
          <NavButtons
            image={Images.Flicks}
            height="30"
            width="30"
          />
        </div>
        <div className="Profile">
          <Link to="/profile">
            <Profile />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
