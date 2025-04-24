import './ItemCount.css';

function ItemCount({ stock, contador, setContador, onAdd }) {

    function modificarContador(operacion) {
        if (operacion === "+") {
            if (contador < stock) {
                setContador(contador + 1);
            }
        } else {
            if (contador > 1) {
                setContador(contador - 1);
            }
        }
    }

    return (
        <div className="item-count-container">
    <div className="item-count-wrapper">
        <button className="btn btn-secondary" onClick={() => modificarContador("-")}>-</button>
        <p>{contador}</p>
        <button className="btn btn-secondary" onClick={() => modificarContador("+")}>+</button>
    </div>

    <button
        className="btn btn-primary boton-agregar" onClick={() => {
            console.log("AGREGANDO cantidad:", contador); onAdd(contador);}}>
        Agregar
    </button>
    </div>

    );
}

export default ItemCount;
