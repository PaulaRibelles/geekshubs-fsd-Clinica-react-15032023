import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import "./Home.css"

import personalizado from "../../img/personalizado.jpg"
import pediatria from "../../img/pediatria.jpg"
import tecnologia from "../../img/tecnologia.jpg"

import logoSmile from "../../img/TrueSmile2.png"

// import ortodoncia from '../../img/ortodoncia.png'
// import implantologia from '../../img/plantologia.png'
// import estetica from '../../img/estetica.png'

export const Home = () => {
  return (
    <Carousel className='carousel-D'>
      <Carousel.Item>
        <img className="d-block w-100" src={ personalizado } alt="Servicio-personalizado"/>
        <Carousel.Caption>
          <h3>Servicio personalizado</h3>
          <p>Nuestros doctores hacen un seguimiento cercano de cada paciente.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={ pediatria } alt="Pediatria"/>
        <Carousel.Caption>
          <h3>Servicio de pediatría</h3>
          <p>Nuestra clínica cuenta con servicio de pediatría dental.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src= { tecnologia } alt="Nueva-tecnología"/>
        <Carousel.Caption>
          <h3>Ultima tecnología</h3>
          <p>TrueSmile está a la última moda en tecnología dental.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

);
}
