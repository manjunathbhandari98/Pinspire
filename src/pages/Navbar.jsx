import logo from "../assets/images/logo.png";
import NavOption from "../components/NavOption";
import Profile from "../components/Profile";
import Searchbar from "../components/Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="flex gap-7  mx-4 my-3 justify-evenly items-center">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          width="80px"
        />
      </div>
      <div className="searchbar px-2">
        <Searchbar />
      </div>
      <NavOption
        text="Ideas"
        onClick={() => {}}
      />
      <NavOption
        text="Create"
        onClick={() => {}}
      />
      <NavOption
        text="Flicks"
        onClick={() => {}}
      />
      <NavOption
        text={<MdOutlineMessage />}
        className={"text-2xl"}
        onClick={() => {}}
      />
      <NavOption
        text={<IoMdNotificationsOutline />}
        className={"text-3xl"}
        onClick={() => {}}
      />

      <Profile />
    </div>
  );
};

export default Navbar;
