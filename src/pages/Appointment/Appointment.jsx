import React, { useEffect, useState } from "react";
import "./Appointment.css";
// import dayjs from "dayjs";
// import Calendar from "react-calendar";
import { InputText } from "../../common/InputText/InputText";
import { useNavigate } from "react-router-dom";
import { myAppointment } from "../../services/apiCalls";
// import { checkInputs } from "../../helpers/useful";
import { useSelector } from "react-redux";
import { userData } from "../Slices/userSlice";


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
      console.log(e.target.value, "holaaa");
    };


    useEffect(() =>{
      console.log(credenciales);
    })

  
  const newAppointment = () => {
    myAppointment(credenciales, token)
    .then(respuesta => {
      let nameUser = ReduxCredentials.credentials.nameUser;
      if(nameUser){
        setWelcome(`Gracias ${nameUser} por confiar en nosotros`);
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

  const checkError =(e) =>{}

  return (
    <div className="design">
      <div className="titleDesign">
        <h2>Pide tu cita con nosotros</h2>
      </div>
      <InputText
              className={""}
              type={"datetime-local"}
              name={"date"}
              placeholder={""}
              required={true}
      
              changeFunction={(e)=>inputHandler(e)}
              blurFunction={(e)=> checkError(e)}
      />
      <div>

      <select value={"default"} name="doctor_id" onChange={(e) => inputHandler(e) }>
        <option value="1" selected >Dentista general</option>
        <option value="2">Dentista pediátrico</option>
      </select>
      </div>
      <div>{credencialesError.passwordError}</div>
      <div className='buttonDes' onClick={() => newAppointment()}>Pedir cita</div>
    </div>
  );
};
