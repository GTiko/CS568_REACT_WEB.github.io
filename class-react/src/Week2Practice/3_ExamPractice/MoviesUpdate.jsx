export default function MovieUpdate({
  movieData,
  setMovieData,
  setIsEditHidden,
  movieDetail,
}) {
  return (
    <>
      <button className="btn btn-success " onClick={updateMovie}>
        Update
      </button>
    </>
  );

  function updateMovie() {
    setIsEditHidden(true);
    let newData = [...movieData];
    for (let each of newData) {
      if (each.id === movieDetail.id) {
        each.title = movieDetail.title;
        each.genre = movieDetail.genre;
        each.director = movieDetail.director;
        each.year = movieDetail.year;
        each.rating = movieDetail.rating;
        each.description = movieDetail.description;
      }
    }
    setMovieData(newData);
  }
}
