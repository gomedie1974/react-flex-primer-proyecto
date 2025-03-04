import './NavBar.css'
import Carrito from "../Carrito/Carrito";
import Logo from "../Logo/Logo";


function NavBar() {
  return (
     <header>
        <br />
        <nav className='nav-bar'>
          <span><Logo/></span>
           <ul className='nav-bar-items'> 
            <li><button className='btn btn-primary'>Inicio</button>
            </li>
            <li><button className='btn btn-secondary'>Productos</button></li>
            <li><button className='btn btn-secondary'>Contacto</button></li>              
          </ul>
          <span><Carrito/></span>
        </nav>
      </header>  
   )
}
 

export default NavBar
