import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { userData } from "../Slices/userSlice";
import { allAppointments } from "../../services/apiCalls";
// import { addChoosen } from "../detailSlice";

export const AdminAppointments = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

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
        <Col className='d-flex flex-column align-items-center justify-content-center'>
            {appointments.map((citas) => {
                return (
              <Card key={citas.id} style={{ width: '30rem'}}>
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
        <div> Están llegando </div>
      )}
    </Row>
</Container>
  );
};