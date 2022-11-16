import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import MovieCart from "./MovieCart";

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
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, id) => {
            return <MovieCart key={id} movie={movie} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default List;
