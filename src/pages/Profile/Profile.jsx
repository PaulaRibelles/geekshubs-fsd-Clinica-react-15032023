import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { myProfile } from "../../services/apiCalls";
import { userData } from "../Slices/userSlice";

export const Profile = () => {
    const [user, setUsers] = useState({})

    const credentialsRdx = useSelector(userData);
    let navigate = useNavigate();


useEffect(() => {
    if(!user?.name){
        myProfile(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            console.log(respuesta);
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
                <div className='profileDivs'>Nombre</div>
                <div>{userProfile.name}</div>
                <div className='profileDivs'>Apellido</div>
                <div>{userProfile.surname}</div>
                <div className='profileDivs'>Telefono</div>
                <div>{userProfile.phone}</div>
                <div className='profileDivs'>Email</div>
                <div>{userProfile.email}</div>
            </Col>
        </Row>
    </Container>
    )
};