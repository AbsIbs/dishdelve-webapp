import styles from './styles.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RecentRecipe = (props) => {

  const recipe = props.recipe

  const getDate = (firebaseTimestamp) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Convert Firebase server timestamp to JavaScript Date object
    const serverDate = firebaseTimestamp.toDate();

    const day = serverDate.getDate();
    const monthIndex = serverDate.getMonth();
    const year = serverDate.getFullYear();

    // Format the date as "Month Day, Year"
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

    return formattedDate;
  };


  return (
    <>
      {/* Latest recipe section */}
      <div className={styles.section} style={{ backgroundImage: `url(${recipe.coverImage})` }} >
        <div className={styles.container} >
          {/* Card */}
          <div className={styles.card}>
            <p className={styles.desc} >{getDate(recipe.timestamp)}</p>
            <p className={styles.title} >{recipe.title}</p>
            <p className={styles.desc}>{recipe.chefsNotes}</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <div className={styles.profileImage} style={{ backgroundImage: `url(${recipe.profileImageURL})` }}></div>
              <p className={styles.desc} >{recipe.author}</p>
            </div>
            <div>
              <a href={`/recipe/${recipe.id}`}  className={styles.bottomButton} >
                <span>Read Full Recipe</span>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default RecentRecipe;