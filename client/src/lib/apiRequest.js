import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://44.201.50.234:8800/api",
    //http://localhost:8800/api
    //https://mern-black-forest-full-stack.onrender.com
    withCredentials : true,
})

export default apiRequest;
