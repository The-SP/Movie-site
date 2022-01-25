// Hooks
import { useEffect, useState } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async (movieId) => {
    try {
      setError(false);
      setIsLoading(true);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // Get directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      console.log("await fetchMovie from movieId:", movie);
      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });
    } catch (error) {
      setError(true);
      console.log("Error:", error.message);
    }
    setIsLoading(false);
  };

  // Initial and search
  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
        setState(sessionState);
        setIsLoading(false);
        return;
    }
    fetchMovie(movieId);
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
      sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state])

  return { state, isLoading, error };
};

export default useMovieFetch;
