import { useState } from 'react'
// Screens
import LandingPage from './screens/landingPage/landingPage';
// Components
import Navbar from './components/Global/Navbar/Navbar';
// Import your global stylesheet
import './global.css';


const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  )
};

export default App;