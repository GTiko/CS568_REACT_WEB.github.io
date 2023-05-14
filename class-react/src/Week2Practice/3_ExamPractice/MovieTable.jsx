import { useState } from "react";
export default function MovieTable({
  movieData,
  setMovieData,
  setIsEditHidden,
  setMovieDetail,
}) {
  const [isDetailHidden, setIsDetailHidden] = useState(true);
  const [detailData, setDetailData] = useState([]);

  return (
    <>
     <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <thead>
          {movieData.map((each) => (
            <tr key={each.id}>
              <td>
                <img src={each.image}  alt=""></img>
                {each.title}
              </td>
              <td style={{textAlign:"center"}}> {each.rating}</td>
              <td style={{textAlign:"center"}}> {each.genre}</td>
              <td style={{width:100}}>
                <button
                  style={{height:50}}
                  className="btn btn-secondary w-100"
                  onClick={() => showDetail(each)}
                > Detail</button>
              </td>
              <td style={{width:150}}>
                <button
                  style={{height:50}}
                  className="btn btn-warning w-50"
                  onClick={() => editMovie(each)}
                > Edit</button>
                <button
                  style={{height:50}}
                  className="btn btn-danger w-50"
                  onClick={() => deleteMovies(each.id)}
                > Delete</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>

      <div hidden={isDetailHidden}>
        {detailData.map((each) => (
          <div key={each.id}>
            <h5>
              {each.director}, {each.description}, {each.year}
            </h5>
          </div>
        ))}
      </div>
    </>
  );

  function deleteMovies(id) {
    const newData = movieData.filter((each) => each.id !== id);
    setMovieData(newData);
  }

  function editMovie(movieToEdit) {
    setIsEditHidden(false);
    setMovieDetail({
      id: movieToEdit.id,
      title: movieToEdit.title,
      rating: movieToEdit.rating,
      genre: movieToEdit.genre,
      director: movieToEdit.director,
      year: movieToEdit.year,
      description: movieToEdit.description,
    });
  }
  function showDetail(each) {
    const newDetailData = [];
    newDetailData.push(each);
    setDetailData(newDetailData);
    setIsDetailHidden(!isDetailHidden);
  }
}