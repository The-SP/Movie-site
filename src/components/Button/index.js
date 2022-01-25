import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = ({ text, callback }) => {
  return (
    <button className={styles.btn} onClick={callback}>
      {text}
    </button>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;