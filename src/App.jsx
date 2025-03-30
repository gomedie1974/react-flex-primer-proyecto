import './App.css'
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import CartWidget from './components/CartWidget/CartWidget';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 /*  const greetings = "Bienvenidos a AllinShop";
  const additionalMessage = "Descubre nuestros productos con los mejores precios.";
 */
  return (
       
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer /> }/>   
            <Route path="/categoria/:categoria" element={<ItemListContainer /> }/>   
            <Route path="/detalle/:id" element={ <ItemDetail/> }/>  
            <Route path="/carrito" element={ <CartWidget/> }/>  
            <Route path="/404" element={<NotFound />} /> 
            <Route path="*" element={<NotFound />} />  
          </Routes>          
      </BrowserRouter>
           
  );
}

export default App 