# Tecnologías Proyecto 3
Este es el proyecto 3 de la clase de Sistemas y Tecnologías Webe el cual es un portafolio personal de esta clase a lo largo del semestre
## Requesitos previos
1. Clonar repositorio `https://github.com/DiegoValdez10/Proyecto3STW`
2. Moverse al directorio: `cd proyecto3`.<br />
3. Correr `npm install` para instalar dependencias.<br />
4. Correr `npm start` para ver la página.
## Firebase
Link a firebase: https://proyecto3sistemasweb.web.app
## Commandos

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`
- `npm run webpack`

## Documentación
Link al documento de la documentación: https://docs.google.com/document/d/1hpcxBgp_6BNauYRQ_Fw3TNSEiWVrmdzZnxFeMgROh_o/edit?usp=sharing

## Estructura
- Dist
- Public
- src
  - Hola
    -Hola.js
    -Hola.scss
    
         container {
          position: relative;
          text-align: center;
         display: flex;
        flex-direction: column;
         align-items: center;
  - Proyectos
    -Proyectos.js
    
         <div className="project-info">
            <h2>Laboratorio 2: CSS Only</h2>
            <p>Este es el laboratorio número 2, en este se nos pedía replicar cualquier imagen mediante CSS.</p>
            <Link to="/lab2" onClick={handleLab2Click}> 
              <button>Lab 2</button>
              
              
    -Proyectos.scss
  - SobreMi
    -SobreMi.js
    
                    <div className="columna">
                    <span className="etiqueta etiqueta-firebase">Firebase</span>
                    <span className="etiqueta etiqueta-nodejs">Node.js</span>
                    <span className="etiqueta etiqueta-webpack">Webpack</span>
                    <span className="etiqueta etiqueta-babel">Babel</span>
    -SobreMi.scss
  - contacto
    -contacto.js


        emailjs.send('service_odn8pdm', 'template_s5minrn', templateParams, 'qTYU9G7pFmNcgJj6z')
            .then((response) => {
                console.log('Correo enviado correctamente', response);
            })
            .catch((error) => {
                console.error('Error al enviar el correo', error);
    -contacto.scss
  - header
    -header.js
    
          const Header = () => {
        const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
          }
        };
  
    -header.scss
  - lab2
    - lab2.js
    - lab2.scss
    
            
  - lab5
    - lab5.js
    
    - lab5.scss
  - lab8
    - lab8.js
    - lab8.scss
  - proyecto1
    - proyecto1.js
    - proyecto1.scss
  - proyecto2
    - proyecto2.js
    - proyecto2.scss
- index.js

      return (
      <div>
      <Header />
      <section id="home">
        <Hola />
      </section>
      <section id="about">
        <SobreMi />
      </section>
      <section id="projects">
        <Proyectos />
      </section>
      <section id="contacts">
        <Contacto />
      </section>
      </div>
- index.css
- App.js
- App.css

