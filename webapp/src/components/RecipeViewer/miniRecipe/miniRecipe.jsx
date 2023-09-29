import styles from './styles.module.scss'

const MiniRecipe = (props) => {
  return (
    <div className={styles.container} >
      <img src={props.imageURL} className={styles.image} />
      <span className={styles.difficulty} >{props.difficulty}</span>
      <p className={styles.title} >{props.title}</p>
    </div>
  )
};

export default MiniRecipe;