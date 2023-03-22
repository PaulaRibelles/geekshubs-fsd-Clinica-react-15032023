import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../pages/Slices/userSlice'
import { Navigator } from '../Navigator/Navigator'
import "./Header.css"

export const Header = () => {

  const dataRdx = useSelector(userData);

  const  dispatch = useDispatch();

const datosCredencialesRedux = useSelector(userData);
  return (
    <div className='headerDesign'>
      <Navigator ruta={"Home"} destino={"/"}/>
      {!datosCredencialesRedux.credentials.token 
      ? 
      <>
      <Navigator ruta={"Login"} destino={"/login"} />
      <Navigator ruta={"Registro"} destino={"/register"}/>
      </>
      : 
      <>
      {/* <Navigator ruta={"Perfil"} destino={"/profile"}/> */}
      <Navigator ruta={"Logout"} destino={"/"}/>
      </>
      }
    </div>
  )
  }