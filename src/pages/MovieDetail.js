import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitleChange } from "../components/useTitleChange";

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();

  useEffect(
    function () {
      const getMovieDetail = async function () {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=d24846636c9a56c3315850f5d23ca744`
        );
        const data = await response.json();

        setMovieDetail(data);
      };
      getMovieDetail();
    },
    [params.id]
  );

  useTitleChange(movieDetail.title);

  return (
    <main>
      <section className="grid justify-center py-10">
        <div className="flex flex-col items-centershadow md:flex-row justify-center px-1">
          <img
            className="object-cover w-full rounded-lg h-full sm:w-96 md:h-auto "
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt=""
          />
          <div className="flex flex-col justify-start p-4 leading-normal ml-0 md:ml-16 w-full md:w-6/12">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movieDetail.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movieDetail.overview}
            </p>
            <div className="my-4 flex flex-wrap gap-4 w-full">
              {movieDetail.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1 bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="flex items-center mb-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {movieDetail.vote_average?.toFixed(1)}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {movieDetail.vote_count}
                <span className="ml-2">reviews</span>
              </p>
            </div>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              <span className="dark:text-gray-200 font-semibold mr-2">
                Runtime:
              </span>
              {movieDetail.runtime} min
            </p>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              <span className="dark:text-gray-200 font-semibold mr-2">
                Budget:
              </span>
              {new Intl.NumberFormat("en-US").format(movieDetail.budget)}
            </p>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              <span className="dark:text-gray-200 font-semibold mr-2">
                Revenue:
              </span>
              {new Intl.NumberFormat("en-US").format(movieDetail.revenue)}
            </p>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              <span className="dark:text-gray-200 font-semibold mr-2">
                Release Date:
              </span>
              {movieDetail.release_date}
            </p>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              <span className="dark:text-gray-200 font-semibold mr-2">
                IMDB code:
              </span>
              {movieDetail.imdb_id}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
