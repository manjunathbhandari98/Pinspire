import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavOption = ({
  text,
  onClick,
  className,
  route,
}) => {
  return (
    <Link
      to={route}
      className={`font-semibold text-l text-gray-600 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

NavOption.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavOption;
