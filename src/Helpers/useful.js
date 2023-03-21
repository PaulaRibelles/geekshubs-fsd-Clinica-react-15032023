export const checkInputs = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
        case "city":
        
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/^[a-zA-ZáéíóúüñÑÁÉÍÓÚ ]*-?$/.test(data)) {
            return {
                message: "Por favor, introduce un texto válido",
                validated: false,
            };
        }
        return { message: "", validated: true };

    case "email":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {
            return { message: "Por favor, introduce un mail válido", validated: false };
        }
        return { message: "", validated: true };

    case "password":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (data.length < 8) {
            return {
                message: "La contraseña debe tener un mínimo de 8 caracteres",
                validated: false,
            };
        }
        return { message: "", validated: true };

    case "phone":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if (/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/.test(data)) {
            return { message: "Por favor, introduce un número de teléfono válido" };
        }
        return { message: "", validated: true };
        break;

    case "dni":
        if (data === "" && required === true) {
            return { message: "Este campo es obligatorio", validated: false };
        } else if ((/^[0-9]+([.][0-9]+)?$/).test(data)) {
            return { message: "Formato DNI incorrecto", validated: false };
        }
            return { message: "", validated: true };
        break;

    default:
        console.log("No se ha reconocido este campo");
    }
};
