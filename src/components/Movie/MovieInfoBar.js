import PropTypes from 'prop-types'
import styles from './MovieInfoBar.module.css'
import { calcTime, convertMoney } from '../../helpers';

const MovieInfoBar = ({ runtime, budget, revenue }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div>
        <p>Running time: {calcTime(runtime)}</p>
      </div>
      <div>
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div>
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </div>
  </div>
);

MovieInfoBar.propTypes = {
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}

export default MovieInfoBar;