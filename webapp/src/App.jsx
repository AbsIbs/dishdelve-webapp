// Screens
import LandingPage from './screens/landingPage/landingPage';
import ContactUs from './screens/Contact Us/contactUs';
import AboutUs from './screens/About Us/aboutUs';
import RecipeViewer from './screens/Recipe Viewer/recipeViewer';
import BlogViewer from './screens/blogViewer/blogViewer';
// Components
import Navbar from './components/Global/Navbar/Navbar';
// Import your global stylesheet
import './global.css';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/recipe/:recipeId' element={<RecipeViewer />} />
        <Route path='/blog/:blogId' element={<BlogViewer />} />
      </Routes>
    </>
  )
};

export default App;