import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import MovieCart from "./MovieCart";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

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
      <div className="flex items-center relative group">
        <BsFillArrowLeftCircleFill
          className="absolute top-50 left-5 z-50 cursor-pointer text-white opacity-50 hidden hover:opacity-100 group-hover:block "
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full whitespace-nowrap overflow-none scrollbar-hide scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, id) => {
            return <MovieCart key={id} movie={movie} />;
          })}
        </div>
        <BsFillArrowRightCircleFill
          className="absolute top-50 right-5 z-50 cursor-pointer text-white opacity-50 hidden hover:opacity-100 group-hover:block "
          size={40}
        />
      </div>
    </Fragment>
  );
};

export default List;
