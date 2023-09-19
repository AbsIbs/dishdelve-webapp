import styles from './styles.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RecentRecipe = () => {
  return (
    <>
      {/* Latest recipe section */}
      <div className={styles.section} >
        <div className={styles.container} >
          {/* Card */}
          <div className={styles.card}>
            <div>
              <span className={styles.topButton} > Our latest recipe </span>
            </div>
            <p className={styles.desc} >September 20th 2023</p>
            <p className={styles.title} >Couscous Salad</p>
            <p className={styles.desc}>This easy couscous salad is loaded with tomatoes, cucumber,
              red onion, fresh herbs and feta cheese all tossed in a simple lemon dressing.
              It's light, refreshing and makes for a healthy side dish.
            </p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <div className={styles.profileImage}></div>
              <p className={styles.desc} >DishDelve Team</p>
            </div>
            <div>
              <span className={styles.bottomButton} >
                <span>Read Full Recipe</span>
                <ArrowForwardIcon/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>

  )
};

export default RecentRecipe;