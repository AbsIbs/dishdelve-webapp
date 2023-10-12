import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
// Components
import Footer from '../../components/Global/Footer/footer'
import Newsletter from '../../components/Global/Newsletter/newsletter'
// Firebase
import { storage } from '../../../firebase/firebase-config';
import { getDownloadURL, ref } from 'firebase/storage';
// Iconts
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


const AboutUs = () => {

  const [logoURL, setLogoURL] = useState(null)

  useEffect(() => {
    getDownloadURL(ref(storage, 'seazon/img/about-us-image.png'))
      .then((url) => {
        setLogoURL(url)
      })
  }, [])

  const Services = (props) => {

    const iconComponents = {
      'FoodBankIcon': FoodBankIcon,
      'MenuBookIcon': MenuBookIcon,
      'TravelExploreIcon': TravelExploreIcon,
    };

    const IconComponent = iconComponents[props.icon]

    return (
      <div className={styles.serviceContainer} >
        <div className={styles.serviceImageContainer} >
          <IconComponent fontSize={'inherit'} style={{ color: 'white' }} />
        </div>
        <p className={styles.desc}>We're <span className={styles.textHighlight} >{props.message}</span></p>
      </div>
    )
  };

  return (
    <>
      <div className={styles.bgSection} >
        <p className={styles.title}>Welcome to DishDelve</p>
        <p className={styles.subTitle}>Recipe sharing re-imagined</p>
      </div>
      <Newsletter />
      <div className={styles.section} >
        <div className={styles.container} >
          <div style={{ flex: '1' }}>
            <img className={styles.image} src={logoURL}></img>
          </div>
          <div style={{ flex: '1' }}>
            <p className={styles.desc}>Welcome to our recipe blog, where <span className={styles.textHighlight} >culinary creativity</span> and <span className={styles.textHighlight} >flavor-packed</span> delights come together to inspire your inner chef! At Dishdelve, we are passionate about sharing our love for cooking and providing a platform for food enthusiasts to embark on a delicious journey.</p>
          </div>
        </div>
      </div>
      <div className={styles.section} style={{ backgroundColor: 'white' }} >
        <div className={styles.servicesContainer} >
          <Services icon={'FoodBankIcon'} message='Passionate Chefs' />
          <Services icon={'MenuBookIcon'} message='Storytellers' />
          <Services icon={'TravelExploreIcon'} message='Globetrotters' />
        </div>
      </div>
      <div className={styles.section} >
        <div className={styles.container} >
          <p className={styles.desc} style={{textAlign: 'center'}} >
          Our team of seasoned foodies and talented home cooks curates a diverse collection of recipes, ranging from timeless classics to innovative twists on beloved dishes. Whether you're a novice in the kitchen or an experienced cook seeking new inspiration, our blog is your go-to resource for mouthwatering recipes, helpful tips, and culinary adventures. Join us as we celebrate the art of cooking, one delectable recipe at a time. Get ready to tantalize your taste buds and elevate your cooking skills as you explore our virtual kitchen. Welcome to the flavorful world of <span className={styles.textHighlight} >DishDelve</span>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default AboutUs;