import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BarraFoot.css';

import instagram from '../../img/instagram.png';
import facebook from '../../img/facebook.png';
import whatsapp  from '../../img/whatsapp.png';


export const BarraFoot = () => {
  return (
    <div className='FootDesign'>
      <Container fluid>
        <Row>
          <Col md={5} className='footer-D d-flex flex-column justify-content-space-around'>
            <h5>Contacto</h5>
            <p>C/Dela piruleta, Gominola 12345.</p>
            <p>true@smile.com</p>
            <p>+34 000 000 00</p>
          </Col>
          <Col md={5} className='footer-D d-flex flex-column justify-content-space-around'>
            <h5>Terminos legales</h5>
            <p>Aviso legal</p>
            <p>Política de privacidad</p>
            <p>Política de cookies</p>
          </Col>
          <Col md={2} className='footer-D redes d-flex flex-column justify-content-space-around'>
        <img className="d-block" src={ instagram } alt="instagram"/>
        <img className="d-block" src={ facebook } alt="facebook"/>
        <img className="d-block" src={ whatsapp } alt="whatsapp "/>
        </Col>
        </Row>
      </Container>
    </div>
  )
}
