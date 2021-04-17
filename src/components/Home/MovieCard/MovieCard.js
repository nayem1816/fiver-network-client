import React from "react";

const MovieCard = ({ movie }) => {
  return <div className="col-md-4 mt-3 d-flex justify-content-center">
      <div className="movie-card">
          <div className="movieImg">
              <img src={movie.img} alt=""/>
          </div>
          <h2>{movie.name}</h2>
          <p> Release: {movie.releaseYear}</p>
      </div>
  </div>;
};

export default MovieCard;
