import axios from "axios";

export const getProductAPI = async()=>{
    let response = await axios.get("http://localhost:8080/feeds");
    return response.data; 
}