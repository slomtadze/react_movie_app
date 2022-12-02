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

const MovieCart = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
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
      return;
    } else {
      setAlertModal(true);
      setTimeout(() => {
        setAlertModal(false);
      }, 2000);
      return;
    }
  };
  const navigateDetails = (e) => {
    if (e.target.innerHTML.length !== 0 && e.target.innerHTML.length < 500) {
      navigate("/details", { state: { movie } });
    }
  };

  return (
    <Fragment>
      <div className="w-[240px] inline-block cursor-pointer relative m-1">
        <img src={`${imgBase}${movie.backdrop_path}`} alt={movie.title} />
        <div
          className="h-full w-full absolute left-0 top-0 z-10 transition: duration-200 hover:bg-black/60 opacity-0 hover:opacity-100 text-white"
          onClick={navigateDetails}
        >
          {alertModal && (
            <div className="absolute animate-bounce border-gray-500 bg-white/70 text-sm italic text-gray-700 py-1 px-4 rounded-lg top-1 left-8">
              Sign In to add Favorites
            </div>
          )}
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {movie.title}
          </p>
          {isLiked ? (
            <AiFillHeart
              className="absolute left-3 top-3 "
              onClick={toggleLike}
            />
          ) : (
            <AiOutlineHeart
              className="absolute left-3 top-3 "
              onClick={toggleLike}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCart;
