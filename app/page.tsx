import MoviesCarousel from "@/components/MoviesCarousel";
import { getUpcomingMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
      {/* Carousel Banner Wrapper */}

      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
      </div>
    </main>
  );
}
