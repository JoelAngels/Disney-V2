type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

import { Movie } from "@/typings";
import React from "react";

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
    </div>
  );
}

export default MoviesCarousel;
