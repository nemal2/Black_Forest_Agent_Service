import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://black-forest-agent-service.vercel.app/api",
    //http://localhost:8800/api
    //https://mern-black-forest-full-stack.onrender.com
    withCredentials : true,
})

export default apiRequest;
