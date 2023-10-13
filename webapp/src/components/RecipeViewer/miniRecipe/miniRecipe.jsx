import styles from './styles.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const MiniRecipe = (props) => {
  return (
    <a href={`/recipe/${props.id}`}>
      <div className={styles.recipeContainer}>
        <LazyLoadImage src={props.imageURL} className={styles.backgroundImage} />
        <div className={styles.contentContainer} >
          <div className={styles.difficulty} >{props.difficulty}</div>
          <div className={styles.title} >{props.title}</div>
        </div>
      </div >
    </a>
  )
};

export default MiniRecipe;