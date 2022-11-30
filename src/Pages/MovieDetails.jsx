import React from "react";
import SignWrapper from "../Layout/SignIn/SignWrapper";
import { useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie.title);
  return (
    <SignWrapper>
      <div className="w-full h-full flex items-end">
        <div className="w-full h-[90%] flex flex-col">
          <div className="border-solid border-red-500">
            <img />
            <div></div>
          </div>
          <div className="border-solid border-red-500">
            <h3></h3>
            <p></p>
          </div>
          <div className="border-solid border-red-500"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default MovieDetails;
