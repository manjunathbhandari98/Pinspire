import PropTypes from "prop-types";

const NavOption = ({
  text,
  onClick,
  className,
}) => {
  return (
    <div
      className={`font-semibold text-l text-gray-600 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

NavOption.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavOption;
