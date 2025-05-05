import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import './FinalizarOrdenFin.css';


function FinalizarOrdenFin() {
  const { carrito } = useAppContext();
  const navigate = useNavigate();
  const { nombre, telefono, mail } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (carrito.length === 0) {
      alert("No tienes productos en el carrito.");
      navigate("/carrito");
      return;
    }

    const crearOrden = async () => {
      const nuevaOrden = {
        nombre: nombre || "Desconocido",
        telefono: telefono || "No especificado",
        mail: mail || "No especificado",
        productos: carrito,
      };

      try {
        const ordenesCollection = collection(db, "ordenes");
        await addDoc(ordenesCollection, nuevaOrden);
        setLoading(false);
        // Pasamos el carrito en el estado de la navegación a la página de detalle
        navigate(`/detalle-orden/${nombre}`, { state: { productos: carrito } });
      } catch (err) {
        console.error("Error al crear la orden:", err);
        alert("Hubo un error al procesar la compra.");
        setLoading(false);
      }
    };

    crearOrden();
  }, [carrito, mail, navigate, nombre, telefono]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Procesando tu orden...</p>
      </div>
    );
  }
  

  return null; // no es necesario renderizar nada más
}

export default FinalizarOrdenFin;
