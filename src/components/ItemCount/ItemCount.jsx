import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, nombreDelProducto }) {


    // // ItemCount(props)
    // // ItemCount({ stock, nombreDelProducto })

    // // const { stock, nombreDelProducto } = props

    // useState es una función (hook) que nos permite CREAR un estado. Nos devuelve un array con:

    /*
    -El estado (variable que se va a modificar o actualizar y el DOM lo interpreta y modifica automáticamente)
    -La función que modifique ese estado.
    
    Dentro de los paréntesis le pasamos el estado inicial. Es decir, ell primer valor que va a tomar nuestro estado
    */

    // const [estado, funcionModificadora] = useState(5);

    // console.log(estado);
    // console.log(funcionModificadora);

    const [contador, setContador] = useState(1);

    // contador = 3;

    // let contador = 5;

    // const {stock, nombreDelProducto} = props;

    function modificarContador(operacion) {
        if (operacion === "+") {
            if (contador < stock) {
                setContador(contador + 1);
            };
        } else {
            if (contador > 1) {
                setContador(contador - 1);
            };
        };
    };

    function agregarAlCarrito() {
        console.log(`Vas a agregar ${contador} unidades de ${nombreDelProducto}`);
        setContador(1);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
            <h3>Nombre del producto: {nombreDelProducto}</h3>
            <div style={{ display: "flex", width: "10rem", padding: "2rem", justifyContent: "space-around", alignItems: "center" }}>
                <button className="btn btn-secondary" onClick={() => modificarContador("-")}>-</button>
                <p>{contador}</p>
                <button className="btn btn-secondary" onClick={() => modificarContador("+")}>+</button>
            </div>
            <button className="btn btn-secondary" style={{ width: "15rem" }} onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;