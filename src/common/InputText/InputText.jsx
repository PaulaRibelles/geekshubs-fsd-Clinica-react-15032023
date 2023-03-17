import React from 'react'
import './InputText.css'

export const InputText = ({className, type, name, placeholder, required, changeFunction, blurFuction}) => {
  return (
    <>
      <input 
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}

        onChange={(e)=>changeFunction(e)}
        onBlur={(e)=>blurFuction(e)}
      />
    </>
  )
}
