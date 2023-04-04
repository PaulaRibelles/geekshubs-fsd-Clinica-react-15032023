import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText';
import { checkInputs } from "../../Helpers/useful";
import "./Login.css";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { login, userData, userout } from "../Slices/userSlice"
import { useNavigate } from "react-router-dom";
import { logMe } from '../../services/apiCalls';
import { Col, Container, Row } from 'react-bootstrap';

import icon from '../../img/login-1.png'


export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentialRdx = useSelector(userData);

  const logmeOut = () => {
    dispatch (userout({credentials : {}, token : ""}))
    return navigate ("/")
  }

  //Hooks

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [credencialesValid, setCredencialesValid] = useState({
    emailValid: false,
    passwordValid: false,
  });


  // Hook que activa el botón de envío de datos
  const [loginAct, setLoginAct] = useState(false);
  const [welcome, setWelcome] = useState("");


  //Handler

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //useEffect (función ciclo de vida del componente)

  useEffect(() =>{
    for(let error in credencialesError){
      if(credencialesError[error] !==""){
        setLoginAct(false);
        return;
      }
    }
    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setLoginAct(false);
        return;
      }
    }
    for(let validated in credencialesValid){
      if(credencialesValid[validated] === false){
        setLoginAct(false);
        return;
      }
    }
    setLoginAct(true);
  });


  const checkError = (e) => {
    let error = "";
    let checked = checkInputs(e.target.name, e.target.value, e.target.required);
    error = checked.message;
    setCredencialesValid((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.checkInputs,
    }));
    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };
  

  const logmeIn = () => {
    logMe(credenciales)
      .then(respuesta =>{

      let decodificado = decodeToken(respuesta.data.token) 
      let datosBack = {
        token: respuesta.data,
        user: decodificado,
      };
      dispatch(login({ credentials: datosBack}));
      
        setWelcome(`Bienvenido/a ${decodificado.email} a la clínica TrueSmile`);
        setTimeout(() => {
          navigate("/");
        }, 3000);
    })
    .catch((error) => console.log(error));
  };

  return (
    <Container fluid className='containerlogin-D'>
        <Row className="design login-D">
            <Col lg={6}>
            <div className="titleDesign">
            <h2>Inicia sesión</h2>
            <img className="d-block" src={ icon } alt="login"/>
            </div>
              {welcome !== "" ? (
                <div>{welcome}</div>
              ) : (
                <div>
                  <InputText
                    className={"input-D"}
                    type={"email"}
                    name={"email"}
                    placeholder={"email@example.com"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                  <InputText
                    className={"input-D"}
                    type={"password"}
                    name={"password"}
                    placeholder={"password"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </div>
              )
            }
            <div className='buttonAct' onClick={() => logmeIn()}>Login</div>
        
            </Col>
        </Row>
    </Container>
  )
}
