import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const { categoria } = useParams(); // Recibe el parámetro de la URL
  
  // Realiza la llamada a la API solo una vez cuando el componente se monta
  useEffect(() => {
    fetchData()
      .then(response => {
        setTodosLosProductos(response); // Guarda los productos
        setLoading(false); // Cambia el estado de carga
      })
      .catch(err => console.error("Error al cargar los productos", err));
  }, []); // Dependencia vacía para solo ejecutarse al montar el componente

  // Filtra los productos por categoría, si existe
  const productosFiltrados = categoria 
    ? todosLosProductos.filter(el => el.categoria === categoria)
    : todosLosProductos;

  return (
    loading ? 
      <Loader /> // Muestra el loader mientras se cargan los productos
    :
      <div>
        <div className="container-productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map(el => (
              <Item key={el.id} productos={el} />
            ))
          ) : (
            <p>No se encontraron productos para esta categoría.</p> // Mensaje si no hay productos
          )}
        </div>
      </div>
  );
}

export default ItemListContainer;
