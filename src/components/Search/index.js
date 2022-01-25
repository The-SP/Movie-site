import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import searchIcon from "../../images/search-icon.svg";
import styles from "./Search.module.css";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
      return () => clearTimeout(timer);
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie.."
          onChange={(e) => setState(e.target.value)}
          vlaue={state}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;
