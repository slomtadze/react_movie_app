import axios from "axios";
import { useEffect, useState } from "react";
import { requests, imgBase } from "../Utils/RequestURL";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.upComing).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const transformString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black to to-black/20"></div>
        <img
          className="w-full h-full object-cover"
          src={`${imgBase}${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover: duration-300 hover:bg-gray-500">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover: duration-300 hover:bg-gray-500">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full text-gray-200">
            {transformString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
