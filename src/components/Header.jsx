import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, idToken } = useContext(AuthContext);

  console.log(isLoggedIn, idToken);

  return (
    <div className="h-[70px] w-full absolute z-10 flex justify-between py-4 px-8">
      <h1 className="text-blue-700 italic font-sans ">THE MOVIE DB</h1>
      <div className="h-full">
        {!isLoggedIn && (
          <button
            className="text-white w-24 h-full rounded-lg mr-2 hover: duration-300 hover:bg-red-700"
            onClick={() => navigate("/SignIn")}
          >
            Sign In
          </button>
        )}
        {isLoggedIn ? (
          <button
            className="text-white w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
            onClick={() => logout()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="text-white w-24 h-full rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
