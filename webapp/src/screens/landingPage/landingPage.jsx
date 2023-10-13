import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../firebase/firebase-config'
import { useState, useEffect, lazy } from 'react'
import styles from './styles.module.scss'
// Components
const RecentRecipe = lazy(() => import('../../components/LandingPage/RecentRecipe/recentRecipe'))
const Newsletter = lazy(() => import('../../components/Global/Newsletter/newsletter'))
const LargeBlog = lazy(() => import('../../components/LandingPage/Blogs/largeBlog/largeBlog'))
const Menu = lazy(() => import('../../components/LandingPage/Menu/menu'))
// const MiniBlog = lazy(() => import('../../components/LandingPage/RecentRecipe/recentRecipe'))
const LatestRecipes = lazy(() => import('../../components/LandingPage/LatestRecipes/latestRecipes'))
const Recipe = lazy(() => import('../../components/LandingPage/Recipe/recipe'))
const Footer = lazy(() => import('../../components/Global/Footer/footer'))
// import RecentRecipe from '../../components/LandingPage/RecentRecipe/recentRecipe'
// import Newsletter from '../../components/Global/Newsletter/newsletter'
// import LargeBlog from '../../components/LandingPage/Blogs/largeBlog/largeBlog';
// import Menu from '../../components/LandingPage/Menu/menu';
// import MiniBlog from '../../components/LandingPage/Blogs/miniBlog/miniBlog'
// import LatestRecipes from '../../components/LandingPage/LatestRecipes/latestRecipes'
// import Recipe from '../../components/LandingPage/Recipe/recipe'
// import Footer from '../../components/Global/Footer/footer'

// Functions
import { getRandomRecipes, getBlogs } from '../../logic/backendLogic'

const LandingPage = () => {
  const [logoURL, setLogoURL] = useState(null)
  // Store the array of recipes
  const [recipes, setRecipes] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  const getBlogsHandler = () => {
    getBlogs(4)
      .then((data) => {
        setBlogs(data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const getRecipesHandler = () => {
    getRandomRecipes(16)
      .then((data) => {
        setRecipes(data)
        return data
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // Retrieve our recipes
  useEffect(() => {
    getRecipesHandler()
  }, [])

  useEffect(() => {
    getBlogsHandler()
  }, [])

  useEffect(() => {
    getDownloadURL(ref(storage, 'seazon/img/logo.png'))
      .then((url) => {
        setLogoURL(url)
      })
  }, [])

  return (
    <>
      {/* Latest recipe section */}
      {loading ? null : <RecentRecipe recipe={recipes[0]} />}
      {/* Newsletter section */}
      <Newsletter />
      {/* Latest Blogs section and Blogs */}
      <div className={styles.section} >
        <div className={styles.latestBlogsContainer}>
          {/* Recent blogs */}
          <div className={styles.leftColumn}>
            {blogs.length > 0 ?
              (blogs.map((blog, index) => {
                return (
                  <div key={index} >
                    <LargeBlog title={blog.title} intro={blog.intro} coverImage={blog.coverImage} author={blog.author} timestamp={blog.timestamp} id={blog.id} />
                  </div>
                )
              })) : null}
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
            {/* <Menu title={'LATEST BLOGS'} >
              {blogs.length > 0 ?
                (blogs.slice(blogs.length - 2, blogs.length + 1).map((blog, index) => {
                  return (
                    <div key={index} >
                      <MiniBlog title={blog.title} timestamp={blog.timestamp} imageURL={blog.coverImage} id={blog.id} />
                    </div>
                  )
                })) : null}
            </Menu> */}
          </div>
        </div>
      </div>
      {/* Latest Recipes */}
      {recipes.length > 0 ? (
        <LatestRecipes recipes={recipes.slice(1, 8)} />
      ) : (
        <p>Loading...</p>
      )}
      {/* Recipes */}
      <div className={styles.section} >
        <div className={styles.container} style={{ padding: '1rem' }} >
          <div className={styles.recipesSection} >
            {recipes.slice(8, recipes.length).map((data, index) => {
              return (
                <div key={index} >
                  <Recipe id={data.id} title={data.title} desc={data.chefsNotes} imageURL={data.coverImage} category={data.mealType} difficulty={data.difficulty} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default LandingPage;