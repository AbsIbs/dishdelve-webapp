import styles from './styles.module.scss'
// Icons
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const RecipeInfo = (props) => {

  const icons = {
    'Prep time': <HourglassBottomIcon style={{ color: 'white', fontSize: '2rem' }} />,
    'Cooking time': <TimerIcon style={{ color: 'white', fontSize: '2rem' }} />,
    'Servings': <GroupIcon style={{ color: 'white', fontSize: '2rem' }} />,
    'Difficulty': <StarIcon style={{ color: 'white', fontSize: '2rem' }} />
  }

  return (
    <div className={styles.container} >
      <div className={styles.iconContainer} >
        {icons[props.subtitle]}
      </div>
      <div>
        <p className={styles.title} >{props.title}</p>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  )
};

export default RecipeInfo;