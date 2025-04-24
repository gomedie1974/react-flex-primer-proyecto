import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import { FaCartShopping } from "react-icons/fa6";
import './CartWidget.css';

function CartWidget() {
  const { carrito } = useAppContext();
  const totalCantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <Link to="/carrito">  
      <div className="cart-widget">
        <FaCartShopping color="blue" />
        <p>{totalCantidad}</p>  
      </div>
    </Link>
  );
}

export default CartWidget;
