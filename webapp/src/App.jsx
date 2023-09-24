// Screens
import LandingPage from './screens/landingPage/landingPage';
import ContactUs from './screens/Contact Us/contactUs';
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
      </Routes>
    </>
  )
};

export default App;