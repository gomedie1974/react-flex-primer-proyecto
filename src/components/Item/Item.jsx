import './Item.css';

function Item({productos, filtrarProductos }) {

    const {nombre, categoria, precio, descripcion, stock } = productos

    function agregarAlCarrito(prod){
      const nuevoProducto = {
        ...prod, /* spread operator */
        cantidad: 1,
      }
      console.log("vas a agregar el producto", nuevoProducto)
    }

      return(
        <div className='card, item-productos'>
            <h3 className='card-header'>{nombre}</h3> 
            <h5  className='card-body'>{categoria}</h5>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p> 
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-secondary my-2' onClick={()=> agregarAlCarrito(productos)}>Agregar al carrito</button>
            <button className='btn btn-secondary my-2' onClick={()=> filtrarProductos(productos)}>Ver detalle</button>
        </div>
      );
};

export default Item; 
