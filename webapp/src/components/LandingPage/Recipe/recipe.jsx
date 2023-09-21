import styles from './styles.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Recipe = (props) => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src={props.imageURL} />
      <div className={styles.contentContainer} >
        <div className={styles.categoryContainer} >
          <span className={styles.category}>{props.difficulty}</span>
          <span className={styles.category}>{props.category}</span>
        </div>
        <p className={styles.title} >{props.title}</p>
        <p className={styles.desc} >{props.desc}</p>
        <button className={styles.button}>
          <p className={styles.desc} style={{ color: '#E84A4A' }}>View Full Recipe</p>
          <ArrowForwardIcon fontSize='medium' htmlColor='#E84A4A' />
        </button>
      </div>
    </div>
  )
};

export default Recipe;