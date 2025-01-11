import logo from "../assets/images/logo.png";
import NavOption from "../components/NavOption";
import Profile from "../components/Profile";
import Searchbar from "../components/Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-7  mx-4 my-3 justify-evenly items-center">
      <div className="logo cursor-pointer">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="80px"
          />
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
      <NavOption
        route="/notifications"
        text={<IoMdNotificationsOutline />}
        className={"text-3xl"}
        onClick={() => {}}
      />

      <Link to="/profile">
        <Profile />
      </Link>
    </div>
  );
};

export default Navbar;
