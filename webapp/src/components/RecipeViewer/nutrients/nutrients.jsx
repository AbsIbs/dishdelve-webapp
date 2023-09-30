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
        <p className={styles.title}>{props.title}NUTRIENTS</p>
      </div>
      <Nutrient name={'CALORIES'} amount={12} measurement={'kcal'}/>
      <Nutrient name={'CARBS'} amount={12} measurement={'g'}/>
      <Nutrient name={'PROTEINS'} amount={12} measurement={'g'}/>
      <Nutrient name={'FATS'} amount={12} measurement={'g'}/>
    </div>
  )
};

export default Nutrients;