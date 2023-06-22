import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const movieImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/title/${movie.id}`}>
        <img className="rounded-t-lg" src={movieImg} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/title/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
