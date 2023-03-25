import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { myProfile } from "../../services/apiCalls";
import { userData } from "../Slices/userSlice";

export const Profile = () => {
    const [user, setUsers] = useState({
    })

    const credentialsRdx = useSelector(userData);
    let navigate = useNavigate();

        console.log(credentialsRdx, "Holiwiiiiii");

useEffect(() => {
    if(!user?.name){
        myProfile(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            console.log(respuesta, "Heip");
            setUsers(respuesta.data)
        })
    }

    if (!credentialsRdx.credentials.token) {
      //No token...home redirect
    navigate("/");
    }
}, []);
console.log(user)

return (
    <Container fluid>
        <Row className='profileDesign'>
            <Col className='d-flex flex-column align-items-center justify-content-center'>
                <Card style={{ width: '10rem'}}>
                    <Card.Body>
                    <Card.Title>{myProfile.name}</Card.Title>
                    <Card.Text>{myProfile.surname}</Card.Text>
                    <Card.Text>{myProfile.phone}</Card.Text>
                    <Card.Text>{myProfile.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};