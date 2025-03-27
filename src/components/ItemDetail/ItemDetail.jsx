import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';



function ItemDetail({productos, volverAlInicio }) {

    const [contador, setContador] = useState(1);

    const {nombre, categoria, precio, descripcion, stock} = productos

    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad: contador,
        }
        console.log("vas a agregar", nuevoProducto)
        setContador(1)
    };

      return(
        <div className='card, item-detail'>
            <h3 className='card-header'>{nombre}</h3> 
            <div>
                <h5  className='card-body'>{categoria}</h5>
                <p>Precio: ${precio}</p>
                <p>Descripcion: {descripcion}</p>
                
                <ItemCount stock={stock} contador={contador} setContador={setContador}/>

 
                <button className='btn btn-secondary my-2' onClick={()=> agregarAlCarrito(productos)}>Agregar al carrito</button>
 
                <button className='btn btn-secondary my-2' onClick={volverAlInicio}>Volver al inicio</button>
            </div>
        </div>
      );
};

export default ItemDetail; 
