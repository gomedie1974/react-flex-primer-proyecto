import './NavBar.css'
import Carrito from "../Carrito/Carrito";
import Logo from "../Logo/Logo";


function NavBar() {
  return (
     <header>
        <br />
        <nav className='nav-bar'>
          <p><Logo/></p>
           <ul className='nav-bar-items'> 
            <li><button className='btn btn-primary'>Inicio</button>
            </li>
            <li><button className='btn btn-secondary'>Productos</button></li>
            <li><button className='btn btn-secondary'>Contacto</button></li>              
          </ul>
          <p><Carrito/></p>
        </nav>
      </header>  
   )
}
 

export default NavBar
