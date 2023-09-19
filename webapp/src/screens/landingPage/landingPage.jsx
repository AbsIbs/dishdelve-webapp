import styles from './styles.module.scss'
import RecentRecipe from '../../components/LandingPage/RecentRecipe/recentRecipe'
import Newsletter from '../../components/LandingPage/Newsletter/newsLetter'

const LandingPage = () => {
  return (
    <>
      {/* Latest recipe section */}
      <RecentRecipe />
      <Newsletter />
    </>
  )
};

export default LandingPage;