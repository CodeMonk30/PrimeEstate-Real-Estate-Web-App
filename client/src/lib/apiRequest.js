import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://localhost:9000/api", //literally making a shortform url 
    withCredentials: true,
})

export default apiRequest;