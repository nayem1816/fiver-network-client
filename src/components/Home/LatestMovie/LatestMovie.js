import React from "react";
import movieBanner from "../../../images/lifeOfPai.jpg";
import MovieCard from "../MovieCard/MovieCard";

const movieList = [
  {
    id: 1,
    img: movieBanner,
    name: "Life of pai",
    releaseYear: "2015",
  },
  {
    id: 2,
    img: movieBanner,
    name: "Life of pai",
    releaseYear: "2015",
  },
  {
    id: 3,
    img: movieBanner,
    name: "Life of pai",
    releaseYear: "2015",
  },
];

const LatestMovie = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="text-center">
          <h4>Movies</h4>
          <h1 className="rock-salt">Latest Movies</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row mt-4">
            {movieList.map((movie) => (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestMovie;
