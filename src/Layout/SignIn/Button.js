const Button = ({ title, type, onClick }) => {
  const btnType = type ? type : null;

  const clickHandler = () => {
    onClick();
  };

  return (
    <button
      className="text-white text-sm  bg-blue-500 mt-6 mr-2 px-4 py-2 rounded-lg hover:bg-blue-800 transition:duration-400 "
      type={btnType}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
