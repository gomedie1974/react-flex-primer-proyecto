import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/context';
import CheckoutForm from './components/CheckoutForm/CheckoutForm'; // Este es tu formulario
 // import Checkout from './components/Checkout/Checkout';
// import FinalizarOrden from './components/FinalizarOrden/FinalizarOrden';

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />   
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />   
        <Route path="/detalle/:id" element={<ItemDetail />} />  
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/orden-completada" element={<h2> Compra realizada con éxito</h2>} />
        <Route path="/404" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </ContextProvider>        
  );
}

export default App;
