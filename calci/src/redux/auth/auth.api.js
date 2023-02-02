import axios from "axios";

export const loginAPI = async(creds)=>{
    let response = await axios.get("https://reqres.in/api/login", creds);
    return response.data; 
}