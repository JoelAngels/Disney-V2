"use client";

import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //   Api call to get the movies
  //Api call to get the Popular Movies

  return (
    <div>
      <h1>Welcome to the search PAGE: {termToUse}</h1>
    </div>
  );
}

export default SearchPage;
