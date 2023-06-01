import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './header/header';
import Hola from './Hola/Hola';
import Proyectos from './Proyectos/Proyectos';
import SobreMi from './SobreMi/SobreMi';
import Contacto from './contacto/contacto';
import Lab2 from '../src/lab2/lab2';
import Lab5 from '../src/lab5/lab5';
import Lab8 from '../src/lab8/lab8';
import Proyecto1 from '../src/proyecto1/proyecto1';
import Proyecto2 from '../src/proyecto2/proyecto2';
const App = () => {
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
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hola" element={<Hola />} />
        <Route path="/lab2" element={<Lab2 />} />
        <Route path="/lab8" element={<Lab8 />} />
        <Route path="/lab5" element={<Lab5 />} />
        <Route path="/proyecto1" element={<Proyecto1 />} />
        <Route path="/proyecto2" element={<Proyecto2 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

