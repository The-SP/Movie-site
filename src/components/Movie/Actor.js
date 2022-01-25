import PropTypes from 'prop-types'
import styles from "../Grid/Grid.module.css";
import actorStyles from "./Actor.module.css"
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from '../../images/no_image.jpg'

const Actor = ({ actors }) => {
  console.log(actors);
  return (
    <>
      <div class={styles.wrapper}>
        <h1>Actors</h1>

        <div className={styles.container}>
          {actors.map((actor) => (
            <div className={actorStyles.actorDiv} key={actor.credit_id}>
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
                alt="actor-thumb"
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

Actor.propTypes = {
    actors: PropTypes.array
}

export default Actor;
