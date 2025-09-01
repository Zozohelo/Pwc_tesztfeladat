import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MovieContextProvider } from "./contexts/MovieContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </BrowserRouter>
  </StrictMode>
);
