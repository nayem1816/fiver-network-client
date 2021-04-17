import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mt-3 d-flex justify-content-center">
      <div className="movie-card card p-3">
        <div className="movieImg">
          <img
            style={{ height: "500px", width: "350px" }}
            src={movie.img}
            alt=""
          />
        </div>
        <h2>{movie.name}</h2>
        <p> Release: {movie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
