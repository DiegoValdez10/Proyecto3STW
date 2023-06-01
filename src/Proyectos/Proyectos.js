import React from 'react';
import './Proyectos.scss';
import { Link } from 'react-router-dom';
import Lab5F from '../images/lab5.png';
import Lab8F from '../images/lab8.png';
import Proyecto1F from '../images/proyecto1.png';
import Proyecto2F from '../images/proyecto2.png';
import Lab2F from '../images/Mapache.png';
const Proyectos = () => {
  const handleLab2Click = () => {
    // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
    console.log("Se hizo clic en el botón Lab 2");
  };
  const handleLab8Click = () => {
    // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
    console.log("Se hizo clic en el botón Lab 8");
  };
  const handleLab5Click = () => {
    // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
    console.log("Se hizo clic en el botón Lab 5");
  };
  const handleproyecto1Click = () => {
    // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
    console.log("Se hizo clic en el botón Lab 5");
  };
  const handleproyecto2Click = () => {
    // Aquí puedes agregar lógica adicional antes de la redirección, si es necesario
    console.log("Se hizo clic en el botón Lab 5");
  };
  return (
    <div>
      <h1 className="center">Proyectos</h1>
      <h3 className="center2">Estos son algunos de mis proyectos favoritos</h3>
      <div className="project-container">
        <div className="project">
          <div className="project-image">
            <img src={Lab2F} alt="Mapache" />
          </div>
          <div className="project-info">
            <h2>Laboratorio 2: CSS Only</h2>
            <p>Este es el laboratorio número 2, en este se nos pedía replicar cualquier imagen mediante CSS.</p>
            <Link to="/lab2" onClick={handleLab2Click}> 
              <button>Lab 2</button> {/* Botón adicional */}
            </Link>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={Lab5F} alt="Lab 5" />
          </div>
          <div className="project-info">
            <h2>Lab 5: JS Only Parte 1</h2>
            <p>Este es el laboratorio número 5, este fue el primer laboratorio donde se trato con javascript tanto su lógica como la creación de elementos visuales</p>
            <Link to="/lab5" onClick={handleLab5Click}> 
            <button>Lab 5</button>
            </Link>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={Lab8F} alt="Lab 8" />
          </div>
          <div className="project-info">
            <h2>Lab 8: React</h2>
            <p>Este es el laboratorio número 8, en este laboratorio fue el primer laboratorio donde se trabajo con react junto a webpack y babel. El laboratorio en si trató de realizar un juego de memoria en React</p>
            <Link to="/lab8" onClick={handleLab8Click}> 
            <button>Lab 8</button>
            </Link>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={Proyecto1F} alt="Proyecto 1" />
          </div>
          <div className="project-info">
            <h2>Proyecto 1</h2>
            <p>Este es el primer proyecto realizado, en este se nos pidió realizar la copia de una página web a nuestra elección.</p>
            <Link to="/proyecto1" onClick={handleproyecto1Click}> 
            <button>Proyecto 1</button>
            </Link>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={Proyecto2F} alt="Proyecto 2" />
          </div>
          <div className="project-info">
            <h2>Proyecto 2</h2>
            <p>Este es el segundo proyecto realizado, en este se nos dió la libertad creativa de realizar cualquier cosa interesante para este proyecto.</p>
            <Link to="/proyecto2" onClick={handleproyecto2Click}> 
            <button>Proyecto 2</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
