import React, { useEffect } from 'react'
import { InputText } from '../../common/InputText/InputText';
import "./Login.css";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentialRdx = useSelector(userData);

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
  const [activeForm, setActiveForm] = useState(false);


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
        setActiveForm(false);
        return;
      }
    }
    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setActiveForm(false);
        return;
      }
    }
    setActiveForm(true);
  });

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    if (credentialRdx.credentials.token) {
      navigate("/"); //Si el token no existe, redirigimos a home page
    }
  }, []); //UseEffect siempre debe acabar con un array vacío 

  const inputValidate = (e) => {
    let error = "";
    let check = checkInputs(
      e.target.name,
      e.target.value,
      e.target.required
    );
      error = check.message;
      setCredencialesValid((prevState) => ({
        ...prevState,
        [e.target.name + "Valid"] : check.validated,
      }));
      setCredencialesError((prevState) => ({
        ...prevState,
        [e.target.name + "Error"] : error,
      }));
  };

  const logmein = () => {
    logmein(credenciales).then(respuesta =>{
      let decodificado = decodeToken(respuesta.data.token)
      let nameUser = respuesta.data.name 
      let datosBack = {
        token: respuesta.data.token,
        user: decodificado,
        nameUser: nameUser,
      };
      dispatch(login({ credentials: datosBack}));
      if (datosBack.token){
        setWelcome(`Bienvenido/a ${nameUser} a la clínica TrueSmile`);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }else {
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
        <Row className="LoginD">
            <col lg={6}>
              {welcome !== "" ? (
                <div>{Welcome}</div>
              ) : (
                <div>
                  <InputText
                    className={"inputLogin"}
                    type={"email"}
                    name={"email"}
                    placeholder={"email..."}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                  <InputText
                    className={"inputLogin"}
                    type={"password"}
                    name={"password"}
                    placeholder={""}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </div>
              )
            }
            </col>
        </Row>
    </Container>
  )
}
