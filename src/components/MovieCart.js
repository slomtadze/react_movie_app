import { Fragment, useState } from "react";
import { imgBase } from "../Utils/RequestURL";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MovieCart = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = () => {
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
