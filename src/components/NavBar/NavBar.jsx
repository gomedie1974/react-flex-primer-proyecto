import './NavBar.css'
import Carrito from "../Carrito/Carrito";


function NavBar() {
  return (
     <header>
        <nav className='nav-bar'>
            <p>LOGO</p>
          <ul className='nav-bar-items'> 
            <li><button className='btn btn-primary'>Inicio</button>
            </li>
            <li><button className='btn btn-secondary'>Productos</button></li>
            <li><button className='btn btn-secondary'>Contacto</button></li>              
          </ul>
          <p><button className='btn btn-danger'><Carrito /></button></p>
        </nav>
      </header>  
   )
}

export default NavBar
