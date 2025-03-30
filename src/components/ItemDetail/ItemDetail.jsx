import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';



function ItemDetail() {

    const {id} = useParams();

    const [loading, setLoading ] = useState(true);
    const [producto, setProducto ] = useState(null);
    const [contador, setContador] = useState(1);


    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad: contador,
        }
        console.log("vas a agregar", nuevoProducto)
        setContador(1)
    };

    useEffect(() =>{ 
         fetchData()
                .then(response => {
                    const productoAMostrar = response.find(el=> el.id === parseInt(id));
                    setProducto (productoAMostrar);   
                    setTimeout(()=>{
                        setLoading(false);},500); 
                })
                .catch(err => console.error(err));  

    },[id]); 

      return(
        
        loading?
          <Loader />
        : 
            <div className='card item-detail'>
                {
                    producto ? 
                 <>
                    <img src={`/imagenes/fragancias/${producto.imagen}`} alt={producto.nombre} className="card-img-top" />
                    <h3>{producto.nombre}</h3> 
                    <div>      
                        <p>Precio: ${producto.precio} </p>
                        <p>Descripcion: {producto.descripcion}</p>
                        <p>{producto.stock} productos en stock</p>
                        
                        <ItemCount   stock={producto.stock}    contador={contador} setContador={setContador}/>
                        
                        
                        <button className='btn btn-secondary my-2' onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
                        
                        <Link to={"/"}>
                            <button className='btn btn-secondary my-2'>Volver al inicio</button>
                        </Link> 
                    </div>
                </>     
                :
                
                <p>Producto no encontrado con el ID {id}</p> /* esta validacion la hacemos por si un boludo entra a traves del path */
                
                }
            </div>
        
      );    
};

export default ItemDetail; 
