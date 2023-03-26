import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../common/InputText/InputText';
import { checkInputs } from '../../Helpers/useful';
import { registerMe } from '../../services/apiCalls';
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();

  // Hooks para validación de errores

  const [credenciales, setCredenciales] = useState({
    dni: "",
    name: "",
    surname: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });
  const [credencialesError, setCredencialesError] = useState({
    dniError: "",
    nameError: "",
    surnameError: "",
    cityError: "",
    phoneError: "",
    emailError: "",
    passwordError: "",
  })
  const [credencialesValid, setCredencialesValid] = useState({
    dniValid: false,
    nameValid: false,
    surnameValid: false,
    cityValid: false,
    phoneValid: false,
    emailValid: false,
    passwordValid: false
  })
    // Hook validación 
  const [registerAct, setRegisterAct] = useState(false);

  // Manejador de errores. (Actualiza el estado del componente)

  const inputHandler = (e) => {
    setCredenciales((preveState => ({...preveState, [e.target.name]: e.target.value,})));
  };

  // Función del ciclo de vida del componente

  useEffect(()=>{
    for(let error in credencialesError){
      if(credencialesError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let validated in credencialesValid){
      if(credencialesValid[validated] === false){
        setRegisterAct(false);
        return;
      }
    }
    setRegisterAct(true);
  });

  // Llamada a la función control de errores de los inputs

const inputValidate = (e) => {
  let error = "";
  let checked = checkInputs(
    e.target.name,
    e.target.value,
    e.target.required
  );
  error = checked.message; 
  // Set del hook de las validaciones. Actualiza su estado anterior
  setCredencialesValid((prevState) => ({
    ...prevState,
    [e.target.name + "Valid"]: checked.validated,
  }));
  // Set del hook de los errores. Actualiza su estado anterior
  setCredencialesError((prevState) => ({
    ...prevState,
    [e.target.name + "Error"]: error,
  }));
};

const [welcome, setWelcome] = useState("");

const Registro = () => {
  registerMe(credenciales)
  .then(respuesta => {
    let nameUser = respuesta.data.name
    if(nameUser){
      setWelcome(`Enhorabuena ${nameUser}, te has registrado correctamente`);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    else{
      setWelcome(`Error: ${respuesta.data}`)
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  })

  .catch((error) => console.log(error));
};

  return (
    <Container fluid>
      <Row className="design register-D">
        <Col lg={6}>
          <div className="titleDesign">
            <h2>Registro Usuario</h2>
          </div>
          {welcome !== "" ? (
                <div>{welcome}</div>
              ) : (
                <div>
          
            {/* INPUT NOMBRE */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
              }
              type="text"
              maxLength={25}
              name="name"
              placeholder="Escribe tu nombre"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.nameError}</div>

            {/* INPUT APELLIDOS */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
            }
            type="text"
            maxLength={50}
            name="surname"
            placeholder="Escribe tus apellidos"
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.surnameError}</div>

            {/* INPUT DNI  */}

          <InputText
            className={
              credencialesError.dniError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
              }
              type="text"
              maxLength={9}
              name="dni"
              placeholder="Escribe tu DNI"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.dniError}</div>

            {/* INPUT CIUDAD  */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
              }
              type="text"
              maxLength={50}
              name="city"
              placeholder="Escribe tu ciudad"
              required={false}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.cityError}</div>

            {/* INPUT TELÉFONO */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
              }
              type="text"
              maxLength={12}
              name="phone"
              placeholder="+34 Tu número de teléfono"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.phoneError}</div>

            {/* INPUT EMAIL  */}

          <InputText
            className={
              credencialesError.emailError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
            }
            type="email"
            maxLength={30}
            name="email"
            placeholder="Escribe un email válido"
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.emailError}</div>

            {/* INPUT PASSWORD */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
            }
              type="password"
              maxLength={15}
              name="password"
              placeholder="Escribe la contraseña"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.passwordError}</div>
          <div className={registerAct ? "buttonDes buttonAct" : "buttonDes" }
          onClick={Registro}>Registrarse 
          </div>
        </div>
          )
          }       
          </Col> 
        </Row>
      </Container>
    );
  };