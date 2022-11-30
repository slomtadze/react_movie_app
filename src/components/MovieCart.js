import { Fragment, useContext, useEffect, useState } from "react";
import { imgBase } from "../Utils/RequestURL";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";
import { db } from "../firebase.config";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { async } from "@firebase/util";

const MovieCart = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      getDoc(docRef).then((response) => {
        const favMovies = response.data().favorites;
        const movieIsFav = favMovies.find((item) => item.id === movie.id);
        if (movieIsFav) {
          setIsLiked(true);
        }
      });
    } else {
      setIsLiked(false);
    }
  }, [user]);

  const addToFavorites = async (movieTitle) => {
    const userRef = doc(db, "users", user.email);
    await updateDoc(userRef, {
      favorites: arrayUnion(movieTitle),
    });
  };

  const removeFromFavorites = async (movieTitle) => {
    const userRef = doc(db, "users", user.email);
    await updateDoc(userRef, {
      favorites: arrayRemove(movieTitle),
    });
  };

  const toggleLike = () => {
    if (user) {
      if (isLiked) {
        removeFromFavorites(movie);
      } else {
        addToFavorites(movie);
      }
      setIsLiked((isLiked) => !isLiked);
    } else {
      alert("Sign in");
    }
  };

  return (
    <Fragment>
      <div className="w-[240px] inline-block cursor-pointer relative p-1">
        <img src={`${imgBase}${movie.backdrop_path}`} alt={movie.title} />
        <div
          className="h-full w-full absolute left-0 top-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
          onClick={() => navigate("/details", { state: { movie } })}
        >
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {movie.title}
          </p>
          {isLiked ? (
            <AiFillHeart
              className="absolute left-3 top-3"
              onClick={toggleLike}
            />
          ) : (
            <AiOutlineHeart
              className="absolute left-3 top-3"
              onClick={toggleLike}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCart;
