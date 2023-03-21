import React from 'react'

export const Register = () => {

      return (
        <div className="registerDesign">
          <div className="titleDesign">
            <h2>Registro Usuario</h2>
          </div>

            {/* INPUT NOMBRE */}

          <InputText
            className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
              }
              type="text"
              maxLength="30"
              name="name"
              placeholder="Escribe tu nombre"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurValidateFunction={(e) => inputValidate(e)}
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
            maxLength="50"
            name="surname"
            placeholder="Escribe tus apellidos"
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurValidateFunction={(e) => inputValidate(e)}
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
              maxLength="9"
              name="dni"
              placeholder="Escribe tu DNI"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurValidateFunction={(e) => inputValidate(e)}
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
              maxLength="30"
              name="city"
              placeholder="Escribe tu ciudad"
              required={false}
              changeFunction={(e) => inputHandler(e)}
              blurValidateFunction={(e) => inputValidate(e)}
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
              maxLength="15"
              name="phone"
              placeholder="Escribe tu número de teléfono"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurValidateFunction={(e) => inputValidate(e)}
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
            maxLength="50"
            name="email"
            placeholder="Escribe un email válido"
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurValidateFunction={(e) => inputValidate(e)}
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
              maxLength="30"
              name="password"
              placeholder="Escribe la contraseña"
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurValidateFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.passwordError}</div>
          <div className={activeForm ? "buttonOff buttonOn" : "buttonOff" } 
          onClick={activeForm ? () => {fakeRegisterFunction();} : () => {} }>Registrarse
          </div>
        </div>
      );
    };