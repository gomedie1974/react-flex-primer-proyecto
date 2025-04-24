import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

function FinalizarOrden() {
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
        const docRef = await addDoc(ordenesCollection, nuevaOrden);
        console.log("Orden creada con ID:", docRef.id);
        navigate("/orden-completada");  
      } catch (err) {
        console.error("Error al crear la orden:", err);
        alert("Hubo un error al procesar la compra.");
      } finally {
        setLoading(false);  
      }
    };

    crearOrden();
  }, [carrito, mail, navigate, nombre, telefono]);

  if (loading) {
    return <p>Procesando tu orden...</p>;
  }

  return null;
}

export default FinalizarOrden;
