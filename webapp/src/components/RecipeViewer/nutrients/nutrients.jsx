import styles from './styles.module.scss'

const Nutrients = (props) => {

  const Nutrient = (props) => {
    return (
      <div className={styles.ingredientContainer} >
        <p>{props.name}</p>
        <p>{props.amount} {props.measurement}</p>
      </div>
    )
  };

  return (
    <div className={styles.container} >
      <div className={styles.titleContainer}>
        <p className={styles.title}>NUTRIENTS</p>
      </div>
      <Nutrient name={'CALORIES'} amount={props.macros.calories} measurement={'kcal'}/>
      <Nutrient name={'CARBS'} amount={props.macros.carbs} measurement={'g'}/>
      <Nutrient name={'PROTEINS'} amount={props.macros.protein} measurement={'g'}/>
      <Nutrient name={'FATS'} amount={props.macros.fat} measurement={'g'}/>
    </div>
  )
};

export default Nutrients;