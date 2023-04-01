import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./Profile.css";

import { useNavigate } from "react-router-dom";
import { myProfile } from "../../services/apiCalls";
import { userData } from "../Slices/userSlice";

import usericon from "../../img/login.png"

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
    navigate("/");
    }
}, []);

return (
    <Container fluid className="perfil-D">
        <Row className='design'>
            <Col lg={10} className='d-flex flex-column align-items-center justify-content-center'>
                <Card className="card-D">
                    <Card.Body>
                    <Card.Img  className="cardimg-D" variant="top" src={usericon}/>
                    <Card.Title>{user.name} {user.surname}</Card.Title>
                    <Card.Text>{user.phone}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};