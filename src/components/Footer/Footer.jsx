import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  const [mensajeExito, setMensajeExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/ajax/gomedie1974@hotmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (res.ok) {
        setMensajeExito(true);
        e.target.reset();

        setTimeout(() => setMensajeExito(false), 4000); // Oculta el mensaje después de 4 segundos
      } else {
        alert("Ocurrió un error al suscribirte.");
      }
    } catch (error) {
      console.error("Error al enviar la suscripción:", error);
      alert("Error al enviar el formulario.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Mapa */}
        <div className="footer-map">
        <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789!2d-58.4783085!3d-34.5300298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb030f3b4962d%3A0xa529b8dfacb2d06b!2sAv.%20del%20Libertador%20101%2C%20B1638%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713901852471!5m2!1ses-419!2sar"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </div>

        {/* Formulario Newsletter */}
        <div className="footer-newsletter">
          <h4>Suscribite</h4>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
            <button type="submit" className="btn btn-primary">Suscribirme</button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
          {mensajeExito && (
                <div className="toast-success">
                    <span className="icon">✅</span>
                    ¡Suscripción realizada con éxito!
                </div>
            )}
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-credit">
        <p>
          Design by <a href="https://gomezdiego.com.ar" target="_blank" rel="noopener noreferrer">DG</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
