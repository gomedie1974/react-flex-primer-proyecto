import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams, useNavigate } from 'react-router-dom';

function ItemListContainer() {
    
    const [loading, setLoading ] = useState(true);
    const [todosLosProductos, setTodosLosProductos ] = useState(null);    
    
    const {categoria} = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {    
    
        fetchData()
        .then(response => {
            setTodosLosProductos(response);
            console.log("Categoría seleccionada:", categoria);

            setTimeout(() => {
                setLoading(false);
            }, 500);

                // Si la categoría no existe en los productos, ir a 404
                if (categoria && !response.some(el => el.categoria.toLowerCase() === categoria.toLowerCase())) {
                    navigate('/404', { replace: true });
            }
        })
        .catch(err => console.error(err));
    
    }, [categoria, navigate]);  
    
   
    return (
        loading ? 
            <Loader /> 
            :
            <div>    
                <div className='container-productos'>
                    {todosLosProductos && (
                        categoria ?
                        todosLosProductos.filter(el => el.categoria.toLowerCase() === categoria.toLowerCase()).map(el => (
                            <Item key={el.id} productos={el} />
                        ))                        
                        :
                        todosLosProductos.map(el => (
                            <Item key={el.id} productos={el} />
                        ))
                    )}
                </div>  
            </div>   
    );
    
};

 
export default ItemListContainer;