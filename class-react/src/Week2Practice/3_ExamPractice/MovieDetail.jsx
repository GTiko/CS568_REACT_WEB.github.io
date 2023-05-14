import MovieUpdate from "./MoviesUpdate";

export default function MovieDetails({
  movieData,
  setMovieData,
  isEditHidden,
  movieDetail,
  setMovieDetail,
  setIsEditHidden,
}) {
  return (
    <>
      <div hidden={isEditHidden}>
        <input
          type="text"
          name="title"
          value={movieDetail.title}
          placeholder="Title"
          onChange={handleEvent}/><br />
        <input
          type="text"
          name="genre"
          value={movieDetail.genre}
          placeholder="Genre"
          onChange={handleEvent}/><br />
        <input
          type="text"
          name="director"
          value={movieDetail.director}
          placeholder="Director"
          onChange={handleEvent}/><br />
        <input
          type="text"
          name="description"
          value={movieDetail.description}
          placeholder="Description"
          onChange={handleEvent}/><br />
        <input
          type="number"
          name="rating"
          value={movieDetail.rating}
          placeholder="Rating"
          onChange={handleEvent}/><br />
        <input
          type="number"
          name="year"
          value={movieDetail.year}
          placeholder="Year"
          onChange={handleEvent}/><br />
        <MovieUpdate
          movieData={movieData}
          setMovieData={setMovieData}
          setIsEditHidden={setIsEditHidden}
          movieDetail={movieDetail} 
          setMovieDetail={setMovieDetail}/>
      </div>
    </>
  );

  function handleEvent(e) {
    const { name, value } = e.target;
    setMovieDetail((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
}