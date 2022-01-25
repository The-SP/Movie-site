import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <div className={styles.thumbnail}>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt="movie-thumbnail" />
        </Link>
      ) : (
        <img src={image} alt="movie-thumbnail" />
      )}
    </div>
  );
};

Thumbnail.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumbnail;
