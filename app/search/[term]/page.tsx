import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //   Api call to get the movies
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  //Api call to get the Popular Movies

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel
          title="You may also like"
          movies={popularMovies}
          isVertical
        />
      </div>
    </div>
  );
}

export default SearchPage;
