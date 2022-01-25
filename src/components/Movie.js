import { useParams } from "react-router-dom";
import useMovieFetch from "../Hooks/useMovieFetch";
// Components
import Spinner from "./Spinner";
import MovieTitle from "./Movie/MovieTitle";
import MovieInfo from "./Movie/MovieInfo";
import MovieInfoBar from "./Movie/MovieInfoBar";
import Actor from './Movie/Actor'

const Movie = () => {
  let { movieId } = useParams();
  const { state: movie, isLoading, error } = useMovieFetch(movieId);

  if (isLoading) return <Spinner />;
  if (error) return <h1>Something went wrong....</h1>;

  return (
    <>
      <MovieTitle title={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar runtime={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      {movie.actors && <Actor actors={movie.actors} /> }
    </>
  );
};

export default Movie;