import { Link } from 'react-router-dom';
import './Item.css';

function Item({productos, filtrarProductos }) {

    const {id, imagen, nombre, categoria, precio, descripcion, stock } = productos

    function agregarAlCarrito(prod){
      const nuevoProducto = {
        ...prod, /* spread operator */
        cantidad: 1,
      }
      console.log("vas a agregar el producto", nuevoProducto)
      console.log(filtrarProductos)
    }

      return(
        <div className='card item-productos'>
            {/* Imagen */}
            <img src={`/imagenes/fragancias/${imagen}`} alt={nombre} className="card-img-top" />
            <h3 className='card-header'>{nombre}</h3> 
            <h5  className='card-body'>{categoria}</h5>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p> 
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-secondary my-2' onClick={()=> agregarAlCarrito(productos)}>Agregar al carrito</button>
    

            <Link to={`/detalle/${id}`}>
              <button className='btn btn-secondary my-2'>Ver detalle</button>
            </Link>
        </div>
      );
};

export default Item; 
