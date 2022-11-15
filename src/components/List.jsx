import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { imgBase } from "../Utils/RequestURL";

const List = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  return (
    <Fragment>
      <h1 className="text-white uppercase text-xl p-4">{title}</h1>
      <div className="flex items-center relative">
        <div id={"slider"}>
          {movies?.map((movie, id) => {
            return (
              <div className="w-[240px] inline-block cursor-pointer relative p-1">
                <img
                  src={`${imgBase}${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default List;
