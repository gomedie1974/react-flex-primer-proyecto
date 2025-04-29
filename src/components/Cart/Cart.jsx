import { useAppContext } from "../../context/context";
import { useNavigate} from "react-router-dom";
import "./Cart.css";


function Cart() {
    const { carrito, eliminarDelCarrito, actualizarCantidad } = useAppContext();
    const navigate = useNavigate();
  
    const calcularTotal = () => {
      return carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
      );
    };
  
    return (
      <div className="cart-container">
        <h2>Carrito de Compras</h2>
          <div>
          {carrito.length === 0 ? (
          <div className="cart-empty">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11010/11010851.png"
              alt="Carrito vacío"
              className="cart-empty-image"
            />
            <h5>¡Ups! No tienes productos en el carrito</h5>
          </div>

        ) : (
            <div>
              {carrito.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={`/imagenes/fragancias/${item.imagen}`}
                    alt={item.nombre}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p>{item.nombre}</p>
                    <p>Precio: ${item.precio}</p>
                    <div>
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        disabled={item.cantidad <= 1}
                        className="btn btn-secondary"
                      >
                       <b> -</b> 
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        className="btn btn-secondary"
                      >
                       <b> +</b> 
                      </button>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${calcularTotal()}</h3>
              </div>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    Volver 
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="btn btn-primary">
                Finalizar Pedido
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Cart;