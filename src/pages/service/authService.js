import api from "./api"

export const signup = async (payload)=>{
    // console.log(payload);
    
    const response = await api.post('register/', payload) 
    return response;
}


export const login=async(payload)=>{
    const response=await api.post('login/',payload)
    return response;
}

