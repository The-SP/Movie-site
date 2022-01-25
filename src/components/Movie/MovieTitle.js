import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import styles from "./MovieTitle.module.css"

const MovieTitle = ({title}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

MovieTitle.propTypes = {
    title: PropTypes.string
}

export default MovieTitle;
