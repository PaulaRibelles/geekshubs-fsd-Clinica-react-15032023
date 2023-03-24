import axios from 'axios';

const root = "https://clinica-truesmile-production.up.railway.app/"

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

    console.log(token,"soc config....")
    return await axios.get(`${root}/user/profile`, config);
}

