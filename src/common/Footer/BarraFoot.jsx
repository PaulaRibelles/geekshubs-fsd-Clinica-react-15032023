import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './BarraFoot.css'

export const BarraFoot = () => {
  return (
    <div className='FootDesign'>
      <Container fluid>
        <Row>
          <Col className='d-flex flex-column justify-content-space-around'> 
            <p>C/Dela piruleta, Gominola 12345.</p>
          </Col>
          <Col>
          <p>true@smile.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
