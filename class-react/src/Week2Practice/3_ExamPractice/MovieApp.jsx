import { useEffect, useState } from "react";
import MovieTable from "./MovieTable";
import MovieDetails from "./MovieDetail";
import "./Movies.css";

function MovieApp() {
  const [movieData, setMovieData] = useState(
    JSON.parse(localStorage.getItem("Movies")) || []
  );
  const [isEditHidden, setIsEditHidden] = useState(true);
  const [movieDetail, setMovieDetail] = useState({
    id: "",
    title: "",
    rating: "",
    genre: "",
    director: "",
    year: "",
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("Movies", JSON.stringify(movieData));
  }, [movieData]);

  return (
    <>
      <MovieTable
        movieData={movieData}
        setMovieData={setMovieData}
        setIsEditHidden={setIsEditHidden}
        setMovieDetail={setMovieDetail}
      />

      <MovieDetails
        movieData={movieData}
        setMovieData={setMovieData}
        isEditHidden={isEditHidden}
        movieDetail={movieDetail}
        setMovieDetail={setMovieDetail}
        setIsEditHidden={setIsEditHidden}
      />
    </>
  );
}

export default MovieApp;
