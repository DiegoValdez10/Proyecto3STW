import React from 'react';
import './SobreMi.scss';

const SobreMi = () =>  {
    return(
        <div className='ContairnerS'>
            <h2 className='TituloSO'>Sobre Mi</h2>
            <div className='rectangulo'></div>
            <h3 className='STituloSO'>Aqui vas a encontrar información personal mía y acerca de las tecnologías que vimos durante el semestre</h3>
            <h3 className='tituloP'>Un poco sobre mi</h3>
            <p className='Parrafo'>
                Soy Diego Valdez, un estudiante de Ingeniería en ciencias de la computación en la Universidad del Valle.
                Soy una persona interesada por aprender de temas nuevos y retarme a mi mismo para superar.
                Algunos de mis hobbies son salir con mis amigos, la música, los videojuegos, el basketball y el fútbol son cosas que me apasionan mucho.
                Mi experiencia en la clase de Sistemas y Tecnologías Web fue muy buena, ya que aprendí de temas nuevos e interesantes.
            </p>
            <h3 className='tituloE'>Temas vistos en el semestre:</h3>
            <div className="etiquetas">
                <div className="columna">
                    <span className="etiqueta etiqueta-html">HTML</span>
                    <span className="etiqueta etiqueta-css">CSS</span>
                    <span className="etiqueta etiqueta-javascript">JavaScript</span>
                    <span className="etiqueta etiqueta-react">React</span>
                </div>
                <div className="columna">
                    <span className="etiqueta etiqueta-sass">Sass</span>
                    <span className="etiqueta etiqueta-responsive">Diseño Responsive</span>
                    <span className="etiqueta etiqueta-angular">Angular</span>
                    <span className="etiqueta etiqueta-aws">AWS</span>
                </div>
                <div className="columna">
                    <span className="etiqueta etiqueta-firebase">Firebase</span>
                    <span className="etiqueta etiqueta-nodejs">Node.js</span>
                    <span className="etiqueta etiqueta-webpack">Webpack</span>
                    <span className="etiqueta etiqueta-babel">Babel</span>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;
