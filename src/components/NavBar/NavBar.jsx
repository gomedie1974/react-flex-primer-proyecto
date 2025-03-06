import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
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
            <li><button className='btn btn-secondary'><span style={{color:'black'}}>Productos</span></button></li>
            <li><button className='btn btn-secondary'><span style={{color:'black'}}>Contacto</span></button></li>              
          </ul>
          <span><CartWidget/></span>
        </nav>
      </header>  
   )
}
 

export default NavBar
