import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  // State for dropdown menu
  const [menuVisible, setMenuVisible] = useState(false)

  // Menu styles
  const menuStyle = {
    display: menuVisible ? 'flex' : 'none',
  };

  // Event listener
  useEffect(() => {
    const handleResize = () => {
      // Toggle menu visibility based on screen width
      if (window.innerWidth <= 577) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav} >
      <div className={styles.container}>
        <div className={styles.iconAndTitleContainer} >
          <label className={styles.icon} onClick={() => { setMenuVisible(!menuVisible) }} >
            <MenuIcon />
          </label>
          <a href="/" className={styles.siteTitle} >DishDelve</a>
        </div>
        <ul className={styles.menuItems} style={menuStyle} >
          <li>
            <a href='/' className={styles.hoverUnderlineAnimation}>Home</a>
            <a href='/about-us' className={styles.hoverUnderlineAnimation}>About us</a>
            <a href='/contact-us' className={styles.hoverUnderlineAnimation}>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;