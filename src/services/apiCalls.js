import axios from 'axios';

// const root = "https://clinica-truesmile-production.up.railway.app"

const root = "http://localhost:3000"

export const logMe = async (body) => {

    return await axios.post(`${root}/auth/login`, body);

}

export const registerMe = async (body) => {
    return await axios.post(`${root}/auth/register`, body);
}


export const bringUsers = async (token) => {
    let config = {
        headers: { 
        'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/api/users`, config);
}

export const myProfile = async (token) =>{
    let config = {
        headers: { 
        'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/user/profile`, config);
}

export const myAppointment = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer '+ token.token,  
            
        }
    };
    return await axios.post(`${root}/appointment/create`, body, config);
}

export const bringAppointments = async (body, token) => {
    let config = {
        headers: { 
            'Authorization': 'Bearer '+ token.token,  
            
        }
    };
    return await axios.post(`${root}/appointment/create`, body, config);
}



