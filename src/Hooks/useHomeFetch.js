// Hooks
import { useEffect, useState } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

// default initial state for [state, useState]
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // to display next page movies
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setIsLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log("await fetchMovies:", movies);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
      console.log("Error:", error.message);
    }
    setIsLoading(false);
  };

  // Initial and search
  useEffect(() => {
    // check if data is already in session storage else fetch from API
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        console.log("Fetching from session storage");
        setState(sessionState);
        return;
      }
    }

    console.log("Fetching from API");
    setState(initialState); // remove old state before search
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore]);

  // Write to session storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return {
    state,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
