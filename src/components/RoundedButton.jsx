const RoundedButton = ({ icon, onClick }) => {
  return (
    <div
      class="rounded-full p-2 bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={icon}
        alt=""
        width="20px"
        height="20px"
      />
    </div>
  );
};

export default RoundedButton;
