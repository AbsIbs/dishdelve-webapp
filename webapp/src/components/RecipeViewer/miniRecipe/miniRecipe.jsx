import styles from './styles.module.scss'

const MiniRecipe = (props) => {

  const recipeStyle = {
    backgroundImage: `url(${props.imageURL})`
  }
  return (
    <div className={styles.recipeContainer} style={recipeStyle} >
      <div className={styles.difficulty} >{props.difficulty}</div>
      <div className={styles.title} >{props.title}</div>
    </div>
  )
};

export default MiniRecipe;