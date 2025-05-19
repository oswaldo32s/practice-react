import NewsList from "./components/NewsList/NewsList";
import { useState } from "react";
import { useSearch } from "./hooks/useSearch";
import { useNews } from "./hooks/useNews";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const { searchResults, getNews } = useSearch();
  const { news } = useNews();

  function handleSubmit(event) {
    event.preventDefault();
    const { query } = Object.fromEntries(new FormData(event.target));
    getNews({ search: query });
    if (!query) return;
    setIsSearch(true);
  }

  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>New York Times News</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <input
            name="query"
            type="text"
            placeholder="Mexico, US Tariffs, Drug Cartels..."
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        {isSearch ? (
          <>
            <h2>Search Results:</h2>
            <NewsList news={searchResults} />
          </>
        ) : (
          <>
            <h2>Top News!</h2>
            <NewsList news={news} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
