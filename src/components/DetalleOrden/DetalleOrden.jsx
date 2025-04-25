import { useLocation, useParams } from "react-router-dom";
 
function DetalleOrden() {
  const { nombre } = useParams(); // Recibimos el nombre desde la URL
  const location = useLocation();
  const { productos } = location.state || {}; // Obtenemos los productos desde el estado de la navegación

  return (
    <div className="detalle-orden, m-4">
      <h2>¡Compra realizada con éxito, {nombre}!</h2><br />
      <h3>Detalle de tu pedido:</h3><br />
      {productos && productos.length > 0 ? (
        <ul>
          {productos.map((item, index) => (
            <li key={index}>
              <strong>{item.nombre}</strong> - Cantidad: {item.cantidad} - Precio: ${item.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes productos en tu pedido.</p>
      )}
      <div>
        <button className="btn btn-primary" onClick={() => window.print()}>Imprimir Detalle</button> {/* Para imprimir el detalle si lo desean */}
      </div>
    </div>
  );
}

export default DetalleOrden;
