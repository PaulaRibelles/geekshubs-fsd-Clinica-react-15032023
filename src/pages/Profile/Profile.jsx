import React, { useState, useEffect } from "react";
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

    return <div className="">I am profile</div>;
};