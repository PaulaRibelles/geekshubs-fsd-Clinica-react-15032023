import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import './Appointment.css';
import Calendar from 'react-calendar';
import { InputText } from '../../common/InputText/InputText';


export const Appointment = () => {

  const [newDate, setNewDate] = useState(new Date ());

  useEffect(() => {
    let dateBack = dayjs(newDate).format("dddd DD MMMM YYYY");
  }, [newDate]);

  return (
    <div className='AppointDesign'>
      <h2 className='titleDesign'> Pide una cita</h2>
        <InputText 
        className={""}
        type="text"
        maxLength={50}
        placeholder="Explique el motivo de su visita"
        />
        <div>
          <Calendar onChange={setNewDate} value={newDate}/>
        </div>
    </div>
  )
}
