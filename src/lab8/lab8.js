import React from 'react';
import { Link } from 'react-router-dom';
import './lab8.scss';
import Lab8F from '../images/lab8.png';

const Lab8 = () => {
    const handleProyectosClick = () => {
        // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
        console.log("Se hizo clic en el botón de regresar");
    };

    return (
        <div>
            <img src={Lab8F} alt="Lab 8" className="imagen" />
            <h1 className="titulo">Lab8</h1>
            <p className="parrafo">Este laboratorio se nos pidió hacer un juego de memoria usando React pero sin usar create-react-app pero debido a que ya sabíamos de webpack esto no fue un problema, el juego de memoria verificaba si la primera imagen que se daba la vuelta era la misma que la segunda imagen clickeada. En diseño no me quedo tan bien pero funcionaba.</p>
            <h3 className="titulo-tecnologias">Tecnologías aplicadas:</h3>
            <div className="etiquetas5">
                <span className="etiqueta etiqueta-firebase">Firebase</span>
                <span className="etiqueta etiqueta-js">JavaScript</span>
                <span className="etiqueta etiqueta-react">React</span>
                <span className="etiqueta etiqueta-css">CSS</span>
            </div>
            <div>
                <Link to="/" onClick={handleProyectosClick}>
                    <button className="boton-regresar4">Regresar</button>
                </Link>
            </div>
        </div>
    );
}

export default Lab8;
