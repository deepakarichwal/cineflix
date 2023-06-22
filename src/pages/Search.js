import { useSearchParams } from "react-router-dom";
import { useFetch } from "../components/useFetch";
import { MovieCard } from "../components/MovieCard";
import { useTitleChange } from "../components/useTitleChange";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { moviesData: movies } = useFetch(apiPath, queryTerm);

  // useEffect(function () {
  //   document.title = `Search result for "${queryTerm}"`;
  // }, []);

  useTitleChange(`Search result for "${queryTerm}"`);

  return (
    <main>
      <section>
        <p className="text-gray-900 dark:text-white text-xl font-semibold mt-3">
          {movies.length > 0
            ? `Result for "${queryTerm}"`
            : `No result found for "${queryTerm}"`}
        </p>
      </section>
      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
