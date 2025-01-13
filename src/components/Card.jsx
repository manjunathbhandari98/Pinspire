import RoundedButton from "../components/RoundedButton";
import Love from "../assets/images/heart.png";
import Send from "../assets/images/send.png";
import LikedHeart from "../assets/images/heart-liked.png";
import More from "../assets/images/more.png";
import { useState } from "react";

const Card = ({ image }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const onLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div>
      <div className="relative group cursor-pointer">
        {/* Image */}
        <img
          src={image}
          alt=""
          className="rounded-3xl w-full h-full object-cover"
        />

        {/* Black Overlay (initially hidden) */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* More Button (initially hidden) */}
        <div className="morebtn top-1 right-1 p-2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <RoundedButton
            icon={More}
            onClick={() => {}}
          />
        </div>

        {/* Buttons at the bottom (initially hidden) */}
        <div className="buttons flex w-full justify-between absolute bottom-1 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <RoundedButton
            icon={liked ? LikedHeart : Love}
            onClick={onLike}
          />
          <RoundedButton
            icon={Send}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
