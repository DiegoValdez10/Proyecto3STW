import React from 'react';
import { Link } from 'react-router-dom';
import './lab5.scss';
import Lab5F from '../images/lab5.png';

const Lab5 = () => {
    const handleProyectosClick = () => {
        // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
        console.log("Se hizo clic en el botón de regresar");
    };

    return (
        <div>
            <img src={Lab5F} alt="Lab 5" className="imagen" />
            <h1 className="titulo">Lab5</h1>
            <p className="parrafo">Este laboratorio se nos pedía hacer un chat en vivo similar a whatsapp que cuando se manda un mensaje de alguien este aparece. Este laboratorio fue el mas tedioso de todo debido a que fue un poco complejo en su momento </p>
            <h3 className="titulo-tecnologias">Tecnologías aplicadas:</h3>
            <div className="etiquetas4">
                <span className="etiqueta etiqueta-html">HTML</span>
                <span className="etiqueta etiqueta-css">CSS</span>
                <span className="etiqueta etiqueta-js">JavaScript</span>
                <span className="etiqueta etiqueta-aws">AWS</span>
            </div>
            <div>
                <Link to="/" onClick={handleProyectosClick}>
                    <button className="boton-regresar3">Regresar</button>
                </Link>
            </div>
        </div>
    );
}

export default Lab5;
