import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer() {
    
    const [loading, setLoading ] = useState(true);
    const [todosLosProductos, setTodosLosProductos ] = useState(null);
    
    const [productosFiltrados, setProductosFiltrados ] = useState(null);

    
    useEffect(() => {       
        fetchData()
        .then(response => {
            setTodosLosProductos(response);
            console.log(response)
            setLoading(false);
        })
        .catch(err => console.error(err))
  
    }, []);   
  
    return (
        <div>
        <div className='container-productos'>
            {
                loading? 
                <Loader/>
                :
                todosLosProductos.map(el =>{
                  return(
                   <Item key={el.id} productos={el} filtrarProductos={setProductosFiltrados}/>
                  )      
                })            
            } 
           </div> 
            {
                productosFiltrados && <ItemDetail productos={productosFiltrados} volverAlInicio={()=> setProductosFiltrados(null)}/>
            }
        </div>
        );

};


export default ItemListContainer;