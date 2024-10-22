import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieList = lazy(() => import("./components/MovieList/MovieList"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Suspense fallback={<div>Loading page</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
