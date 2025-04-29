import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Carousel>
        <Carousel.Item>
          <Link to="/categoria/Fragancias">
            <img src="/imagenes/fragancias/4.jpg" className="d-block" alt="Banner 1" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/categoria/Fragancias">
            <img src="/imagenes/fragancias/5.jpg" className="d-block" alt="Banner 1" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/categoria/Cremas">
            <img src="/imagenes/fragancias/3.jpg" className="d-block" alt="Banner 1" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/imagenes/fragancias/6.jpg" className="d-block" alt="Banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/imagenes/fragancias/8.jpg" className="d-block" alt="Banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/imagenes/fragancias/7.jpg" className="d-block" alt="Banner 2" />
        </Carousel.Item>
      </Carousel>
 

      <div className="imagen-texto-container">
        <div className="imagen-texto-item">
          <img src="/imagenes/fragancias/1.jpg" alt="Imagen ejemplo" className="imagen-item" />
          <img src="/imagenes/fragancias/2.jpg" alt="Imagen ejemplo" className="imagen-item" />
          <div className="texto-contenido">
            <p>Un concepto dual de masculinidad, fuerte y sensible, poderoso y empático, heroico y vulnerable, que no se puede encasillar con facilidad. Rompe las normas y crea las suyas, alza la voz para defender ideas justas: es un rebelde y también un seductor. El frasco representa a la marca con la B como insignia del estilo Bensimon. El perfume masculino Blue Night es una composición olfativa de alto voltaje. Auténtica y misteriosa, esta fragancia es toda una experiencia olfativa. Rompe las reglas de las fórmulas tradicionales, es un halo aromático amaderado. Cannabis, pimienta negra y cuero, tres notas sorprendentes y opuestas que le confieren un carácter diferente.</p>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Home;
