import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const getName = async () => {
    const docRef = doc(db, "users", user.email);
    try {
      await getDoc(docRef).then((response) => {
        const name = response.data().name.toLowerCase();
        const userName = name.charAt(0).toUpperCase() + name.slice(1);
        setName(userName);
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
    <div className="h-[90px] w-full absolute z-10 flex justify-between py-4 px-8">
      <h1
        className="text-red-700 text-2xl font-semibold hover:text-red-800 italic font-sans cursor-pointer"
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
          <div className="flex justify-around">
            <ul className="text-red-800 text-lg font-bold italic flex mr-4 items-center">
              <li className="mr-3 cursor-auto ">Welcome {name}</li>
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
