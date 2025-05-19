import { useState, useEffect } from "react";
import { getNews } from "../services/news";
export function useNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((posts) => setNews(posts));
  }, []);

  return { news };
}
