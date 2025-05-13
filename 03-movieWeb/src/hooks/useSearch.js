import { useState, useRef, useEffect } from "react";
export default function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Cannot search empty string");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Cannot search a movie by number");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
