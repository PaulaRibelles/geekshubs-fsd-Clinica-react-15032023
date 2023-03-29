import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Users } from '../Users/Users';

import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Appointment } from '../Appointment/Appointment';
import { AppointmentsUser } from '../userAppointment/userAppointment';
import { AdminAppointments } from '../Admin/Admin';


export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/login' element={ <Login />}/>
                <Route path='/register' element={ <Register />}/>
                <Route path='/users' element={ <Users />}/>
                <Route path='/profile' element={ <Profile />}/>
                <Route path='/appointment' element={ <Appointment />}/>
                <Route path='/appointment-user' element={ <AppointmentsUser />}/>
                <Route path='/all-appointments' element={ <AdminAppointments />}/>
            </Routes>
        </>
    );
};