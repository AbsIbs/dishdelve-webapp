import styles from './styles.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LatestRecipes = (props) => {

  //Recipes
  const recipes = props.recipes

  const Recipe = (props) => {
    return (
      <div className={styles.recipeContainer} >
        <LazyLoadImage src={props.imageURL} className={styles.backgroundImage} effect='blur' />
        <div className={styles.recipeContentContainer}>
          <div>
            <span className={styles.difficulty} >{props.difficulty}</span>
          </div>
          <div>
            <span className={styles.title} >{props.title}</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.section} >
      <div className={styles.recipesGrid} >
        {recipes.map((data, index) => {
          return (
            <a href={`/recipe/${data.id}`} key={index} className={styles.gridItem}>
              <Recipe title={data.title} id={data.id} difficulty={data.difficulty} imageURL={data.coverImage} flex={'1'} />
            </a>
          )
        })}
      </div>
    </div>
  )
};

export default LatestRecipes;