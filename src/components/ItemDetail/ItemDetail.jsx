import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../../fetchData';
import ItemCount from '../ItemCount/ItemCount';
import Loader from '../Loader/Loader';
import './ItemDetail.css';

function ItemDetail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1);

    const { agregarAlCarrito } = useAppContext();

    useEffect(() => {
        fetchData()
            .then(response => {
                const productoAMostrar = response.find(el => el.id === parseInt(id));
                setProducto(productoAMostrar);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => console.error(err));
    }, [id]);


    function handleAgregarAlCarrito(cantidad) {
        agregarAlCarrito(producto, cantidad);
    }

    return (
        loading ? (
            <Loader />
        ) : (
            <div className='card item-detail'>
                {
                    producto ? (
                        <>
                            <img src={`/imagenes/fragancias/${producto.imagen}`} alt={producto.nombre} className="card-img-top" />
                            <h3>{producto.nombre}</h3>
                            <div>
                                <p>Precio: ${producto.precio}</p>
                                <p>Descripcion: {producto.descripcion}</p>
                                <p>{producto.stock} productos en stock</p>

                                <div className="botones-acciones">
                                <ItemCount
                                    stock={producto.stock}
                                    contador={contador}
                                    setContador={setContador}
                                    onAdd={handleAgregarAlCarrito}
                                />
                                
                                <Link to={"/"}>
                                    <button className="btn btn-secondary">Volver</button>
                                </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Producto no encontrado con el ID {id}</p>
                    )
                }
            </div>
        )
    );
}

export default ItemDetail;
