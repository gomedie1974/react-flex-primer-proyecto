import './App.css';
import Home from './components/Home/Home'
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/context';
import CheckoutForm from './components/CheckoutForm/CheckoutForm'; 
import Footer from './components/Footer/Footer';
import FinalizarOrdenFin from './components/FinalizarOrdenFin/FinalizarOrdenFin';
import DetalleOrden from './components/DetalleOrden/DetalleOrden';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ContextProvider>
       <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />   
        <Route path="/detalle/:id" element={<ItemDetail />} />  
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/orden-completada" element={<h2> Compra realizada con éxito</h2>} />
        <Route path="/404" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} /> 
        <Route path="/finalizar-orden/:nombre/:telefono/:mail" element={<FinalizarOrdenFin />} />  
        <Route path="/detalle-orden/:nombre" element={<DetalleOrden />} />

      </Routes>
      <Footer />

    </ContextProvider>        
  );
}

export default App;
