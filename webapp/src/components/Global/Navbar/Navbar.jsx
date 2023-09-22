import styles from './styles.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav} >
      <div className={styles.container}>
        <a href="/" className={styles.siteTitle} >DishDelve</a>
        <ul>
          <li>
            <a href='/' className={styles.hoverUnderlineAnimation}>Home</a>
            <a href='/' className={styles.hoverUnderlineAnimation}>About us</a>
            <a href='/' className={styles.hoverUnderlineAnimation}>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;