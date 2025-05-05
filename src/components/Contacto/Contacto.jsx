import React, { useState } from 'react';
import './Contacto.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaRegCommentDots, FaPhoneAlt } from 'react-icons/fa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [mostrarMensaje, setMostrarMensaje] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setMostrarMensaje(true); // Mostrar el mensaje de éxito
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' }); // Reinicia formulario

    setTimeout(() => {
      setMostrarMensaje(false); // Oculto el mensaje después de 5 segundos
    }, 5000);
  };

  return (
    <div className="contacto-container">
      <h2>Contactanos</h2>
      <form onSubmit={handleSubmit} className="formulario-contacto">
        
        <div className="form-group">
          <label><FaUser className="icono-input" /> Nombre:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaEnvelope className="icono-input" /> Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaPhoneAlt className="icono-input" /> Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            placeholder="Tu número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><FaRegCommentDots className="icono-input" /> Mensaje:</label>
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-enviar">Enviar</button>
          <button type="button" className="btn-volver" onClick={() => navigate(-1)}>Volver</button>
        </div>
      </form>

      {/* Mensaje de éxito al enviar el formulario */}
      {mostrarMensaje && (
        <div className="mensaje-exito">
          <h3>Gracias por contactarnos</h3>
        </div>
      )}
    </div>
  );
}

export default Contacto;
