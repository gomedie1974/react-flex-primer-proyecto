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
        
        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <div className='hamburger' onClick={toggleMenu}>
          <span>&#9776;</span> {/* Icono de hamburguesa */}
        </div>

        {/* Lista de navegación */}
        <ul className={`nav-bar-items ${menuActive ? 'active' : ''}`}>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          
          <Link to="/categoria/fragancias">
            <li>Fragancias</li>
          </Link>
          
          <Link to="/categoria/solares">
            <li>Solares</li>
          </Link>

          <Link to="/categoria/cremas">
            <li>Cremas</li>
          </Link>
          
          <Link to="/carrito">
            <CartWidget/>
          </Link>
          
           
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
