import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Slices/userSlice";
import { bringAppointments } from "../../services/apiCalls";
// import { addChoosen } from "../detailSlice";



export const AdminAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  console.log(appointments, "eoeoeoeoe");

  const reduxCredentials = useSelector(userData);

  useEffect(() => {
    if (appointments.length === 0) {
      bringAppointments(reduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setAppointments(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [appointments]);


  return (
    <Container fluid>
    <Row className='design'>
        <Col className='d-flex flex-column align-items-center justify-content-center'>
            {/* {user.map((citas) => {
                return (
            <Card style={{ width: '30rem'}}>
                <Card.Body>
                <Card.Title>{citas.Doctor.medical_speciality}</Card.Title>
                <Card.Text>{citas.Doctor.User.name} {citas.Doctor.User.surname}</Card.Text>
                <Card.Text>{citas.date}</Card.Text>
                </Card.Body>
            </Card>
            )
        })} */}
        </Col>
    </Row>
</Container>
  );
};