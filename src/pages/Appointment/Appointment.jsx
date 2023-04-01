import React, { useEffect, useState } from "react";
import "./Appointment.css";
import { Col, Container, Row } from 'react-bootstrap';
// import dayjs from "dayjs";
// import Calendar from "react-calendar";
import { InputText } from "../../common/InputText/InputText";
import { useNavigate } from "react-router-dom";
import { myAppointment } from "../../services/apiCalls";
// import { checkInputs } from "../../helpers/useful";
import { useSelector } from "react-redux";
import { userData } from "../Slices/userSlice";

import edit from '../../img/edit.png'

export const Appointment = () => {

  const navigate = useNavigate();
  const [newDate, setnewDate] = useState(new Date());
  const ReduxCredentials = useSelector(userData);
  const { token } = ReduxCredentials.credentials;
  // const dateCalendar = dayjs(newDate).format("YYYY-MM-DD hh:mm:ss");

  const [welcome, setWelcome] = useState("");

    const [credenciales, setCredenciales] = useState({
      doctor_id: "",
      date: "",  
    });
    const [credencialesError, setCredencialesError] = useState({
      doctor_idError: "",
      dateError: "",
    })

    const inputHandler = (e) => {
      setCredenciales((preveState => ({...preveState, [e.target.name]: e.target.value,})));
    };

    useEffect(() =>{
      console.log(credenciales);
    })
  
  const newAppointment = () => {
    myAppointment(credenciales, token)
    .then(respuesta => {
      let nameUser = ReduxCredentials.credentials.user.email;
      if(nameUser){
        setWelcome(`Gracias ${nameUser} por confiar en nosotros`);
        setTimeout(() => {
          navigate('/appointment-user')
        }, 2000);
      }
      else{
        setWelcome(`Error: ${respuesta.data}`)
      }
    })
  
    .catch((error) => console.log(error));
  };

  const checkError =(e) =>{}

  return (
    <Container fluid className='container-D'>
      <Row className="design">
        <Col>
          <div className="design">
          <div className="titleDesign">
            <h2>Pide tu cita con nosotros</h2>
            <img className="d-block" src={ edit } alt="user"/>
          </div>
          <InputText
              className={"input-D"}
              type={"datetime-local"}
              name={"date"}
              placeholder={""}
              required={true}
              changeFunction={(e)=>inputHandler(e)}
              blurFunction={(e)=> checkError(e)}
              />
          <div>
            <select className="input-D" name="doctor_id" onChange={(e) => inputHandler(e) }>
              <option value="">Selecciona tu dentista</option>
                <option value="1">Dentista general</option>
                <option value="2">Dentista pediátrico</option>
            </select>
          </div>
          <div>{credencialesError.passwordError}</div>
            <div className='buttonAct' onClick={() => newAppointment()}>Pedir cita</div>
            <div>{welcome}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
