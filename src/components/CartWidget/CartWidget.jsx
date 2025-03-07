import './CartWidget.css'
import { BsCart4 } from "react-icons/bs";

function CartWidget() {
  return (
     <header>
        <span className='CartWidget'>
          <BsCart4 />
          <span className='CartWidgetNumber'>45</span>
        </span>
      </header>  
  );
}

export default CartWidget;
