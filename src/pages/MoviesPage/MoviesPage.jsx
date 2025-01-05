import { lazy } from "react";
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function MoviesPage() {
  return (
    <div>
      <Navigation />
      <MovieList />
    </div>
  );
}
