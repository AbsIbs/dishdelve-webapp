import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../firebase/firebase-config'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
// Components
import RecentRecipe from '../../components/LandingPage/RecentRecipe/recentRecipe'
import Newsletter from '../../components/LandingPage/Newsletter/newsLetter'
import LargeBlog from '../../components/LandingPage/Blogs/largeBlog/largeBlog';
import Menu from '../../components/LandingPage/Menu/menu';
import MiniBlog from '../../components/LandingPage/Blogs/miniBlog/miniBlog'
import LatestRecipes from '../../components/LandingPage/LatestRecipes/latestRecipes'
import Recipe from '../../components/LandingPage/Recipe/recipe'
import Footer from '../../components/Global/Footer/footer'

const LandingPage = () => {

  const [logoURL, setLogoURL] = useState(null)

  // Difficulties
  const difficulties = ['Simple', 'Intermediate', 'Advanced']
  const [activeDifficulty, setActiveDifficulty] = useState(difficulties[0])

  /* const [difficulties, setDifficulties] = useState({
    'Simple': true,
    'Intermediate': false,
    'Advanced': false
  }) */
  // Toggle difficulty
  /* const toggleDifficulty = (difficulty) => {
    setDifficulties(prevState => {
      const nextState = {}
      Object.keys(prevState).forEach(key => {
        if (key == difficulty) {
          nextState[key] = true
        } else {
          nextState[key] = false
        }
      })
      return nextState
    })
  }; */

  // Dummy data
  const desc = 'Unlock the magic of spices and elevate your culinary prowess! Our guide will demystify spices, empowering you to create tantalizing dishes. Learn the art of seasoning...'
  const category = 'Mindfulness'
  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/seazon-app-mvp.appspot.com/o/recipes%2F15ff7dfa-049c-4494-a869-06831a6dd081%2FcoverImage.png?alt=media&token=2a394080-e23c-4522-812e-3e295cdadf31'

  useEffect(() => {
    getDownloadURL(ref(storage, 'seazon/img/logo.png'))
      .then((url) => {
        setLogoURL(url)
      })
      .then(() => {
        console.log('got image')
      })
  }, [])

  return (
    <>
      {/* Latest recipe section */}
      <RecentRecipe />
      {/* Newsletter section */}
      <Newsletter />
      {/* Latest Blogs section and Blogs */}
      <div className={styles.section} >
        <div className={styles.latestBlogsContainer}>
          {/* Recent blogs */}
          <div className={styles.leftColumn}>
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
            <LargeBlog category={category} desc={desc} imageURL={imageURL} />
          </div>
          {/* About us | Blog Categories and Latest Blogs */}
          <div className={styles.rightColumn}>
            <Menu title={'ABOUT US'} >
              <img src={logoURL} style={{ height: '100px', borderRadius: '50px' }} />
              <p style={{ textAlign: 'center', fontSize: '0.9rem', margin: '0' }} >Join us and embark on a culinary journey filled with tasty delights! </p>
              <p style={{ fontFamily: 'Courgette', margin: '0' }} >DishDelve team</p>
            </Menu>
            <Menu title={'BLOG CATEGORIES'} >
              <p className={styles.blogCategoryMenuItem} >Food and Travel </p>
              <p className={styles.blogCategoryMenuItem} >Healthy Eating </p>
              <p className={styles.blogCategoryMenuItem} >Seasonal and holiday cooking </p>
              <p className={styles.blogCategoryMenuItem} >Cooking for beginners </p>
              <p className={styles.blogCategoryMenuItem} >Kitchen Gadgets </p>
              <p className={styles.blogCategoryMenuItem} >Restaurant Reviews </p>
            </Menu>
            <Menu title={'LATEST BLOGS'} >
              <MiniBlog title={'Rise and Dine: 5 Easy-Peasy Nutritious recipes to kickstart the morning!'} date={'7th September 2023'} imageURL={imageURL} />
              <MiniBlog title={'Rise and Dine: 5 Easy-Peasy Nutritious recipes to kickstart the morning!'} date={'7th September 2023'} imageURL={imageURL} />
            </Menu>
          </div>
        </div>
      </div>
      {/* Latest Recipes */}
      <LatestRecipes />
      {/* Recipes */}
      <div className={styles.section} >
        <div className={styles.container} style={{ padding: '1rem 1rem 1rem 1rem' }} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }} >
            <Recipe title={'Air Fryer Chicken Breast '} desc={desc} imageURL={imageURL} category={'Lunch/Dinner'} difficulty={'Simple'} />
            <Recipe title={'Air Fryer Chicken Breast '} desc={desc} imageURL={imageURL} category={'Lunch/Dinner'} difficulty={'Simple'} />
            <Recipe title={'Air Fryer Chicken Breast '} desc={desc} imageURL={imageURL} category={'Lunch/Dinner'} difficulty={'Simple'} />
            <Recipe title={'Air Fryer Chicken Breast '} desc={desc} imageURL={imageURL} category={'Lunch/Dinner'} difficulty={'Simple'} />
            <Recipe title={'Air Fryer Chicken Breast '} desc={desc} imageURL={imageURL} category={'Lunch/Dinner'} difficulty={'Simple'} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default LandingPage;