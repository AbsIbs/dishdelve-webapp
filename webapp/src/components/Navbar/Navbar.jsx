import './styles.css'

const Navbar = () => {
  return (
    <nav className="nav" >
      <div className='container'>
        <a href="/" className="site-title" >DishDelve</a>
        <ul>
          <li>
            <a href='/' className='hover-underline-animation'>Home</a>
            <a href='/' className='hover-underline-animation'>About us</a>
            <a href='/' className='hover-underline-animation'>Recipes</a>
            <a href='/' className='hover-underline-animation'>Blogs</a>
            <a href='/' className='hover-underline-animation'>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;