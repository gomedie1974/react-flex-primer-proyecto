import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

 
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  function agregarAlCarrito(prod, cantidad) {
    const nuevoProducto = { ...prod, cantidad };

    if (carrito.some((el) => el.id === prod.id)) {
      const newCarrito = carrito.map((element) => {
        if (element.id === prod.id) {
          return { ...element, cantidad: element.cantidad + cantidad };
        } else {
          return element;
        }
      });
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
    toast("Producto agregado")
  }
  

  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }


  function actualizarCantidad(id, cantidad) {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
      )
    );
  }
  
  function vaciarCarrito() {
    setCarrito([]);
  }
  

  return (
    <AppContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
