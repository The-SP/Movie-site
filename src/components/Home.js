// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import useHomeFetch from "../Hooks/useHomeFetch";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Spinner from "./Spinner";
import SearchBar from "./Search";
import Button from "./Button";

const Home = () => {
  const {
    state,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log("[state] from Home:", state);

  if (error) return <div>Something went wrong.....</div>;

  return (
    <div>
      {/* display heroimage for main page and hide when showing search results */}
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid
        header={searchTerm ? "Search Result" : "Popular Movies"}
        movies={state.results}
        imageUrl={IMAGE_BASE_URL + POSTER_SIZE}
      />
      {isLoading && <Spinner />}
      {state.page < state.total_pages && !isLoading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
      )}
    </div>
  );
};

export default Home;
