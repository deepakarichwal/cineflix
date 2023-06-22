import { useFetch } from "../components/useFetch";
import { MovieCard } from "../components/MovieCard";
import { useTitleChange } from "../components/useTitleChange";

export const MovieList = ({ apiPath, title }) => {
  const { moviesData: movies } = useFetch(apiPath);

  useTitleChange(title);

  return (
    <main>
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
