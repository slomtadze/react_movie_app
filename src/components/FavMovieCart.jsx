import { imgBase } from "../Utils/RequestURL";

const FavMovieCart = (movie) => {
  return (
    <div>
      <img src={`${imgBase}${movie.backdrop_path}`} />
      <h3 className="text-white">test</h3>
    </div>
  );
};

export default FavMovieCart;
