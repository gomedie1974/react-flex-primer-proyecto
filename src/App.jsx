import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const greetings = "Bienvenidos a AllinShop";
  const additionalMessage = "Descubre nuestros productos con los mejores precios.";

  return (
    <>  
      <NavBar/>
      <ItemListContainer greetings={greetings} additionalMessage={additionalMessage} />
    </>
  );
}

export default App 