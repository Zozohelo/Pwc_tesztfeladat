import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="p-5 bg-slate-800 justify-between flex">
        <a href="/" className="text-lg font-bold text-white">
          Movies
        </a>
        <a href="/movie-add" className="text-lg font-bold text-white">
          Add Movie
        </a>
      </div>
    </>
  );
};

export default Navbar;
