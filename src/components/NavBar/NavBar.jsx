import './NavBar.css'

function NavBar() {
  return (
     <header>
        <nav className='nav-bar'>
            <p>LOGO</p>
          <ul className='nav-bar-items'> 
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
            <li>Contacto</li>
          </ul>
          <p>Carrito(7)</p>
        </nav>
        <button className='btn btn-primary'>Inicio</button>
      </header>  
   )
}

export default NavBar
