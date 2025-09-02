import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MoviesPage from "./components/MoviesPage";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <>
      <Navbar />
      {/* Útvonalak */}
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie-add" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
