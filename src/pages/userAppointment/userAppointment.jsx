import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { bringAppointments } from "../../services/apiCalls";

import { useNavigate } from "react-router-dom";
import { userData } from "../Slices/userSlice";

import "./userAppointment.css";


export const AppointmentsUser = () => {
    const [user, setUser] = useState([])

    const credentialsRdx = useSelector(userData);
    let navigate = useNavigate();

useEffect(() => {
    if(!user?.name){
        bringAppointments(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            setUser(respuesta.data)
        })
    }

    if (!credentialsRdx.credentials.token) {
    navigate("/");
    }
}, [user.name]);


return (
    <Container fluid className="app-D">
        <Row className='design'>
            <Col lg={10} className='d-flex flex-column align-items-center justify-content-center'>
                {user.map((citas) => {
                    return (
                <Card className="card2-D">
                    <Card.Body>
                    <Card.Title>{citas.Doctor.medical_speciality}</Card.Title>
                    <Card.Text>{citas.Doctor.User.name} {citas.Doctor.User.surname}</Card.Text>
                    <Card.Text>{citas.date}</Card.Text>
                    </Card.Body>
                </Card>
                )
            })}
            </Col>
        </Row>
    </Container>
    )
};