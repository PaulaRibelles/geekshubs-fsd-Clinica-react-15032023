import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { addChoosen } from "../detailSlice";
import { userData } from "../userSlice";


export const Adminappointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  const reduxCredentials = useSelector(userData);

  useEffect(() => {
    if (appointments.length === 0) {
      bringappointments(reduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setAppointments(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [appointments]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));
    setTimeout(() => {
      navigate("/detail");
    }, 500);
  };

  return (
    <Container fluid>
      <Row className="admin-D align-items-center d-flex justify-content-center text-center">
        {appointments.length > 0 ? (
          <Col sm={4} lg={2}>
            {appointments.map((persona) => {
              return (
                <ListGroup>
                <ListGroup.Item as="li" onClick={() => selected(persona)} key={persona.id} action>
                  {persona.name}
                </ListGroup.Item>
                </ListGroup>
              );
            })}
          </Col>
        ) : (
          <div>Estan Viniendo</div>
        )}
      </Row>
    </Container>
  );
};