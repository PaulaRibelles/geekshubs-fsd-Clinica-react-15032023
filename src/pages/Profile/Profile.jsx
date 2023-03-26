import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./Profile.css"

import { useNavigate } from "react-router-dom";
import { myProfile } from "../../services/apiCalls";
import { userData } from "../Slices/userSlice";

export const Profile = () => {
    const [user, setUsers] = useState({
    })

    const credentialsRdx = useSelector(userData);
    let navigate = useNavigate();

useEffect(() => {
    if(!user?.name){
        myProfile(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            setUsers(respuesta.data)
        })
    }

    if (!credentialsRdx.credentials.token) {
      //No token...home redirect
    navigate("/");
    }
}, []);

return (
    <Container fluid>
        <Row className='design'>
            <Col className='d-flex flex-column align-items-center justify-content-center'>
                <Card style={{ width: '30rem'}}>
                    <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.surname}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};