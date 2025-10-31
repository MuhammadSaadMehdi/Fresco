import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" width="100" />
      <ul className='nav-links'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Navbar;
