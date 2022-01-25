import styles from "./Grid.module.css";
import PropTypes from 'prop-types'
import Thumbnail from "./Thumbnail";
// Image
import NoImage from "../../images/no_image.jpg";

const Grid = ({ header, movies, imageUrl }) => {
  return (
    <div class={styles.wrapper}>
      <h1>{header}</h1>

      <div className={styles.container}>
        {movies.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={movie.poster_path ? imageUrl + movie.poster_path : NoImage}
            movieId={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

Grid.propTypes = {
    header: PropTypes.string,
    movies: PropTypes.array,
    imageUrl: PropTypes.string
}

export default Grid;