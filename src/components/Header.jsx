import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, idToken } = useContext(AuthContext);

  return (
    <div className="h-[70px] w-full absolute z-10 flex justify-between py-4 px-8">
      <h1 className="text-blue-700 italic font-sans ">THE MOVIE DB</h1>
      <div className="h-full">
        {!isLoggedIn && (
          <div>
            <button
              className="text-white w-24 h-full rounded-lg mr-2  bg-red-400 hover: duration-300 hover:bg-red-700"
              onClick={() => navigate("/SignIn")}
            >
              Sign In
            </button>
            <button
              className="text-white w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex justify-around">
            <ul className="text-white flex mr-4">
              <li className="cursor-pointer mr-3 hover:text-red-600 transition: duration-200">
                Name
              </li>
              <Link
                to="../favorites"
                className="cursor-pointer mr-3 hover:text-red-600 transition: duration-200"
              >
                Favorites
              </Link>
              <li className="cursor-pointer mr-3 hover:text-red-600 transition: duration-200">
                Profile
              </li>
            </ul>

            <button
              className="text-white w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
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
