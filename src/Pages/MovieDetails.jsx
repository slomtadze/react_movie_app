import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  return <div>{params}</div>;
};

export default MovieDetails;
