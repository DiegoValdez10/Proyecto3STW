import React from 'react';
import './header.scss';
import fotoYo from '../images/fotoyo.jpg';

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="rectangle">
      <div className="menu">
        <div className="fyp">
          <img src={fotoYo} alt="Foto de Diego Valdez" className="foto" />
          <span className="nombre">Diego Valdez</span>
        </div>
        <span onClick={() => handleScrollToSection('home')}>Home</span>
        <span onClick={() => handleScrollToSection('about')}>Acerca de mi</span>
        <span onClick={() => handleScrollToSection('projects')}>Proyectos</span>
        <span onClick={() => handleScrollToSection('contacts')}>Contacto</span>
      </div>
    </div>
  );
};

export default Header;
