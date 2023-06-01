import React from 'react';
import './Hola.scss';

const Hola = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="background"></div>
      <h1 className='hola'>Hola, soy Diego Valdez</h1>
      <h3 className='Estudiante'>Este es mi portafolio de la clase de Sistemas Web donde se encuentran algunos de mis trabajos favoritos a lo largo del semestre de esta clase.</h3>
      <button className='proyectos' onClick={handleScrollToProjects}>Proyectos</button>
    </div>
  );
};

export default Hola;
