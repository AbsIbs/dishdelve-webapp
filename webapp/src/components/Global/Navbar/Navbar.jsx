import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

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
          <Link to="/" className={styles.siteTitle} >DishDelve</Link>
        </div>
        <ul className={styles.menuItems} style={menuStyle} >
          <li>
            <Link to='/' className={styles.hoverUnderlineAnimation}>Home</Link>
            <Link to='/' className={styles.hoverUnderlineAnimation}>About us</Link>
            <Link to='/contact-us' className={styles.hoverUnderlineAnimation}>Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;