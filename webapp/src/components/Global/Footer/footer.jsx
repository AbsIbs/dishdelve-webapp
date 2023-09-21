import styles from './styles.module.scss'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container} >
        <p style={{fontFamily: 'Courgette'}} >DishDelve</p>
        <p>2023 All rights reversed | <span style={{color: '#E84A4A'}} >Made by Abass Ibrahim</span> </p>
        <div className={styles.iconContainer} >
          <YouTubeIcon fontSize='large' htmlColor='#000000' />
          <InstagramIcon fontSize='large' htmlColor='#000000' />
        </div>
      </div>
    </div>
  )
};

export default Footer;