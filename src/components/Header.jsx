import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, idToken } = useContext(AuthContext);

  return (
    <div className="h-[90px] w-full absolute z-10 flex justify-between py-4 px-8">
      <h1
        className="text-red-700 text-2xl font-semibold hover:text-red-800 italic font-sans cursor-pointer"
        onClick={() => navigate("/")}
      >
        THE MOVIE DB
      </h1>
      <div className="h-full border-red-800">
        {!isLoggedIn && (
          <div>
            <button
              className="text-white p-1 uppercase w-24 h-full rounded-lg mr-2  bg-red-400 hover: duration-300 hover:bg-red-700"
              onClick={() => navigate("/SignIn")}
            >
              Sign In
            </button>
            <button
              className="text-white p-1 uppercase w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex justify-around">
            <ul className="text-red-800 text-lg font-bold italic flex mr-4 items-center">
              <li className="mr-3 cursor-auto ">Welcome ${"saba"}</li>
              <Link
                to="../favorites"
                className="cursor-pointer mr-3 hover:text-white/80 transition: duration-200"
              >
                Favorites
              </Link>
            </ul>

            <button
              className="text-white p-1 w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
              onClick={() => logout()}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
