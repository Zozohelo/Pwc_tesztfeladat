import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IMovie } from "../utils/util";

interface IMovieContext {
  movies: IMovie[];
  addMovie: (
    newMovie: IMovie
  ) => Promise<{ message: string; success: boolean }>;
}

export const defaultMovieContext: IMovieContext = {
  movies: [],
  addMovie: async () => ({ message: "", success: false }),
};

export const MovieContext = createContext<IMovieContext>(defaultMovieContext);

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  //Filmek betöltése
  async function loadMovie() {
    const response = await fetch("http://localhost:5022/movies");
    const data: IMovie[] = await response.json();
    setMovies(data);
  }

  useEffect(() => {
    loadMovie();
  }, []);

  //Film hozzáadása
  async function addMovie(newMovie: IMovie) {
    const response = await fetch("http://localhost:5022/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("POST /movies failed:", text);
      return { message: "Server error while adding movie.", success: false };
    }

    const created: IMovie = await response.json();
    setMovies((prev) => [...prev, created]);
    return { message: "Movie successfully added!", success: true };
  }

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
