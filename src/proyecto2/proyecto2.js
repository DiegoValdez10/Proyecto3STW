import React from 'react';
import { Link } from 'react-router-dom';
import './proyecto2.scss';
import Proyecto2F from '../images/proyecto2.png';

const Proyecto2 = () => {
    const handleRegresarClick = () => {
        // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
        console.log("Se hizo clic en el botón de regresar");
    };

    return (
        <div>
            <img src={Proyecto2F} alt="Proyecto 2" className="imagen" />
            <h1 className="titulo">Proyecto 2</h1>
            <p className="parrafo">En este proyecto se nos dió libertad creativa para realizar cualquier cosa. Con mi compañero Manuel Rodas decidimos hacer un pequeño arcade desde Angular con dos juegos y un diseño bastante bonito. Los dos juegos eran Snake y Tetris.</p>
            <h3 className="titulo-tecnologias">Tecnologías aplicadas:</h3>
            <div className="etiquetas8">
                <span className="etiqueta etiqueta-firebase">Firebase</span>
                <span className="etiqueta etiqueta-angular">Angular</span>
                <span className="etiqueta etiqueta-css">CSS</span>
                <span className="etiqueta etiqueta-nodejs">Node.js</span>
            </div>
            <div className='botones'>
                <Link to="/" onClick={handleRegresarClick}>
                    <button className="boton-regresar">Regresar</button>
                </Link>
                <a href="https://proyecto-2-stw.web.app/app" target="_blank" rel="noopener noreferrer">
                    <button className="boton-ver-proyecto">Ver Proyecto</button>
                </a>
            </div>
        </div>
    );
}

export default Proyecto2;
