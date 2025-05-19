import { useState } from "react";
import { searchNews } from "../services/news";
export function useSearch() {
  const [searchResults, setSearchResults] = useState([]);

  async function getNews({ search }) {
    const newNews = await searchNews({ search });
    setSearchResults(newNews);
  }

  return { searchResults, getNews };
}
