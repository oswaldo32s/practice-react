function ListOfMovies({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="movie-cont">
            <img src={movie.poster} alt="" className="img" />
            <h3 className="title">{movie.title}</h3>
            <p className="year">{movie.year}</p>
          </li>
        );
      })}
    </ul>
  );
}

function NoMovies() {
  return <p>There is no movies with that title</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
