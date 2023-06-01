import React from 'react';
import { Link } from 'react-router-dom';
import './lab2.scss';
import Lab2F from '../images/Mapache.png';

const Lab2 = () => {
    const handleproyectosClick = () => {
        // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
        console.log("Se hizo clic en el botón de regresar");
      };
    return (
        <div>
            <img src={Lab2F} alt="Mapache" className="imagen" />
            <h1 className="titulo">Lab2</h1>
            <p className="parrafo">Este laboratorio fue hecho solamente con CSS y nos dieron a elegir una imagen para replicarla usando solamente CSS yo elegí un mapache.</p>
            <h3 className="titulo-tecnologias">Tecnologías aplicadas:</h3>
            <div className="etiquetas2">
                <span className="etiqueta etiqueta-aws2">AWS</span>
                <span className="etiqueta etiqueta-css2">CSS</span>
                <span className="etiqueta etiqueta-html2">HTML</span>
            </div>
            <div>
            <Link to="/" onClick={handleproyectosClick}>
                <button className='boton-regresar2'>Regresar</button>
                </Link>
            </div>
        </div>
    );
}

export default Lab2;
