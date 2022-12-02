import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import SignWrapper from "../Layout/SignIn/SignWrapper";
import { imgBase } from "../Utils/RequestURL";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [images, setImages] = useState([]);
  const [overview, setOverview] = useState("");
  const location = useLocation();
  const movie = location.state.movie;
  console.log(images);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=bb7ee202b42eeb47b5728f147f0a0557&`
      )
      .then((response) => {
        const rndmIndex = Math.floor(Math.random() * 5);
        const slicedImgs = response.data.backdrops.slice(
          rndmIndex,
          rndmIndex + 5
        );

        setImages(slicedImgs);
      });
  }, [movie.id]);
  useEffect(() => {
    const width = window.innerWidth;

    if (width < 800) {
      console.log("less");
      const review = (string, limit = 120) => {
        const temp = [];
        if (string.length > limit) {
          string.split(" ").reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
              temp.push(cur);
            }
            return acc + cur.length;
          }, 0);
          return `${temp.join(" ")} ...`;
        } else {
          return string;
        }
      };
      setOverview(review(movie.overview));
    } else {
      setOverview(movie.overview);
    }
  }, []);

  return (
    <SignWrapper>
      <div className="w-screen h-screen flex items-end absolute z-5">
        <div className="w-full h-[90%] flex flex-col text-white px-10 font-mono object-contain border-red-900">
          <div className="flex md:flex-col bg-black/40 rounded-lg mb-4">
            <div className="w-1/2 md:w-full h-full rounded">
              <img
                src={`${imgBase}${movie.backdrop_path}`}
                alt={movie.title}
                className="h-full w-full"
              />
            </div>

            <div className="h-2/3 flex flex-col justify-between w-1/2 md:w-full px-8 md:px-4">
              <h3 className="text-2xl md:text-md font-bold md:pt-2">
                {movie.title}
              </h3>
              <p className="text-white/80">
                Language -{" "}
                <span className="text-white/100">
                  {movie.original_language.toUpperCase()}
                </span>
              </p>
              <p className="text-white/80">
                IMBD Rate -{" "}
                <span className="text-white/100">{movie.vote_average}</span>
              </p>
              <p className="text-white/80">
                Release Date{" "}
                <span className="text-white/100">{movie.release_date}</span>
              </p>
              <p className="text-white/80">
                Review:
                <br />
                <span className="text-white/100 font-mono text-red-300">
                  {overview}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center flex-wrap rounded">
            {images &&
              images.map((image) => (
                <div key={uniqid("img")} className="w-1/5 md:w-1/3 p-1">
                  <img
                    src={`${imgBase}${image.file_path}`}
                    alt={movie.title}
                    className="w-full h-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default MovieDetails;
