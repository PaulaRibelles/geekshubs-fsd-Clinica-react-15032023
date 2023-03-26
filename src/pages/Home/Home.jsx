import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Home.css"


export const Home = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../img/personalizado.jpg"
        alt="Servicio-personalizado"
      />
      <Carousel.Caption>
        <h3>Servicio personalizado</h3>
        <p>Nuestros doctores hacen un seguimiento cercano de cada paciente.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../img/pediatria.jpg"
        alt="Pediatria"
      />

      <Carousel.Caption>
        <h3>Servicio de pediatría</h3>
        <p>Nuestra clínica cuenta con servicio de pediatría dental.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../img/tecnologia.jpg"
        alt="Nueva-tecnología"
      />

      <Carousel.Caption>
        <h3>Ultima tecnología</h3>
        <p>
          TrueSmile está a la última moda en tecnología dental.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}
