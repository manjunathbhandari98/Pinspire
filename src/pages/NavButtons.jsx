import React from "react";
import { Link } from "react-router-dom";

const NavButtons = ({
  image,
  route,
  alt,
  width = "25",
  height = "25",
  className,
}) => {
  return (
    <Link to={route}>
      <img
        src={image}
        alt={alt}
        className={` ${className}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </Link>
  );
};

export default NavButtons;
