import axios from "axios";
import { useEffect, useState } from "react";
import { imgBase } from "../Utils/RequestURL";

const List = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[150px]">
      <h1 className="text-white uppercase text-2xl">{title}</h1>
      <div className="flex justify-start min-h-max">
        {movies?.map((movie) => {
          return (
            <div>
              <img src={`${imgBase}${movie.backdrop_path}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
