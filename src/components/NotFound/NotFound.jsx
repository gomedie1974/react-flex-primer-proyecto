import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    console.log("Se está renderizando el componente NotFound");

    return (
        <div className="not-found">
            <h2>404 - Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;
