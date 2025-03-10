import './App.css'
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

  
function App() {
  

  return (
    <>  
     <NavBar/>
     <ItemListContainer greetings=" Bienvenidos a AllinShop"/>
     <ItemListContainer greetings1=" Descubre nuestros productos con los mejores precios."/>
      {/* <h1>{nombreDelProfe}</h1> */}
      {/* <ItemCount stock={5} nombreDelProducto="Mesa" />
      <ItemCount stock={15} nombreDelProducto="Silla" />
      <ItemCount stock={9} nombreDelProducto="Escritorio" /> */}

     </>
  )
}

export default App



    // const nombreDelProfe = "Lucas";

  // const array = [1, 2, 3];
  // const objeto = {
  //   nombre: "Lucas",
  //   apellido: "Ruiz",
  // };

  // Spread operator: permite "desparramar" los elementos que tenemos en un array o en un objeto
  // console.log(array);
  // console.log([...array, 10]);
  // console.log(objeto);
  // console.log({...objeto, nombre: "Lucas Gabriel"});

  // const nombre = objeto.nombre;
  // const apellido = objeto.apellido; Esto es lo que queremos evitar

  // const name = objeto.nombre;
  // const lastName = objeto.apellido; Esto es lo que queremos evitar

  // Destructuring: nos permite obtener valores dentro de un array u objeto y guardarlos en variables

  // const { nombre: name, apellido: lastName } = objeto;

  // // console.log("Hola, mi nombre es " + objeto.nombre + " " + objeto.apellido);
  // // console.log(`Hola, mi nombre es ${objeto.nombre} ${objeto.apellido}`);
  // console.log(`Hola, mi nombre es ${nombre} ${apellido}`);
  // console.log(`Hola, mi nombre es ${name} ${lastName}`);

  // const primerNumero = array[0];
  // const segundoNumero = array[1];
  // const tercerNumero = array[2];

  // const [ primerNumero, segundoNumero, tercerNumero ] = array;

  // console.log("Este es mi primer número", primerNumero);
  // console.log("Este es mi segundo número", segundoNumero);
  // console.log("Este es mi tercer número", tercerNumero);

