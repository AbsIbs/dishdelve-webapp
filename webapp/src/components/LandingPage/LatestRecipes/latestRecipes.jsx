import styles from './styles.module.scss'

const LatestRecipes = (props) => {

  //Recipes
  const recipes = props.recipes

  const Recipe = (props) => {
    const recipeStyle = {
      backgroundImage: `url(${props.imageURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      flex: props.flex,
      backgroundPosition: 'center'
    }
    return (
      <div className={styles.recipeContainer} style={recipeStyle} >
        <div>
          <span className={styles.difficulty} >{props.difficulty}</span>
        </div>
        <div>
          <span className={styles.title} >{props.title}</span>
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