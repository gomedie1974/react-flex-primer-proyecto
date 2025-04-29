import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

 

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };


  return (
    <header>
      <nav className='nav-bar'>
        <span><Logo /></span>

        <a href="https://wa.me/5491141685220" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /></a>
        
        <ul className={`nav-bar-items ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/categoria/Fragancias" onClick={closeMenu}>Fragancias</Link></li>
          <li><Link to="/categoria/Solares" onClick={closeMenu}>Solares</Link></li>
          <li><Link to="/categoria/Cremas" onClick={closeMenu}>Cremas</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/carrito" onClick={closeMenu}><CartWidget /></Link></li>
        </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>


      </nav>
    </header>
  );
}

export default NavBar;
