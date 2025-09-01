import React from "react";
import type { IMovie } from "../utils/util";

const Movies = (props: { movies: IMovie }) => {
  const movie = props.movies;

  return (
    <div className="bg-white p-4 m-3 rounded-2xl shadow-lg w-72 h-80 flex flex-col justify-between">
      {/* Film címe */}
      <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2 text-center truncate">
        Film címe: {movie.title}
      </h2>

      {/* Szereplők */}
      <div className="bg-gray-100 rounded-xl p-3 flex-1 overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
          Szereplők
        </h3>
        <ul className="space-y-2">
          {movie.actors.map((actor, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white rounded-lg px-3 py-2 shadow-sm"
            >
              <span className="font-semibold text-gray-800 truncate">
                {actor.name}
              </span>
              <span className="italic text-gray-600 text-sm truncate">
                {actor.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
