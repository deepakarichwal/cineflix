import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [moviesData, setMoviesData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(
    function () {
      const getMovieList = async function () {
        const response = await fetch(url);
        const data = await response.json();
        setMoviesData(data.results);
      };
      getMovieList();
    },
    [url]
  );
  return { moviesData };
};
