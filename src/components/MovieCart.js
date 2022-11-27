import { Fragment, useContext, useState } from "react";
import { imgBase } from "../Utils/RequestURL";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth-context";
import { db } from "../firebase.config";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const MovieCart = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
    }
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <Fragment>
      <div
        className="w-[240px] inline-block cursor-pointer relative p-1"
        onClick={() => navigate("/:movieId")}
      >
        <img src={`${imgBase}${movie.backdrop_path}`} alt={movie.title} />
        <div className="h-full w-full absolute left-0 top-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
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
