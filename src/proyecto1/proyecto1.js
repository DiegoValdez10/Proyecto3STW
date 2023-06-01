import React from 'react';
import { Link } from 'react-router-dom';
import './proyecto1.scss';
import Proyecto1F from '../images/proyecto1.1.png';

const Proyecto1 = () => {
    const handleRegresarClick = () => {
        // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
        console.log("Se hizo clic en el botón de regresar");
    };

    return (
        <div>
            <img src={Proyecto1F} alt="Proyecto 1" className="imagen" />
            <h1 className="titulo">Proyecto 1</h1>
            <p className="parrafo">Este fue el primer proyecto, en este se nos pidió tener que replicar una página web que quisieramos, yo escogí la página de Cristiano Ronaldo. En este proyecto si se podía usar create-react-app. Este proyecto fue muy bueno porque pude tener un contacto con páginas funcionales y la forma en la cúal son creadas aparte que el proceso de creación aprendí mucho acerca de React sus librerías y el funcionamiento de componentes aparte de la navegación entre ellos.</p>
            <h3 className="titulo-tecnologias">Tecnologías aplicadas:</h3>
            <div className="etiquetas7">
                <span className="etiqueta etiqueta-webpack">Webpack</span>
                <span className="etiqueta etiqueta-babel">Babel</span>
                <span className="etiqueta etiqueta-firebase">Firebase</span>
                <span className="etiqueta etiqueta-react">React</span>
                <span className="etiqueta etiqueta-scss">SCSS</span>
                <span className="etiqueta etiqueta-sass">Sass</span>
                <span className="etiqueta etiqueta-nodejs">Node.js</span>
            </div>
            <div className='botones'>
                <Link to="/" onClick={handleRegresarClick}>
                    <button className="boton-regresar">Regresar</button>
                </Link>
                <a href="https://proyecto-1-diego-valdez.web.app" target="_blank" rel="noopener noreferrer">
                    <button className="boton-ver-proyecto">Ver Proyecto</button>
                </a>
            </div>
        </div>
    );
}

export default Proyecto1;
