const Header = () => {
  return (
    <div className="h-[50] w-full absolute z-10 flex justify-between py-4 px-8">
      <h1 className="text-blue-700 text-5xl italic font-sans ">THE MOVIE DB</h1>
      <div>
        <button className="text-white w-24 h-full text-xl rounded-lg mr-2 hover: duration-300 hover:bg-gray-300">
          Sign In
        </button>
        <button className="text-white w-24 h-full text-xl rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
