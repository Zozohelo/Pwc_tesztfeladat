import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movies from "./Movies";

const MoviesPage = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className=" bg-gray-900 h-screen p-5 flex text-center">
      {movies.map((r, i) => {
        return <Movies key={`movies-${i}`} movies={r} />;
      })}
    </div>
  );
};

export default MoviesPage;
