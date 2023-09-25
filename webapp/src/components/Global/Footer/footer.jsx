import styles from './styles.module.scss'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container} >
        <p className={styles.text} style={{fontFamily: 'Courgette'}} >DishDelve</p>
        <p className={styles.text}>2023 All rights reserved | <span className={styles.text} style={{color: '#E84A4A'}} >Made by Abass Ibrahim</span> </p>
        <div className={styles.iconContainer} >
          <YouTubeIcon fontSize='large' htmlColor='#000000' />
          <InstagramIcon fontSize='large' htmlColor='#000000' />
        </div>
      </div>
    </div>
  )
};

export default Footer;