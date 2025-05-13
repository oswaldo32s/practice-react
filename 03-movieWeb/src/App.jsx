import { useMovies } from "./hooks/useMovies";
import { useCallback, useState } from "react";
import useSearch from "./hooks/useSearch";
import Movies from "./components/movies/movies";
import debounce from "just-debounce-it";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies({ search });
    }, 300),
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    getMovies({ search });
  }

  function handleSort() {
    setSort(!sort);
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <>
      <header className="header">
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Avengers, Star Wars, The Matrix..."
            type="text"
            onChange={handleChange}
            value={search}
            id="movieName"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        <span style={{ color: "red" }}>{error}</span>
      </header>
      <main className="main">
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </>
  );
}

export default App;
