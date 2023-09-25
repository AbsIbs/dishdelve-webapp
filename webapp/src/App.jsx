// Screens
import LandingPage from './screens/landingPage/landingPage';
import ContactUs from './screens/Contact Us/contactUs';
import AboutUs from './screens/About Us/aboutUs';
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
        <Route path='/' element={<LandingPage/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    </>
  )
};

export default App;