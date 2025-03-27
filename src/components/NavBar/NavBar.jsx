import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";


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
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          
          {/* CartWidget dentro del menú hamburguesa */}
          <li>
            <div className="cart-widget">
              <CartWidget />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
