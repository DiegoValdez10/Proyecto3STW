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
En este semestre de la clase de Sistemas y tecnologías web vimos desde lo básico a creación de páginas en su totalidad. Las tecnologías que vimos cronologicamente fueron las siguientes:
- AWS
- HTML
- CSS
- JavaScript
- WebComponents
- Webpack
- SASS 
- SCSS
- Babel
- React
- Firebase

En este proyecto se implementan todas las tecnologías que se han visto en todo el semestre para demostrar los conocimientos aprendidos. El proyecto fue creado usando create-react-app usando componentes para la creación del portafolio, se utilizó la webpack para la renderización y subida a firebase. El proyecto esta hecho en SCSS, se subió a Firebase donde los usuarios que desean verlo pueden visitar el link.

## Estructura
- Dist
- Public
- src
  - Hola
    -Hola.js
    -Hola.scss
    ```
    container {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  - Proyectos
    -Proyectos.js
    
        ``` <div className="project-info">
            <h2>Laboratorio 2: CSS Only</h2>
            <p>Este es el laboratorio número 2, en este se nos pedía replicar cualquier imagen mediante CSS.</p>
            <Link to="/lab2" onClick={handleLab2Click}> 
              <button>Lab 2</button>```
              
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
    -contacto.scss
  - header
    -header.js
    -header.scss
  - lab2
    -lab2.js
    -lab2.scss
  - lab5
    -lab5.js
    -lab5.scss
  - lab8
    -lab8.js
    -lab8.scss
  - proyecto1
    -proyecto1.js
    -proyecto1.scss
  - proyecto2
    -proyecto2.js
    -proyecto2.scss
- index.js
- index.css
- App.js
- App.css

