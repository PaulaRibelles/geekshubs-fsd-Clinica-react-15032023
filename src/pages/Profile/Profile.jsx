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

return (
    <Container fluid>
        <Row className='profileDesign'>
            <Col className='d-flex flex-column align-items-center justify-content-center'>
                <Card style={{ width: '10rem'}}>
                    <Card.Body>
                    <Card.Title>{Profile.name}</Card.Title>
                    <Card.Text>{Profile.surname}</Card.Text>
                    <Card.Text>{Profile.phone}</Card.Text>
                    <Card.Text>{Profile.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};