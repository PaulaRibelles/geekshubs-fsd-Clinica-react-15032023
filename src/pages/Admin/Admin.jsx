import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import './Admin.css'

import { useSelector } from "react-redux";
import { userData } from "../Slices/userSlice";
import { allAppointments } from "../../services/apiCalls";


export const AdminAppointments = () => {


  const [appointments, setAppointments] = useState([]);

  const reduxCredentials = useSelector(userData);

  useEffect(() => {
    if (!appointments?.length) {
      allAppointments(reduxCredentials.credentials.token)
        .then((result) => {
          setAppointments(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [appointments]);

  return (
    <Container fluid>
    <Row className='design'>
      {appointments.length > 0 ? (
        <Col lg={10} className='d-flex flex-column align-items-center justify-content-center'>
            {appointments.map((citas) => {
                return (
              <Card className='Card-Admin' key={citas.id}>
                <Card.Body>
                <Card.Title>{citas.Doctor.medical_speciality}</Card.Title>
                <Card.Text>Doctor/a: {citas.Doctor.User.name} {citas.Doctor.User.surname}</Card.Text>
                <Card.Text>Fecha: {citas.date}</Card.Text>
                <Card.Text>Paciente: {citas.Patient.User.name} {citas.Patient.User.surname}</Card.Text>
                </Card.Body>
            </Card>
            )
        })}
        </Col>
      ) : (
        <div> No hay citas disponibles </div>
      )}
    </Row>
</Container>
  );
};