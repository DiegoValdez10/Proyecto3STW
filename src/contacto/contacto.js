import React from 'react';
import emailjs from 'emailjs-com';
import './contacto.scss';

const Contacto = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const { nombre, correo, mensaje } = event.target.elements;

        const templateParams = {
            from_name: nombre.value,
            to_name: "Destinatario",
            message: mensaje.value,
        };

        emailjs.send('service_odn8pdm', 'template_s5minrn', templateParams, 'qTYU9G7pFmNcgJj6z')
            .then((response) => {
                console.log('Correo enviado correctamente', response);
            })
            .catch((error) => {
                console.error('Error al enviar el correo', error);
            });
    };


    return (
        <div>
            <div className="formulario-container">
                <h1 className='tituloC'>Contactame</h1>
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                        <h3>Nombre:</h3>
                        <input type="text" placeholder="Ingrese su nombre" name="nombre" />
                        <h3>Correo:</h3>
                        <input type="email" placeholder="Ingrese su correo electrónico" name="correo" />
                        <h3>Mensaje:</h3>
                        <textarea placeholder="Ingrese su mensaje" name="mensaje"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
