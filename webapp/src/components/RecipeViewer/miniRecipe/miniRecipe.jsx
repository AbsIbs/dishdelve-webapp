import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

const MiniRecipe = (props) => {

  const recipeStyle = {
    backgroundImage: `url(${props.imageURL})`
  }
  return (
    <Link
      to={`/recipe/${props.id}`}
      className={styles.recipeContainer}
      style={recipeStyle}
      onClick={() => window.location.reload()} >
      <div className={styles.difficulty} >{props.difficulty}</div>
      <div className={styles.title} >{props.title}</div>
    </Link >
  )
};

export default MiniRecipe;