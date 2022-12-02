import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useState } from "react";
import Spinner from "./Spinner";

const Header = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const getName = async () => {
    setIsLoading(true);
    const docRef = doc(db, "users", user.email);
    try {
      await getDoc(docRef).then((response) => {
        const name = response.data().name.toLowerCase();
        const userName = name.charAt(0).toUpperCase() + name.slice(1);
        setName(userName);
        setIsLoading(false);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getName();
    }
  }, [user]);

  return (
    <div className="bg-black/30 h-[10%] w-full absolute z-10 flex justify-between py-4 px-8 sm:px-4">
      <h1
        className="text-white text-2xl sm:text-sm font-semibold transition: duration-300 hover:text-red-800 italic font-sans cursor-pointer"
        onClick={() => navigate("/")}
      >
        THE MOVIE DB
      </h1>
      <div className="h-full border-red-800">
        {!user && (
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
        {user && (
          <div className="flex justify-around sm:justify-between">
            <ul className="text-white text-lg sm:text-[10px] font-bold italic mr-4 flex items-center">
              <li className="mr-3 sm:mr-1 cursor-auto ">
                {isLoading ? <Spinner /> : `Welcome ${name}`}
              </li>
              <Link
                to="../favorites"
                className="cursor-pointer mr-3 sm:mr-1 hover:text-white/80 transition: duration-200"
              >
                Favorites
              </Link>
            </ul>

            <button
              className="text-white sm:text-sm p-1 w-24 sm:w-20 rounded-lg bg-red-500 hover: duration-300 hover:bg-red-700"
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
