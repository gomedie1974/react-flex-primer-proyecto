import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
 

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav className='nav-bar'>
        <span><Logo /></span>
        
        
        {/* Lista de navegación */}
        <ul className={`nav-bar-items ${menuActive ? 'active' : ''}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/categoria/Fragancias">Fragancias</Link></li>
          <li><Link to="/categoria/Solares">Solares</Link></li>
          <li><Link to="/categoria/Cremas">Cremas</Link></li>
          <li><Link to="/carrito"><CartWidget /></Link></li> 

      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>


      </nav>
    </header>
  );
}

export default NavBar;
