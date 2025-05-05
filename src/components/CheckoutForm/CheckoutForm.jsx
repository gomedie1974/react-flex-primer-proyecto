import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./CheckoutForm.css"; 
import { useAppContext } from "../../context/context";



function CheckoutForm() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const { carrito, vaciarCarrito } = useAppContext();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Evito enviar la orden si no hay datos completos
    if (!nombre || !domicilio || !localidad || !telefono || !mail) {
      alert("Por favor, completa todos los campos.");
      return;
    }
      navigate(`/finalizar-orden/${nombre}/${telefono}/${mail}`);

    setLoading(true);

    // Crear nueva orden
    const nuevaOrden = {
      nombre,
      telefono,
      mail,
      domicilio,
      localidad,
      productos: carrito.map(({ id, categoria, nombre, precio, cantidad }) => ({
        id,
        categoria,
        nombre,
        precio,
        cantidad
      })),
        
    };

    try {
      const ordenesCollection = collection(db, "ordenes");
      const docRef = await addDoc(ordenesCollection, nuevaOrden);
      console.log("Orden creada con éxito: ", docRef.id);
      vaciarCarrito();
      navigate("/orden-completada");
    } catch (err) {
      console.error("Error al crear la orden: ", err);
      alert("Hubo un error al realizar la compra. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Formulario de Compra 🛍</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={nombre}  
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Domicilio"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Localidad"
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <div className="checkout-buttons">
            <button type="submit" className="btn btn-primary">
                {loading ? "Procesando..." : "Confirmar Compra"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                Volver
            </button>
        </div>

      </form>
    </div>
  );
}

export default CheckoutForm;
